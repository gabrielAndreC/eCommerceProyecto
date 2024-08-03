import { useContext } from "react"
import { CartContext } from "../../context/cartContext"

const CartItem = ({id, img, nombre, precio, cantidad, stock}) =>{
    const {removeItem, restarItem, sumarItem} = useContext(CartContext)
    return(
        <div className="cartItem"> 
                <img src={img} alt="" />
                <div className="cartItemInfo">  
                    <h3>{nombre}</h3>
                    <span>${precio} x {cantidad}u = ${(precio * cantidad).toFixed(2)}</span>
                </div>
                <div className="cartItemBotones">
                <button onClick={() => removeItem(id)} className="botonLink quit"> Quitar del carrito</button>
                <button onClick={() => restarItem(id)}className="botonLink quit">-1</button>
                <button onClick={() => sumarItem(id,stock)}className="botonLink quit">+1</button>
                </div>
        </div>
    )
}

export default CartItem