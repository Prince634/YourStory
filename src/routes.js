import React from 'react'
import { Switch, Route } from 'react-router-dom'
import loadable from 'react-loadable';
import Header from '@components/Header'

const HomePage = loadable({
	loader: () => import('@pages/HomePage'),
	loading: ()=><p>Loading</p>,
	modules: ['@pages/HomePage'],
  	webpack: () => [require.resolveWeak('@pages/HomePage')]
})

const ListingPage = loadable({
	loader: () => import('@pages/ListingPage'),
	loading: ()=><p>Loading</p>,
	modules: ['@pages/ListingPage'],
  	webpack: () => [require.resolveWeak('@pages/ListingPage')]
})

const CreateStory = loadable({
	loader: () => import('@pages/CreateStory'),
	loading: ()=><p>Loading</p>,
	modules: ['@pages/CreateStory'],
  	webpack: () => [require.resolveWeak('@pages/CreateStory')]
})



const RouteHandler = (props)=>{
	const { history, Route }= props;
	if(!Route.header){
		return <Route.component {...props}/>
	}
	return 	<React.Fragment>
				<Header history={history} title={Route.title}/>
				<Route.component {...props} />
			</React.Fragment>
}
const routes = [
	{path: '/', component: HomePage, header: true},
	{path: '/list', component: ListingPage},
	{path: '/createMyStory', component: CreateStory, header: true, title: 'Create Your Story'}
]
const Routes = (props)=>{
	return(
		<Switch>
			{
				routes.map((route, i)=>{
					return <Route key={i} exact path={route.path} render={(props)=><RouteHandler {...props} Route={route}/>} />
				})
			}
		</Switch>
		
		)
}

export default Routes;