import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  bannerGame: Game;

  constructor(private _gamesService: GamesService, private router: Router) {}

  ngOnInit(): void {
    this.getGames();
    this.bannerGame = this.bestsellers[
      Math.floor(Math.random() * this.bestsellers.length)
    ];
  }

  getGames(): void {
    this.bestsellers = this._gamesService.getGames();
  }

  goToGame(id: number): void {
    this.router.navigate(['/game', id]);
  }
}
