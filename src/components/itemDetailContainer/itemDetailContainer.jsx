import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock";
import ItemDetail from "../itemDetail/itemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState(null);

    const {itemId} = useParams();

    useEffect(() =>{
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error);
            })
    }, [itemId])
    return(
        <div className="itemDetailC">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer