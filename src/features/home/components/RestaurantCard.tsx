import Image from 'next/image';

import type { Restaurant } from '@/features/restaurant/types/restaurant.types';

type RestaurantCardProps = {
  restaurant: Restaurant;
};

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <div className='rounded-xl border p-4'>
      <Image
        src={restaurant.logo}
        alt={restaurant.name}
        width={120}
        height={120}
      />

      <h3>{restaurant.name}</h3>

      <p>⭐ {restaurant.star}</p>

      <p>{restaurant.place}</p>
    </div>
  );
}
