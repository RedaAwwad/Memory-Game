export type block = {
  id: number,
  icon: string
}

export interface Member {

  displayInfo(): void;

  resetInfo(): void;

  updateRetries(): void;

  updateScore(): void;
}