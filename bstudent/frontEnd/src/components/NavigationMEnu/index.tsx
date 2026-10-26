
import { useState } from "react";
import "./style.css";

type NavigationMenuProps = {
    nome?: string;
    email?: string;
    foto?: string;
    onNavigate?: (pagina: "Home" | "Perfil" | "Bolsas" | "Mentores") => void;
    onLogout?: () => void;
};

export const NavigationMenu = ({
    nome = "Nome do Utilizador",
    email = "utilizador@email.com",
    foto = "images.jpeg",
    onNavigate,
    onLogout,
}: NavigationMenuProps) => {
    const [menuAberto, setMenuAberto] = useState(false);
    const [paginaAtiva, setPaginaAtiva] = useState<
        "Home" |"Perfil" | "Bolsas" | "Mentores"
    >("Home");

    const navegar = (pagina: "Home" |"Perfil" | "Bolsas" | "Mentores") => {
        setPaginaAtiva(pagina);
        onNavigate?.(pagina);
        setMenuAberto(false);
    };

    return (
        <>
            <header className="navigation">
                <div className="navigation-esquerda">
                    <button
                        className="botao-menu"
                        type="button"
                        aria-label="Abrir menu lateral"
                        aria-expanded={menuAberto}
                        onClick={() => setMenuAberto(true)}
                    >
                        <img
                            src="Ícone de menu hambúrguer minimalista.png"
                            alt=""
                        />
                    </button>

                    <img
                        className="logo"
                        src="Logótipo BStudent com Capelo Académico.png"
                        alt="Logótipo BStudent"
                    />

                    <h4>
                        B<span>Student</span>
                    </h4>
                </div>

                <button
                    className="botao-foto-utilizador"
                    type="button"
                    aria-label="Abrir menu do utilizador"
                    onClick={() => setMenuAberto(true)}
                >
                    <img
                        className="myPhoto"
                        src={foto}
                        alt={`Fotografia de ${nome}`}
                    />
                </button>
            </header>

            {menuAberto && (
                <div
                    className="menu-overlay"
                    onClick={() => setMenuAberto(false)}
                />
            )}

            <aside
                className={`menu-lateral ${menuAberto ? "menu-lateral-aberto" : ""}`}
                aria-hidden={!menuAberto}
            >
                <div className="menu-topo">
                    <div className="dados-utilizador">
                        <img
                            className="foto-perfil-menu"
                            src={foto}
                            alt=""
                        />

                        <div className="texto-utilizador">
                            <h3>{nome}</h3>
                            <p>{email}</p>
                        </div>
                    </div>

                    <button
                        className="botao-fechar"
                        type="button"
                        aria-label="Fechar menu lateral"
                        onClick={() => setMenuAberto(false)}
                    >
                        ×
                    </button>
                </div>

                <nav className="opcoes-menu" aria-label="Menu do utilizador">
                    <button
                        type="button"
                        className={`opcao-menu ${paginaAtiva === "Home" ? "opcao-ativa" : ""}`}
                        onClick={() => navegar("Home")}
                    >
                        <span className="icone-opcao">♙</span>
                        Home
                    </button>
                    <button
                        type="button"
                        className={`opcao-menu ${paginaAtiva === "Perfil" ? "opcao-ativa" : ""}`}
                        onClick={() => navegar("Perfil")}
                    >
                        <span className="icone-opcao">♙</span>
                        Perfil
                    </button>

                    <button
                        type="button"
                        className={`opcao-menu ${paginaAtiva === "Bolsas" ? "opcao-ativa" : ""}`}
                        onClick={() => navegar("Bolsas")}
                    >
                        <span className="icone-opcao">▤</span>
                        Bolsas
                    </button>

                    <button
                        type="button"
                        className={`opcao-menu ${paginaAtiva === "Mentores" ? "opcao-ativa" : ""}`}
                        onClick={() => navegar("Mentores")}
                    >
                        <span className="icone-opcao">♧</span>
                        Mentores
                    </button>
                </nav>

                <div className="menu-rodape">
                    <button
                        className="botao-terminar-sessao"
                        type="button"
                        onClick={() => {
                            setMenuAberto(false);
                            onLogout?.();
                        }}
                    >
                        <span aria-hidden="true">↪</span>
                        Terminar Sessão
                    </button>
                </div>
            </aside>
        </>
    );
};
