'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
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

// Gallery images with categories (PLACEHOLDER DATA)
const galleryImages = [
  // Private Offices
  {
    id: 1,
    category: 'private-offices',
    title: 'Executive Private Office',
    description: 'Spacious office with Burj Khalifa views',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    category: 'private-offices',
    title: 'Inner Office Suite',
    description: 'Cost-efficient workspace for focused work',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    category: 'private-offices',
    title: 'Corner Office',
    description: 'Premium corner office with panoramic views',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    category: 'private-offices',
    title: 'Team Office',
    description: 'Collaborative space for growing teams',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop',
  },
  
  // Coworking Spaces
  {
    id: 5,
    category: 'coworking',
    title: 'Hot Desk Area',
    description: 'Flexible seating in open workspace',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop',
  },
  {
    id: 6,
    category: 'coworking',
    title: 'Dedicated Desk Zone',
    description: 'Reserved workspace for regulars',
    image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=800&h=600&fit=crop',
  },
  {
    id: 7,
    category: 'coworking',
    title: 'Collaboration Area',
    description: 'Open space for networking and collaboration',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
  },
  {
    id: 8,
    category: 'coworking',
    title: 'Private Cabin',
    description: 'Semi-private workspace within coworking area',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&h=600&fit=crop',
  },
  
  // Meeting Rooms
  {
    id: 9,
    category: 'meeting-rooms',
    title: 'Majilis VIP Room',
    description: '9-10 person executive meeting space',
    image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&h=600&fit=crop',
  },
  {
    id: 10,
    category: 'meeting-rooms',
    title: 'Conference Boardroom',
    description: '8 person boardroom with premium setup',
    image: 'https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=800&h=600&fit=crop',
  },
  {
    id: 11,
    category: 'meeting-rooms',
    title: 'Standard Meeting Room',
    description: '6 person room for team meetings',
    image: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=600&fit=crop',
  },
  {
    id: 12,
    category: 'meeting-rooms',
    title: 'Video Conference Room',
    description: 'Tech-enabled for hybrid meetings',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop',
  },
  
  // Location - Prime Tower
  {
    id: 13,
    category: 'location',
    title: 'Prime Tower Exterior',
    description: 'Our flagship location in Business Bay',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop',
  },
  {
    id: 14,
    category: 'location',
    title: 'Burj Khalifa View',
    description: 'Stunning views from our offices',
    image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&h=600&fit=crop',
  },
  {
    id: 15,
    category: 'location',
    title: 'Reception Area',
    description: 'Welcoming entrance and front desk',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
  },
  {
    id: 16,
    category: 'location',
    title: 'Lounge Area',
    description: 'Comfortable space for breaks and networking',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop',
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
      <section className="relative bg-gradient-luxury min-h-[50vh] flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-gold-500/20 text-gold-500 border border-gold-500/30">
            Visual Tour
          </Badge>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            Gallery
          </h1>
          <p className="font-body text-lg sm:text-xl md:text-2xl text-cream-50 max-w-3xl mx-auto">
            Explore our premium workspaces, stunning views, and world-class amenities 
            at Prime Tower, Business Bay
          </p>
        </div>
      </section>

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

          {/* IMAGE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <Card
                key={image.id}
                className="group cursor-pointer overflow-hidden hover:-translate-y-2 transition-all duration-300"
                onClick={() => openLightbox(image.id)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={image.image}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
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
              </Card>
            ))}
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
      <section className="bg-cream-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-6">
            Experience It in Person
          </h2>
          <p className="font-body text-lg text-navy-700 mb-8 max-w-2xl mx-auto">
            Book a same-day tour and see our premium workspaces firsthand
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link href="/book-tour">Book a Tour</Link>
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

