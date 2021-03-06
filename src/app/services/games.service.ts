import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  'games': Game[] = [
    {
      id: 0,
      title: 'Hollow Knight - Silksong',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores error culpa libero vel praesentium ut, dignissimos consequuntur exercitationem fugit explicabo laboriosam totam laborum temporibus velit ex quia.',
      shortDescription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores',
      price: 29.99,
      img: 'HollowKnightSilksong.jpg',
      newRelease: false
    },
    {
      id: 1,
      title: 'Mario Kart 8 - Deluxe',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores error culpa libero vel praesentium ut, dignissimos consequuntur exercitationem fugit explicabo laboriosam totam laborum temporibus velit ex quia.',
      shortDescription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores',
      price: 49.99,
      img: 'MarioKart8Deluxe.jpg',
      newRelease: true
    },
    {
      id: 2,
      title: 'New Super Mario Bros.U Deluxe',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores error culpa libero vel praesentium ut, dignissimos consequuntur exercitationem fugit explicabo laboriosam totam laborum temporibus velit ex quia.',
      shortDescription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores',
      price: 39.99,
      img: 'NewSuperMarioBrosUDeluxe.jpg',
      newRelease: false
    },
    {
      id: 3,
      title: 'Ori And The Blind Forest - Definitive Edition',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores error culpa libero vel praesentium ut, dignissimos consequuntur exercitationem fugit explicabo laboriosam totam laborum temporibus velit ex quia.',
      shortDescription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores',
      price: 29.99,
      img: 'OriAndTheBlindForestDefinitiveEdition.jpg',
      newRelease: false
    },
    {
      id: 4,
      title: 'Ori And The Will Of The Wisps',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores error culpa libero vel praesentium ut, dignissimos consequuntur exercitationem fugit explicabo laboriosam totam laborum temporibus velit ex quia.',
      shortDescription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores',
      price: 29.99,
      img: 'OriAndTheWillOfTheWisps.jpg',
      newRelease: true
    },
    {
      id: 5,
      title: 'Pokemon Shield',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores error culpa libero vel praesentium ut, dignissimos consequuntur exercitationem fugit explicabo laboriosam totam laborum temporibus velit ex quia.',
      shortDescription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores',
      price: 34.99,
      img: 'PokemonShield.jpg',
      newRelease: false
    },
    {
      id: 6,
      title: 'Pokemon Shining Pearl',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores error culpa libero vel praesentium ut, dignissimos consequuntur exercitationem fugit explicabo laboriosam totam laborum temporibus velit ex quia.',
      shortDescription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores',
      price: 34.99,
      img: 'PokemonShiningPearl.jpg',
      newRelease: true
    },
    {
      id: 7,
      title: 'Pokemon Sword',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores error culpa libero vel praesentium ut, dignissimos consequuntur exercitationem fugit explicabo laboriosam totam laborum temporibus velit ex quia.',
      shortDescription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores',
      price: 34.99,
      img: 'PokemonSword.jpg',
      newRelease: false
    },
    {
      id: 8,
      title: 'Rime',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores error culpa libero vel praesentium ut, dignissimos consequuntur exercitationem fugit explicabo laboriosam totam laborum temporibus velit ex quia.',
      shortDescription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores',
      price: 24.99,
      img: 'Rime.jpg',
      newRelease: true
    },
    {
      id: 9,
      title: 'Super Mario 3D Allstars',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores error culpa libero vel praesentium ut, dignissimos consequuntur exercitationem fugit explicabo laboriosam totam laborum temporibus velit ex quia.',
      shortDescription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores',
      price: 39.99,
      img: 'SuperMario3DAllstars.jpg',
      newRelease: true
    },
    {
      id: 10,
      title: 'Super Mario 3D World And Bowsers Fury',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores error culpa libero vel praesentium ut, dignissimos consequuntur exercitationem fugit explicabo laboriosam totam laborum temporibus velit ex quia.',
      shortDescription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores',
      price: 39.99,
      img: 'SuperMario3DWorldAndBowsersFury.jpg',
      newRelease: false
    },
    {
      id: 11,
      title: 'Super Smash Bros Ultimate',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores error culpa libero vel praesentium ut, dignissimos consequuntur exercitationem fugit explicabo laboriosam totam laborum temporibus velit ex quia.',
      shortDescription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores',
      price: 49.99,
      img: 'SuperSmashBrosUltimate.jpg',
      newRelease: false
    },
    {
      id: 12,
      title: 'The Legend Of Zelda Breath Of The Wild',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores error culpa libero vel praesentium ut, dignissimos consequuntur exercitationem fugit explicabo laboriosam totam laborum temporibus velit ex quia.',
      shortDescription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores',
      price: 59.99,
      img: 'TheLegendOfZeldaBreathOfTheWild.jpg',
      newRelease: true
    },
    {
      id: 13,
      title: 'The Legend Of Zelda Links Awakening',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores error culpa libero vel praesentium ut, dignissimos consequuntur exercitationem fugit explicabo laboriosam totam laborum temporibus velit ex quia.',
      shortDescription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores',
      price: 49.99,
      img: 'TheLegendOfZeldaLinksAwakening.jpg',
      newRelease: false
    },
    {
      id: 14,
      title: 'The Legend Of Zelda Skyward Sword HD',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores error culpa libero vel praesentium ut, dignissimos consequuntur exercitationem fugit explicabo laboriosam totam laborum temporibus velit ex quia.',
      shortDescription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores',
      price: 49.99,
      img: 'TheLegendOfZeldaSkywardSwordHD.jpg',
      newRelease: false
    },
    {
      id: 15,
      title: 'Xenoblade Chronicles - Definitive Edition',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores error culpa libero vel praesentium ut, dignissimos consequuntur exercitationem fugit explicabo laboriosam totam laborum temporibus velit ex quia.',
      shortDescription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente recusandae corrupti dolores',
      price: 44.99,
      img: 'XenobladeChroniclesDefinitiveEdition.jpg',
      newRelease: true
    }
  ];

  constructor() {}

  getGames(): Game[] {
    console.log(this.games);
    return this.games;
  }

  getGame(id: number): Game {
    return this.games[id];
  }
}
