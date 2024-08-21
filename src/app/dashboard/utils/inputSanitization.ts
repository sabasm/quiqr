export const sanitizeDashboardInput = (input: string): string => {
  return input.trim().replace(/[<>&'"]/g, '');
};


