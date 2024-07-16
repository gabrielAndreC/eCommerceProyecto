import { Link } from "react-router-dom"
const Item = ({id, nombre, precio, categ, stock, img, desc}) =>{

    return(
        <div className="itemCard">
            <div className="itemImg">
            <img src={img} alt={nombre} />
            </div>
            <h2>{nombre}</h2>
            <span className="precio">Precio ${precio}</span>
            <span className="stock">Disponibles: {stock}</span>
            <span className="categoria">Categoria: {categ}</span>
            <Link className="cardBtn" to={`/item/${id}`}>Mas detalles</Link>
        </div>
    )
}

export default Item