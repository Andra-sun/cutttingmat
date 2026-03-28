import { useState } from "react";
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
            className="absolute bottom-0 right-0 m-3 sm:left-5/6 left-2/4 z-50 bg-orange-400 p-4 rounded-lg border-b-9 border-r-8 rounded-b-sm border-orange-700 text-white font-black text-lg hover:border-b-5 hover:border-r-4 hover:bg-orange-500 hover:translate-y-2 active:translate-y-3 transition-all duration-150 shadow-md"
        >
            Sobre mim
        </button>
    );
}

export function About() {
    const [mostrar, setMostrar] = useState<boolean>(false);

    return (
        <section className="z-10 overflow-hidden">
            <Button onClick={() => setMostrar(!mostrar)} />

            {mostrar && (
                <div className="fixed inset-0 flex items-center justify-center z-40 pointer-events-none">
                    <div className="relative w-[min(400px,99vw)] h-[min(696px,85vh)] sm:w-125 sm:h-180 pointer-events-auto">
                        <img
                            src={clipTop}
                            alt="Clipboard"
                            loading="lazy"
                            className="absolute inset-0 w-full h-full rotate-6 z-20"
                        />
                        <div
                            className="absolute z-10 bg-amber-500 overflow-auto rotate-6 shadow p-4 text-left"
                            style={{
                                top: "calc(26 / 174 * 100%)",
                                left: "calc(15 / 140 * 100%)",
                                width: "calc(110 / 140 * 100%)",
                                minHeight: "calc(134 / 174 * 100%)",
                                paddingTop: "calc(10 / 174 * 100%)",
                            }}
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <img
                                    src={me}
                                    alt="me"
                                    loading="lazy"
                                    className="w-2/4 shadow-lg rounded-ee-full shrink-0"
                                />
                                <h1 className="text-2xl sm:text-4xl font-bold">
                                    Olá, tudo bem?
                                </h1>
                            </div>

                            <p className="text-sm sm:text-base">
                                Me chamo <i>Camile</i> porém na internet sou
                                conhecida como <b>ANDRA</b>.
                            </p>
                            <p className="text-sm sm:text-base">
                                Estudo programação des do ensino médio e agora
                                estou me graduando em Análise e Desenvolvimento
                                de sistemas.
                            </p>
                            <p className="text-sm sm:text-base">
                                Des do inicio o que eu mais gosto de fazer é o{" "}
                                <b>FRONTEND</b>.
                            </p>
                            <p className="text-sm sm:text-base">
                                Adoro me desafiar e fazer/ aprender coisas
                                novas.
                            </p>
                            <hr className="mt-10 mb-5 border-dashed" />
                            <span >
                                Dê uma explorada pelo meu protifolio para saber
                                mais.
                            </span>
                        </div>
                        <img
                            src={clip}
                            alt="Clipboard"
                            loading="lazy"
                            className="absolute inset-0 w-full h-full rotate-6 z-0"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
