export type RegisterPayload = {
  name: string;
  email: string;
  phone: string;
  password: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type AuthResponse = {
  token: string;
};

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  phone: string;
};
