import Item from '../item/item.jsx'

const ItemList = ({products}) =>{
    return(
        <div className="itemList">
            {products.map(producto => <Item key={producto.id} {...producto}/>)}
        </div>
    )
}

export default ItemList