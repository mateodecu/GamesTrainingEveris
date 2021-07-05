import { Component, OnInit } from '@angular/core';

import { Game } from '../models/game.model';

import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrls: ['./bestsellers.component.scss']
})
export class BestsellersComponent implements OnInit {
  title: string = 'bestsellers';

  bestsellers: Game[] = [];

  constructor(private _gamesService: GamesService) {}

  ngOnInit(): void {
    this.getGames();
    console.log(this.bestsellers);
  }

  getGames(): void {
    this.bestsellers = this._gamesService.getGames();
  }
}
