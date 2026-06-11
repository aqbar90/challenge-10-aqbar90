'use client';

import { useRestaurants } from '@/features/restaurant/hooks/useRestaurants';

import { RestaurantCard } from '@/features/home/components/RestaurantCard';

export default function DashboardPage() {
  const { data, isLoading } = useRestaurants();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='grid gap-4 p-6'>
      {data?.data.restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}
