import { authStorage } from './auth-storage';

export function isAuthenticated() {
  return Boolean(authStorage.getToken());
}
