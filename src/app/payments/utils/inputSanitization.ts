export const sanitizePaymentInput = (input: string): string => {
  // Implement input sanitization logic for payments
  return input.trim().replace(/[^\w\s-]/gi, '');
};


