export const queryKeys = {
  auth: {
    profile: ['profile'],
  },

  restaurant: {
    all: ['restaurants'],
    detail: (id: string) => ['restaurant', id],
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
