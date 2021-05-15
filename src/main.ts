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
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: [BootScene, PlayScene],
};

const game = new Phaser.Game(config);
window.game = game;
