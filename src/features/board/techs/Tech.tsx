import { FaArrowDownLong } from "react-icons/fa6";
import note from "../../../assets/notea.png";
import { useBoardStore } from "../boardStore";
import "./tech.css"

const techCards = {
    linguagem: [
        {
            name: "HTML",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        },
        {
            name: "CSS",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        },
        {
            name: "Javascript",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        },
        {
            name: "Next.js",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        },
        {
            name: "React",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        },
        {
            name: "Django",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
        },
        {
            name: "Python",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        },
        {
            name: "Java",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        },
        {
            name: "Typescript",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        },
        {
            name: "Markdown",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/markdown/markdown-original.svg",
        },
        {
            name: "Tailwind",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        },
    ],
    ferramenta: [
        {
            name: "VSCode",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
        },
        {
            name: "Github",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        },
        {
            name: "Git",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        },
        {
            name: "Arduino",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg",
        },
        {
            name: "Figma",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
        },
        {
            name: "Godot",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/godot/godot-original.svg",
        },
        {
            name: "Linux",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
        },
        {
            name: "Eclipse",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg",
        },
        {
            name: "Cisco PT",
            image: "https://hurbad.com/wp-content/uploads/2021/12/Cisco-Packet-Tracer.png",
        },
        {
            name: "Gimp",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gimp/gimp-original.svg",
        },
    ],
};

export function Tech() {
    const addTechCards = useBoardStore((s) => s.addTechCards);
    const removeTechCards = useBoardStore((s) => s.removeTechCards);
    const cards = useBoardStore((s) => s.cards);

    const isOpen = cards.some((c) => c.component === "TechItem");

    const handleClick = () => {
        if (isOpen) {
            removeTechCards();
        } else {
            addTechCards([...techCards.linguagem, ...techCards.ferramenta]);
        }
    };

    return (
        <section className="tech-note relative transition-all duration-500 ease-out hover:-translate-y-2 hover:rotate-1">
            <h3 className="absolute mt-11 px-6 text-3xl -rotate-3 tech-title">
                <span className="tech-title-main">Linguagens</span>{" "}
                <span className="tech-title-script">e Frameworks</span>
            </h3>

            <button
                type="button"
                onClick={handleClick}
                className="absolute mt-40 left-1/2 -translate-x-1/2 flex flex-row items-center gap-2 justify-center tech-more px-3 py-1.5 rounded-full"
            >
                <FaArrowDownLong
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
                <span className="text-base">{isOpen ? "Fechar" : "Veja"}</span>
                <FaArrowDownLong
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>

            <img
                src={note}
                alt="imagem de uma nota adesiva"
                draggable="false"
                className="w-67"
            />
        </section>
    );
}
