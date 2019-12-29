import React, {createContext, useState} from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setcart] = useState([]);

    const addToCart = element => {
        setcart([...cart, element])
    }

    return <CartContext.Provider value={{
        cart,
        addToCart
    }}>{children}</CartContext.Provider>
}