//state action mutation(reducer) store 

//state
//action
//mutation
//modules => 将 action mutaion state 联系在一起
import Vue from 'vue'

const state = {
    color: 'red'
}

const actions = {
    changeLight: (store) => {
        //发起改变图片指令
        //调用 matations
        // console.log('action', store);
        store.commit('changeLight')
    }
}

const mutations = {
    changeLight: (store) => {
        // console.log('mutation');
        // store.state.color
        state.color = state.color == 'red' ? 'green' : state.color == 'green' ? 'yellow' : 'red';
        // console.log(state)
    }
}

export default {
    state,
    actions,
    mutations
}