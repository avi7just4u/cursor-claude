export const createSendGridClient = (apiKey: string) => {
  return {
    send: async (emailData: any) => {
      // Placeholder implementation
      console.log('Sending email via SendGrid:', emailData);
      return { success: true };
    },
  };
}; 