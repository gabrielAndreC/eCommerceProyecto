import { useContext } from "react";
import cartIcon from "./assets/cartIcon.svg"
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
const CartWidget = ()=>{

    const {cantidadTotal} = useContext(CartContext)

    return(
        <Link to="/cart" className="cartWidget" style={{display : cantidadTotal() > 0 ? ('block') : ('none')}}>
            <img src={cartIcon} alt="cart-widget" />
            {cantidadTotal()}
        </Link>
    )
}

export default CartWidget;