import React from 'react'
import { Route } from 'react-router'
import MoviesHomePage from './MoviesHomePage'
export default () => {
	return (
		<Route path="/" component={ MoviesHomePage }/>
	)
}
