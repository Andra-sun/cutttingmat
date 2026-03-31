import { create } from "zustand";
import type { BoardStore } from "./cardProp";

export const useBoardStore = create<BoardStore>((set, get) => ({
  cards: [
    { id: "1", x: 1100, y: 80, component: "Contact" },
    { id: "2", x: 100, y: 100, component: "Project"},

  ],

  addCard: () => {
    const id = String(Date.now());
    set((state) => ({
      cards: [
        ...state.cards,
        { id, x: 200, y: 200, component: "Contact" },
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