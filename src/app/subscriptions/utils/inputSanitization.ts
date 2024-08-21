export const sanitizeSubscriptionInput = (input: string): string => {
  return input.trim().replace(/[<>&'"]/g, '');
};


