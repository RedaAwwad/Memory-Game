import { storage } from "../helpers/types";

export default class Store {
  static get isNewPlayer(): boolean {
    if (sessionStorage.getItem('memorygame'))
      return true;

    return false
  }

  static update(data: storage): void {
    sessionStorage.setItem('memorygame', JSON.stringify(data))
  }

  static get data(): storage | null {
    if(!Store.isNewPlayer) return null;

    let storageData = sessionStorage.getItem('memorygame');

    return JSON.parse(storageData || "") || null;
  }
}