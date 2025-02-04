import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CallbackComponent } from './components/callback/callback.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'callback', component: CallbackComponent }
];
