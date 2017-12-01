export default {
    state: {
        name: 'Home'
    },
    actions: {
        login: function(){
            // console.log('login ajax');
            this.mutations.login();
        }
    },
    mutations: {
        login: function(){
            //ajax
            console.log('login mutations');
        }
    }
}