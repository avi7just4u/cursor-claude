import { nanoid } from 'nanoid';

// Generate random strings
export const generateId = (length: number = 10): string => {
  return nanoid(length);
};

export const generateToken = (length: number = 32): string => {
  return nanoid(length);
};

// Hash utilities (basic implementations)
export const hashString = async (str: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

// Simple encryption/decryption (for non-sensitive data)
export const encrypt = (text: string, key: string): string => {
  // This is a simple XOR encryption - not for sensitive data
  let result = '';
  for (let i = 0; i < text.length; i++) {
    result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
  }
  return btoa(result);
};

export const decrypt = (encryptedText: string, key: string): string => {
  // This is a simple XOR decryption - not for sensitive data
  const text = atob(encryptedText);
  let result = '';
  for (let i = 0; i < text.length; i++) {
    result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
  }
  return result;
}; 