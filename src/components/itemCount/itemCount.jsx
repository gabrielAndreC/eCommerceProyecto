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
                <button className={stock ? ("botonContador") : ("botonContador btndisabled")} onClick={restar} disabled={!stock}>-1</button>
                <span className="contadorCantidad">{cantidad}</span>
                <button className={stock ? ("botonContador") : ("botonContador btndisabled")} onClick={sumar} disabled={!stock}>+1</button>
            </div>
            <button className={stock ? ("botonContador btnañadir") : ("botonContador btnañadir btndisabled")} onClick={() => onAdd(cantidad)} disabled={!stock}>{
                stock ? ("Añadir al Carrito") : ("Fuera de Stock")}</button>
        </div>
    )
}

export default ItemCount;