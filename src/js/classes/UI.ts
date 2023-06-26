import Block from "./Block";
import Game from "./Game";
import { Player, Block as BlockType } from '../../types';
import { shuffleData } from '../helpers/utils';

const nameContainer = document.querySelector('#playerName') as HTMLElement;
const scoreContainer = document.querySelector('#playerScore') as HTMLElement;
const retriesContainer = document.querySelector('#playerRetries') as HTMLElement;

export default class UI {
  static updatePlayerInfo(player: Player): void {
    nameContainer.textContent = player.name;
    scoreContainer.innerHTML = `
      <span>Score: </span>
      <span class="text-brand">${player.score}</span> /
      <span>10</span>
    `;
    retriesContainer.innerHTML = `
      <span>Retries: </span>
      <span class="text-brand">${player.tries}</span> /
      <span>${Game.maxRetries}</span>
    `;
  }

  static displayBlocks(): void {
    const blocksData: BlockType[] = shuffleData();

    blocksData.forEach(block => {
      let blockEle = Block.create(block);
      document.querySelector('#blockContainer').appendChild(blockEle);
    });
  }

  static resetBlocks(): void {
    const blocks: HTMLElement[] = Array.from(document.querySelectorAll('.game-block'));
    let orders: number[] = Array.from({ length: 20 }, (v, i) => i + 1);
    orders = orders.sort((a, b) => 0.5 - Math.random());

    blocks.forEach((block: HTMLElement, index: number) => {
      if (block.classList.contains('flipped')) {
        block.classList.remove('flipped');
      }

      block.style.order = `${orders[index]}`;
    });
  }

  static showModal(id: string): void {
    const modal = document.querySelector(`#${id}Modal`) as HTMLElement;
    if (!modal) return;

    modal.classList.remove('hidden');
    document.querySelector('body').style.overflow = 'hidden';
  }

  static hideModal(id: string | null): void {
    if (id) {
      const modal = document.querySelector(`#${id}Modal`) as HTMLElement;
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