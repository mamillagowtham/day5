import React, { useState } from 'react'
import CartItem from './CartItem'
import Total from './Total'



let cartItems = [{id:1, label :"noodles", price : 50, quantity : 1},
    {id:2, label : "Biryani" ,  price : 300, quantity : 1},
    {id:3, label : "soup", price : 500, quantity : 1}];

const CartContainer = () => {
    const [cart,setCart] =  useState(cartItems);
    const totalPrice = cart.reduce((bag,item)=>
    {
        return  bag + item.quantity * item.price;
    },0)

     const changeQuantity = (id,value)=>{
       
        let updateCart = cart.map((item)=>
        {
            let newValue = item.quantity + value;
            if(newValue >=0)
            {
                newValue
            }
            else{
                newValue=0;
            }

          return item.id === id ?  {...item,quantity: newValue}: item;
        })

        setCart(updateCart);

     }
  return (<div>
    {
        cart.map((item)=>{
            return (<CartItem key={item.id} {...item} changeQuantity = {changeQuantity}/>)
        })}

        <Total totalPrice = {totalPrice}/>
    

  </div>
  );

};

export default CartContainer;