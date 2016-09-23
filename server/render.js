import React from 'react'
import { match, RouterContext } from 'react-router'
import { renderToString } from 'react-dom/server'
import getMoviesRoutes from '../movies/routes'
import getEventsRoutes from '../events/routes'
import MoviesHtml from './MoviesHtml'
import EventsHtml from './EventsHtml'

export default (req,res) => {
	const moviesRoutes = getMoviesRoutes()
	const eventsRoutes = getEventsRoutes()
	let routes = null,
		HtmlComponent = null
	console.log(req.originalUrl)
	if(req.originalUrl.indexOf('/events') > -1){
		routes = getEventsRoutes()
		console.log('events -  match')
		console.log(routes)
		match({routes, location:req.originalUrl},(error,redirectUrl,renderProps)=>{
			if(renderProps){
				const component = renderToString(
					<div>
						<RouterContext {...renderProps} />
					</div>)
				const html = `<!DOCTYPE html>${renderToString(<EventsHtml component = {component} />)}`
				res.status(200).send(html)
			}
		})
	}else{
		routes = getMoviesRoutes()
		console.log('movies - match')
		console.log(routes)
		match({routes, location:req.originalUrl},(error,redirectUrl,renderProps)=>{
			if(renderProps){
				const component = renderToString(
					<div>
						<RouterContext {...renderProps} />
					</div>)
				const html = `<!DOCTYPE html>${renderToString(<MoviesHtml component = {component} />)}`
				res.status(200).send(html)
			}
		})
	}


}
