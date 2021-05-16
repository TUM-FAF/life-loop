import { Scene } from 'phaser';

export default class PlayScene extends Scene {
  constructor() {
    super({ key: 'PlayScene' });
  }

  player: Phaser.Physics.Arcade.Sprite;
  cursors: Phaser.Input.Keyboard.CursorKeys;
  platforms: Phaser.Physics.Arcade.StaticGroup;
  stars: Phaser.Physics.Arcade.Group;
  apples: Phaser.Physics.Arcade.Group;
  scoreText: Phaser.GameObjects.Text;
  finishText: Phaser.GameObjects.Text;
  score = 0;
  pointer1: Phaser.Input.Pointer;
  pointer2: Phaser.Input.Pointer;

  public create() {
    this.input.addPointer();
    this.pointer1 = this.input.pointer1;
    this.pointer2 = this.input.pointer2;
    this.cursors = this.input.keyboard.createCursorKeys();
    this.add.image(0, 0, 'sky').setOrigin(0, 0);
    this.scoreText = this.add.text(32, 16, 'while(🍎) {', {
      fontSize: '32px',
      fill: '#000',
    });

    this.finishText = this.add.text(640, 170, 'Next Level ->', {
      fontSize: '20px',
      fill: '#000',
    });

    this.platforms = this.physics.add.staticGroup();
    this.platforms
      .create(400, 450, 'ground')
      .setScale(2)
      .refreshBody();
    this.platforms.create(-50, 280, 'ground');
    this.platforms.create(-50, 140, 'ground');
    this.platforms.create(this.sys.game.canvas.width + 40, 280, 'ground');
    this.platforms.create(this.sys.game.canvas.width + 40, 140, 'ground');
    this.platforms.create(400, 220, 'sground');
    this.platforms.create(500, 350, 'sground');

    this.platforms.create(10, 480, 'wall');
    this.platforms.create(10, -50, 'wall');
    this.platforms.create(this.sys.game.canvas.width - 10, 480, 'wall');
    this.platforms.create(this.sys.game.canvas.width - 10, -50, 'wall');

    this.player = this.physics.add.sprite(20, 200, 'dude');
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: 'turn',
      frames: [{ key: 'dude', frame: 4 }],
      frameRate: 20,
    });
    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });

    this.initApples();
  }

  public update() {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);

      this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);

      this.player.anims.play('right', true);
    } else {
      this.player.setVelocityX(0);

      this.player.anims.play('turn');
    }

    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-330);
    }

    if (
      this.player.body.position.x ===
        this.sys.game.canvas.width - this.player.body.width &&
      this.player.body.velocity.x > 0
    ) {
      this.player.body.position.x = 0;
      this.nexLevel();
    }

    this.handleMobileTouch();
  }

  private nexLevel() {
    if (this.score >= 11) {
      this.scoreText.setText('while(⭐) {');
      this.score = 0;
      this.initStars();
    }
  }

  private initApples() {
    this.apples = this.physics.add.group({
      key: 'apple',
      repeat: 10,
      setXY: { x: 50, y: 0, stepX: 70 },
    });

    this.apples.children.iterate(child => {
      // @ts-ignore
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });

    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.apples, this.platforms);
    this.physics.add.overlap(
      this.player,
      this.apples,
      this.eatApple,
      null,
      this
    );
  }

  private initStars() {
    this.stars = this.physics.add.group({
      key: 'star',
      repeat: 10,
      setXY: { x: 50, y: 0, stepX: 70 },
    });

    this.stars.children.iterate(child => {
      // @ts-ignore
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });

    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.stars, this.platforms);
    this.physics.add.overlap(
      this.player,
      this.stars,
      this.collectStar,
      null,
      this
    );
  }

  private handleMobileTouch() {
    const { width, height } = this.sys.game.canvas;

    if (this.pointer1.isDown) {
      const touchX = this.pointer1.x;
      const touchY = this.pointer1.y;
      console.log('1 ' + touchX, touchY);
      // left
      if (touchX < width / 2 && touchY > height / 2) {
        this.player.setVelocityX(-160);
        this.player.anims.play('left', true);
      }
      // right
      if (touchX > width / 2 && touchY > height / 2) {
        this.player.setVelocityX(160);
        this.player.anims.play('right', true);
      }
      // jump
      if (touchY < height / 2 && this.player.body.touching.down) {
        this.player.setVelocityY(-330);
      }
    }

    if (this.pointer2.isDown) {
      const touchX = this.pointer2.x;
      const touchY = this.pointer2.y;
      console.log('2 ' + touchX, touchY);
      // left
      if (touchX < width / 2 && touchY > height / 2) {
        this.player.setVelocityX(-160);
        this.player.anims.play('left', true);
      }
      // right
      if (touchX > width / 2 && touchY > height / 2) {
        this.player.setVelocityX(160);
        this.player.anims.play('right', true);
      }
      // jump
      if (touchY < height / 2 && this.player.body.touching.down) {
        this.player.setVelocityY(-330);
      }
    }

    if (
      this.player.body.position.x ===
        this.sys.game.canvas.width - this.player.body.width &&
      this.player.body.velocity.x > 0
    ) {
      this.player.body.position.x = 0;
      this.nexLevel();
    }
  }

  private collectStar(
    player: Phaser.Physics.Arcade.Sprite,
    star: Phaser.Physics.Arcade.Sprite
  ) {
    star.disableBody(true, true);

    this.score += 1;
    if (this.score >= 11) {
      this.scoreText.setText('You broke out of the loop!');
    }
  }

  private eatApple(
    player: Phaser.Physics.Arcade.Sprite,
    apple: Phaser.Physics.Arcade.Sprite
  ) {
    apple.disableBody(true, true);
    this.score += 1;
    if (this.score >= 11) {
      this.scoreText.setText('You broke out of the loop!');
    }
  }
}
