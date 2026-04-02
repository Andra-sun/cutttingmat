import paper from "../../../assets/contatoborda.png";
import "./contatos.css";

export function Contact() {
    return (
        <div>
            <div className="contact-color">
                <h1 className="absolute mt-13 ml-19 text-5xl">Contatos</h1>
                <div className="grid text-left decoration-0 gap-6 absolute mt-40 ml-22">
                    <a
                        href="mailto:camilea_guimaraes@outlook.com"
                        className="-ml-[7.7px]"
                    >
                        camilea_guimaraes@outlook.com
                    </a>
                    <a
                        href="mailto:camilea_guimaraes@outlook.com"
                        className="mt-2"
                    >
                        te.me/andra_sun#
                    </a>
                    <a
                        href="https://github.com/andra-sun"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        github.com/andra-sun
                    </a>
                    <a
                        href="https://linkedin.com/in/andra-sun"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        linkedin.com/in/andra-sun
                    </a>
                </div>
                <img
                    src={paper}
                    alt="contatos list"
                    draggable="false"
                    className="w-90"
                />
            </div>
        </div>
    );
}
