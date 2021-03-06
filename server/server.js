import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import path from 'path'
import render from './render'

let app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

const publicPath = path.resolve(__dirname, '../public')

app.use('/assets',express.static(publicPath))
app.use('*',render)
app.listen(4000,()=>{
	console.log(`Listening to 4000`)
})
