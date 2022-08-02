import { Member } from './helpers/types';
import App from './classes/App';
import UI from './classes/UI';
import Player from './classes/Player';
import Block from './classes/Block';

const form = <HTMLFormElement> document.querySelector('#formData');
let player: Member;

// init app
document.addEventListener('DOMContentLoaded', () => {
  App.init();

  document.querySelectorAll('.game-block').forEach(block => {
    block.addEventListener('mouseleave', (e) => Block.flip(e));
  });
});

// init player
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const input = <HTMLInputElement>form.getElementsByClassName('player-name')[0];

  if(input.value) {
    // App.fireSound('welcome');

    player = new Player(input.value);
    player.displayInfo();

    UI.hideModal('welcome');
  }
});


