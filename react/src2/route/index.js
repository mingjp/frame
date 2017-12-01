import {Router,Route,Link,hashHistory,IndexRoute} from 'react-router'
import React from 'react'
import StudentComponent from '../component/student/StudentComponent'
console.log(StudentComponent)
export default(
	<Route path="/student" component={StudentComponent}></Route>
)