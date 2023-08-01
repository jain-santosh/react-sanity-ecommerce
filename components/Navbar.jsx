import React, { useContext, useState } from 'react'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai'
AiOutlineShoppingCart
import Cart from './Cart'
import { Context, useStateContext } from '../context/StateContext'
import ProductDetails from '@/pages/product/[slug]'

const Navbar = () => {

  // const [showCart, setShowCart] = useState(false);
  const { totalQuantities, setShowCart, showCart } = useStateContext(Context);
  
  function handleShowCart() {
    setShowCart((showCart) => !showCart)
  }

  return (
      <div className='navbar-container'>
        <p className='logo'>
          <Link href="/">GOAT</Link>
        </p>

        <button type="button" 
          className="cart-icon"
          onClick={ () => setShowCart(!showCart)} 
        >
          <AiOutlineShoppingCart />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>

        {showCart && <Cart/>}
        {/* {showCart && <ProductDetails  showCart={handleShowCart} display="none"/>} */}
      </div>
  )
}

export default Navbar
