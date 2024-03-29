export type Block = {
  id: number;
  icon: string;
};

export interface Player {
  name: string;
  tries: number;
  score: number;
}
