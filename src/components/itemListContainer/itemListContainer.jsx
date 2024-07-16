import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../itemList/itemList";
import ItemDetailContainer from "../itemDetailContainer/itemDetailContainer";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) =>{
    const [products,setProducts] = useState([]);

    const {categoryId} = useParams()

    useEffect(() =>{
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
        .then(response => {
            setProducts(response)
        })
        .catch(error =>{
            console.error(error);
        })
    },[categoryId])

    return(
        <div className="itemListC">
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;