export interface User {
  id: number;
  name: string;
  email: string;
  avatarUrl: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}
