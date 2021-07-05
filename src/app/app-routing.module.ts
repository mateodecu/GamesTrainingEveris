import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestsellersComponent } from './bestsellers/bestsellers.component';

const routes: Routes = [
  { path: 'bestsellers', component: BestsellersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
