import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../models/game.model';

import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-banner-game',
  templateUrl: './banner-game.component.html',
  styleUrls: ['./banner-game.component.scss']
})
export class BannerGameComponent implements OnInit {
  @Input() game: Game;

  constructor() {}

  ngOnInit(): void {}
}
