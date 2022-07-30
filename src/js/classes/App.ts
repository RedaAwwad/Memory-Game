import { Member } from './../helpers/types';
import UI from './UI';

export default class App {
  static gameOverRetries: number = 7;

  static init() {
    UI.displayBlocks();
  }

  static fireSound(soundType: string): void {
    const audio = new Audio(`./assets/sounds/${soundType}.mp3`);
    audio.play();
  }

  static gameOver(): void {

  }

  static playerWon():void {

  }

  static restartGame(player: Member): void {
    UI.resetBlocks();
    player.resetInfo();
  }
}