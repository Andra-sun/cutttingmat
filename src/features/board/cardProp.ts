export type CardType = {
  id: string;
  x: number;
  y: number;
  component: string;
  techData?: {name: string; image: string};
};

export type BoardStore = {
  cards: CardType[];
  addCard: () => void;
  moveCard: (id: string, x: number, y: number) => void;
  addTechCards: (techs: {name: string; image: string}[]) => void;
  removeTechCards: () => void;
};