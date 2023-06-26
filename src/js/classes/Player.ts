import { Player as PlayerType } from '../../types';
import Game from "./Game";
import UI from './UI';

export default class Player {
  private tries: number;
  private score: number;

  constructor (private name: string) {
    this.tries = 0;
    this.score = 0;
  }

  getInfo(): PlayerType {
    return {
      name: this.name,
      tries: this.tries,
      score: this.score,
    };
  }

  resetInfo(): void {
    this.tries = 0;
    this.score = 0;

    UI.updatePlayerInfo(this.getInfo());
  }

  checkRetries(): boolean {
    let isOver = Game.maxRetries === this.tries;

    if (isOver)
      Game.over();

    return isOver;
  }

  updateRetries(): void {
    this.tries++;
    UI.updatePlayerInfo(this.getInfo());
  }

  updateScore(): void {
    if (this.score < 10) {
      this.score++;
      UI.updatePlayerInfo(this.getInfo());
    }

    if (this.score === 10)
      Game.won();
  }
}