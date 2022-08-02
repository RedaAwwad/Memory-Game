export type block = {
  id: number;
  icon: string
}

export interface Member {
  displayInfo(): void;
  resetInfo(): void;
  updateRetries(): void;
  updateScore(): void;
}

export type storage = {
  player: {
    name: string;
    score: number;
    retries: number;
  }
  blocks: [block]
} 