import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { GetTokenService } from '../../services/get-token.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrl: './callback.component.scss'
})

export class CallbackComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private getTokenService: GetTokenService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(async (params) => {
      const code = params['code'];
      if (code) {
        await this.getTokenService.fetchAccessToken(code);
        this.router.navigate(['/control-panel']);
      }
    });
  }
}