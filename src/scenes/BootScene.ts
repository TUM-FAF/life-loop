import { Scene } from 'phaser';
import sky from '../assets/sky.png';
import ground from '../assets/platform.png';
import star from '../assets/star.png';
import bomb from '../assets/bomb.png';
import dude from '../assets/dude.png';

export default class BootScene extends Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  public preload() {
    this.load.image('sky', sky);
    this.load.image('ground', ground);
    this.load.image('star', star);
    this.load.image('bomb', bomb);
    this.load.spritesheet('dude', dude, { frameWidth: 32, frameHeight: 48 });
  }

  public create() {
    this.scene.start('PlayScene');
  }
}
