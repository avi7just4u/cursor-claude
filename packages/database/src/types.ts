export * from '@prisma/client';

// Custom types for the application
export interface DatabaseConfig {
  url: string;
  poolSize?: number;
  ssl?: boolean;
}

export interface DatabaseConnection {
  isConnected: boolean;
  lastConnected: Date;
} 