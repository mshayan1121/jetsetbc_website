'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { 
  Building2, 
  Users, 
  Video, 
  Briefcase, 
  MapPin,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// Gallery categories based on services
const categories = [
  { id: 'all', name: 'All', icon: Building2 },
  { id: 'private-offices', name: 'Private Offices', icon: Briefcase },
  { id: 'coworking', name: 'Coworking Spaces', icon: Users },
  { id: 'meeting-rooms', name: 'Meeting Rooms', icon: Video },
  { id: 'location', name: 'Prime Tower', icon: MapPin },
];

type GalleryImage = {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  size: 'wide' | 'tall' | 'square' | 'feature';
};

// Gallery images with categories (LOCAL ASSETS)
const galleryImages: GalleryImage[] = [
  {
    id: 1,
    category: 'coworking',
    title: 'Coworking Area',
    description: 'Open-plan workstations with shared amenities',
    image: '/images/gallery/Co-working(1).jpg',
    size: 'feature',
  },
  {
    id: 2,
    category: 'meeting-rooms',
    title: 'Conference Room',
    description: 'Professional meeting space for teams and clients',
    image: '/images/gallery/Conference%20Room.jpg',
    size: 'wide',
  },
  {
    id: 3,
    category: 'meeting-rooms',
    title: 'Conference Room (Alternate)',
    description: 'Private boardroom setup for focused discussions',
    image: '/images/gallery/Conference%20Room(1).jpg',
    size: 'square',
  },
  {
    id: 4,
    category: 'private-offices',
    title: 'Private Office Suite',
    description: 'Quiet, enclosed workspace for focused productivity',
    image: '/images/gallery/Copy%20of%20DSC09464.JPG',
    size: 'tall',
  },
  {
    id: 5,
    category: 'private-offices',
    title: 'Executive Office',
    description: 'Premium private office with polished finishes',
    image: '/images/gallery/Copy%20of%20DSC09466.JPG',
    size: 'wide',
  },
  {
    id: 6,
    category: 'location',
    title: 'Business Center Interior',
    description: 'Modern interiors designed for a premium experience',
    image: '/images/gallery/Copy%20of%20DSC09471.JPG',
    size: 'square',
  },
  {
    id: 7,
    category: 'location',
    title: 'Workspace Corridor',
    description: 'Bright, welcoming corridors throughout the center',
    image: '/images/gallery/Copy%20of%20DSC09485.JPG',
    size: 'tall',
  },
  {
    id: 8,
    category: 'location',
    title: 'Hallway',
    description: 'Clean, modern pathways between workspaces',
    image: '/images/gallery/Hallway.jpg',
    size: 'square',
  },
  {
    id: 9,
    category: 'meeting-rooms',
    title: 'Majilis Meeting Room',
    description: 'Elegant VIP meeting space for executive meetings',
    image: '/images/gallery/Majilis.jpg',
    size: 'feature',
  },
  {
    id: 10,
    category: 'meeting-rooms',
    title: 'Majilis Room (Alternate)',
    description: 'Traditional-inspired meeting room with luxury seating',
    image: '/images/gallery/Majilis(2).jpg',
    size: 'wide',
  },
  {
    id: 11,
    category: 'location',
    title: 'Reception Coffee Spot',
    description: 'Comfortable lounge with coffee service',
    image: '/images/gallery/Reception%20_%20Coffee%20shop.jpg',
    size: 'square',
  },
  {
    id: 12,
    category: 'location',
    title: 'Reception with Burj Khalifa View',
    description: 'Signature views from the reception area',
    image: '/images/gallery/Reception%20BK%20View.jpg',
    size: 'tall',
  },
  {
    id: 13,
    category: 'location',
    title: 'Reception Area',
    description: 'Warm welcome and front desk services',
    image: '/images/gallery/Reception.jpg',
    size: 'wide',
  },
  {
    id: 14,
    category: 'location',
    title: 'Reception (Alternate)',
    description: 'Premium lobby with refined finishes',
    image: '/images/gallery/Reception(1).jpg',
    size: 'square',
  },
  {
    id: 15,
    category: 'location',
    title: 'Reception Seating',
    description: 'Comfortable seating for guests and visitors',
    image: '/images/gallery/Reception(4).jpg',
    size: 'square',
  },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  // Filter images based on selected category
  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  // Lightbox navigation
  const openLightbox = (imageId: number) => setLightboxImage(imageId);
  const closeLightbox = () => setLightboxImage(null);
  
  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (lightboxImage === null) return;
    
    const currentIndex = galleryImages.findIndex(img => img.id === lightboxImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
    }
    
    setLightboxImage(galleryImages[newIndex].id);
  };

  const currentLightboxImage = galleryImages.find(img => img.id === lightboxImage);

  return (
    <>
      {/* HERO SECTION */}
      <PageHero
        title="Gallery"
        subtitle="Explore our premium workspaces, stunning views, and world-class amenities at Prime Tower, Business Bay"
      />

      {/* GALLERY SECTION */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* CATEGORY FILTERS */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`
                    flex items-center gap-2 px-6 py-3 rounded-full font-body font-medium
                    transition-all duration-300
                    ${isActive 
                      ? 'bg-gold-500 text-navy-900 shadow-lg' 
                      : 'bg-cream-50 text-navy-700 hover:bg-cream-100'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span>{category.name}</span>
                  {isActive && (
                    <Badge className="ml-1 bg-navy-900 text-white text-xs">
                      {filteredImages.length}
                    </Badge>
                  )}
                </button>
              );
            })}
          </div>

          {/* BENTO / MASONRY GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[150px] sm:auto-rows-[170px] lg:auto-rows-[200px] gap-2 sm:gap-3 lg:gap-4 grid-flow-dense">
            {filteredImages.map((image) => {
              const sizeClasses = {
                square: 'lg:col-span-1 lg:row-span-1',
                tall: 'lg:col-span-1 lg:row-span-2',
                wide: 'lg:col-span-2 lg:row-span-1',
                feature: 'lg:col-span-2 lg:row-span-2',
              }[image.size];

              return (
                <div
                  key={image.id}
                  className={`group cursor-pointer overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${sizeClasses}`}
                  onClick={() => openLightbox(image.id)}
                >
                  <div className="relative h-full w-full overflow-hidden">
                    <Image
                      src={image.image}
                      alt={image.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Overlay Text */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <h3 className="font-display text-lg mb-1">
                        {image.title}
                      </h3>
                      <p className="text-sm text-cream-50">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* EMPTY STATE */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-navy-700 text-lg">
                No images found in this category.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/business-bay/dubai-business-bay-uae-5km-01.jpg"
            alt="Business Bay skyline with Burj Khalifa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-navy-900/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/40 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
            See the Space, Feel the Difference
          </h2>
          <p className="font-body text-lg text-cream-50/90 mb-8 max-w-2xl mx-auto">
            Book a same-day tour and see our premium workspaces firsthand
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link href="/book-tour">BOOK A TOUR</Link>
          </Button>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxImage !== null && currentLightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-navy-900/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
            className="absolute left-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
            className="absolute right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div 
            className="max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full" style={{ maxHeight: '80vh' }}>
              <Image
                src={currentLightboxImage.image}
                alt={currentLightboxImage.title}
                width={1200}
                height={800}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
            
            {/* Image Info */}
            <div className="mt-6 text-center text-white">
              <h3 className="font-display text-2xl mb-2">
                {currentLightboxImage.title}
              </h3>
              <p className="text-cream-50">
                {currentLightboxImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

