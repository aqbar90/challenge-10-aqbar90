'use client';

import { useRestaurants } from '@/features/restaurant/hooks/useRestaurants';
import { useCategoryStore } from '@/features/restaurant/stores/category-store';

import { HeroSection } from '@/features/restaurant/components/hero/HeroSection';
import { HomeNavbar } from '@/features/home/components/navbar/HomeNavbar';
import { CategorySection } from '@/features/home/components/category/CategorySection';
import { PageContainer } from '@/components/layout/PageContainer';
import { RestaurantSection } from '@/features/restaurant/components/RestaurantSection';
import { RecommendedSection } from '@/features/home/components/RecommendedSection';

export default function DashboardPage() {
  const selectedCategory = useCategoryStore((state) => state.selectedCategory);

  const { data, isLoading } = useRestaurants(selectedCategory);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <HomeNavbar />

      <HeroSection />

      <PageContainer>
        <CategorySection />
      </PageContainer>

      <PageContainer>
        {!selectedCategory && <RecommendedSection />}
      </PageContainer>

      <PageContainer>{selectedCategory && <RestaurantSection />}</PageContainer>
    </div>
  );
}
