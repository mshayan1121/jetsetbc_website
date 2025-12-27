import requests
from bs4 import BeautifulSoup
import json
import time

# Manual list of blog post URLs (from the screenshot you showed)
BLOG_URLS = [
    "https://jetsetbc.com/business-registration-in-dubai-for-foreigners-full-guide-for-non-uae-residents/",
    "https://jetsetbc.com/a-practical-guide-to-business-setup-costs-in-dubai-for-new-entrepreneurs/",
    "https://jetsetbc.com/top-benefits-of-choosing-business-centers-in-business-bay-for-your-startup/",
    "https://jetsetbc.com/rental-of-meeting-rooms-for-remote-teams-a-growing-trend/",
    "https://jetsetbc.com/the-future-of-business-setup-in-dubai-trends-to-watch-in-2025/",
    "https://jetsetbc.com/what-to-look-for-in-a-conference-room-rental-in-dubai-7-must-have-features/",
    "https://jetsetbc.com/what-documents-are-required-for-ejari-everything-you-need-to-know-about-ejari-renewal/",
    "https://jetsetbc.com/avoid-these-common-mistakes-when-setting-up-a-new-company-in-dubai/",
    "https://jetsetbc.com/conference-room-near-burj-khalifa-dubai-affordable-meeting-rooms-that-impress/",
    "https://jetsetbc.com/how-to-start-your-business-in-dubai-easy-steps-and-expert-help/",
    "https://jetsetbc.com/is-dubai-the-best-location-for-shared-office-space-in-the-middle-east/",
    "https://jetsetbc.com/looking-to-rent-an-office-in-business-bay-heres-what-you-should-know/",
    # Page 2 URLs
    "https://jetsetbc.com/how-to-choose-and-book-the-right-meeting-or-conference-room-in-dubai/",
    "https://jetsetbc.com/what-to-consider-before-choosing-an-office-for-rent-in-business-bay/",
    "https://jetsetbc.com/why-business-bay-is-the-best-location-for-coworking-spaces-in-dubai/",
    "https://jetsetbc.com/looking-for-a-meeting-room-rental-in-dubai-heres-what-you-need-to-know/",
    "https://jetsetbc.com/how-to-get-ejari-online-in-dubai-easy-process-explained/",
    "https://jetsetbc.com/coworking-space-in-dubai-the-future-of-flexible-office-solutions-at-prime-regal-towers/",
]

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

def scrape_blog_post(url):
    """Scrape a single blog post - SIMPLE approach"""
    print(f"\n{'='*60}")
    print(f"Scraping: {url}")
    print(f"{'='*60}")
    
    try:
        response = requests.get(url, headers=HEADERS, timeout=10)
        response.raise_for_status()
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Print the HTML to see what we're working with
        print("\nDEBUG: Looking for content...")
        
        # Find title
        title = soup.find('h1')
        title_text = title.get_text(strip=True) if title else "No title"
        print(f"Title: {title_text}")
        
        # Find all paragraphs in the page
        all_paragraphs = soup.find_all('p')
        print(f"Found {len(all_paragraphs)} paragraph tags")
        
        # Try to find the main content area
        # Method 1: Look for common content containers
        content_containers = [
            soup.find('div', class_='entry-content'),
            soup.find('div', class_='post-content'),
            soup.find('div', class_='content'),
            soup.find('article'),
            soup.find('main'),
        ]
        
        content_text = ""
        
        for container in content_containers:
            if container:
                print(f"Found container: {container.name} with class {container.get('class')}")
                
                # Get all text from paragraphs in this container
                paragraphs = container.find_all('p')
                print(f"  Contains {len(paragraphs)} paragraphs")
                
                if paragraphs:
                    texts = [p.get_text(strip=True) for p in paragraphs if p.get_text(strip=True)]
                    content_text = '\n\n'.join(texts)
                    print(f"  Extracted {len(content_text)} characters")
                    break
        
        # If still no content, just get ALL paragraphs from the page
        if not content_text:
            print("No container found, getting ALL paragraphs...")
            texts = [p.get_text(strip=True) for p in all_paragraphs if len(p.get_text(strip=True)) > 50]
            content_text = '\n\n'.join(texts)
            print(f"Extracted {len(content_text)} characters from all paragraphs")
        
        # Create the post object
        post = {
            'url': url,
            'slug': url.rstrip('/').split('/')[-1],
            'title': title_text,
            'author': 'Jetset Business Team',
            'date': 'December 2024',
            'category': 'Business Setup',
            'content': content_text,
            'excerpt': content_text[:200] + '...' if len(content_text) > 200 else content_text,
            'image': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
            'readTime': max(1, round(len(content_text.split()) / 200))
        }
        
        print(f"\n✓ SUCCESS!")
        print(f"  Title: {post['title'][:60]}...")
        print(f"  Content: {len(post['content'])} characters")
        print(f"  Read time: {post['readTime']} min")
        
        return post
        
    except Exception as e:
        print(f"✗ ERROR: {e}")
        return None

def main():
    print("="*60)
    print("SIMPLE JETSET BLOG SCRAPER")
    print("="*60)
    print(f"\nScraping {len(BLOG_URLS)} blog posts...\n")
    
    all_posts = []
    
    for i, url in enumerate(BLOG_URLS, 1):
        print(f"\n[{i}/{len(BLOG_URLS)}]")
        post = scrape_blog_post(url)
        
        if post and len(post['content']) > 100:
            all_posts.append(post)
        
        time.sleep(2)  # Wait between requests
    
    # Save to JSON
    if all_posts:
        with open('jetset_blogs.json', 'w', encoding='utf-8') as f:
            json.dump(all_posts, f, indent=2, ensure_ascii=False)
        
        print(f"\n{'='*60}")
        print(f"✓ SUCCESS! Scraped {len(all_posts)} blog posts")
        print(f"✓ Saved to: jetset_blogs.json")
        print(f"{'='*60}")
        
        print("\nBlog posts:")
        for i, post in enumerate(all_posts, 1):
            print(f"{i}. {post['title']} ({len(post['content'])} chars)")
    else:
        print("\n✗ No blog posts scraped successfully")

if __name__ == "__main__":
    main()

