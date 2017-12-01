import LightDispatcher from './LightDispatcher'

export default function change(type){
    console.log(type)
    //收到来自用户的 action，然后进行 action 派发
    //要用到派发器 => dispacher
    //派发器会把对应的 action 派发到 stroe
    //stroe 会根据派发器派发过来的 action 类型进行响应
    LightDispatcher.dispatch(type)
    // this.setState({src: value})    
    
}