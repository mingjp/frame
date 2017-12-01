import flux from 'flux'
import LightStore from './LightStore'
const LightDispatcher = new flux.Dispatcher();

//LightDispatcher 给派发器注册一个方法
LightDispatcher.register(function(type){
    switch(type){
        case 'red': 
            LightStore.changeRed();
            LightStore.change();
            break;
        case 'green':
            LightStore.changeGreen();
            LightStore.change();
            break;
        default:
            LightStore.changeYellow();
            LightStore.change();
            break;            
    }
    console.log(LightStore.type)
})

export default LightDispatcher