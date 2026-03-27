import { useState } from "react";
import "./about.css";
import clip from "../assets/clipboard.png";
import clipTop from "../assets/clipboardT.png";

type ButtonProps = {
    onClick: () => void;
};

function Button({ onClick }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className="absolute bottom-0 right-0 m-3 md:left-5/6 left-2/4 z-50 bg-orange-400 p-4 rounded-lg border-b-9 border-r-8 rounded-b-sm border-orange-700 text-white font-black text-lg hover:border-b-5 hover:border-r-4 hover:bg-orange-500 hover:translate-y-2 active:translate-y-3 transition-all duration-150 shadow-md"
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
                    <div className="relative w-[min(400px,99vw)] h-[min(696px,85vh)] md:w-125 md:h-180 pointer-events-auto">
                        <img
                            src={clipTop}
                            alt="Clipboard"
                            className="absolute inset-0 w-full h-full rotate-6 z-20"
                        />
                        <div
                            className="absolute z-10 bg-amber-500 overflow-auto rotate-6 shadow p-4"
                            style={{
                                top: "calc(26 / 174 * 100%)",
                                left: "calc(15 / 140 * 100%)",
                                width: "calc(110 / 140 * 100%)",
                                minHeight: "calc(134 / 174 * 100%)",
                                paddingTop: "calc(10 / 174 * 100%)",
                            }}
                        >
                            <h1 className="text-sm sm:text-base">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Expedita, at. Facere neque
                                nihil voluptatibus impedit molestias iusto ex
                                ducimus eos quidem sunt numquam deleniti,
                                incidunt, eligendi temporibus assumenda vitae.
                                In.
                            </h1>
                        </div>
                        <img
                            src={clip}
                            alt="Clipboard"
                            className="absolute inset-0 w-full h-full rotate-6 z-0"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
