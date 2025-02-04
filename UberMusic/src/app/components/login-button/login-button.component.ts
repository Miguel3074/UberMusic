import { Component } from '@angular/core';
import { GetTokenService } from '../../services/get-token.service';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrl: './login-button.component.scss'
})
export class LoginButtonComponent {

  token: any;

  constructor(private getTokenService: GetTokenService) {

  }

  login() {
    this.getTokenService.login();
  }

}
