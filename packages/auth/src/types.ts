export interface User {
  id: string;
  email: string;
  name?: string;
  image?: string;
  emailVerified?: Date;
}

export interface Session {
  user: User;
  expires: string;
}

export interface AuthConfig {
  secret: string;
  providers: AuthProvider[];
}

export interface AuthProvider {
  id: string;
  name: string;
  type: 'oauth' | 'credentials';
  config: Record<string, any>;
} 