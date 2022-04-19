import React, { useContext } from 'react'
import { CartContext } from '../Context/Context'

const Cart = () => {
	const { setIsOpen, products, setProducts } = useContext(CartContext)

	const removeItem = id => {
		setProducts(prev => prev.filter(item => item.id !== id))
	}

	return (
		<div
			className="cart fixed min-h-screen right-0 top-0 bg-white p-4"
			style={{ maxWidth: '1000px' }}
		>
			<div className="header flex justify-between text-slate-800">
				<h1 className="text-slate-800 uppercase text-3xl font-bold">
					Your Cart
				</h1>
				<button
					className="close hover:underline"
					onClick={() => setIsOpen(false)}
				>
					Close
				</button>
			</div>
			<div className="items flex flex-col gap-2 py-5">
				{products.map((product, index) => {
					return (
						<div
							className={`item flex justify-between text-slate-800 gap-16 border-b items-center ${
								index === product.length - 1
									? 'border-none'
									: 'border-slate-500'
							} `}
							key={product.id}
						>
							<div className="info flex gap-3 items-center py-2">
								<img
									src={product.small}
									alt={product.name}
									className="object-cover w-16 h-16 rounded-full"
								/>
								<h1 className="font-semibold text-sm">{product.name}</h1>
							</div>
							<button
								className="bg-red-600 text-white text-sm py-2 px-3 rounded-sm hover:bg-red-700"
								onClick={() => removeItem(product.id)}
							>
								Remove Item
							</button>
						</div>
					)
				})}
			</div>
			{products.length && (
				<button
					className="bg-slate-800 py-2 px-3 hover:bg-slate-900 rounded-sm"
					onClick={() => setProducts([])}
				>
					Clear Items
				</button>
			)}
			{!products.length && (
				<h1 className="text-center font-bold text-red-500">No Items Left.</h1>
			)}
		</div>
	)
}

export default Cart
