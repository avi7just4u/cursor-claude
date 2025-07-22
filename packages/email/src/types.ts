export interface EmailConfig {
  sendgrid?: {
    apiKey: string;
    fromEmail: string;
    fromName: string;
  };
}

export interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  html: string;
  text?: string;
}

export interface EmailData {
  to: string;
  subject: string;
  html: string;
  text?: string;
  from?: string;
} 