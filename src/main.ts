import * as Phaser from 'phaser';
import BootScene from './scenes/BootScene';
import PlayScene from './scenes/PlayScene';

declare global {
  interface Window {
    game: Phaser.Game;
  }
}

const config: GameConfig = {
  type: Phaser.AUTO,
  parent: 'app',

  width: 800,
  height: 450,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 400 },
      debug: false,
    },
  },
  scene: [BootScene, PlayScene],
};

const game = new Phaser.Game(config);
window.game = game;
