import * as lightConstant from './lightConstant'

export default function lightReducer(state = {color: 'red'}, action){
    let reState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case lightConstant.COLOR_GREEN:
            reState.color = 'green';
            break;
        case lightConstant.COLOR_RED:
            reState.color = 'red';
            break;
        case lightConstant.COLOR_YELLOW:
            reState.color = 'yellow';
            break;
        default:
            reState.color = 'red';
            break;                        
    }
    return reState;
}