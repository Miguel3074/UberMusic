import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetTokenService {

  private token: string | null = null;
  private tokenExpiryTime: number | null = null; 

  constructor() {
    this.initSpotifyToken();
  }

  async initSpotifyToken() {
    const tokenData = await getSpotifyToken();
    if (tokenData) {
      this.token = tokenData.access_token;
      this.tokenExpiryTime = Date.now() + tokenData.expires_in * 1000;
    }
  }

  async getToken() {
    if (!this.token || (this.tokenExpiryTime && Date.now() >= this.tokenExpiryTime)) {
      await this.initSpotifyToken();
    }
    return this.token;
  }
}

async function getSpotifyToken() {
  const clientId = "192ea2be67de443e80f44e13b594e274";
  const clientSecret = "31af6bfeb3f649228b5cfa35b30c0b25";
  const redirectUri = "http://localhost:4200/callback";
  const scopes = "user-modify-playback-state";

  const data = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: clientId,
    client_secret: clientSecret,
  });

  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data.toString(),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return {
      access_token: result.access_token,
      expires_in: result.expires_in
    };
  } catch (error) {
    console.error("Error fetching Spotify token:", error);
    return null;
  }
}
