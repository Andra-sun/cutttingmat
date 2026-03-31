import { FaArrowDownLong } from "react-icons/fa6";
import note from "../../../assets/notea.png";
import { useBoardStore } from "../boardStore";

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
        <section className="transition-all duration-500 ease-out hover:-translate-y-2 hover:rotate-1 cursor-pointer">
            <h3 className="absolute mt-13 text-3xl font-bold -rotate-3">
                Linguagens e Frameworks{" "}
                <div onClick={handleClick} className="flex flex-row mt-15 w-full items-center gap-2 justify-center text-purple-400">
                    <FaArrowDownLong className=" group-hover:animate-bounce" />
                    <span className="text-lg font-regular">{isOpen ? "Fechar" : "Veja mais"}</span>
                    <FaArrowDownLong className="group-hover:animate-bounce" />
                </div>
            </h3>
            <img
                src={note}
                alt="imagem de uma nota adesiva"
                draggable="false"
                className="w-67"
            />
        </section>
    );
}
