<template>
    <div>
        <input type="button" :value="color" @click="changeLight" />
        <img :src="'./src/assets/imgs/' + color + '.jpg'" />
        <div>
            <childlight ref="ch"></childlight>
        </div>
    </div>
</template>

<script>
    import childlight from './childLight.vue'
    // import './light.scss';
    export default {
        name: 'light',
        data: function(){
            return {
                color: 'red',
                show: true
            }
        },
        methods: {
            changeLight: function(){
                console.log(this);
                this.color = this.color == 'red' ? 'green' : this.color == 'green' ? 'yellow' : 'red';
            }
        },
        components: {
            childlight
        }
    }
</script>