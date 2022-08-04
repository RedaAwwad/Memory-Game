import App from './classes/Game';
import UI from './classes/UI';
import Player from './classes/Player';
import Block from './classes/Block';
import Game from './classes/Game';

let player: Player;

// init app
document.addEventListener('DOMContentLoaded', () => {
  App.init();

  // check blocks
  document.querySelectorAll('.game-block').forEach(block => {
    block.addEventListener('click', () => Block.flip(<HTMLElement>block, player));
  });

  // try again
  document.querySelector('#try-again').addEventListener('click', () => {
    Game.restart(player);
  });

  // play again
  document.querySelector('#play-again').addEventListener('click', () => {
    Game.restart(player);
  });
});

// init player
const form = <HTMLFormElement> document.querySelector('#formData');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const input = <HTMLInputElement>form.getElementsByClassName('player-name')[0];

  if(input.value) {
    player = new Player(input.value);
    player.displayInfo();

    UI.hideModal('welcome');
  }
});


