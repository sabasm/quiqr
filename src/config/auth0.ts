export const auth0Config = {
  domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN || '',
  clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID || '',
  redirectUri: process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI || '',
  postLogoutRedirectUri: process.env.NEXT_PUBLIC_AUTH0_POST_LOGOUT_REDIRECT_URI || '',
  audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE || '',
};


