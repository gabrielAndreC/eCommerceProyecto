import CartWidget from "../cartwidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = () =>{
    return(
       <nav>
            <Link className="navNombre" to={`/`}>
            <h3>eCeramic</h3>
            </Link>
            <div className="navCategorias">
                <NavLink className="navBtn" to={`/categoria/Vasos`}>Vasos</NavLink>
                <NavLink className="navBtn" to={`/categoria/Tazas`}>Tazas</NavLink>
                <NavLink className="navBtn" to={`/categoria/Platos`}>Platos</NavLink>
            </div>
            <CartWidget />
       </nav>
    )
}

export default NavBar