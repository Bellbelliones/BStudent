import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Bolsas from "../pages/Bolsas";
import Login from "../pages/Sessao/Login";
import Signup from "../pages/Sessao/Signup";
import BolsasDetalhe from "../pages/BolsasDetalhe";
import Mentoria from "../pages/Mentoria";
import MentoriaPesquisa from "../pages/MentoriaPesquisa";
import MentoriaDetalhe from "../pages/MentoriaDetalhe";
import PerfilCandidato from "../pages/PerfilCandidato";

export default function AppRoutes()
{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/" element={<Home/>} />
                <Route path="/bolsas" element={<Bolsas/>} />
                <Route path="/bolsasdetalhe" element={<BolsasDetalhe/>} />
                <Route path="/mentoria" element={<Mentoria/>} />
                <Route path="/mentoriaP" element={<MentoriaPesquisa/>} />
                <Route path="/mentoriaD" element={<MentoriaDetalhe/>} />
                <Route path="/perfilC" element={<PerfilCandidato/>} />
            </Routes>
        </BrowserRouter>
    )
}