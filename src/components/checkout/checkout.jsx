import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/cartContext';
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

const Checkout = () => {
  const [ordenCreada, setOrdenCreada] = useState(false);

  const {cart, cantidadTotal, total, cartClear} = useContext(CartContext)
  const totalOrden = total();

  const [firstName, setFirstName] = useState("none")
  const [lastName, setLastName] = useState("none")
  const [phone, setPhone] = useState("none")
  const [address, setAddress] = useState("none")
  
  const crearOrden = async () =>{
    try {
        const objOrden = {
            buyer: {
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                address: address
            },
            items: 
                cart,
                cantidadTotal: cantidadTotal(),
                totalOrden,
                date: new Date()
        }

        const cartIds = cart.map((item) => item.id)

        const productoRef = collection(db,"productos")

        const productosAgregadosFirestore = await getDocs(query(productoRef, where(documentId(), "in", cartIds)))
        const {docs} = productosAgregadosFirestore;

        const batch = writeBatch(db)
        const outOfStock = [];

        docs.forEach((doc) =>{
            const docData = doc.data();
            const stockDb = docData.stock;

            const productoAgregadoCart = cart.find((prod) => prod.id === doc.id)
            const productoCantidad = productoAgregadoCart?.cantidad

            if (stockDb >= productoCantidad){
                batch.update(doc.ref, {stock: stockDb-productoCantidad})
            }
            else{
                outOfStock.push({id: doc.id, ...docData})
            }
        })
        
        if (outOfStock.length === 0){
            await batch.commit()
            const ordenRef = collection(db,"ordenes")
            const ordenArgegada = await addDoc(ordenRef, objOrden)
            setOrdenCreada(true);
            cartClear();
        }
        else{
            console.log("no habia de lo que queres bro")
        }

    } catch (error) {
        console.log(error)
    }
  }

  return(
    <div>
        <h1>CheckOut</h1>
        <button onClick={() => crearOrden()}>Generar orden</button>
    </div>
  )
}

export default Checkout