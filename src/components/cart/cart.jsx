import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"
import Checkout from "../checkout/checkout"
import CartItem from "../cartItem/cartItem"
const Cart = () =>{
    const {cart, cartClear, cantidadTotal, total} = useContext(CartContext)

    if (cantidadTotal() < 1){
        return(
            <div className="cartNot">
                <h1>No hay items en el carrito.</h1>
                <Link to="/" className="botonLink">Volver al inicio</Link>
            </div>
        )
    }
    
    return(
        <div>
            {cart.map(el => <CartItem key={el.id} {...el}/>)}
            <h3 className="cartTotal">Total: ${total()}</h3>
            <div className="cartOptions">
                <div className="linkOptions">
                    <Link className="botonLink" to="/checkout">Realizar Pago</Link>
                    <Link to="/" className="botonLink">Volver al inicio</Link>
                </div>
                <button onClick={() => cartClear()} className="botonContador quit">Limpiar carrito</button>
            </div>
        </div>
    )
}

export default Cart