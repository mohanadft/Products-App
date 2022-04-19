import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FetchProducts from './components/FetchProducts'
import Error from './components/Error'
import SingleProduct from './components/SingleProduct'
import Cart from './components/Cart'
import { CartContext } from './Context/Context'

const App = () => {
	const { isOpen } = useContext(CartContext)

	return (
		<BrowserRouter>
			<div className="container w-5/6 mx-auto p-5">
				<Routes>
					<Route path="/" element={<FetchProducts />} />
					<Route path="/:name" element={<SingleProduct />} />
					<Route path="*" element={<Error />} />
				</Routes>
				{isOpen && <Cart />}
			</div>
		</BrowserRouter>
	)
}

export default App
