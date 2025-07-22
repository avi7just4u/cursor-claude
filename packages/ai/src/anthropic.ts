export const createAnthropicClient = (apiKey: string) => {
  return {
    messages: {
      create: async (params: any) => {
        // Placeholder implementation
        return {
          content: [{ type: 'text', text: 'Anthropic response placeholder' }],
        };
      },
    },
  };
}; 