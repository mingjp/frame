import http from '../untils/HttpClient';

export function ajaxMiddleware(middlewareAPI) {
    return function(dispatch){
        return function(action){
            const {types, method = "get", url ,data} = action;

            if (!url || !method) {
                return dispatch(action)
            }
           
            middlewareAPI.dispatch({
                type: 'BeforReqeust',
            });

            if(url){

                middlewareAPI.dispatch({
                    type: 'Requested',
                    dataset: {data:[{name:'mjp',age:18},{name:'mjd',age:15}]}
                }); 
                
            }
        }
    }
}