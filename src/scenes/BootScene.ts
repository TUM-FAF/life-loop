import { Scene } from 'phaser';
import sky from '../assets/sky.png';
import ground from '../assets/platform.png';
import wall from '../assets/wall.png';
import sground from '../assets/splatform.png';
import star from '../assets/star.png';
import bomb from '../assets/bomb.png';
import dude from '../assets/dude.png';
import apple from '../assets/apple.png';

export default class BootScene extends Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  public preload() {
    this.load.image('sky', sky);
    this.load.image('ground', ground);
    this.load.image('sground', sground);
    this.load.image('wall', wall);
    this.load.image('star', star);
    this.load.image('bomb', bomb);
    this.load.image('apple', apple);
    this.load.spritesheet('dude', dude, { frameWidth: 32, frameHeight: 48 });
  }

  public create() {
    this.scene.start('PlayScene');
  }
}
