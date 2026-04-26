'use client';
import { Calendar, ChevronLeft, ChevronRight, Heart, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

const HERO_BG =
  'https://d2xsxph8kpxj0f.cloudfront.net/310519663594899785/f6BeSEvWAji7G5hxiLtCro/hero-background-2vYurhQm4HGmWtGqZjSYiR.webp';

const FEATURED_EVENTS = [
  {
    id: 1,
    image:
      'https://obimi.org/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-30-at-8.24.31-AM.jpeg',
  },
  {
    id: 2,
    image: 'https://obimi.org/wp-content/uploads/2025/12/Untitled-design-1.png',
  },
  {
    id: 3,
    image: 'https://obimi.org/wp-content/uploads/2025/12/Untitled-design-2.png',
  },
];

const COMMUNITY_GALLERIES = [
  {
    title: 'Coffee Morning Meetup',
    description: 'Highlights from our cozy coffee gatherings',
    images: [
      {
        src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663594899785/f6BeSEvWAji7G5hxiLtCro/featured-event-1-DvcCuCgC6JydVo4xfvd7k2.webp',
        alt: 'Coffee meetup 1',
        title: 'Coffee Morning Meetup',
      },
      {
        src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663594899785/f6BeSEvWAji7G5hxiLtCro/featured-event-1-DvcCuCgC6JydVo4xfvd7k2.webp',
        alt: 'Coffee meetup 2',
      },
      {
        src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663594899785/f6BeSEvWAji7G5hxiLtCro/featured-event-1-DvcCuCgC6JydVo4xfvd7k2.webp',
        alt: 'Coffee meetup 3',
      },
      {
        src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663594899785/f6BeSEvWAji7G5hxiLtCro/featured-event-1-DvcCuCgC6JydVo4xfvd7k2.webp',
        alt: 'Coffee meetup 4',
      },
    ],
  },
  {
    title: 'Parent Support Workshop',
    description: 'Moments of learning, connection, and empowerment',
    images: [
      {
        src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663594899785/f6BeSEvWAji7G5hxiLtCro/featured-event-2-9vo5nsWaxUtMAcQfA993JV.webp',
        alt: 'Workshop 1',
        title: 'Parent Support Workshop',
      },
      {
        src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663594899785/f6BeSEvWAji7G5hxiLtCro/featured-event-2-9vo5nsWaxUtMAcQfA993JV.webp',
        alt: 'Workshop 2',
      },
      {
        src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663594899785/f6BeSEvWAji7G5hxiLtCro/featured-event-2-9vo5nsWaxUtMAcQfA993JV.webp',
        alt: 'Workshop 3',
      },
      {
        src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663594899785/f6BeSEvWAji7G5hxiLtCro/featured-event-2-9vo5nsWaxUtMAcQfA993JV.webp',
        alt: 'Workshop 4',
      },
    ],
  },
  {
    title: 'Community Gathering',
    description: 'Celebrating togetherness and building stronger families',
    images: [
      {
        src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663594899785/f6BeSEvWAji7G5hxiLtCro/featured-event-3-PL7395Y7F285AxfbW5XXSK.webp',
        alt: 'Gathering 1',
        title: 'Community Gathering',
      },
      {
        src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663594899785/f6BeSEvWAji7G5hxiLtCro/featured-event-3-PL7395Y7F285AxfbW5XXSK.webp',
        alt: 'Gathering 2',
      },
      {
        src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663594899785/f6BeSEvWAji7G5hxiLtCro/featured-event-3-PL7395Y7F285AxfbW5XXSK.webp',
        alt: 'Gathering 3',
      },
      {
        src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663594899785/f6BeSEvWAji7G5hxiLtCro/featured-event-3-PL7395Y7F285AxfbW5XXSK.webp',
        alt: 'Gathering 4',
      },
    ],
  },
];

// ============ LIGHTBOX COMPONENT ============
function Lightbox({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: {
  isOpen: boolean;
  images: Array<{ src: string; alt: string; title?: string }>;
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  const [isAnimating, setIsAnimating] = useState(false);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  const handleNavigation = (direction: 'next' | 'prev') => {
    setIsAnimating(true);
    setTimeout(() => {
      direction === 'next' ? onNext() : onPrev();
      setIsAnimating(false);
    }, 150);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div className='absolute inset-0 bg-black/60 backdrop-blur-sm' />

      <div
        className={`relative z-10 w-full max-w-4xl mx-auto px-4 transition-all duration-300 ${
          isAnimating ? 'opacity-75 scale-95' : 'opacity-100 scale-100'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className='relative bg-card rounded-2xl overflow-hidden shadow-2xl'>
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className='w-full h-auto max-h-[70vh] object-contain'
          />

          {currentImage.title && (
            <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-6 py-4'>
              <h3 className='text-white font-heading font-bold text-lg'>
                {currentImage.title}
              </h3>
            </div>
          )}

          <button
            onClick={onClose}
            className='absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 backdrop-blur-sm'
          >
            <X className='w-6 h-6 text-white' />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={() => handleNavigation('prev')}
                className='absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 backdrop-blur-sm'
              >
                <ChevronLeft className='w-6 h-6 text-white' />
              </button>

              <button
                onClick={() => handleNavigation('next')}
                className='absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 backdrop-blur-sm'
              >
                <ChevronRight className='w-6 h-6 text-white' />
              </button>
            </>
          )}

          {images.length > 1 && (
            <div className='absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 rounded-full backdrop-blur-sm'>
              <p className='text-white text-sm font-medium'>
                {currentIndex + 1} / {images.length}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ============ MAIN EVENTS PAGE ============
export default function Events() {
  const t = useTranslations('PressPage');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<
    Array<{ src: string; alt: string; title?: string }>
  >([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (
    images: Array<{ src: string; alt: string; title?: string }>,
    index: number
  ) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = () =>
    setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);
  const prevImage = () =>
    setLightboxIndex(
      (prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length
    );

  const communityGalleries = [
    {
      title: t('gallery1Title'),
      description: t('gallery1Description'),
      images: COMMUNITY_GALLERIES[0].images,
    },
    {
      title: t('gallery2Title'),
      description: t('gallery2Description'),
      images: COMMUNITY_GALLERIES[1].images,
    },
    {
      title: t('gallery3Title'),
      description: t('gallery3Description'),
      images: COMMUNITY_GALLERIES[2].images,
    },
  ];

  const features = [t('feature1'), t('feature2'), t('feature3')];

  return (
    <div className='min-h-screen bg-background'>
      {/* ==================== HERO SECTION ==================== */}
      <section
        className='relative min-h-[600px] flex items-center justify-center overflow-hidden'
        style={{
          backgroundImage: `url('${HERO_BG}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50' />

        <div className='relative z-10 container text-center px-4 py-20'>
          <div className='max-w-3xl mx-auto animate-fade-in-up'>
            <h1
              data-aos='fade-up'
              className='text-5xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight'
            >
              {t('heroTitle')}
            </h1>
            <p
              data-aos='fade-up'
              data-aos-delay='200'
              className='text-xl md:text-2xl text-white/90 font-light'
            >
              {t('heroDescription')}
            </p>
          </div>
        </div>

        <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent' />
      </section>

      {/* ==================== UPCOMING EVENTS SECTION ==================== */}
      <section className='py-20 md:py-28 px-4 bg-background'>
        <div className='max-w-2xl mx-auto'>
          <h2
            data-aos='fade-down'
            className='text-4xl md:text-5xl font-heading font-bold text-primary mb-4 text-center animate-fade-in-up'
          >
            {t('upcomingTitle')}
          </h2>

          <div
            data-aos='zoom-in'
            data-aos-delay='200'
            className='bg-card rounded-2xl shadow-md p-12 text-center border border-border animate-fade-in-up'
          >
            <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6'>
              <Calendar className='w-8 h-8 text-primary' />
            </div>

            <h3 className='text-2xl font-heading font-bold text-foreground mb-3'>
              {t('upcomingCardTitle')}
            </h3>

            <p className='text-lg text-muted-foreground mb-8'>
              {t('upcomingCardDescription')}
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full transition-all duration-300 hover:shadow-lg'>
                {t('joinCommunity')}
              </button>
              <button className='px-8 py-3 border-2 border-primary text-primary hover:bg-primary/10 font-semibold rounded-full transition-all duration-300'>
                {t('getUpdates')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FEATURED EVENTS SECTION ==================== */}
      <section className='py-20 md:py-28 px-4 bg-muted'>
        <div className='max-w-6xl mx-auto'>
          <div className='mb-16 text-center animate-fade-in-up'>
            <h2
              data-aos='fade-right'
              className='text-4xl md:text-5xl font-heading font-bold text-primary mb-4'
            >
              {t('featuredTitle')}
            </h2>
            <p className='text-lg text-muted-foreground'>
              {t('featuredDescription')}
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {FEATURED_EVENTS.map((event, idx) => (
              <div
                key={event.id}
                data-aos='fade-up'
                data-aos-delay={idx * 100}
                className='group cursor-pointer animate-fade-in-up'
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className='relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-[500px]'>
                  <img
                    src={event.image}
                    alt={`Event ${event.id}`}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                    onClick={() =>
                      openLightbox(
                        [{ src: event.image, alt: `Event ${event.id}` }],
                        0
                      )
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== COMMUNITY MOMENTS SECTION ==================== */}
      <section className='py-20 md:py-28 px-4 bg-background'>
        <div className='max-w-6xl mx-auto'>
          <div className='mb-16 text-center animate-fade-in-up'>
            <h2
              data-aos='fade-right'
              className='text-4xl md:text-5xl font-heading font-bold text-primary mb-4'
            >
              {t('communityMomentsTitle')}
            </h2>
            <p className='text-lg text-muted-foreground'>
              {t('communityMomentsDescription')}
            </p>
          </div>

          <div className='space-y-20'>
            {communityGalleries.map((gallery, galleryIndex) => (
              <div
                key={galleryIndex}
                data-aos='fade-up'
                data-aos-delay={galleryIndex * 100}
                className='animate-fade-in-up'
                style={{ animationDelay: `${galleryIndex * 100}ms` }}
              >
                <div className='mb-8'>
                  <h3 className='text-3xl font-heading font-bold text-brand-deep mb-2'>
                    {gallery.title}
                  </h3>
                  <p className='text-muted-foreground text-lg'>
                    {gallery.description}
                  </p>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                  {gallery.images.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className='group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer h-48'
                      onClick={() => openLightbox(gallery.images, imageIndex)}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                      />

                      <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                        <Heart className='w-8 h-8 text-accent animate-bounce-slow' />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA SECTION ==================== */}
      <section className='py-20 md:py-28 px-4 bg-gradient-to-r from-primary/5 to-accent/5 border-t border-border'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div className='animate-fade-in-up'>
              <h2 className='text-4xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight'>
                {t('finalCtaTitle')}
              </h2>
              <p className='text-xl text-muted-foreground mb-8 leading-relaxed'>
                {t('finalCtaDescription')}
              </p>

              <div className='space-y-4 mb-8'>
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className='flex items-start gap-3 animate-fade-in-up'
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className='flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1'>
                      <Heart className='w-4 h-4 text-accent' />
                    </div>
                    <span className='text-foreground font-medium'>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className='flex flex-col gap-4 animate-fade-in-up'>
              <button className='px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full transition-all duration-300 hover:shadow-lg text-lg'>
                {t('getInvolved')}
              </button>
              <button className='px-8 py-4 border-2 border-primary text-primary hover:bg-primary/10 font-semibold rounded-full transition-all duration-300 text-lg'>
                {t('joinCommunity')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
}
