import { block } from './../helpers/types';
import storedData from "../helpers/data";
import Block from "./Block";

const container = <HTMLElement>document.querySelector('#blockContainer');

export default class UI {

  private static getRandomIndex(max: number): number {
    return Math.floor(Math.random() * (max + 1));
  }

  private static orderDataRandomly(): block[] {
    const orderedData: block[] = [];
    const includedData: number[] = []; 
    
    while (orderedData.length < 20) {
      let randomIndex = UI.getRandomIndex(storedData.length);
      
      if (!includedData.includes(randomIndex)) {
        let blockData = storedData.find(b => b.id === randomIndex);

        if(blockData) {
          orderedData.push(blockData);
          includedData.push(blockData.id);
        }
      }
    }

    return orderedData;
  }

  static displayBlocks(): void {
    const blocksData = UI.orderDataRandomly();
    
    blocksData.forEach(block => {
      let blockEle = Block.create(block);
      container.appendChild(blockEle);
    });
  }

  static resetBlocks(): void {
    if(container.childNodes.length)
      container.innerHTML = '';

    UI.displayBlocks();
  }

  static showModal(id: string): void {
    const modal = <HTMLElement>document.querySelector(`#${id}Modal`);
    modal.style.display = 'flex';
  }
  
  static hideModal(id: string): void {
    const modal = <HTMLElement>document.querySelector(`#${id}Modal`);
    modal.style.display = 'none';
  }


}