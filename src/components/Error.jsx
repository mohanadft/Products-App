import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
	return (
		<div className="flex justify-center items-center w-full h-96 text-center">
			<div>
				<h1 className="text-5xl font-bold">Error 404 😓</h1>
				<p className="text-xs pt-2">Sorry, This Page Not Found.</p>
				<Link
					to="/"
					className="text-xs mt-2 bg-slate-800 py-1 px-2 rounded-md ease-linear duration-300 hover:bg-transparent border-2 border-solid border-slate-800 flex justify-center items-center w-fit mx-auto"
				>
					&larr; Back
				</Link>
			</div>
		</div>
	)
}

export default Error
