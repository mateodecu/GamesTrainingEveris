import { NgModule } from '@angular/core';
import { ViewsRoutingModule } from './views-routing.module';

import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { LandingModule } from './landing/landing.module';

@NgModule({
  declarations: [],
  imports: [
    ViewsRoutingModule,
    PageNotFoundModule,
    LandingModule
  ]
})
export class ViewsModule {}
