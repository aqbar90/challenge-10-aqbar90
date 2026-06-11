import Image from 'next/image';

import type { Restaurant } from '@/features/restaurant/types/restaurant.types';

type RestaurantCardProps = {
  restaurant: Restaurant;
};

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <div
      className='
        flex
        items-center
        gap-4
        rounded-2xl
        border
        border-border
        bg-background
        p-5
        shadow-sm
      '
    >
      <img
        src={restaurant.logo}
        alt={restaurant.name}
        className='
          h-[120px]
          w-[120px]
          shrink-0
          rounded-xl
          object-cover
        '
      />

      <div
        className='
          flex
          flex-col
          gap-2
        '
      >
        <h3
          className='
            text-lg
            font-extrabold
            leading-lg
            tracking-tight
            text-foreground
          '
        >
          {restaurant.name}
        </h3>

        <div
          className='
            flex
            items-center
            gap-2
          '
        >
          <span>⭐</span>

          <span
            className='
              text-md
              font-medium
              leading-md
              tracking-tight
              text-foreground
            '
          >
            {restaurant.star}
          </span>
        </div>

        <p
          className='
            text-md
            font-normal
            leading-md
            tracking-tight
            text-muted-foreground
          '
        >
          {restaurant.place}
        </p>
      </div>
    </div>
  );
}
