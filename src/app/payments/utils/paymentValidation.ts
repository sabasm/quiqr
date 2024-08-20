export const validatePaymentAmount = (amount: number): boolean => {
  return amount > 0 && amount <= 1000000; // Example: limit to 1 million
};


