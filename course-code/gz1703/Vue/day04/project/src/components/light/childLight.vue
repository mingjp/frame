<template>
    <div>
        <h1>child Light</h1>
        <input type="button" value="child" @click="child"/>
    </div>  
</template>

<script>
    export default {
        name: 'childlight',
        methods: {
            child: function(){
                console.log(this);
                this.$parent.changeLight();
            }
        }
    }
</script>