export interface User {
  id: string;
  name: string;
  email: string;
  role: 'USER' | 'STAFF' | 'ADMIN';
}

export const authService = {
  async getCurrentUser(): Promise<User | null> {
    return Promise.resolve(null);
  },
};
