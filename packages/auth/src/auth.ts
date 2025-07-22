import { User, Session } from './types';

export const createSession = (user: User): Session => {
  return {
    user,
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24 hours
  };
};

export const validateSession = (session: Session): boolean => {
  return new Date(session.expires) > new Date();
};

export const getUserFromSession = (session: Session): User | null => {
  if (!validateSession(session)) {
    return null;
  }
  return session.user;
}; 