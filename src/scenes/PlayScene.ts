import { Scene } from 'phaser';

export default class PlayScene extends Scene {
  constructor() {
    super({ key: 'PlayScene' });
  }

  player: Phaser.Physics.Arcade.Sprite;
  cursors: Phaser.Input.Keyboard.CursorKeys;
  platforms: Phaser.Physics.Arcade.StaticGroup;
  stars: Phaser.Physics.Arcade.Group;
  scoreText: Phaser.GameObjects.Text;
  score = 0;

  public create() {
    this.cursors = this.input.keyboard.createCursorKeys();
    this.add.image(0, 0, 'sky').setOrigin(0, 0);
    this.scoreText = this.add.text(16, 16, 'score: 0', {
      fontSize: '32px',
      fill: '#000',
    });

    this.platforms = this.physics.add.staticGroup();
    this.platforms
      .create(400, 568, 'ground')
      .setScale(2)
      .refreshBody();
    this.platforms.create(600, 400, 'ground');
    this.platforms.create(50, 250, 'ground');
    this.platforms.create(750, 220, 'ground');

    this.player = this.physics.add.sprite(100, 450, 'dude');
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

    this.stars = this.physics.add.group({
      key: 'star',
      repeat: 11,
      setXY: { x: 12, y: 0, stepX: 70 },
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
    }

    if (this.player.body.position.x === 0 && this.player.body.velocity.x < 0) {
      this.player.body.position.x =
        this.sys.game.canvas.width - this.player.body.width;
    }
  }

  private collectStar(
    player: Phaser.Physics.Arcade.Sprite,
    star: Phaser.Physics.Arcade.Sprite
  ) {
    star.disableBody(true, true);

    this.score += 10;
    this.scoreText.setText('Score: ' + this.score);
  }
}
