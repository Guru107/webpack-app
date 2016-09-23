import React from 'react'
import { Route } from 'react-router'
import EventsHomePage from './EventsHomePage'
export default () => {
	return (
		<Route path="/">
			<Route path="events" component={ EventsHomePage } />
		</Route>
	)
}
