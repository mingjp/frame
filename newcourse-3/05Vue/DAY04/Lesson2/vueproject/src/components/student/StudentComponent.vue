<template>
	<div>
		<table class="table">
	      <thead>
	        <tr>
	          <th>#</th>
	          <th v-for="(key,value) in datasource[0]">{{value}}</th>
	        </tr>
	      </thead>
	      <tbody>
	        <tr v-for="(item, index) in datasource" key={{index}}>
	          <td>{{index + 1}}</td>
	          <td v-for="(value, key) in item">{{value}}</td>
	        </tr>
	      </tbody>
	    </table>
	</div>
</template>

<script type="text/javascript">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import http from '../../utils/HttpClient'
	export default {
		name: 'student',
		data: function(){
			return {datasource: []}
		},
		created: function(){
			http.get('fetchStudents')
			.then(response => {
				this.datasource = response
			}).bind(this)
		}
	}
</script>