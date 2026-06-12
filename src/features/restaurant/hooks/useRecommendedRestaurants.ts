import { useQuery } from '@tanstack/react-query';

import { getRecommendedRestaurants } from '../services/restaurant-service';

export function useRecommendedRestaurants() {
  return useQuery({
    queryKey: ['recommended-restaurants'],

    queryFn: getRecommendedRestaurants,
  });
}
