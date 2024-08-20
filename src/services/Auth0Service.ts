import { Auth0Client } from '@auth0/auth0-spa-js';
import { auth0Config } from '../config/auth0';

export interface IAuth0Service {
  login(): Promise<void>;
  logout(): Promise<void>;
  getUser(): Promise<any>;
  getIdTokenClaims(): Promise<any>;
}

export class Auth0Service implements IAuth0Service {
  private auth0Client: Auth0Client;

  constructor() {
    this.auth0Client = new Auth0Client({
      domain: auth0Config.domain,
      client_id: auth0Config.clientId,
      redirect_uri: auth0Config.redirectUri,
    });
  }

  async login(): Promise<void> {
    await this.auth0Client.loginWithRedirect();
  }

  async logout(): Promise<void> {
    await this.auth0Client.logout({
      returnTo: auth0Config.postLogoutRedirectUri
    });
  }

  async getUser(): Promise<any> {
    return this.auth0Client.getUser();
  }

  async getIdTokenClaims(): Promise<any> {
    return this.auth0Client.getIdTokenClaims();
  }
}


