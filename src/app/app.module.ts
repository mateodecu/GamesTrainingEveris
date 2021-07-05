import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { ViewsModule } from './views/views.module';
import { AppComponent } from './app.component';
import { GameCardComponent } from './game-card/game-card.component';
import { BestsellersComponent } from './bestsellers/bestsellers.component';
import { AppRoutingModule } from './app-routing.module';
import { ImageLocationPipe } from './pipes/image-location.pipe';
import { LimitTextPipe } from './pipes/limit-text.pipe';

@NgModule({
  declarations: [AppComponent, GameCardComponent, BestsellersComponent, ImageLocationPipe, LimitTextPipe],
  imports: [BrowserModule, CoreModule, AppRoutingModule, ViewsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
