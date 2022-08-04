import { playerInterface } from './../helpers/types';
import Game from "./Game";
import UI from './UI';

const nameContainer = <HTMLElement> document.querySelector('#playerName');
const scoreContainer = <HTMLElement> document.querySelector('#playerScore');
const retriesContainer = <HTMLElement> document.querySelector('#playerRetries');

export default class Player implements playerInterface {
  private tries: number;
  private score: number;

  constructor(private name: string) {
    this.tries = 0;
    this.score = 0;
  }

  displayInfo(): void {
    nameContainer.textContent = this.name;
    scoreContainer.innerHTML = `
      <span>Score: </span>
      <span class="text-brand">${this.score}</span> /
      <span>10</span>
    `;
    retriesContainer.innerHTML = `
      <span>Retries: </span>
      <span class="text-brand">${this.tries}</span> /
      <span>${Game.maxRetries}</span>
    `;
  }

  resetInfo(): void {
    this.tries = 0;
    this.score = 0;

    this.displayInfo();
  }

  checkRetries(): boolean {
    let isOver = Game.maxRetries === this.tries;

    if(isOver)
      Game.over();
    
    return isOver;
  }

  updateRetries(): void {
    this.tries++;
    this.displayInfo();
  }

  updateScore(): void {
    if(this.score < 10) {
      this.score++;
      this.displayInfo();
    }

    if(this.score === 10)
      Game.won();
  }
}