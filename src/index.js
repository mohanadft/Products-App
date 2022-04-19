import React from 'react'
import * as ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Context from './Context/Context'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(
	<Context>
		<App />
	</Context>
)
