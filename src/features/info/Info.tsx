import { useEffect, useState } from "react";
import { IoInformationCircle } from "react-icons/io5";
import "./info.css";

export function Info() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const onEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            window.addEventListener("keydown", onEscape);
        }

        return () => window.removeEventListener("keydown", onEscape);
    }, [isOpen]);

    return (
        <section className="info-root">
            <button
                type="button"
                className="info-button cursor-pointer"
                onClick={() => setIsOpen(true)}
            >
                <IoInformationCircle size={20} />
                <span>Informações</span>
            </button>

            {isOpen && (
                <div className="info-overlay">
                    <button
                        aria-label="Fechar informacoes"
                        className="info-backdrop"
                        onClick={() => setIsOpen(false)}
                    />

                    <section className="info-card">
                        <div className="info-card-header">
                            <h1>Sobre o Site</h1>
                            <button
                                type="button"
                                className="info-close cursor-pointer"
                                onClick={() => setIsOpen(false)}
                                aria-label="Fechar card de informacoes"
                            >
                                x
                            </button>
                        </div>

                        <div className="info-list">
                            <p>Os itens podem ser arrastados por toda a tela.</p>
                            <p>O Sobre Mim pode ser fechado com a tecla Esc.</p>
                            <p>Esta tela tambem pode ser fechada com Esc.</p>
                            <p>Ao recarregar a pagina, os itens sao resetados.</p>
                            <p>Algumas imagens podem demorar para carregar.</p>
                        </div>
                    </section>
                </div>
            )}
        </section>
    );
}