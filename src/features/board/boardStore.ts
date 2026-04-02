import { create } from "zustand";
import type { BoardStore } from "./cardProp";

const linguagensEFrameworks = [
  { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "Javascript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "Typescript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "Markdown", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/markdown/markdown-original.svg" },
  { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Django", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
  { name: "Tailwind", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Vite", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
];

const ferramentas = [
  { name: "VSCode", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
  { name: "Github", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "Arduino", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg" },
  { name: "Figma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "Godot", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/godot/godot-original.svg" },
  { name: "Linux", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
  { name: "Eclipse", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg" },
  { name: "Cisco PT", image: "https://hurbad.com/wp-content/uploads/2021/12/Cisco-Packet-Tracer.png" },
  { name: "Gimp", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gimp/gimp-original.svg" },
  { name: "Photoshop", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" },
];

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
  ],
  addCard: () => {
    const id = String(Date.now());
    set((state) => ({
      cards: [...state.cards, { id, x: 200, y: 200, component: "Contact" }],
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
        (c) => c.component !== "TechBox" && c.component !== "TechItem"
      ),
    })),
}));