import { useEffect, useState } from "react";
import ItemList from "../itemList/itemList";
import Loader from "../loader/loader";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemListContainer = ({greeting}) =>{
    const [products,setProducts] = useState([]);
    const [loader, setLoader] = useState(true);

    const {categoryId} = useParams()

    useEffect(() =>{
        const collectionRef = categoryId ? query(collection(db,"productos"),where("categ", "==", categoryId)) : collection(db,"productos")

        getDocs(collectionRef)
        .then(response =>{
            const productosAdapted = response.docs.map((doc) =>{
                return{id: doc.id, ...doc.data()}
            })
            setProducts(productosAdapted)
            setLoader(false)
        })

        .catch(error =>{ console.log(error)})
    }, [categoryId])

    return(
        <>
            {loader ? (
                <>
                    <Loader/>
                </>
            ): (
                <div className="itemListC">
                    <h1>{greeting}</h1>
                    <ItemList products={products}/>
                </div>
            )}
        </>  
    )
}

export default ItemListContainer;