import React from 'react'
import { ItemCount } from "../ItemCount/ItemCount"

export const ItemDetail = ( {description, price, stock, name, img} ) => {

  const onAdd = (items) => { 
    alert(`Se agregaron ${items} al carrito`)
 }

  return (
    <div className="border m-2">
        <div>
        <div >
          <h5 >{name}</h5>
          <img style={{maxWidth: '30%'}} src={img} alt="" />
          <p > {description} </p>
          <p>Precio: $ {price} </p>
          <ItemCount stock={stock} onAdd={onAdd} />
        </div>
      </div>
    </div>
  )
}
