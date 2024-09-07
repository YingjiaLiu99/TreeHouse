import Phaser from 'phaser';
import './style.css';

const sizes = {
  width: 1920,
  height: 1080
}

const config = {
  type: Phaser.WEBGL,
  width: sizes.width,
  height: sizes.height,
  canvas: gameCanvas
}

const game = new Phaser.Game(config);