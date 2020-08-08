import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes.js'
import { BrowserRouter } from 'react-router-dom'
import Loadable from 'react-loadable';


Loadable.preloadReady().then(() => {
	ReactDOM.hydrate(<BrowserRouter><Routes/></BrowserRouter>,document.getElementById('app'))
})


//ReactDOM.render(<Routes/>, document.getElementById('app'));
