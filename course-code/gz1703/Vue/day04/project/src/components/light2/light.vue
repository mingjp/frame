<template>
    <div>
        <input type="button" :value="color" @click="changeLight" />
        <img :src="'./src/assets/imgs/' + this.$store.state.aa.color + '.jpg'" />
    </div>
</template>

<script>
    // import childlight from './childLight.vue'
    // import './light.scss';
    // import { mapGetters, mapActions } from 'vuex'
    export default {
        name: 'light',
        data: function(){
            return {
                color: 'red',
            }
        },
        methods: {
            changeLight: function(){
                // console.log(this);
                // this.color = this.color == 'red' ? 'green' : this.color == 'green' ? 'yellow' : 'red';
                this.$store.dispatch('changeLight', 1);
                console.log('component', this);
            }
        }
    }
</script>