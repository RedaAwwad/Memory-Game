import { Game, UI, Player, Block } from './classes';
const form = document.querySelector('#formData') as HTMLFormElement;
const tryButton = document.querySelector('#try-again') as HTMLButtonElement;
const playButton = document.querySelector('#play-again') as HTMLButtonElement;
let player: Player = null;

function init() {
  Game.init();

  // check blocks
  document.querySelectorAll('.game-block').forEach(block => {
    block.addEventListener('click', () => Block.flip(block as HTMLElement, player));
  });

  tryButton.addEventListener('click', () => Game.restart(player)); // try again
  playButton.addEventListener('click', () => Game.restart(player)); // play again
}

function submitPlayerName(e: Event) {
  e.preventDefault();

  const playerNameInput = form.getElementsByClassName('player-name')[0] as HTMLInputElement;

  if (playerNameInput.value) {
    player = new Player(playerNameInput.value);
    UI.updatePlayerInfo(player.getInfo());
    UI.hideModal('welcome');
  }
}

document.addEventListener('DOMContentLoaded', init); // Init Game
form.addEventListener('submit', submitPlayerName); // Init Player


