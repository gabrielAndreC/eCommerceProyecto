import { createContext, useState } from "react";

export const CartContext = createContext({
    cart : []
})

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const isInCart = (itemId) =>{
        return cart.some(item => item.id === itemId)
    }

    const addItem = (item, cantidad) =>{
        if (!isInCart(item.id)){
            setCart(cart => [...cart,{...item,cantidad}])
        }
        else{
            const itemInCart = cart.filter(incart => incart.id === item.id)[0];
            cantidad += itemInCart.cantidad
            removeItem(item.id)
            setCart(cart => [...cart,{...item,cantidad}])
        }
    }

    const removeItem = (itemId) =>{
        const cartUpdate = cart.filter(item => item.id !== itemId)
        setCart(cartUpdate)
    }

    const sumarItem = (itemId, stock) =>{
        const item = cart.findIndex(i => i.id === itemId)
        if (cart[item].cantidad < stock){
        cart[item].cantidad = cart[item].cantidad +1;
        }
        setCart([...cart])
    }

    const restarItem = (itemId) =>{
        const item = cart.findIndex(i => i.id === itemId)
        if (cart[item].cantidad > 1){
            cart[item].cantidad = cart[item].cantidad -1;
            }
        setCart([...cart])
    }

    const cartClear = () =>{
        setCart([])
    }
    
    const cantidadTotal = () =>{
        let cantidad = 0;
        for (let item = 0; item < cart.length; item++) {
            const el = cart[item];
            cantidad += el.cantidad
        }
        return cantidad
    }

    const total = () =>{
        let total = 0
        for (let item = 0; item < cart.length; item++) {
            const el = cart[item];
            total += (el.cantidad*el.precio)
        }
        return total.toFixed(2)
    }
    
    return(
        <CartContext.Provider value={{cart, isInCart, addItem, removeItem, cartClear, cantidadTotal, total, restarItem, sumarItem}}>
            {children}
        </CartContext.Provider>
    )
}