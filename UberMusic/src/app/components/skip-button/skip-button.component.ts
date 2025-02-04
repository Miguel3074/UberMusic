import { Component } from '@angular/core';
import { GetTokenService } from '../../services/get-token.service';

@Component({
  selector: 'app-skip-button',
  templateUrl: './skip-button.component.html',
  styleUrls: ['./skip-button.component.scss'],
})
export class SkipButtonComponent {
  token:any;

  constructor(private getTokenService: GetTokenService) {
  }

  async initToken() {
    this.token = this.getTokenService.getToken();
  }
  
  clickButton() {
    if(!this.token){
      this.initToken();
    }
    skipMusic(this.token)
  }
}

async function skipMusic(accessToken: string) {
  try {
    const response = await fetch(
      "https://api.spotify.com/v1/me/player/next",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log("Track skipped successfully!");
  } catch (error) {
    console.error("Error skipping track:", error);
  }
}
