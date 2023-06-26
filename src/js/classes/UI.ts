import { blockType } from '../../../types';
import storedData from "../helpers/data";
import Block from "./Block";
import Game from "./Game";
import { Player } from '../../../types';

const nameContainer = <HTMLElement>document.querySelector('#playerName');
const scoreContainer = <HTMLElement>document.querySelector('#playerScore');
const retriesContainer = <HTMLElement>document.querySelector('#playerRetries');

export default class UI {

  private static getRandomIndex(max: number): number {
    return Math.floor(Math.random() * (max + 1));
  }

  private static orderDataRandomly(): blockType[] {
    const orderedData: blockType[] = [];
    const includedData: number[] = [];

    while (orderedData.length < 20) {
      let randomIndex = UI.getRandomIndex(storedData.length);

      if (!includedData.includes(randomIndex)) {
        let blockData = storedData.find(b => b.id === randomIndex);

        if (blockData) {
          orderedData.push(blockData);
          includedData.push(blockData.id);
        }
      }
    }

    return orderedData;
  }

  static updatePlayerInfo(user: Player): void {
    nameContainer.textContent = user.name;
    scoreContainer.innerHTML = `
      <span>Score: </span>
      <span class="text-brand">${user.score}</span> /
      <span>10</span>
    `;
    retriesContainer.innerHTML = `
      <span>Retries: </span>
      <span class="text-brand">${user.tries}</span> /
      <span>${Game.maxRetries}</span>
    `;
  }

  static displayBlocks(): void {
    const blocksData = UI.orderDataRandomly();

    blocksData.forEach(block => {
      let blockEle = Block.create(block);
      document.querySelector('#blockContainer').appendChild(blockEle);
    });
  }

  static resetBlocks(): void {
    const blocks = Array.from(document.querySelectorAll('.game-block'));
    let orders: number[] = Array.from({ length: 20 }, (v, i) => i + 1);
    orders = orders.sort((a, b) => 0.5 - Math.random());

    blocks.forEach((block, index) => {
      const ele = <HTMLElement>block;
      if (ele.classList.contains('flipped'))
        ele.classList.remove('flipped');

      ele.style.order = `${orders[index]}`;
    });
  }

  static showModal(id: string): void {
    const modal = <HTMLElement>document.querySelector(`#${id}Modal`);
    if (!modal) return;

    modal.classList.remove('hidden');
    document.querySelector('body').style.overflow = 'hidden';
  }

  static hideModal(id: string | null): void {
    if (id) {
      const modal = <HTMLElement>document.querySelector(`#${id}Modal`);
      if (!modal) return;

      modal.classList.add('hidden');
    } else {
      // hide any active modal
      document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.add('hidden');
      });
    }

    document.querySelector('body').style.overflow = 'auto';
  }

}