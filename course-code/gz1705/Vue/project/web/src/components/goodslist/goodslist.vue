<template>
	<div>
		<h1>goods list</h1>
		{{this.$store.state.Home.dataset}}
		{{this.$store.state.Goods.dataset}}
		<input type="button" value="Sub-添加商品" @click="subAddItem">
		<datagrid api="getgoods" cols="contents,name,price,num"></datagrid>
	</div>
</template>

<script type="text/javascript">
	import datagrid from '../datagrid/datagird.vue'
	//generate three buttons
	//$prent
	export default {
		components: {
			datagrid
		},
		methods: {
			subAddItem: function(){
				this.$store.dispath('login', {})
				console.log(this);
				this.$store
			}			
		}
	}
</script>