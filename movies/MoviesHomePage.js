import React ,{ Component } from 'react'
import { Link } from 'react-router'
class MoviesHomePage extends Component {
	render(){
		return (
			<div>
				<h1>{'Movies Home Page'}</h1>
				<a href='/events'>{'Events'}</a>
			</div>

		)
	}
}

export default MoviesHomePage
