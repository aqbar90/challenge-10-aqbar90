const REMEMBER_EMAIL_KEY = 'remembered_email';

export const rememberMeStorage = {
  getEmail() {
    if (typeof window === 'undefined') {
      return '';
    }

    return localStorage.getItem(REMEMBER_EMAIL_KEY) ?? '';
  },

  setEmail(email: string) {
    localStorage.setItem(REMEMBER_EMAIL_KEY, email);
  },

  clearEmail() {
    localStorage.removeItem(REMEMBER_EMAIL_KEY);
  },
};
