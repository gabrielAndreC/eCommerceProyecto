import ItemCount from "../itemCount/itemCount"

const ItemDetail = ({id, nombre, precio, categ, stock, img, desc}) =>{

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
                
                <div className="itemCard count">
                    <ItemCount initial={1} stock={stock} onAdd={(cantidad) => console.log(cantidad)}/>
                </div>
            </div>
        </div> 
    )
}

export default ItemDetail