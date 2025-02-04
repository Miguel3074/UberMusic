import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SkipButtonModule } from './components/skip-button/skip-button.module';
import { HomeComponent } from './components/home/home.component';
import { routes } from './app.routes';
import { HomeModule } from './components/home/home.module';
import { LoginButtonModule } from './components/login-button/login-button.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SkipButtonModule,
    HomeModule,
    LoginButtonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
