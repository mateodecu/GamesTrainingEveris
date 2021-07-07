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
import { GameDetailsComponent } from './game-details/game-details.component';
import { BannerGameComponent } from './banner-game/banner-game.component';

@NgModule({
  declarations: [AppComponent, GameCardComponent, BestsellersComponent, ImageLocationPipe, LimitTextPipe, GameDetailsComponent, BannerGameComponent],
  imports: [BrowserModule, CoreModule, AppRoutingModule, ViewsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
