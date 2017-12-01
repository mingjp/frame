import {createStore,applyMiddleware} from 'redux'
import StudentReducer from '../component/student/StudentReducer'
import {ajaxMiddleware} from './ajaxMiddleware'

export default function configStore(){
	let middleware = applyMiddleware(ajaxMiddleware)
	const store = createStore(StudentReducer,middleware);
	return store;
}