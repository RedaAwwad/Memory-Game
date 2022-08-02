import App from "./App";

export default class Block {
  
  static create (blockInfo: {id: number; icon: string}): HTMLElement {
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

  static flip(event: Event): void {
    let ele = <HTMLElement> event.target;
    let flipped = ele.classList.contains('flip');
    let id = parseInt(ele.dataset.id);
    let name = ele.dataset.name;
    let currentBlock = document.querySelector(`[data-id="${id}"]`);
    let prevBlock = App.prevBlock;

    if(flipped || (prevBlock.id == id)) return;

    if(prevBlock) {
      if(name !== prevBlock.icon) {
        App.prevBlock = null;
        App.fireSound('fail');

        currentBlock.classList.remove('flip');
        document.querySelector(`[data-name="${prevBlock.icon}"]`)
        .classList.remove('flip');

        return;
      }

      App.fireSound('success');
      App.prevBlock = null;
      currentBlock.classList.add('flip');
      return
    }
    
    currentBlock.classList.add('flip');
    App.prevBlock = { id, icon: name };
    // App.fireSound('welcome');
  }
};