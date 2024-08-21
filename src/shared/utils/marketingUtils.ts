export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  console.log(`Tracked event: ${eventName}`, properties);
};


