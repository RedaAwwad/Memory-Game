import { Member } from './helpers/types';
import App from './classes/App';
import UI from './classes/UI';
import Player from './classes/Player';

const form = <HTMLFormElement> document.querySelector('#formData');
let player: Member;

// init app
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

// init player
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const input = form.getElementsByClassName('player-name')[0] as HTMLInputElement;

  if(input.value) {
    player = new Player(input.value);

    player.displayInfo();

    UI.hideModal('welcome');

    App.fireSound('welcome');

  }
});

if(document.querySelector('.game-block')) {
  const blockEle = <HTMLElement> document.querySelector('.game-block');
  
  blockEle.addEventListener('mouseenter', (e) => {
    console.log(blockEle.getAttribute('data-id'));
    
  });
}
