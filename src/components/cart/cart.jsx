import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"
import Checkout from "../checkout/checkout"
import CartItem from "../cartItem/cartItem"
const Cart = () =>{
    const {cart, cartClear, cantidadTotal, total} = useContext(CartContext)

    if (cantidadTotal() < 1){
        return(
            <div>
                <h1>No hay items en el carrito.</h1>
                <Link to="/" className="botonContador">Volver al inicio</Link>
            </div>
        )
    }
    
    return(
        <div>
            {cart.map(el => <CartItem key={el.id} {...el}/>)}
            <h3>Total: ${total()}</h3>
            <button onClick={() => cartClear()} className="botonContador">Limpiar carrito</button>
            <Link className="botonContador" to="/checkout">Realizar Pago</Link>
            <Link to="/" className="botonContador">Volver al inicio</Link>
            <Checkout/>
        </div>
    )
}

export default Cart