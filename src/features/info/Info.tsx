import { useEffect, useState } from "react";
import { IoInformationCircle } from "react-icons/io5";
import "./info.css";
import { useTranslation } from "../../hooks/useTranslation";

export function Info() {
    const [isOpen, setIsOpen] = useState(false);
    const {t} = useTranslation();

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
                <span>{t("info.button")}</span>
            </button>

            {isOpen && (
                <div className="info-overlay">
                    <button
                        aria-label={t("info.close")}
                        className="info-backdrop"
                        onClick={() => setIsOpen(false)}
                    />

                    <section className="info-card">
                        <div className="info-card-header">
                            <h1>{t("info.title")}</h1>
                            <button
                                type="button"
                                className="info-close cursor-pointer"
                                onClick={() => setIsOpen(false)}
                                aria-label={t("info.close")}
                            >
                                x
                            </button>
                        </div>

                        <div className="info-list">
                            <p>{t("info.items.drag")}</p>
                            <p>{t("info.items.aboutEsc")}</p>
                            <p>{t("info.items.modalEsc")}</p>
                            <p>{t("info.items.reset")}</p>
                            <p>{t("info.items.loading")}</p>
                        </div>
                    </section>
                </div>
            )}
        </section>
    );
}
