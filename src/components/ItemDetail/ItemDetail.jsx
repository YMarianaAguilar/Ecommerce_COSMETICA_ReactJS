import React, { useContext } from 'react'
import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from '../../context/CartContext';

export const ItemDetail = ({product}) => {

  const { addProductCart } = useContext(CartContext);

  const onAdd = (quantity) => { 
    addProductCart(product, quantity);
    product.stock -= quantity;
 }

  return (
    <div className="border m-2">
        <div>
        <div >
          <h5 >{product.name}</h5>
          <img style={{maxWidth: '30%'}} src={product.img} alt="" />
          <p > {product.description} </p>
          <p>Precio: $ {product.price} </p>
          <ItemCount stock={product.stock} onAdd={onAdd} />
        </div>
      </div>
    </div>
  )
}
