import LightDispcher from './LigntDispacher';

export default function change(type){
    //将 type 丢给派发器
    LightDispcher.dispatch(type);
}