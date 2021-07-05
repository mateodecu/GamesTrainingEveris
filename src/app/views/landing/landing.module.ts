import { NgModule } from '@angular/core';
import { LandingComponent } from './landing.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [LandingComponent],
  exports: [LandingComponent]
})
export class LandingModule {}
