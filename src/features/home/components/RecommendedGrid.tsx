import type { RecommendedRestaurant } from '@/features/restaurant/types/restaurant.types';

import { RecommendedCard } from './RecommendedCard';
import { Button } from '@/components/ui/button';

type Props = {
  restaurants: RecommendedRestaurant[];
};

export function RecommendedGrid({ restaurants }: Props) {
  return (
    <div>
      <div
        className='
        grid
        grid-cols-1
        gap-5
        md:grid-cols-3
        
      '
      >
        {restaurants.map((restaurant) => (
          <RecommendedCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
      <div className='flex justify-center pt-8'>
        <Button
          variant='outline'
          className='
          h-12
          w-40
          rounded-full
          border-[#D5D7DA]
          text-md
          font-bold
          leading-md
          tracking-tight
        '
        >
          Show More
        </Button>
      </div>
    </div>
  );
}
