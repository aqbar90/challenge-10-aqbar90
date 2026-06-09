export const queryKeys = {
  auth: {
    profile: ['auth', 'profile'],
  },

  restaurant: {
    all: ['restaurants'],

    list: (params?: unknown) => ['restaurants', 'list', params],

    detail: (id: string) => ['restaurants', 'detail', id],

    search: (query: string) => ['restaurants', 'search', query],

    bestSeller: ['restaurants', 'best-seller'],

    recommended: ['restaurants', 'recommended'],

    nearby: ['restaurants', 'nearby'],
  },

  cart: {
    all: ['cart'],
  },

  order: {
    all: ['orders'],
  },

  review: {
    all: ['reviews'],
  },
} as const;
