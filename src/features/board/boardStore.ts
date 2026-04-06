import { create } from "zustand";
import type { BoardStore } from "./cardProp";
import { projects } from "../../data/projects";
import { ferramentas, linguagensEFrameworks } from "../../data/techs";

const getTechBoxPositions = () => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
        return {
            box1: { x: 20, y: 30 },
            box2: { x: 20, y: 350 },
        };
    }

    return {
        box1: { x: 120, y: 30 },
        box2: { x: 780, y: 100 },
    };
};

export const useBoardStore = create<BoardStore>((set) => ({
    cards: [
        { id: "1", x: 1100, y: 80, component: "Contact" },
        { id: "2", x: 100, y: 100, component: "Tech" },
        { id: "3", x: 170, y: 390, component: "Projects" },
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
            cards: state.cards.map((c) => (c.id === id ? { ...c, x, y } : c)),
        })),
    addTechCards: () => {
        const positions = getTechBoxPositions();
        set((state) => ({
            cards: [
                ...state.cards,
                {
                    id: "techbox-linguagens",
                    x: positions.box1.x,
                    y: positions.box1.y,
                    component: "TechBox",
                    techBoxData: {
                        title: "Linguagens & Frameworks",
                        techs: linguagensEFrameworks,
                        variant: "box1",
                    },
                },
                {
                    id: "techbox-ferramentas",
                    x: positions.box2.x,
                    y: positions.box2.y,
                    component: "TechBox",
                    techBoxData: {
                        title: "Ferramentas",
                        techs: ferramentas,
                        variant: "box2",
                    },
                },
            ],
        }));
    },
    removeTechCards: () =>
        set((state) => ({
            cards: state.cards.filter(
                (c) => c.component !== "TechBox" && c.component !== "TechItem",
            ),
        })),

    addProjectCards: () =>
        set((state) => ({
            cards: [
                ...state.cards,
                ...projects.map((project, index) => ({
                    id: `project-${project.id}`,
                    x: 500 + index * 40,
                    y: 200 + index * 40,
                    component: "ProjectFolder",
                    projectData: project,
                })),
            ],
        })),
    removeProjectCards: () =>
        set((state) => ({
            cards: state.cards.filter((c) => c.component !== "ProjectFolder"),
        })),
}));
