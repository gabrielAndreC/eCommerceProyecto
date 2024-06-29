import CartWidget from "../cartwidget/CartWidget"

const NavBar = () =>{
    return(
       <nav>
            <h3 className="navNombre">eCeramic</h3>
            <div className="navCategorias">
                <button>Mates</button>
                <button>Platos</button>
                <button>Tazas</button>
            </div>
            <CartWidget />
       </nav>
    )
}

export default NavBar