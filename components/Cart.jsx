import React, { useRef, useState } from 'react'
import Link from 'next/link'
import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus, AiOutlineShopping } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'
import { toast } from 'react-hot-toast'
import { useStateContext } from '../context/StateContext'
import { urlFor } from '../lib/client'
import getStrip from '../lib/getStrip'

const Cart = () => {
    
    const cartRef = useRef();
    const { totalPrice, totalQuantities, cartItems, incQty, decQty, qty, toggleCartItemQuantity, onRemove, setShowCart, showCart } = useStateContext();

    const handleCheckout = async () => {
        const stripe = await getStrip();

        const response = await fetch('/api/stripe/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartItems),
        });
        if(response.statusCode === 500) return;
    
        const data = await response.json();
    
        toast.loading('Redirecting...');
    
        stripe.redirectToCheckout({ sessionId: data.id });
    }

    const handleCart = () => {
        setShowCart((showCart) => !showCart)
    }
    return (
        <div className='cart-wrapper' ref={cartRef}>
            <div className="cart-container">
                <button 
                    type="button" 
                    className='cart-heading' 
                    onClick={handleCart}
                >
                    <AiOutlineLeft />
                    <span className='heading'>Your Cart</span>
                    <span className="cart-num-items">({totalQuantities}) items</span>
                </button>

                {cartItems.length < 1 && (
                    <div className="empty-cart">
                        <AiOutlineShopping size={150} />
                        <h3>Your Shopping bag is empty</h3>
                        <Link href="/">
                            <button 
                                type="button"
                                onClick={handleCart}
                                className='btn'
                            >
                                Continue Shopping
                            </button>
                        </Link>
                    </div>
                )}

                <div className='product-container'>
                    {cartItems.length >= 1 && cartItems.map((item, index) => (
                        <div className="product" key={item._id}>
                            <img 
                                src={urlFor(item?.image[0])} 
                                className="cart-product-image" 
                            />
                            <div className="item-desc">
                                <div className="flex top">
                                    <h5>{item.name}</h5>
                                    <h4>${item.price}</h4>
                                </div>
                                <div className="flex bottom">
                                    <div>
                                        <h5 className="quantity-desc">
                                            <p className="quantity-desc">
                                                <span className="minus" onClick={() => toggleCartItemQuantity(item._id, 'dec')}>
                                                    <AiOutlineMinus />
                                                </span>
                                                <span className="num">
                                                    {item.quantity}
                                                </span>
                                                <span className="plus" onClick={() => toggleCartItemQuantity(item._id, 'inc')}>
                                                    <AiOutlinePlus />
                                                </span>
                                            </p>
                                        </h5>
                                    </div>
                                    <button 
                                        type="button" 
                                        className='remove-item' 
                                        onClick={() => onRemove(item)}
                                    >
                                        <TiDeleteOutline />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {cartItems.length >= 1 && (
                    <div className="cart-bottom">
                        <div className="total">
                            <h3>SubTotal: </h3>
                            <h3>${totalPrice}</h3>
                        </div>
                        <div className="btn-container">
                            <button type="button" className="btn" onClick={handleCheckout}>
                                Pay With Stripe
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart
