import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BestsellersComponent } from './bestsellers/bestsellers.component';
import { GameDetailsComponent } from './game-details/game-details.component';

const routes: Routes = [
  { path: 'bestsellers', component: BestsellersComponent },
  { path: 'game/:id', component: GameDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
