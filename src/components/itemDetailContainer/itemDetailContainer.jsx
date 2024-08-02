import { useEffect, useState } from "react"
import ItemDetail from "../itemDetail/itemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState(null);

    const {itemId} = useParams();

    useEffect(() =>{
        getDoc(doc(db,"productos",itemId))
        .then((querySnapshot) =>{
            const productAdapted = {id: querySnapshot.id, ...querySnapshot.data()}
            setProduct(productAdapted)
        })

        .catch(error =>{ console.log(error)})
    }, [itemId])

    return(
        <div className="itemDetailC">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer