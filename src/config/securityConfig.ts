export const securityConfig = {
  jwtSecret: process.env.JWT_SECRET || 'default_secret',
  expiresIn: process.env.JWT_EXPIRES_IN || '1h',
};


