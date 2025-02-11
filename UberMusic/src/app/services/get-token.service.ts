import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GetTokenService {
  private scope = 'user-modify-playback-state';
  private clientId = environment.spotifyClientId;
  private clientSecret = environment.spotifyclientSecret;
  private redirectUri = environment.spotifyRedirectUri;

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