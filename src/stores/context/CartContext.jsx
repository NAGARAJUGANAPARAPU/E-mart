import React from 'react'
import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart((cart) => [...cart, item])
    }

    const removeFromCart = (itemId) => {
        setCart((cart) => cart.filter(item => item.id !== itemId))
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}
