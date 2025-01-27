import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SkipButtonModule } from '../skip-button/skip-button.module';



@NgModule({
  imports: [
    CommonModule,
    SkipButtonModule
  ],
  exports: [HomeComponent],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule { }
