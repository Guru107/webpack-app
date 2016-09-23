import React,{ Component } from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { Router } from 'react-router'
import EventsHomePage from './EventsHomePage'
import getRoutes from './routes'
class EventsApp extends Component {
	render(){
		return (
			<div>
				<Router history={browserHistory} routes={ getRoutes() }/>
			</div>

		)
	}
}

render(<EventsApp/> , document.getElementById('app-mount'))
