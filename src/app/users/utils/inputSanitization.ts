export const sanitizeUserInput = (input: string): string => {
  return input.trim().replace(/[<>&'"]/g, '');
};


