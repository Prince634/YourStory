const express = require('express')
const app = express();
const path = require('path');
const http = require('http');
const fs = require('fs');
var ejs  = require('ejs');
var compression = require('compression')
import  ReactDOMServer from 'react-dom/server'
import { getBundles } from 'react-loadable-ssr-addon';
import { StaticRouter } from 'react-router-dom'
import App from './src/routes.js'
import React from 'react';
import { renderStylesToString } from 'emotion-server';
import Loadable from 'react-loadable';
const stats = JSON.parse(fs.readFileSync(`./clientBundles/assets-loadable.json`, 'utf-8'))

let split_bundles = [];
var files = fs.readdirSync('./clientBundles')
for(var i =0; i<files.length;i++){
	if(files[i] ==='main.bundle.js'){
		split_bundles.push(`${files[i]}`)	
	}
}
app.use(compression());
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);
app.use(express.static('views'));
app.use(express.static('src/assets'));
app.use(express.static('clientBundles'));
app.use(express.static(path.resolve(__dirname, 'src/assets')));

app.get('/amp/story', function(req, res){
	let dataElem = ''
	if(req.headers.cookie){
		let c = req.headers.cookie.split(';');
		for(let i=0;i<c.length;i++){
			if(c[i].includes('dataElem')){
				dataElem = c[i].split('=')[1];
				break;
			}
		}
	}
	let data = JSON.parse(dataElem);
	console.log(data);
	var template = fs.readFileSync('amp.ejs', 'utf-8');
	var html = ejs.render ( template , {data} );
	fs.writeFileSync("ampFinal.ejs", html, 'utf8');
	res.render('indexAmp.ejs', {data})	

})

app.get('*', (req, res)=>{
	let modules = [];
	const content = ReactDOMServer.renderToString(
		<Loadable.Capture report={moduleName => modules.push(moduleName)}>
		  <StaticRouter location={req.url}>
			<App/>
		  </StaticRouter>
		</Loadable.Capture>
		)
	let bundles = getBundles(stats, modules)
	bundles = bundles.js?bundles.js:bundles
	res.render('index.ejs', { htmlContent: renderStylesToString(content), bundles, split_bundles })
})

Loadable.preloadAll().then(() => {
	app.listen(4005, function () {
	  console.log('Example app listening on port 4005!\n');
	})
})
