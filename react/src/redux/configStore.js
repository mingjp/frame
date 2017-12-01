import {createStore,applyMiddleware} from 'redux';
import userReducer from '../component/userReducer';
import {ajaxMiddleware} from './ajaxMiddleware'

export default function configStore (){
	console.log('store');
	let middleware = applyMiddleware(ajaxMiddleware)
	const store = createStore(userReducer,middleware);
	return store;
}