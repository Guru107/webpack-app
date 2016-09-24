import React, { Component } from 'react'

class MoviesHtml extends Component{
	render(){

		const component = this.props.component
		return (
			<html>
				<head>
					<title>{'Movies Home Page'}</title>
					<script src='http://localhost:8080/assets/manifest.js' charSet='UTF-8'/>
				</head>
				<body>
					<div id='app-mount' dangerouslySetInnerHTML={{__html : component}}></div>
					<script src='http://localhost:8080/assets/movies.js' charSet='UTF-8' async/>
				</body>
			</html>
		)
	}
}
export default MoviesHtml
