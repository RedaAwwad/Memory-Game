
export default class Block {
  
  static create (blockInfo: {id: number; icon: string}): HTMLElement {
    const div = document.createElement('div');
    div.className = 'game-block';
    div.setAttribute('data-id', JSON.stringify(blockInfo.id));

    div.innerHTML = `
      <div class="game-block__front"></div>
      <div class="game-block__back">
        <img class="game-block__img" src="./assets/icons/${blockInfo.icon}.svg" alt="${blockInfo.icon}">
      </div>
    `;

    return div;
  }
};