import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

const Context = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [products, setProducts] = useState(
		JSON.parse(localStorage.getItem('owner-products')) || []
	)

	useEffect(() => {
		localStorage.setItem('owner-products', JSON.stringify(products))
	}, [products])

	return (
		<CartContext.Provider value={{ isOpen, setIsOpen, products, setProducts }}>
			{children}
		</CartContext.Provider>
	)
}

export default Context
