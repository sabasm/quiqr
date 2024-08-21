import { Auth0Client } from '@auth0/auth0-spa-js';
import { auth0Config } from '../config/auth0';

export class Auth0Service {
  private auth0Client: Auth0Client;

  constructor() {
    this.auth0Client = new Auth0Client({
      domain: auth0Config.domain,
      clientId: auth0Config.clientId,
    });
  }

  async getUser() {
    return this.auth0Client.getUser();
  }

  login() {
    return this.auth0Client.loginWithRedirect();
  }

  logout() {
    return this.auth0Client.logout();
  }
}


