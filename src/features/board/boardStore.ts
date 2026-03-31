import { create } from "zustand";
import type { BoardStore } from "./cardProp";

export const useBoardStore = create<BoardStore>((set) => ({
  cards: [
    { id: "1", x: 1100, y: 80, component: "Contact" },
    { id: "2", x: 100, y: 100, component: "Tech" },
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
  addTechCards: (techs) => {
    const newCards = techs.map((tech: { name: string; image: string }, i: number) => ({
      id: `tech-${tech.name}`,
      x: 150 + (i % 5) * 130,
      y: 100 + Math.floor(i / 5) * 130,
      component: "TechItem",
      techData: tech,
    }));
    set((state) => ({ cards: [...state.cards, ...newCards] }));
  },
  removeTechCards: () =>
    set((state) => ({
      cards: state.cards.filter((c) => c.component !== "TechItem"),
    })),
}));