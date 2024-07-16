import { useState } from "react"

const ItemCount = ({initial, stock, onAdd}) =>{
    const [cantidad, setCantidad] = useState(initial)
    
    const sumar = () =>{
        if (cantidad < stock) {
            setCantidad(cantidad+1);
        }
    }

    const restar = () => {
        if (cantidad > 1){
            setCantidad(cantidad-1);
        }
    }

    return(
        <div className="contador">
            <div className="contadorUi">
                <button className="botonContador" onClick={restar}>-1</button>
                <span className="contadorCantidad">{cantidad}</span>
                <button className="botonContador" onClick={sumar}>+1</button>
            </div>
            <button className="botonContador btnañadir" onClick={() => onAdd(cantidad)} disabled={!stock}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;