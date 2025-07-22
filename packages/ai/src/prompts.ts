export const createPrompt = (template: string, variables: Record<string, any>): string => {
  return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    return variables[key] || match;
  });
};

export const systemPrompts = {
  productDescription: 'Generate a compelling product description for: {{product}}',
  customerSupport: 'Provide helpful customer support for: {{issue}}',
  marketingCopy: 'Create marketing copy for: {{product}}',
}; 