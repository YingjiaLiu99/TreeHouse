import Phaser, { Physics } from 'phaser';
import './style.css';

const sizes = {
  width: 1920,
  height: 1080
}

class GameScene extends Phaser.Scene {
  constructor() {
    super("scene-game");
  }

  preload() {
    this.load.image("bg", "/assets/diningRoom.jpg");
  }

  create() {    
    let background = this.add.image(0, 0, "bg").setOrigin(0, 0);    
    background.setDisplaySize(sizes.width, sizes.height);
  }

  update() {    
  }
}

const config = {
  type: Phaser.WEBGL,
  width: sizes.width,
  height: sizes.height,
  canvas: gameCanvas,
  physics: {},
  scene: [GameScene]  
}

const game = new Phaser.Game(config);