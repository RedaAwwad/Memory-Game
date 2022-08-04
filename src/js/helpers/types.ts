export type blockType = {
  id: number;
  icon: string
}

export interface playerInterface {
  displayInfo(): void;
  resetInfo(): void;
  checkRetries(): void;
  updateRetries(): void;
  updateScore(): void;
}
