import Game from "./Game";
import Player from './Player';

export default class Block {

  static create(blockInfo: { id: number; icon: string; }): HTMLElement {
    const div = document.createElement('div');
    div.className = 'game-block';
    div.setAttribute('data-id', JSON.stringify(blockInfo.id));
    div.setAttribute('data-name', blockInfo.icon);

    div.innerHTML = `
      <div class="game-block__front"></div>
      <div class="game-block__back">
        <img class="game-block__img" src="./assets/icons/${blockInfo.icon}.svg" alt="${blockInfo.icon}">
      </div>
    `;

    return div;
  }

  static flip(ele: HTMLElement, player: Player): void {

    let flipped: boolean = ele.classList.contains('flipped');
    let id: number = parseInt(ele.dataset.id);
    let name: string = ele.dataset.name;
    let prevBlock = Game.prevBlock;

    if (flipped || Game.isGameBlocked) return;

    ele.classList.add('flipped');
    Game.isGameBlocked = true;

    // first block checked
    if (!prevBlock) {
      Game.prevBlock = { id, icon: name };
      Game.isGameBlocked = false;
      return;
    }

    // blocks checking faild
    if (name !== prevBlock.icon) {
      Game.fail(player, ele);
      return;
    }

    // blocks checking successed
    Game.success(player);
  }
};