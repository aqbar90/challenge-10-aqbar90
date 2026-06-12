'use client';

import { useRecommendedRestaurants } from '@/features/restaurant/hooks/useRecommendedRestaurants';

import { RecommendedGrid } from './RecommendedGrid';

export function RecommendedSection() {
  const { data, isLoading, isError } = useRecommendedRestaurants();

  console.log('RECOMMENDED', data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return null;
  }

  return (
    <section>
      <div>
        <div className='mb-8 flex items-center justify-between'>
          <h2
            className='
              text-2xl
              leading-2xl
              font-extrabold
              font-sans
              md:text-display-md
              md:leading-display-md
            '
          >
            Recommended
          </h2>
          <button
            className='
            text-lg
            font-extrabold
            leading-lg
            tracking-tight
            text-primary
            hover:underline
          '
          >
            See All
          </button>
        </div>

        <RecommendedGrid restaurants={data.data.recommendations} />
      </div>
    </section>
  );
}
