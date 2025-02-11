import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlPanelComponent } from './control-panel.component';
import { SkipButtonModule } from '../skip-button/skip-button.module';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';



@NgModule({
  imports: [
    CommonModule,
    SkipButtonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [ControlPanelComponent],
  declarations: [ControlPanelComponent],
  providers: [],
})
export class ControlPanelModule { }
