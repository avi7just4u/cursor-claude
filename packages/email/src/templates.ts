import { EmailTemplate } from './types';

export const emailTemplates: Record<string, EmailTemplate> = {
  welcome: {
    id: 'welcome',
    name: 'Welcome Email',
    subject: 'Welcome to NeuCircle!',
    html: '<h1>Welcome {{name}}!</h1><p>Thank you for joining NeuCircle.</p>',
    text: 'Welcome {{name}}! Thank you for joining NeuCircle.',
  },
  orderConfirmation: {
    id: 'order-confirmation',
    name: 'Order Confirmation',
    subject: 'Order Confirmation - {{orderNumber}}',
    html: '<h1>Order Confirmed</h1><p>Your order {{orderNumber}} has been confirmed.</p>',
    text: 'Order Confirmed - Your order {{orderNumber}} has been confirmed.',
  },
};

export const renderTemplate = (template: EmailTemplate, variables: Record<string, any>): EmailTemplate => {
  const render = (text: string) => {
    return text.replace(/\{\{(\w+)\}\}/g, (match, key) => {
      return variables[key] || match;
    });
  };

  const result: EmailTemplate = {
    ...template,
    subject: render(template.subject),
    html: render(template.html),
  };

  if (template.text) {
    result.text = render(template.text);
  }

  return result;
}; 