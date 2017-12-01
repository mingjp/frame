import http from '../utils/HttpClient';

export function ajaxMiddleware(middlewareAPI) {
    return function(dispatch){

        return function(action){
        	console.log('ajax')
            const {types, method = "get", url ,data} = action;

            if (!url || !method) {
            	console.log(12)
                return dispatch(action)
            }
           
            middlewareAPI.dispatch({
                type: 'BeforReqeust',
            });

            if(url){
                http[method](url).then(response =>{
                    console.log(response);
                })
            	console.log(1234)
                middlewareAPI.dispatch({
                    type: 'Requested',
                    dataset: {data:[{name:'mjp',age:18},{name:'mjd',age:15}]}
                }); 
                
            }
        }
    }
}