import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/cartContext';
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import CheckoutForm from '../checkoutForm/checkoutForm';
import { Link } from 'react-router-dom';
import Loader from '../loader/loader';

const Checkout = () => {
  const [ordenCreada, setOrdenCreada] = useState(false);
  const [loader, setLoader] = useState(false);
  const [ordenId, setOrdenId] = useState("")

  const {cart, cantidadTotal, total, cartClear} = useContext(CartContext)
  const totalOrden = total();

  const [firstName, setFirstName] = useState("none")
  const [lastName, setLastName] = useState("none")
  const [phone, setPhone] = useState("none")
  const [address, setAddress] = useState("none")

  const [outOfStock, setOutOfStock] = useState([]);

  const crearOrden = async () =>{
    setLoader(true);
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
        const outOfStockUpdate = [];

        docs.forEach((doc) =>{
            const docData = doc.data();
            const stockDb = docData.stock;

            const productoAgregadoCart = cart.find((prod) => prod.id === doc.id)
            const productoCantidad = productoAgregadoCart?.cantidad

            if (stockDb >= productoCantidad){
                batch.update(doc.ref, {stock: stockDb-productoCantidad})
            }
            else{
                outOfStockUpdate.push({id: doc.id, ...docData, cantidadOrdenada: productoCantidad})
                setOutOfStock(outOfStockUpdate)
            }
        })
        
        if (outOfStockUpdate.length === 0){
            await batch.commit()
            const ordenRef = collection(db,"ordenes")
            const ordenArgegada = await addDoc(ordenRef, objOrden)
            console.log(objOrden)
            setOrdenId(ordenArgegada.id)
            setLoader(false)
            setOrdenCreada(true);
            cartClear();
        }
        else{
            setLoader(false)
        }

    } catch (error) {
        console.log(error)
    }
  }


  if (loader){
    return(
        <Loader/>
    )
  }
  else{
    if (outOfStock.length === 0){
        return(
            <div className='checkoutContainer'>
                {ordenCreada ? (
                    <div className='checkoutOrdenCreada'>
                    <h1>Orden Realizada con Éxito</h1>
                    <h3>NRO DE ORDEN: {ordenId}</h3>
                    <Link to="/" className="botonLink">Volver al inicio</Link>
                    </div>
                ):(
                    <>
                    <h1>CheckOut</h1>
                    {cart.map(el =>
                        <p key={el.id}>{el.nombre} x{el.cantidad} = ${(el.precio * el.cantidad).toFixed(2)}</p>
                    )}
                    <br/>
                    <p>{cantidadTotal()} productos</p>
                    <p>Total: ${total()}</p>
                    <br />
                    <h2>Ingresá tus datos para continuar</h2>
                    <CheckoutForm 
                        FirstName={(field) => setFirstName(field.target.value)}
                        LastName={(field) => setLastName(field.target.value)}
                        Phone={(field) => setPhone(field.target.value)}
                        Address={(field) => setAddress(field.target.value)}
                        Submit={() => crearOrden()}
                    />
                    </>
                )}
            </div>
        )
    }
    else{
        return(
        <>  
            <h3>Falta de stock</h3>
            <div className='checkoutOutStock'>
            {
                outOfStock.map(el =>
                    <p key={el.id}>Ordenaste: {el.nombre} x {el.cantidadOrdenada} Unidades. Tenemos: {el.stock} Unidades</p>
                )
            }
            <Link to="/cart" className="botonLink">Volver al carrito</Link>
            </div>
        </>
        )
    }
    }
}

export default Checkout