import React from 'react'

const QuantityContainer = ({quantity,id,changeQuantity}) => {
  return (
    <div style={{display:'flex', gap:"5px"}}>
        <button style={{height:"50px"}} onClick={()=>changeQuantity(id,-1)}>-</button>
        <p>{quantity}</p>
        <button style={{height:"50px"}} onClick={()=>changeQuantity(id,+1)}>+</button>
    </div>
  )}

export default QuantityContainer