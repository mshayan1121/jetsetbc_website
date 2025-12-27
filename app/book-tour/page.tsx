'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Script from 'next/script';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Phone, Mail, Building2, User, MessageSquare, Calendar, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  company: z.string().min(2, 'Company name is required'),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function BookTourPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      // Cleanup
      const existingLink = document.querySelector(`link[href="${link.href}"]`);
      if (existingLink) {
        existingLink.remove();
      }
    };
  }, []);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // TODO: Replace with your actual form submission endpoint
    // For now, we'll simulate a submission
    try {
      console.log('Form data:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      setIsSubmitted(true);
      reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-gradient-luxury min-h-[50vh] flex items-center justify-center pt-20 md:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-10 sm:py-12 md:py-16">
          <Badge className="mb-4 sm:mb-6 bg-gold-500/20 text-gold-500 border border-gold-500/30 text-xs sm:text-sm">
            Same-Day Tours Available
          </Badge>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 sm:mb-6">
            Book Your Tour
          </h1>
          <p className="font-body text-lg sm:text-xl md:text-2xl text-cream-50 max-w-3xl mx-auto px-4">
            Experience our premium workspace in person. Fill out the form below or schedule 
            a tour directly using our calendar.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            
            {/* LEFT COLUMN - LEAD FORM */}
            <div>
              <div className="mb-6 sm:mb-8 md:mb-10">
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-navy-900 mb-3 sm:mb-4">
                  Get in Touch
                </h2>
                <p className="font-body text-base sm:text-lg text-navy-700 leading-relaxed">
                  Tell us about your needs and we'll get back to you within 24 hours 
                  to schedule your personalized tour.
                </p>
              </div>

              {/* SUCCESS MESSAGE */}
              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8 flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-lg text-green-900 mb-1">
                      Thank You!
                    </h3>
                    <p className="text-green-700">
                      We've received your request and will contact you shortly to confirm your tour.
                    </p>
                  </div>
                </div>
              )}

              {/* FORM */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-navy-900">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                      <User className="h-5 w-5 text-navy-400" />
                    </div>
                    <Input
                      {...register('name')}
                      type="text"
                      id="name"
                      className={`pl-12 ${errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-xs text-red-500">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-navy-900">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                      <Mail className="h-5 w-5 text-navy-400" />
                    </div>
                    <Input
                      {...register('email')}
                      type="email"
                      id="email"
                      className={`pl-12 ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      placeholder="john@company.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs text-red-500">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-navy-900">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                      <Phone className="h-5 w-5 text-navy-400" />
                    </div>
                    <Input
                      {...register('phone')}
                      type="tel"
                      id="phone"
                      className={`pl-12 ${errors.phone ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      placeholder="+971 50 123 4567"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-red-500">{errors.phone.message}</p>
                  )}
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <label htmlFor="company" className="block text-sm font-medium text-navy-900">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                      <Building2 className="h-5 w-5 text-navy-400" />
                    </div>
                    <Input
                      {...register('company')}
                      type="text"
                      id="company"
                      className={`pl-12 ${errors.company ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      placeholder="Your Company Ltd."
                    />
                  </div>
                  {errors.company && (
                    <p className="text-xs text-red-500">{errors.company.message}</p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-navy-900">
                    Message <span className="text-navy-500 text-xs font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-0 pl-4 pointer-events-none z-10">
                      <MessageSquare className="h-5 w-5 text-navy-400" />
                    </div>
                    <Textarea
                      {...register('message')}
                      id="message"
                      rows={4}
                      className="pl-12"
                      placeholder="Tell us about your workspace needs..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  </Button>
                  <p className="text-sm text-navy-600 text-center mt-4">
                    We'll respond within 24 hours to schedule your tour
                  </p>
                </div>
              </form>
            </div>

            {/* RIGHT COLUMN - CALENDLY + INFO */}
            <div>
              <div className="mb-6 sm:mb-8 md:mb-10">
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-navy-900 mb-3 sm:mb-4">
                  Schedule Your Tour
                </h2>
                <p className="font-body text-base sm:text-lg text-navy-700 leading-relaxed">
                  Or book a specific time slot directly using our calendar. 
                  Choose a time that works best for you.
                </p>
              </div>

              {/* CALENDLY WIDGET */}
              <div className="bg-cream-50 rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 border border-cream-200">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-navy-900" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl text-navy-900">
                      Book Instantly
                    </h3>
                    <p className="text-xs sm:text-sm text-navy-700">
                      Choose your preferred time slot
                    </p>
                  </div>
                </div>

                {/* CALENDLY EMBED */}
                <div 
                  className="calendly-inline-widget rounded-lg overflow-hidden" 
                  data-url="https://calendly.com/YOUR-CALENDLY-USERNAME/office-tour?hide_event_type_details=1&hide_gdpr_banner=1"
                  style={{ minWidth: '100%', height: '600px' }}
                />
              </div>

              {/* WHAT TO EXPECT */}
              <div className="bg-white border border-cream-200 rounded-2xl p-6 sm:p-8">
                <h3 className="font-display text-xl sm:text-2xl text-navy-900 mb-4 sm:mb-6">
                  What to Expect
                </h3>
                
                <div className="space-y-4 sm:space-y-5">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gold-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gold-600 font-bold text-sm sm:text-base">1</span>
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-navy-900 mb-1 text-sm sm:text-base">
                        Personalized Workspace Tour
                      </h4>
                      <p className="text-navy-700 text-xs sm:text-sm">
                        See our private offices, coworking spaces, and premium amenities
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gold-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gold-600 font-bold text-sm sm:text-base">2</span>
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-navy-900 mb-1 text-sm sm:text-base">
                        Discuss Your Needs
                      </h4>
                      <p className="text-navy-700 text-xs sm:text-sm">
                        We'll understand your requirements and recommend the best solution
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gold-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gold-600 font-bold text-sm sm:text-base">3</span>
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-navy-900 mb-1 text-sm sm:text-base">
                        Transparent Pricing
                      </h4>
                      <p className="text-navy-700 text-xs sm:text-sm">
                        Get clear pricing with no hidden fees or surprises
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gold-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gold-600 font-bold text-sm sm:text-base">4</span>
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-navy-900 mb-1 text-sm sm:text-base">
                        Same-Day Move-In
                      </h4>
                      <p className="text-navy-700 text-xs sm:text-sm">
                        Subject to availability, you could start working the same day
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALENDLY SCRIPT */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => setCalendlyLoaded(true)}
      />
    </>
  );
}

