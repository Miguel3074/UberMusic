import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetTokenService {
  private clientId = '192ea2be67de443e80f44e13b594e274';
  private clientSecret = '31af6bfeb3f649228b5cfa35b30c0b25';
  private redirectUri = 'http://localhost:4200/callback';
  private scope = 'user-modify-playback-state';

  private accessToken: string | null = null;

  constructor() { }

  login() {
    const state = this.generateRandomString(16);
    const authUrl = `https://accounts.spotify.com/authorize?` +
      new URLSearchParams({
        response_type: 'code',
        client_id: this.clientId,
        scope: this.scope,
        redirect_uri: this.redirectUri,
        state: state
      }).toString();
    window.location.href = authUrl;
  }

  private generateRandomString(length: number): string {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from(crypto.getRandomValues(new Uint8Array(length)))
      .map(x => possible[x % possible.length])
      .join('');
  }

  async fetchAccessToken(codes: string) {

    if (typeof window === "undefined") {
      console.log("Ambiente não é um navegador, abortando requisição.");
      return;
    }

    const data = new URLSearchParams({
      grant_type: 'authorization_code',
      code: codes,
      redirect_uri: this.redirectUri,
    });

    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(this.clientId + ':' + this.clientSecret)
      },
      body: data.toString()
    });

    const result = await response.json();
    this.accessToken = result.access_token;
  }

  getToken(): string | null {
    return this.accessToken;
  }
}