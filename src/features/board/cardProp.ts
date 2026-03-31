export type CardType = {
  id: string;
  x: number;
  y: number;
  component: string;
};

export type BoardStore = {
  cards: CardType[];
  addCard: () => void;
  moveCard: (id: string, x: number, y: number) => void;
};