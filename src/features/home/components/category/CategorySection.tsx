import { categories } from '@/features/home/constants/categories';

import { CategoryCard } from '@/features/home/components/category/CategoryCard';

import { useCategoryStore } from '@/features/restaurant/stores/category-store';

export function CategorySection() {
  const selectedCategory = useCategoryStore((state) => state.selectedCategory);

  const setSelectedCategory = useCategoryStore(
    (state) => state.setSelectedCategory
  );

  return (
    <section>
      <div
        className='
          grid
          grid-cols-3
          gap-6
          md:grid-cols-6
          md:gap-13.25
        '
      >
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            name={category.name}
            icon={category.icon}
            isActive={selectedCategory === category.id}
            onClick={() => setSelectedCategory(category.id)}
          />
        ))}
      </div>
    </section>
  );
}
