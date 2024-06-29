import cartIcon from "./assets/cartIcon.svg"
const CartWidget = ()=>{
    return(
        <div className="cartWidget">
            <img src={cartIcon} alt="cart-widget" />
            0
        </div>
    )
}

export default CartWidget;