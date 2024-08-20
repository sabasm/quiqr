import { SecurityService } from '../../services/SecurityService';

describe('SecurityService', () => {
  it('should validate a token', () => {
    const token = 'valid_token';
    const isValid = SecurityService.validateToken(token);
    expect(isValid).toBe(true);
  });

  it('should detect an invalid token', () => {
    const token = 'invalid_token';
    const isValid = SecurityService.validateToken(token);
    expect(isValid).toBe(false);
  });
});


