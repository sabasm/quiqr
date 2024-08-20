export const auth0Config = {
  domain: process.env.AUTH0_DOMAIN || '',
  clientId: process.env.AUTH0_CLIENT_ID || '',
  clientSecret: process.env.AUTH0_CLIENT_SECRET || '',
  redirectUri: process.env.AUTH0_REDIRECT_URI || '',
  postLogoutRedirectUri: process.env.AUTH0_POST_LOGOUT_REDIRECT_URI || '',
};


