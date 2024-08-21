import { SecurityService } from '../../services/SecurityService';

const securityService = new SecurityService();

describe('SecurityService', () => {
  it('should validate a token', () => {
    const token = 'valid_token';
    const isValid = securityService.validateToken(token);
    expect(isValid).toBe(true);
  });
});


