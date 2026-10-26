
import { useState, type FormEvent } from "react";
import "./style.css";
import { NavigationMenu } from "../../components/NavigationMEnu";
import { useNavigate } from "react-router-dom";

export type SearchFiltersValues = {
  query: string;
  area: string;
  nivel: string;
  pais: string;
};

type Props = {
  onSearch?: (filters: SearchFiltersValues) => void;
};

export default function Bolsas({ onSearch }: Props) {
  const [query, setQuery] = useState("");
  const [area, setArea] = useState("");
  const [nivel, setNivel] = useState("");
  const [pais, setPais] = useState("");
  const [mostrarFiltros, setMostrarFiltros] = useState(false);

  function pesquisar(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onSearch?.({
      query: query.trim(),
      area,
      nivel,
      pais,
    });
  }

  function limparFiltros() {
    setQuery("");
    setArea("");
    setNivel("");
    setPais("");

    onSearch?.({
      query: "",
      area: "",
      nivel: "",
      pais: "",
    });
  }

  const [listBolsas, setListBolsas] = useState([
    {
        id: "1",
        titulo: "Bolsa do Inagbe",
        descricao: "Bolsa da frança",
        requisitos: "- Média 14\n- 18 - 21 Anos",
        prazoCandidatura: "10/10/2026",
        estado: false
    }
  ])
  const navigate = useNavigate();
  return (
    <>
        <NavigationMenu />
        <section className="bs-search">
        <div className="bs-search__header">
            <span className="bs-search__eyebrow">
            ENCONTRA A TUA OPORTUNIDADE
            </span>

            <h2>Pesquisa de bolsas</h2>

            <p>
            Descobre oportunidades académicas adequadas
            ao teu perfil.
            </p>
        </div>

        <form onSubmit={pesquisar}>
            <label
            className="bs-search__label"
            htmlFor="bs-query"
            >
            Pesquisar oportunidades
            </label>

            <div className="bs-search__input-box">
            <svg
                className="bs-search__icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <circle cx="10.5" cy="10.5" r="6.5" />
                <path d="m15.5 15.5 5 5" />
            </svg>

            <input
                id="bs-query"
                type="search"
                placeholder="Ex.: bolsas de engenharia..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <button
                className="bs-search__button"
                type="submit"
                aria-label="Pesquisar"
            >
                <span>Pesquisar</span>

                <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
            </button>
            </div>

            <div className="bs-search__filter-header">
            <div className="bs-search__filter-title">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 6h16M7 12h10m-7 6h4" />
                </svg>

                <span>Filtrar resultados</span>
            </div>

            <button
                className="bs-search__toggle"
                type="button"
                aria-expanded={mostrarFiltros}
                onClick={() =>
                setMostrarFiltros(!mostrarFiltros)
                }
            >
                {mostrarFiltros ? "Ocultar" : "Filtros"}

                <span className={mostrarFiltros ? "aberto" : ""}>
                ⌄
                </span>
            </button>
            </div>

            {mostrarFiltros && (
            <div className="bs-search__filters">
                <div className="bs-search__field">
                <label htmlFor="bs-area">
                    Área de estudo
                </label>

                <select
                    id="bs-area"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                >
                    <option value="">Todas as áreas</option>
                    <option value="Engenharia e Tecnologia">
                    Engenharia e Tecnologia
                    </option>
                    <option value="Saúde">Saúde</option>
                    <option value="Economia e Gestão">
                    Economia e Gestão
                    </option>
                    <option value="Direito">Direito</option>
                    <option value="Ciências Sociais">
                    Ciências Sociais
                    </option>
                </select>
                </div>

                <div className="bs-search__field">
                <label htmlFor="bs-nivel">
                    Nível académico
                </label>

                <select
                    id="bs-nivel"
                    value={nivel}
                    onChange={(e) => setNivel(e.target.value)}
                >
                    <option value="">Todos os níveis</option>
                    <option value="Licenciatura">
                    Licenciatura
                    </option>
                    <option value="Mestrado">Mestrado</option>
                    <option value="Doutoramento">
                    Doutoramento
                    </option>
                    <option value="Pós-graduação">
                    Pós-graduação
                    </option>
                </select>
                </div>

                <div className="bs-search__field">
                <label htmlFor="bs-pais">
                    País de destino
                </label>

                <select
                    id="bs-pais"
                    value={pais}
                    onChange={(e) => setPais(e.target.value)}
                >
                    <option value="">Todos os países</option>
                    <option value="Angola">Angola</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Brasil">Brasil</option>
                    <option value="África do Sul">
                    África do Sul
                    </option>
                    <option value="Estados Unidos">
                    Estados Unidos
                    </option>
                    <option value="Reino Unido">
                    Reino Unido
                    </option>
                </select>
                </div>

                <div className="bs-search__actions">
                <button
                    type="button"
                    className="bs-search__clear"
                    onClick={limparFiltros}
                >
                    Limpar
                </button>

                <button
                    type="submit"
                    className="bs-search__apply"
                >
                    Aplicar filtros
                </button>
                </div>
            </div>
            )}
        </form>
        </section>
        
        <section className="bolsaContainer">

            <div className="cardBolsa">
                <img src="21800a55-3043-4fa1-b2b3-446f0a0d926c.png" alt="" />
                <div className="dadosP">
                    <div>Nacional</div>
                    <div>Licenciatura</div>
                </div>
                <button onClick={() => navigate("/bolsasDetalhe")}>
                    Ver Detalhe
                </button>
            </div>
            <div className="cardBolsa">
                <img src="21800a55-3043-4fa1-b2b3-446f0a0d926c.png" alt="" />
                <div className="dadosP">
                    <div>Nacional</div>
                    <div>Licenciatura</div>
                </div>
                <button onClick={() => navigate("/bolsasDetalhe")}>
                    Ver Detalhe
                </button>
            </div>
            <div className="cardBolsa">
                <img src="21800a55-3043-4fa1-b2b3-446f0a0d926c.png" alt="" />
                <div className="dadosP">
                    <div>Nacional</div>
                    <div>Licenciatura</div>
                </div>
                <button onClick={() => navigate("/bolsasDetalhe")}>
                    Ver Detalhe
                </button>
            </div>
        </section>

    </>
  );
}
