export const sanitizePaymentInput = (input: string): string => {
  return input.trim().replace(/[<>&'"]/g, '');
};


