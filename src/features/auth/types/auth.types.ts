export type LoginFormValues = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  latitude: number;
  longitude: number;
  createdAt: string;
};

export type LoginResponse = {
  success: boolean;
  message: string;
  data: {
    user: User;
    token: string;
  };
};

export type RegisterRequest = {
  name: string;
  email: string;
  phone: string;
  password: string;
};

export type RegisterFormValues = {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

export type RegisterResponse = {
  success: boolean;
  message: string;
  data: {
    user: User;
    token: string;
  };
};
