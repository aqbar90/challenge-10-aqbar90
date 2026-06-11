'use client';

import { useRestaurants } from '@/features/restaurant/hooks/useRestaurants';

import { RestaurantCard } from '@/features/home/components/RestaurantCard';

import { HeroSection } from '@/features/restaurant/components/hero/HeroSection';
import { HomeNavbar } from '@/features/home/components/navbar/HomeNavbar';

export default function DashboardPage() {
  const { data, isLoading } = useRestaurants();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <HomeNavbar />
      <HeroSection />

      <div className='mx-auto max-w-300 p-6'>
        <div
          className='
    grid
    gap-5
    p-6
    md:grid-cols-2
    xl:grid-cols-3
  '
        >
          {data?.data.restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
}
