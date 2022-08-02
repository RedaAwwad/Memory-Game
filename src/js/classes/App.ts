import { Member, block } from './../helpers/types';
import UI from './UI';

export default class App {
  static gameOverRetries: number = 7;
  static prevBlock: block | null;

  static init() {
    UI.displayBlocks();
  }

  static fireSound(soundType: string): void {
    const audio = new Audio(`./assets/sounds/${soundType}.mp3`);
    audio.play();
  }

  static gameOver(): void {
    App.fireSound('over');

  }

  static playerWon():void {
    App.fireSound('won');

  }

  static restartGame(player: Member): void {
    App.fireSound('welcome');
    UI.resetBlocks();
    player.resetInfo();
  }
}