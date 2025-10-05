interface User {
  id: number;
  name: string;
  email: string;
  avatarUrl: string;
}

interface AuthResponse {
  token: string;
  user: User;
}
