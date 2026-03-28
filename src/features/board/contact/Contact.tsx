import paper from "../../../assets/contatos.jpg";

export function Contact() {
    return (
        <div>
            {/* <img src={titulo} alt="contato" /> */}
            <div>
                <div className="grid text-left gap-6 absolute mt-5 ml-13 text-transparent">
                    <span>Email: camilea_guimaraes@outlook.com</span>
                    <span>Github: github.com/andra-sun</span>
                    <span>Linkedin: linkedin.com/in/andra-sun</span>
                </div>
                <img src={paper} alt="contatos list" className="w-100"/>
            </div>
        </div>
    );
}
