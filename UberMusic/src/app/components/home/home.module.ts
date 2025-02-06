import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LoginButtonModule } from '../login-button/login-button.module';



@NgModule({
  imports: [
    CommonModule,
    LoginButtonModule
  ],
  exports: [HomeComponent],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule { }
