import { FaArrowDownLong } from "react-icons/fa6";
import note from "../../../assets/notea.png";
import { useBoardStore } from "../boardStore";
import "./tech.css";

export function Tech() {
    const addTechCards = useBoardStore((s) => s.addTechCards);
    const removeTechCards = useBoardStore((s) => s.removeTechCards);
    const cards = useBoardStore((s) => s.cards);

    const isOpen = cards.some((c) => c.component === "TechBox");

    const handleClick = () => {
        if (isOpen) {
            removeTechCards();
        } else {
            addTechCards();
        }
    };

    return (
        <section className="tech-note relative transition-all duration-500 ease-out hover:-translate-y-2 hover:rotate-1">
            <h3 className="absolute mt-11 px-6 text-3xl -rotate-3 tech-title">
                <span className="tech-title-main">Linguagens</span>{" "}
                <span className="tech-title-script">e Frameworks</span>{" "}
            </h3>
                <span className="text-sm text-gray-700 pt-20 absolute mt-11  -rotate-3 ">*e ferramentas</span>

            <button
                type="button"
                onClick={handleClick}
                className="absolute mt-43 left-1/2 -rotate-3  -translate-x-1/2 flex flex-row items-center gap-2 justify-center tech-more px-3 py-1.5 rounded-full"
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