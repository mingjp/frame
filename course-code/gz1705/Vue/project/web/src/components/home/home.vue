<template>
	<div>
		<div class="toolbar">
			<input type="button" value="Parent-添加商品" @click="addItem">
		</div>
		<div>
			<router-view></router-view>
		</div>
		
	</div>
</template>

<script type="text/javascript">
	//$children
	export default {
		data: function(){
			return {
				name: 'ParentName'
			}
		},
		methods: {
			addItem: function(){
				console.log(this);
			},
			generateToolBar: function(obj){
				//动态生成按钮
			}
		}
	}
</script>