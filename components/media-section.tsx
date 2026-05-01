'use client';
import { IMAGES } from '@/constants';
import { ExternalLink, Image as ImageIcon, Play, Video, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

const images: { src: StaticImageData | string; alt: string; span: string }[] = [
  {
    src: IMAGES.EVENT_A,
    alt: 'Community Event 1',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: IMAGES.EVENT_B,
    alt: 'Community Event 2',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    src: IMAGES.EVENT_C,
    alt: 'Community Event 3',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    src: IMAGES.EVENT_D,
    alt: 'Community Event 4',
    span: 'md:col-span-2 md:row-span-1',
  },
  {
    src: IMAGES.EVENT_E,
    alt: 'Community Event 5',
    span: 'md:col-span-1 md:row-span-2',
  },
  {
    src: IMAGES.EVENT_F,
    alt: 'Community Event 6',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    src: IMAGES.EVENT_G,
    alt: 'Community Event 7',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    src: IMAGES.EVENT_H,
    alt: 'Community Event 8',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    src: IMAGES.EVENT_I,
    alt: 'Community Event 9',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    src: IMAGES.EVENT_J,
    alt: 'Community Event 10',
    span: 'md:col-span-1 md:row-span-1',
  },
];

const videos = [
  {
    id: 'jQSAj6qpv3U',
    title: 'Obimi Founder',
    thumbnail:
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'R5VDe2QzyDE',
    title: 'Obimi Testimonial',
    thumbnail:
      'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=800&auto=format&fit=crop',
  },
];

const MediaSection = () => {
  const t = useTranslations('MediaSection');
  const [selectedImage, setSelectedImage] = useState<
    StaticImageData | string | null
  >(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const getImageSrc = (img: StaticImageData | string): string => {
    return typeof img === 'string' ? img : img.src;
  };

  const videoTitles = [
    { title: t('video1Title'), description: t('video1Description') },
    { title: t('video2Title'), description: t('video2Description') },
  ];

  return (
    <section className='py-24 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden'>
      <div className='container mx-auto space-y-24 relative z-10'>
        {/* Header */}
        <div
          data-aos='fade-up'
          className='text-center max-w-2xl mx-auto space-y-4'
        >
          <h2 className='text-4xl md:text-5xl font-heading font-bold text-foreground'>
            {t('title')}
          </h2>
          <p className='text-lg text-muted-foreground font-sans'>
            {t('description')}
          </p>
        </div>

        {/* Image Gallery Block */}
        <div className='space-y-8'>
          <div
            data-aos='fade-right'
            className='flex items-center gap-3 border-b border-border pb-4'
          >
            <ImageIcon className='w-6 h-6 text-primary' />
            <h3 className='text-2xl font-heading font-bold'>
              {t('photoGallery')}
            </h3>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]'>
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(img.src)}
                data-aos='zoom-in'
                data-aos-delay={index * 100}
                className={`${img.span} relative group overflow-hidden rounded-[2rem] border-4 border-background shadow-lg cursor-pointer`}
              >
                {typeof img.src === 'string' ? (
                  <img
                    src={img.src}
                    alt={img.alt}
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                ) : (
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className='object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                )}
                <div className='absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                  <div className='bg-white/90 p-3 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
                    <ExternalLink className='w-5 h-5 text-primary' />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Showcase Block */}
        <div className='space-y-8'>
          <div
            data-aos='fade-right'
            className='flex items-center gap-3 border-b border-border pb-4'
          >
            <Video className='w-6 h-6 text-secondary-foreground' />
            <h3 className='text-2xl font-heading font-bold'>
              {t('videoStories')}
            </h3>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {videos.map((video, index) => (
              <div
                key={index}
                data-aos='fade-up'
                data-aos-delay={index * 200}
                className='group space-y-4'
              >
                <div className='relative aspect-video rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-background group-hover:shadow-primary/10 transition-all duration-500 bg-muted'>
                  {activeVideo === video.id ? (
                    <iframe
                      className='w-full h-full'
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                      title={video.title}
                      frameBorder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                      />
                      <div className='absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center'>
                        <button
                          onClick={() => setActiveVideo(video.id)}
                          className='w-16 h-16 rounded-full bg-white/90 text-primary flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300'
                        >
                          <Play className='w-6 h-6 fill-current ml-1' />
                        </button>
                      </div>
                    </>
                  )}
                </div>
                <div className='px-2'>
                  <h4 className='text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors'>
                    {videoTitles[index].title}
                  </h4>
                  <p className='text-sm text-muted-foreground font-sans'>
                    {videoTitles[index].description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Lightbox Overlay */}
      {selectedImage && (
        <div
          className='fixed inset-0 z-100 bg-black/90 flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300'
          onClick={() => setSelectedImage(null)}
        >
          <button className='absolute top-8 right-8 text-white hover:text-primary transition-colors'>
            <X className='w-10 h-10' />
          </button>
          <div className='relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300'>
            <Image
              src={getImageSrc(selectedImage)}
              alt='Enlarged view'
              fill
              className='object-contain'
            />
          </div>
        </div>
      )}

      {/* Decorative Blobs */}
      <div className='absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2' />
      <div className='absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-x-1/2' />
    </section>
  );
};

export default MediaSection;
