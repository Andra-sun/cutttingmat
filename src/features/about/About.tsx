import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./about.css";
import clip from "../../assets/clipboard.png";
import clipTop from "../../assets/clipboardT.png";
import me from "../../assets/me.jpg";

type ButtonProps = {
    onClick: () => void;
};

function Button({ onClick }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className="absolute bottom-0 right-0 m-3 sm:left-5/6 left-2/4 z-50 about-tab bg-orange-400 px-5 py-3 rounded-t-lg rounded-b-sm border-b-6 border-r-6 border-orange-700 text-white font-black text-base sm:text-lg hover:border-b-3 hover:border-r-3 hover:bg-orange-500 hover:translate-y-1 active:translate-y-2 transition-all duration-150 shadow-md"
        >
            Sobre mim
        </button>
    );
}

export function About() {
    const [mostrar, setMostrar] = useState<boolean>(false);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setMostrar(false);
            }
        };

        if (mostrar) {
            window.addEventListener("keydown", handleEscape);
        }

        return () => window.removeEventListener("keydown", handleEscape);
    }, [mostrar]);

    return (
        <section className="z-10 overflow-hidden">
            <Button onClick={() => setMostrar(!mostrar)} />

            {mostrar && (
                <div className="fixed inset-0 flex items-center justify-center z-40">
                    <button
                        aria-label="Fechar sobre mim"
                        onClick={() => setMostrar(false)}
                        className="absolute inset-0 bg-black/35 backdrop-blur-[2px]"
                    />

                    <motion.div
                        drag
                        dragMomentum={false}
                        initial={{ rotate: 7, y: -30, opacity: 0 }}
                        animate={{ rotate: 6, y: 0, opacity: 1 }}
                        onDragStart={() => setIsDragging(true)}
                        onDragEnd={() => setIsDragging(false)}
                        className="relative w-[min(400px,99vw)] h-[min(696px,85vh)] sm:w-125 sm:h-180 z-10 cursor-grab active:cursor-grabbing select-none"
                    >
                        <img
                            src={clipTop}
                            alt="Clipboard"
                            loading="lazy"
                            className="absolute inset-0 w-full h-full z-20 pointer-events-none"
                        />
                        <div
                            className="absolute z-10 about-note overflow-auto shadow p-4 text-left"
                            style={{
                                top: "calc(26 / 174 * 100%)",
                                left: "calc(15 / 140 * 100%)",
                                width: "calc(110 / 140 * 100%)",
                                minHeight: "calc(134 / 174 * 100%)",
                                paddingTop: "calc(10 / 174 * 100%)",
                            }}
                        >
                            <div className="about-grid absolute inset-0 opacity-40 pointer-events-none" />

                            <div className="flex items-center gap-3 mb-4 relative z-10">
                                <img
                                    src={me}
                                    alt="me"
                                    loading="lazy"
                                    draggable={false}
                                    className="w-2/4 shadow-lg rounded-sm shrink-0 about-photo"
                                />
                                <h1 className="about-title text-2xl sm:text-4xl font-bold">
                                    Olá, tudo bem?
                                </h1>
                            </div>

                            <p className="about-p text-sm sm:text-base relative z-10">
                                Me chamo <i>Camile</i> porém na internet sou
                                conhecida como <b>ANDRA</b>.
                            </p>
                            <p className="about-p text-sm sm:text-base relative z-10">
                                Estudo programação des do ensino médio e agora
                                estou me graduando em Análise e Desenvolvimento
                                de sistemas.
                            </p>
                            <p className="about-p text-sm sm:text-base relative z-10">
                                Des do inicio o que eu mais gosto de fazer é o{" "}
                                <b>FRONTEND</b>.
                            </p>
                            <p className="about-p text-sm sm:text-base relative z-10">
                                Adoro me desafiar e fazer/ aprender coisas
                                novas.
                            </p>
                            <hr className="mt-10 mb-5 border-dashed relative z-10" />
                            <span className="about-footnote relative z-10">
                                Dê uma explorada pelo meu protifolio para saber
                                mais.
                            </span>
                        </div>
                        <img
                            src={clip}
                            alt="Clipboard"
                            loading="lazy"
                            className="absolute inset-0 w-full h-full z-0 pointer-events-none"
                        />
                        <button
                            onClick={() => setMostrar(false)}
                            className="absolute -top-2 -right-2 z-30 bg-zinc-900 text-zinc-100 w-8 h-8 rounded-full border border-zinc-500 hover:bg-zinc-700 transition"
                            aria-label="Fechar card sobre mim"
                        >
                            X
                        </button>

                        <div className="absolute bottom-2 right-4 z-30 text-[10px] text-zinc-700 font-semibold">
                            {isDragging ? "arrastando..." : "arraste para mover"}
                        </div>
                    </motion.div>
                </div>
            )}
        </section>
    );
}
