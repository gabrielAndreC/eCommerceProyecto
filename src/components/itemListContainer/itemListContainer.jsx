import { useEffect, useState } from "react";
import ItemList from "../itemList/itemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemListContainer = ({greeting}) =>{
    const [products,setProducts] = useState([]);

    const {categoryId} = useParams()

    useEffect(() =>{
        const collectionRef = categoryId ? query(collection(db,"productos"),where("categ", "==", categoryId)) : collection(db,"productos")

        getDocs(collectionRef)
        .then(response =>{
            const productosAdapted = response.docs.map((doc) =>{
                return{id: doc.id, ...doc.data()}
            })
            setProducts(productosAdapted)
        })

        .catch(error =>{ console.log(error)})
    }, [categoryId])

    return(
        <div className="itemListC">
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;