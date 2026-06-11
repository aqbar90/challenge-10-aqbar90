import Image from 'next/image';

import heroImage from '@/assets/images/home/hero-banner.jpg';

import { Search } from 'lucide-react';

export function HeroSection() {
  return (
    <section className='relative h-206.75 w-full overflow-hidden'>
      <Image
        src={heroImage}
        alt='Restaurant Hero'
        fill
        priority
        className='object-cover'
      />

      <div className='absolute inset-0 bg-black/55' />

      <div
        className='
          absolute
          inset-0
          flex
          flex-col
          items-center
          justify-center
          gap-10
          px-6
          text-center
        '
      >
        <div className='space-y-2'>
          <h1
            className='
              text-display-2xl
              font-extrabold
              leading-display-2xl
              text-white
            '
          >
            Explore Culinary Experiences
          </h1>

          <p
            className='
              text-display-xs
              leading-display-xs
              font-bold
              text-white
            '
          >
            Search and refine your choice to discover the perfect restaurant.
          </p>
        </div>

        <div
          className='
            flex
            h-14
            w-full
            max-w-151
            items-center
            rounded-full
            bg-white
            px-6
          '
        >
          <Search className='mr-2 size-5 text-muted-foreground' />

          <input
            type='text'
            placeholder='Search restaurants, food and drink'
            className='
              w-full
              bg-transparent
              outline-none
            '
          />
        </div>
      </div>
    </section>
  );
}
