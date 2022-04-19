import { useContext, useEffect, useState } from 'react'
import data from '../db.json'
import { Link } from 'react-router-dom'
import { CartContext } from './../Context/Context'

const FetchProducts = () => {
	const [products, setProducts] = useState([])
	const {
		setIsOpen,
		products: cartProducts,
		setProducts: setCartProducts
	} = useContext(CartContext)

	useEffect(() => {
		setProducts(data.products)
	}, [])

	return (
		<section className="flex flex-col gap-5">
			{products.map(({ small, name, id, desc }) => {
				return (
					<div
						className="product flex items-center justify-center lg:gap-10 md:gap-8 sm:gap-3 gap-3 my-5 lg:flex-nowrap md:flex-nowrap sm:flex-wrap flex-wrap lg:text-left md:text-left sm:text-center text-center"
						key={id}
					>
						<img src={small} alt={name} width="400" />
						<div className="info flex flex-col gap-3">
							<h1 className="font-bold text-2xl">{name}</h1>
							<p className="text-xs lg:w-96 md:w-64 w-full">
								{desc.substring(0, 200)}...
							</p>
							<div className="btn-container flex gap-5 text-xs lg:justify-start md:justify-start sm:justify-center justify-center">
								<Link
									to={`/${name.toLowerCase().split` `.join`-`}`}
									className="bg-transparent border-2 border-white border-solid p-2"
								>
									More Details
								</Link>
								<button
									className="bg-white border-2 border-white border-solid text-slate-900 p-2"
									onClick={() => {
										setIsOpen(true)
										if (cartProducts.findIndex(item => item.id === id) === -1) {
											setCartProducts(prevList => [
												...prevList,
												{ id, small, name, desc }
											])
										}
									}}
								>
									Add To Cart
								</button>
							</div>
						</div>
					</div>
				)
			})}
		</section>
	)
}

export default FetchProducts
