import requests
from bs4 import BeautifulSoup
import json
import time
import re

# Configuration
BASE_URL = "https://jetsetbc.com"
BLOG_LIST_URL = f"{BASE_URL}/blogs"
OUTPUT_FILE = "jetset_blogs.json"

# Headers to avoid being blocked
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5',
    'Accept-Encoding': 'gzip, deflate',
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': '1'
}

def get_soup(url):
    """Get BeautifulSoup object from URL"""
    try:
        print(f"Fetching: {url}")
        response = requests.get(url, headers=HEADERS, timeout=10)
        response.raise_for_status()
        return BeautifulSoup(response.content, 'html.parser')
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None

def extract_blog_urls():
    """Extract all blog post URLs from listing pages"""
    all_urls = []
    
    # Page 1
    print("\n=== Scraping Blog Listing Page 1 ===")
    soup = get_soup(BLOG_LIST_URL)
    
    if soup:
        # Find all article/post cards
        # Look for links within article elements or post cards
        articles = soup.find_all('article') or soup.find_all(class_=re.compile(r'post|card|blog'))
        
        print(f"Found {len(articles)} article elements")
        
        for article in articles:
            # Find the main link (title link) within each article
            link = article.find('a', href=True)
            
            if link:
                href = link.get('href')
                
                # Skip if it's the /blogs/ page itself or pagination links
                if href and href != '/blogs' and href != '/blogs/' and '/page/' not in href:
                    # Make absolute URL
                    if href.startswith('http'):
                        url = href
                    elif href.startswith('/'):
                        url = BASE_URL + href
                    else:
                        url = BASE_URL + '/' + href
                    
                    # Only add unique URLs that aren't the blog listing page
                    if url not in all_urls and url != BLOG_LIST_URL and url != BLOG_LIST_URL + '/':
                        all_urls.append(url)
                        print(f"  Found: {url}")
        
        # Alternative: Look for all h2/h3 titles with links
        if len(all_urls) == 0:
            print("  Trying alternative method: looking for title links...")
            title_links = soup.find_all(['h2', 'h3'], class_=re.compile(r'title|heading'))
            
            for title in title_links:
                link = title.find('a', href=True)
                if link:
                    href = link.get('href')
                    if href and href != '/blogs' and href != '/blogs/' and '/page/' not in href:
                        if href.startswith('http'):
                            url = href
                        elif href.startswith('/'):
                            url = BASE_URL + href
                        else:
                            url = BASE_URL + '/' + href
                        
                        if url not in all_urls and url != BLOG_LIST_URL:
                            all_urls.append(url)
                            print(f"  Found: {url}")
    
    # Page 2
    print("\n=== Checking for Page 2 ===")
    page_2_url = f"{BLOG_LIST_URL}/page/2"
    soup_page_2 = get_soup(page_2_url)
    
    if soup_page_2:
        articles_p2 = soup_page_2.find_all('article') or soup_page_2.find_all(class_=re.compile(r'post|card|blog'))
        
        print(f"Found {len(articles_p2)} article elements on page 2")
        
        for article in articles_p2:
            link = article.find('a', href=True)
            
            if link:
                href = link.get('href')
                
                if href and href != '/blogs' and href != '/blogs/' and '/page/' not in href:
                    if href.startswith('http'):
                        url = href
                    elif href.startswith('/'):
                        url = BASE_URL + href
                    else:
                        url = BASE_URL + '/' + href
                    
                    if url not in all_urls and url != BLOG_LIST_URL:
                        all_urls.append(url)
                        print(f"  Found: {url}")
    
    print(f"\n✓ Found {len(all_urls)} unique blog post URLs")
    return all_urls

def clean_text(text):
    """Clean and normalize text"""
    if not text:
        return ""
    # Remove extra whitespace
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

def extract_blog_content(url):
    """Extract content from a single blog post"""
    soup = get_soup(url)
    
    if not soup:
        return None
    
    post = {
        'url': url,
        'slug': url.rstrip('/').split('/')[-1],  # Get last part of URL
        'title': '',
        'author': 'Jetset Business Team',
        'date': '',
        'category': 'Business Setup',
        'excerpt': '',
        'content': '',
        'image': '',
        'readTime': 5
    }
    
    # Extract Title - try multiple selectors
    title_selectors = [
        'h1.entry-title',
        'h1.post-title', 
        'h1.single-title',
        'article h1',
        '.post-header h1',
        'h1'
    ]
    for selector in title_selectors:
        title_elem = soup.select_one(selector)
        if title_elem and title_elem.get_text().strip():
            post['title'] = clean_text(title_elem.get_text())
            if post['title'] and post['title'] != 'Jetset Business Insights Hub':  # Skip page title
                break
    
    # Extract Author
    author_selectors = [
        '.author-name',
        '.by-author', 
        '.entry-author',
        '[rel="author"]',
        '.author',
        '.post-author',
        'span[class*="author"]'
    ]
    for selector in author_selectors:
        author_elem = soup.select_one(selector)
        if author_elem:
            author_text = clean_text(author_elem.get_text())
            # Remove "By" prefix if present
            author_text = re.sub(r'^By\s+', '', author_text, flags=re.IGNORECASE)
            if author_text:
                post['author'] = author_text
                break
    
    # Extract Date
    date_selectors = [
        '.entry-date',
        '.post-date',
        '.published',
        'time',
        '.date',
        'span[class*="date"]'
    ]
    for selector in date_selectors:
        date_elem = soup.select_one(selector)
        if date_elem:
            post['date'] = clean_text(date_elem.get_text())
            if post['date']:
                break
    
    # Extract Category
    category_selectors = [
        '.cat-links',
        '.category',
        '.post-category',
        '.entry-category',
        'a[rel="category"]'
    ]
    for selector in category_selectors:
        cat_elem = soup.select_one(selector)
        if cat_elem:
            post['category'] = clean_text(cat_elem.get_text())
            if post['category']:
                break
    
    # Extract Content - THIS IS THE MOST IMPORTANT PART
    content_selectors = [
        '.entry-content',
        'article .content',
        '.post-content',
        '.single-content',
        '.blog-content',
        'article .text',
        '.single-post-content',
        'div[class*="content"]'
    ]
    
    content_found = False
    for selector in content_selectors:
        content_elem = soup.select_one(selector)
        if content_elem:
            # Remove unwanted elements
            for unwanted in content_elem(['script', 'style', 'nav', 'header', 'footer', 'aside']):
                unwanted.decompose()
            
            content_text = clean_text(content_elem.get_text())
            
            # Only use if it has substantial content (more than 100 chars)
            if len(content_text) > 100:
                post['content'] = content_text
                content_found = True
                break
    
    # If still no content, try getting all article text
    if not content_found:
        article = soup.find('article')
        if article:
            for unwanted in article(['script', 'style', 'nav', 'header', 'footer', 'aside', 'h1']):
                unwanted.decompose()
            
            content_text = clean_text(article.get_text())
            if len(content_text) > 100:
                post['content'] = content_text
    
    # Create excerpt
    if post['content']:
        post['excerpt'] = post['content'][:200] + '...' if len(post['content']) > 200 else post['content']
    
    # Extract Featured Image
    image_selectors = [
        '.wp-post-image',
        '.featured-image img',
        'article img',
        '.post-thumbnail img',
        'img[class*="featured"]',
        '.entry-image img'
    ]
    for selector in image_selectors:
        img_elem = soup.select_one(selector)
        if img_elem and img_elem.get('src'):
            img_src = img_elem.get('src')
            # Make absolute URL
            if img_src.startswith('http'):
                post['image'] = img_src
            elif img_src.startswith('/'):
                post['image'] = BASE_URL + img_src
            else:
                post['image'] = BASE_URL + '/' + img_src
            break
    
    # Default placeholder image
    if not post['image']:
        # Use different placeholder based on category
        placeholders = {
            'Business Setup': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
            'Office Spaces': 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
            'Coworking': 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop',
            'Dubai Business': 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop'
        }
        post['image'] = placeholders.get(post['category'], placeholders['Business Setup'])
    
    # Calculate read time
    if post['content']:
        word_count = len(post['content'].split())
        post['readTime'] = max(1, round(word_count / 200))
    
    return post

def main():
    """Main scraping function"""
    print("="*60)
    print("JETSET BLOG SCRAPER - FIXED VERSION")
    print("="*60)
    
    # Step 1: Get all blog URLs
    blog_urls = extract_blog_urls()
    
    if not blog_urls:
        print("\n❌ No blog URLs found. The website structure may have changed.")
        print("Please check the /blogs page manually to see the structure.")
        return
    
    # Step 2: Scrape each blog post
    print(f"\n=== Scraping {len(blog_urls)} Blog Posts ===\n")
    all_posts = []
    failed_posts = []
    
    for i, url in enumerate(blog_urls, 1):
        print(f"[{i}/{len(blog_urls)}] Scraping: {url}")
        
        post = extract_blog_content(url)
        
        if post and post['title'] and post['content']:
            all_posts.append(post)
            print(f"  ✓ Title: {post['title'][:60]}...")
            print(f"  ✓ Author: {post['author']}")
            print(f"  ✓ Date: {post['date']}")
            print(f"  ✓ Content: {len(post['content'])} characters")
            print(f"  ✓ Read Time: {post['readTime']} min")
            print()
        else:
            failed_posts.append(url)
            print(f"  ✗ Failed to extract content (title: {post['title'] if post else 'None'}, content length: {len(post['content']) if post and post['content'] else 0})")
            print()
        
        # Be polite - wait between requests
        time.sleep(2)
    
    # Step 3: Save to JSON
    print(f"\n=== Saving Results ===")
    
    if all_posts:
        with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
            json.dump(all_posts, f, indent=2, ensure_ascii=False)
        
        print(f"✓ Successfully scraped {len(all_posts)} blog posts")
        print(f"✓ Saved to: {OUTPUT_FILE}")
        
        if failed_posts:
            print(f"\n⚠ Failed to scrape {len(failed_posts)} posts:")
            for url in failed_posts:
                print(f"  - {url}")
        
        # Print summary
        print(f"\n=== Summary ===")
        print(f"Total blog posts: {len(all_posts)}")
        print(f"Failed: {len(failed_posts)}")
        print(f"\nBlog titles:")
        for i, post in enumerate(all_posts, 1):
            print(f"  {i}. {post['title']} ({post['readTime']} min read)")
    else:
        print("❌ No blog posts were successfully scraped")
        print("\nThis could mean:")
        print("1. The website structure is different than expected")
        print("2. The content selectors need to be adjusted")
        print("3. The website is blocking the scraper")

if __name__ == "__main__":
    main()
