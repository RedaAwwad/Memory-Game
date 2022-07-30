import { Member } from "../helpers/types";
import App from "./App";

const nameContainer = <HTMLElement> document.querySelector('#playerName');
const scoreContainer = <HTMLElement> document.querySelector('#playerScore');
const retriesContainer = <HTMLElement> document.querySelector('#playerRetries');

export default class Player implements Member {
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
      <span>${App.gameOverRetries}</span>
    `;
  }

  resetInfo(): void {
    this.tries = 0;
    this.score = 0;

    this.displayInfo();
  }

  updateRetries(): void {
    
  }

  updateScore(): void {
    
  }
}