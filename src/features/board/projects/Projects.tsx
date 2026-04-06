import { FaArrowDownLong } from "react-icons/fa6";
import note from "../../../assets/notea.png";
import { useBoardStore } from "../boardStore";
import "./projects.css"
import { useTranslation } from "../../../hooks/useTranslation";

export function Projects() {
    const addProjectCards = useBoardStore((s) => s.addProjectCards);
    const removeProjectCards = useBoardStore((s) => s.removeProjectCards);
    const cards = useBoardStore((s) => s.cards);
    const {t} = useTranslation();

    const isOpen = cards.some((c) => c.component === "ProjectFolder");

    const handleClick = () => {
        if (isOpen) {
            removeProjectCards();
        } else {
            addProjectCards();
        }
    };

    return (
        <section  className="note  rotate-17 relative transition-all duration-500 ease-out hover:-translate-y-2 hover:rotate-15">
            <h3 className="absolute self-center text-center w-full h-full text-4xl pt-17 z-40 project-title">{t("projetos.projetos")}</h3>

            <button
                type="button"
                onClick={handleClick}
                className="absolute mt-43 z-40 left-1/2 -translate-x-1/2 flex flex-row items-center gap-2 justify-center project-more px-3 py-1.5 rounded-full"
            >
                <FaArrowDownLong
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
                <span className="text-base">{isOpen ? t("linguagens.fechar") : t("linguagens.ver")}</span>
                <FaArrowDownLong
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>

            <img
                src={note}
                alt="imagem de uma nota adesiva"
                draggable="false"
                className="w-67 note"
            />
        </section>
    );
}
