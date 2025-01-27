import { Component } from '@angular/core';
import { GetTokenService } from '../../services/get-token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  token:any;

  constructor(private getTokenService: GetTokenService) {
    this.initToken();
  }

  async initToken() {
    this.token = await this.getTokenService.getToken();
    this.getArtista();
  }
  async getArtista() {
    const artista = await getArtist(this.token);
    console.log("\nArtista:", artista.name);
  }

}

async function getArtist(token: any) {

  try {
    const response = await fetch("https://api.spotify.com/v1/artists/4oa7ETNZH1ivfzFkCGVZlR", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching Spotify token:", error);
  }
}