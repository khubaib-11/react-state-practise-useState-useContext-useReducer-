import React, { useState } from 'react'
import './product.css'

const Product = ({ product, setTotalCartItemsQuantity, setCart, cart, setTotalBill }) => {

  const currentProduct = { ...product };
  // Function to add product to cart
  const addProductToCart = () => {
    // Increase the quantity of product by 1
    product.quantity += 1
    // Update total cart items quantity by 1
    setTotalCartItemsQuantity((prev) => prev + 1)
    // Check if product already exists in cart
    const existingCartProductIndex = cart.findIndex(product => product.name === currentProduct.name)
    if (existingCartProductIndex >= 0) {
      // If product already exists, update its quantity
      const updatedCart = [...cart];
      const foundProduct = updatedCart[existingCartProductIndex];
      foundProduct.quantity++;
      // Calculate price of the found product and add to total bill
      const priceNumber = Number(foundProduct.price.split(" ")[0])
      setTotalBill(prev => prev + priceNumber)
      // Update cart state
      setCart(updatedCart)
    } else {
      // If product does not exist, create a new one with quantity 1 and add it to the cart
      const newProduct = { ...currentProduct, quantity: 1 }
      // Calculate price of the new product and add to total bill
      const priceNumber = Number(newProduct.price.split(" ")[0])
      setTotalBill(prev => prev + priceNumber)
      setCart(prev => [...prev, newProduct])
    }
  }

  // Function to remove product from cart
  const removeProductToCart = () => {
    // Decrease the quantity of product by 1
    if (product.quantity > 0) product.quantity--;
    // Search if product is already in cart
    const existingProductIndex = cart.findIndex(product => product.name === currentProduct.name);
    // If product exists, decrease its quantity
    if (existingProductIndex >= 0) {
      const updatedCart = [...cart];
      const foundProduct = updatedCart[existingProductIndex];
      foundProduct.quantity--;
      // If quantity is less than 1, remove it from cart
      if (foundProduct.quantity === 0) {
        updatedCart.splice(existingProductIndex, 1);
      }
      // Update cart state
      setCart(updatedCart)
      // Recalculate total bill after removing the product
      const newTotalBill = updatedCart.reduce((acc, product) => acc + Number(product.price.split(" ")[0]) * product.quantity, 0);
      setTotalBill(newTotalBill);
      // Decrease total cart items quantity by 1, but not below 0
      setTotalCartItemsQuantity(prev => prev > 0 ? prev - 1 : 0)
    }
  }


  return (
    <div className='product-details'>
      <div className='product-img'>
        <img src={product.image} alt="" />
      </div>
      <div className='product-desc'>
        <h3>{product.name}</h3>
        <h5>{product.price} PKR</h5>
        <div className='product-btn'>
          <button onClick={removeProductToCart}>-</button>
          <p>{product.quantity}</p>
          <button onClick={addProductToCart}>+</button>
        </div>
      </div>
    </div>
  )
}

export default Product