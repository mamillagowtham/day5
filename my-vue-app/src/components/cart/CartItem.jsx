

import React from 'react'
import LabelPrice from './LabelPrice';
import QuantityContainer from './QuantityContainer';

const CartItem = ({id,label,price,quantity,changeQuantity}) => {
  return (

  <div style={{display:"flex", gap:"60px" }}>
      <LabelPrice label={label} price={price}/>
      <QuantityContainer quantity={quantity}  changeQuantity={changeQuantity} id={id}/>
  
  </div>
  )
}

export default CartItem;
