//发生改变，并返回到 view 层
import events from 'events';
const emitter = events.EventEmitter;

export default Object.assign({}, emitter.prototype, {
    type: '',
    changeRed(){
        this.type = 'red';
    },
    changeGreen(){
        this.type = 'green';
    },
    changeYellow(){
        this.type = 'yellow';
    },
    change(){
        this.emit('change');
    },
    addEvent(cb){
        this.on('change', cb)
    }
})