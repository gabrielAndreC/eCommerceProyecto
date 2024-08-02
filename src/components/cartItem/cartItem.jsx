import { useContext } from "react"
import { CartContext } from "../../context/cartContext"

const CartItem = ({id, img, nombre, precio, cantidad}) =>{
    const {removeItem} = useContext(CartContext)
    return(
        <div className="cartItem">
            <img src={img} alt="" />
            <h3>{nombre}</h3>
            <span>${precio} x {cantidad}u = ${(precio * cantidad).toFixed(2)}</span>
            <button onClick={() => removeItem(id)}> Quitar del carrito</button>
        </div>
    )
}

export default CartItem