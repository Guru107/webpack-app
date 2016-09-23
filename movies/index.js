import React,{ Component } from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { Router } from 'react-router'
import MoviesHomePage from './MoviesHomePage'
import getRoutes from './routes'
class MoviesApp extends Component {
	render() {
		return (
			<div>
				<Router history={browserHistory} routes={getRoutes()}/>
			</div>

		)
	}
}

render(<MoviesApp/> , document.getElementById('app-mount'))
