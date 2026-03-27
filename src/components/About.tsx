import { useState } from "react";
import "./about.css";

type ButtonProps = {
    onClick: () => void;
};

function Button({ onClick }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className="absolute top-4/5 left-5/6 bg-orange-400 p-4 rounded-lg border-b-9 border-r-8 rounded-b-sm border-orange-700 text-white font-black text-lg hover:border-b-5 hover:border-r-4 hover:bg-orange-500 hover:translate-y-2 active:translate-y-3 transition-all duration-150 shadow-md"
        >
            Sobre mim
        </button>
    );
}

export function About() {
    const [mostrar, setMostrar] = useState<boolean>(false);

    return (
        <section className="z-10">
            <Button onClick={() => setMostrar(!mostrar)} />

            {mostrar && <h1>botao clicado</h1>}
        </section>
    );
}
