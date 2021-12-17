import { Link } from "react-router-dom"
import './menu.styles.css'
import Image3 from '../../assets/menu__logo.jpeg'

const Menu = () => {
    return(

        <>

            <div className="navbar">
                <img className="menu__logo" src={Image3} alt="Grafismo indígena em tons de vermelho azul e verde"/>
                
                <ul className="menu__rotas">
                                        
                    <li>
                        <Link className="link" to='/'><i>Home</i></Link>
                    </li>

                    <li>
                        <Link className="link" to='/artistas'><i>Artistas</i></Link>
                    </li>

                    <li>
                        <Link className="link" to='/obras'><i>Obras</i></Link>
                    </li>

                    <li>
                        <Link className="link" to='/contato'><i>Contato</i></Link>
                    </li>
                    
                </ul>

            </div>
            
        </>
        



    )
}
export default Menu