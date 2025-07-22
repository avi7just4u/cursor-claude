export const createOpenAIClient = (apiKey: string) => {
  return {
    chat: async (messages: any[]) => {
      // Placeholder implementation
      return {
        content: 'AI response placeholder',
        usage: {
          prompt_tokens: 0,
          completion_tokens: 0,
          total_tokens: 0,
        },
      };
    },
  };
}; 