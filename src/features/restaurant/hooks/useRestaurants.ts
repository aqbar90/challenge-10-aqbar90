import { useQuery } from '@tanstack/react-query';

import { getRestaurants } from '../services/restaurant-service';

export function useRestaurants(category: string) {
  return useQuery({
    queryKey: ['restaurants', category],

    queryFn: () => getRestaurants(category),
  });
}
