import { create } from "zustand";

type CardType = {
  id: string;
  x: number;
  y: number;
};

type BoardStore = {
  cards: CardType[];
  addCard: () => void;
  moveCard: (id: string, x: number, y: number) => void;
};

export const useBoardStore = create<BoardStore>((set, get) => ({
  cards: [
    { id: "1", x: 100, y: 100 },
    { id: "2", x: 300, y: 200 },
    { id: "3", x: 500, y: 300 },
  ],

  addCard: () => {
    const id = String(Date.now());
    set((state) => ({
      cards: [
        ...state.cards,
        { id, x: 200, y: 200 },
      ],
    }));
  },

  moveCard: (id, x, y) =>
    set((state) => ({
      cards: state.cards.map((c) =>
        c.id === id ? { ...c, x, y } : c
      ),
    })),
}));