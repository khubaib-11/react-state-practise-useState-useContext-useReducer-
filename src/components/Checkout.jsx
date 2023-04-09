import React from 'react'
import './checkout.css'
import Product from './Product'
const Checkout = (props) => {


  return (
    <div className='checkout'>
      <h1>Checkout</h1>
      <p>Total Cart Items : {props.totalCartItemsQuantity}</p>

      <div className='cart-items'>
        {
          props.cart.length > 0 ? (props.cart.map((product, index) =>
            <div key={index} className='product-details'>
              <div className='product-img'>
                <img src={product.image} alt="" />
              </div>
              <div className='product-desc'>
                <h3>{product.name}</h3>
                <h5>{product.price} PKR</h5>
                <div className='product-btn'>
                  <p>{product.quantity}</p>
                </div>
              </div>
            </div>
          )) : ("Cart is empty")
        }
      </div>
    </div>
  )
}

export default Checkout