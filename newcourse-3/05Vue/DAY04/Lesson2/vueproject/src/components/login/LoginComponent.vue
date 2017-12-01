<template>
	<div class="loginContent">
		<form class="form-horizontal">
		  <div class="form-group">
		    <label for="inputEmail3" class="col-sm-2 control-label">用户名</label>
		    <div class="col-sm-10">
		      <input class="form-control" v-model="name">
		    </div>
		  </div>
		  <div class="form-group">
		    <label for="inputPassword3" class="col-sm-2 control-label">密码</label>
		    <div class="col-sm-10">
		      <input type="password" class="form-control" v-model="pwd">
		    </div>
		  </div>
		  <div class="form-group">
		    <div class="col-sm-offset-2 col-sm-10">
		    	<input type="button" value="登录" class="btn btn-default" @click="login">
		    </div>
		  </div>
		</form>
	</div>
</template>

<script type="text/javascript">
	import http from '../../utils/HttpClient'
	import VueRouter from '../../router/index'
	import 'bootstrap/dist/css/bootstrap.min.css'

	export default {
		name: 'home',
		data: function(){
			return {
				name: 'Tom',
				pwd: 123456
			}
		},
		methods:{
			login: function(){
				http.post('login', {username: this.name, password: this.pwd})
				.then(response => {
					if(response.state){
						VueRouter.push({name: 'home'})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.loginContent{
		width: 400px;
		margin: auto;
	}
</style>