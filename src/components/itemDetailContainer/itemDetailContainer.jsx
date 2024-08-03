import { useEffect, useState } from "react"
import ItemDetail from "../itemDetail/itemDetail";
import Loader from "../loader/loader";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState(null);
    const [loader, setLoader] = useState(true)
    const {itemId} = useParams();

    useEffect(() =>{
        getDoc(doc(db,"productos",itemId))
        .then((querySnapshot) =>{
            const productAdapted = {id: querySnapshot.id, ...querySnapshot.data()}
            setProduct(productAdapted)
            setLoader(false)
        })

        .catch(error =>{ console.log(error)})
    }, [itemId])

    return(
        <>
        {
            loader ? (
                <Loader/>
            ):
            (
                <div className="itemDetailC">
                    <ItemDetail {...product}/>
                </div>
            )
        }
        </>
    )
}

export default ItemDetailContainer