import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  games: Game[] = [
    {
      id: 0,
      title: 'Hollow Knight - Silksong',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores error culpa libero vel praesentium ut, dignissimos consequuntur exercitationem fugit explicabo laboriosam totam laborum temporibus velit ex quia.',
      price: 29.99,
      img: 'HollowKnightSilksong.jpg'
    },
    {
      id: 1,
      title: 'Mario Kart 8 - Deluxe',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores error culpa libero vel praesentium ut, dignissimos consequuntur exercitationem fugit explicabo laboriosam totam laborum temporibus velit ex quia.',
      price: 49.99,
      img: 'MarioKart8Deluxe.jpg'
    },
    {
      id: 2,
      title: 'New Super Mario Bros.U Deluxe',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores error culpa libero vel praesentium ut, dignissimos consequuntur exercitationem fugit explicabo laboriosam totam laborum temporibus velit ex quia.',
      price: 39.99,
      img: 'NewSuperMarioBrosUDeluxe.jpg'
    },
    {
      id: 3,
      title: 'Ori And The Blind Forest - Definitive Edition',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores error culpa libero vel praesentium ut, dignissimos consequuntur exercitationem fugit explicabo laboriosam totam laborum temporibus velit ex quia.',
      price: 29.99,
      img: 'OriAndTheBlindForestDefinitiveEdition.jpg'
    },
    {
      id: 4,
      title: 'Ori And The Will Of The Wisps',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores error culpa libero vel praesentium ut, dignissimos consequuntur exercitationem fugit explicabo laboriosam totam laborum temporibus velit ex quia.',
      price: 29.99,
      img: 'OriAndTheWillOfTheWisps.jpg'
    },
    {
      id: 5,
      title: 'Pokemon Shield',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores error culpa libero vel praesentium ut, dignissimos consequuntur exercitationem fugit explicabo laboriosam totam laborum temporibus velit ex quia.',
      price: 34.99,
      img: 'PokemonShield.jpg'
    },
    {
      id: 6,
      title: 'Pokemon Shining Pearl',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores error culpa libero vel praesentium ut, dignissimos consequuntur exercitationem fugit explicabo laboriosam totam laborum temporibus velit ex quia.',
      price: 34.99,
      img: 'PokemonShiningPearl.jpg'
    },
    {
      id: 7,
      title: 'Pokemon Sword',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores error culpa libero vel praesentium ut, dignissimos consequuntur exercitationem fugit explicabo laboriosam totam laborum temporibus velit ex quia.',
      price: 34.99,
      img: 'PokemonSword.jpg'
    },
    {
      id: 8,
      title: 'Rime',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores error culpa libero vel praesentium ut, dignissimos consequuntur exercitationem fugit explicabo laboriosam totam laborum temporibus velit ex quia.',
      price: 24.99,
      img: 'Rime.jpg'
    },
    {
      id: 9,
      title: 'Super Mario 3D Allstars',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores error culpa libero vel praesentium ut, dignissimos consequuntur exercitationem fugit explicabo laboriosam totam laborum temporibus velit ex quia.',
      price: 39.99,
      img: 'SuperMario3DAllstars.jpg'
    },
    {
      id: 10,
      title: 'Super Mario 3D World And Bowsers Fury',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores error culpa libero vel praesentium ut, dignissimos consequuntur exercitationem fugit explicabo laboriosam totam laborum temporibus velit ex quia.',
      price: 39.99,
      img: 'SuperMario3DWorldAndBowsersFury.jpg'
    },
    {
      id: 11,
      title: 'Super Smash Bros Ultimate',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores error culpa libero vel praesentium ut, dignissimos consequuntur exercitationem fugit explicabo laboriosam totam laborum temporibus velit ex quia.',
      price: 49.99,
      img: 'SuperSmashBrosUltimate.jpg'
    },
    {
      id: 12,
      title: 'The Legend Of Zelda Breath Of The Wild',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores error culpa libero vel praesentium ut, dignissimos consequuntur exercitationem fugit explicabo laboriosam totam laborum temporibus velit ex quia.',
      price: 59.99,
      img: 'TheLegendOfZeldaBreathOfTheWild.jpg'
    },
    {
      id: 13,
      title: 'The Legend Of Zelda Links Awakening',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores error culpa libero vel praesentium ut, dignissimos consequuntur exercitationem fugit explicabo laboriosam totam laborum temporibus velit ex quia.',
      price: 49.99,
      img: 'TheLegendOfZeldaLinksAwakening.jpg'
    },
    {
      id: 14,
      title: 'The Legend Of Zelda Skyward Sword HD',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores error culpa libero vel praesentium ut, dignissimos consequuntur exercitationem fugit explicabo laboriosam totam laborum temporibus velit ex quia.',
      price: 49.99,
      img: 'TheLegendOfZeldaSkywardSwordHD.jpg'
    },
    {
      id: 15,
      title: 'Xenoblade Chronicles - Definitive Edition',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores error culpa libero vel praesentium ut, dignissimos consequuntur exercitationem fugit explicabo laboriosam totam laborum temporibus velit ex quia.',
      price: 44.99,
      img: 'XenobladeChroniclesDefinitiveEdition.jpg'
    }
  ];

  constructor() {}

  getGames(): Game[] {
    return this.games;
  }
}
