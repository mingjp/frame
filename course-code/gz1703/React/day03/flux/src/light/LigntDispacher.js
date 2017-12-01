//将 action 丢给 store
import flux from 'flux';
import LightStore from './LightStore';

const LightDispacher = new flux.Dispatcher();


//type => action.type
LightDispacher.register(function(type){
    switch(type){
        case 'red':
            LightStore.changeRed();
            break;
        case 'green':
            LightStore.changeGreen();
            break;
        default:
            LightStore.changeYellow();
            break;
    }
})
// LightDispacher.dispatch('red');
export default LightDispacher;