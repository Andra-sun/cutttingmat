export type CardType = {
    id: string;
    x: number;
    y: number;
    component: string;
    techData?: { name: string; image: string };
    techBoxData?: {
        title: string;
        techs: { name: string; image: string }[];
        variant: "box1" | "box2";
    };
    isDragging?: boolean;
    projectData?: {
        id: number;
        name: string;
        image: string;
        description: string;
        techs: string[];
        github: string;
        deploy: string;
    };
};

export type BoardStore = {
    cards: CardType[];
    addCard: () => void;
    moveCard: (id: string, x: number, y: number) => void;
    addTechCards: () => void;
    removeTechCards: () => void;
    addProjectCards: () => void;
    removeProjectCards: () => void;
};
