import { api } from '@/lib/api/axios';

import type { RestaurantListResponse } from '../types/restaurant.types';

export async function getRestaurants() {
  const response = await api.get<RestaurantListResponse>('/resto');

  return response.data;
}
