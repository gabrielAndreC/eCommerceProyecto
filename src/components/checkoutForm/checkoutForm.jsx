import React from 'react'

const CheckoutForm = ({FirstName, LastName, Phone, Address, Submit}) => {
  return (
    <div className='checkoutFormContainer'>
        <form action="" method="post" className='checkoutForm' onSubmit={(event)=> {Submit(); event.preventDefault();}}> 
            <div className='checkoutFormField'>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name='nombre' id='nombre' required onChange={FirstName}/>
            </div>
            <div className='checkoutFormField'>
                <label htmlFor="apellido">Apellido</label>
                <input type="text" name='apellido' id='apellido' required onChange={LastName}/>
            </div>
            <div className='checkoutFormField'>
                <label htmlFor="phone">Telefono</label>
                <input type="number" name='phone' id='phone' required onChange={Phone}/>
            </div>
            <div className='checkoutFormField'>
                <label htmlFor="address">Dirección</label>
                <input type="text" name='address' id='address' required onChange={Address}/>
            </div>
            <div className='checkoutFormButton'>
                <input className='botonLink' type="submit" value={"Realizar Orden"}/>
            </div>
        </form>
    </div>
  )
}

export default CheckoutForm