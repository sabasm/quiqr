import { useSecurityContext } from '../context/SecurityContext';

export const useSecurity = () => {
  const context = useSecurityContext();
  return context;
};


