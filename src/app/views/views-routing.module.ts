import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigComponent } from '../core/config/config.component';
import { ConfigService } from '../core/config/config.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { LandingComponent } from './landing/landing.component';

const defaultRoutes: Routes = [
  { path: 'init', component: ConfigComponent, canActivate: [ConfigService] },
  { path: '**', component: PageNotFoundComponent }
];

const routes: Routes = [
  { path: '', component: LandingComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot([...routes, ...defaultRoutes], {
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class ViewsRoutingModule {}
