import { Restaurant } from '../types/restaurant.types';
import { RestaurantCard } from './RestaurantCard';

type Props = {
  restaurants: Restaurant[];
};

export function RestaurantGrid({ restaurants }: Props) {
  return (
    <div
      className='
        grid
        grid-cols-1
        gap-6
        md:grid-cols-3
      '
    >
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}
