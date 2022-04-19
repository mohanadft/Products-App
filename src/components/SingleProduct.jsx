import React, { useContext, useState } from 'react'
import data from '../db.json'
import { Link, useParams } from 'react-router-dom'
import { CartContext } from '../Context/Context'

const SingleProduct = () => {
	const { name } = useParams()
	const { setIsOpen, products, setProducts } = useContext(CartContext)
	const [singleProduct] = useState(
		data.products.find(product => {
			return product.name.toLowerCase().split` `.join`-` === name
		})
	)

	return (
		<div>
			<img
				src={singleProduct?.large}
				alt={singleProduct?.name}
				className="w-full"
			/>
			<h1 className="text-lg font-bold py-2 lg:text-7xl md:text-4xl sm:text-2xl">
				{singleProduct?.name}
			</h1>
			<p className="text-xs lg:text-sm md:text-sm sm:text-xs text-slate-400">
				{singleProduct?.desc}
			</p>
			<div className="btn-container flex gap-5 text-xs py-5">
				<button
					className="bg-white border-2 border-white border-solid text-slate-900 p-2"
					onClick={() => {
						setIsOpen(true)
						if (
							products.findIndex(item => item.id === singleProduct?.id) === -1
						) {
							setProducts(prevList => [...prevList, singleProduct])
						}
					}}
				>
					Add To Cart
				</button>
				<Link to="/" className="p-2">
					Back
				</Link>
			</div>
		</div>
	)
}

export default SingleProduct
