import { useContext, useState } from "react"
import ItemCount from "../itemCount/itemCount"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";

const ItemDetail = ({id, nombre, precio, categ, stock, img, desc}) =>{

    const [cantidadAgregada,setCantidadAgregada] = useState(0);

    const {addItem} = useContext(CartContext);

    const onAddHandler = (cantidad) =>  {
        setCantidadAgregada(cantidad)

        const item = {id,nombre,precio,img,stock}
        addItem(item,cantidad)
    }
 
    return(
        <div className="itemCard detail">
            <div className="itemImg">
            <img src={img} alt={nombre} />
            </div>
            <div className="detailInfo">
                <h2>{nombre}</h2>
                <span className="precio">Precio ${precio}</span>
                <span className="stock">Disponibles: {stock}</span>
                <p className="desc">Descripción: {desc}</p>
                <span className="categoria">Categoria: {categ}</span>
            </div>
            <div className="itemCard count">
                    {
                        cantidadAgregada > 0 ? (
                            <div className="itemCard opciones">
                                <Link to="/cart" className="botonLink itemDt">Terminar Compra</Link>
                                <Link to="/" className="botonLink itemDt">Seguir Comprando</Link>
                            </div>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={onAddHandler}/>
                        )
                    }
                </div>
        </div> 
    )
}

export default ItemDetail