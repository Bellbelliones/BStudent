import { useNavigate } from 'react-router-dom';
import { NavigationMenu } from '../../components/NavigationMEnu/index';
import "./style.css"


export default function Home()
{
    const navigate = useNavigate();
    return (
        <>
            <header>
               <NavigationMenu />
            </header>
            <main>
                <div className="flayer">
                    <img onClick={() => navigate("/bolsas")} src="Oportunidades que Constroem Futuros.png" alt="" />
                   
                </div>
            </main>
            <footer>

            </footer>
        </>
    )
}