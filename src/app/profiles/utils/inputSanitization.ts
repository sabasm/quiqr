export const sanitizeProfileInput = (input: string): string => {
  return input.replace(/<(?!\/?(a|b|i|em|strong|span|br|ul|ol|li)(?=>|\s.*>))\/?.*?>/gi, '');
};


