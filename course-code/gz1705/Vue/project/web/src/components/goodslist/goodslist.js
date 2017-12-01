export default {
    state: {
        name: 'GoodsList',
        dataset: []
    },
    actions: {
        getGoods: function(store, params){
            store.commit('getGoods', param)
            // this.mutations.getGoods();
        },
        login:
    },
    mutations: {
        getGoods: function(){
            //ajax
            console.log('GoodsList mutation');
            this.state.dataset = response.data
        }
    }
}