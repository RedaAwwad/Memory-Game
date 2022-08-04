import { blockType } from '../helpers/types';
import Player from './Player';
import UI from './UI';

export default class Game {
  static prevBlock: blockType | null;
  static isGameBlocked: boolean = false;
  static maxRetries: number = 15;


  static init(): void {
    UI.displayBlocks();
  }

  static fireSound(soundType: string): void {
    const audio = new Audio(`./assets/sounds/${soundType}.mp3`);
    audio.volume = 0.6;
    audio.play();
  }

  static fail(player: Player, ele: HTMLElement): void {
    const flippedBlocks = document.querySelectorAll(`[data-name="${Game.prevBlock.icon}"]`);
        
    Game.prevBlock = null;

    player.updateRetries();

    if(player.checkRetries()) return;

    setTimeout(() => {
      ele.classList.remove('flipped');
      flippedBlocks.forEach(ele => ele.classList.remove('flipped'));
      Game.isGameBlocked = false;
      Game.fireSound('fail');
    }, 800);
  }

  static success(player: Player): void {
    Game.fireSound('success');
    Game.prevBlock = null;
    Game.isGameBlocked = false;

    player.updateScore();
  }

  static over(): void {
    UI.showModal('fail');
    Game.fireSound('over');
    document.querySelector('body').scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  static won():void {
    UI.showModal('success');
    Game.fireSound('won');
    document.querySelector('body').scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  static restart(player: Player): void {
    Game.prevBlock = null;
    Game.isGameBlocked = false;
    player.resetInfo();
    UI.resetBlocks();
    UI.hideModal(null);
  }
}