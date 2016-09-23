import React, { Component } from 'react'

class EventsHtml extends Component{
	render(){
		
		const component = this.props.component
		return (
			<html>
				<head>
					<title>{'Events Home Page'}</title>

				</head>
				<body>
					<div id='app-mount' dangerouslySetInnerHTML={{__html:component}}></div>
					<script src='http://localhost:8080/assets/events.js' charSet='UTF-8'/>
				</body>
			</html>
		)
	}
}
export default EventsHtml
