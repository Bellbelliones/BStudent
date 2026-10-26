import { useState } from 'react';
import { NavigationMenu } from '../../components/NavigationMEnu/index';
import "./style.css"

export default function BolsasDetalhe()
{
    const [clicado, setClicado] = useState(false);

    return (
        <>
            <header>
                <NavigationMenu />
            </header>
            <main>
                <div className='bolsaDetalhe'>
                    <img className="bolsaPerfil" src="21800a55-3043-4fa1-b2b3-446f0a0d926c.png" alt="" />
                </div>
                <div className="cardDetalhe">
                    <h3>
                        Bolsa de Estudo Para formação Superior
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, aliquam? Ea iure sed corporis? Minima, quis nesciunt non ullam fugit consectetur assumenda quaerat vero dolorem mollitia recusandae eveniet deleniti voluptates.
                    </p>
                    <div className="requisitos">
                        <h4>
                            1. Requisitos
                        </h4>


                        <ul>
                            <li>
                                Média 14   
                            </li>
                            <li>
                                18 - 21 Anos   
                            </li>
                            <li>
                                Médio concluído   
                            </li>
                        </ul>
                    </div>
                    <div className="prazo">
                        <h4> 2. Prazo</h4>

                        <h5>20/10/2026</h5>
                    </div>
                </div>
                <button onClick={() => setClicado(!clicado)}>{ clicado ? "PENDENTE" : "CANDIDATAR-ME"}</button>
            </main>
        </>
    )
}