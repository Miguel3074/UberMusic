import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlPanelComponent } from './control-panel.component';
import { SkipButtonModule } from '../skip-button/skip-button.module';



@NgModule({
  imports: [
    CommonModule,
    SkipButtonModule,
  ],
  exports: [ControlPanelComponent],
  declarations: [ControlPanelComponent],
  providers: [],
})
export class ControlPanelModule { }
