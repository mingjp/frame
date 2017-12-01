import React from 'react';
import ReactDOM from 'react-dom'
import {Router,Route,Link,hashHistory,IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import router from './route/index';
import configStore from './redux/configStore';

const store = configStore();

ReactDOM.render(
	<Provider store ={store}>
		<Router history={hashHistory} routes = {router}/>
	</Provider>
	,document.getElementById('app'))