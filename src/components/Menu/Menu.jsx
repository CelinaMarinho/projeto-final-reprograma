import { Link } from "react-router-dom"
import './menu.styles.css'

const Menu = () => {
    return(
        
            <ul className="navbar">
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
        



    )
}
export default Menu