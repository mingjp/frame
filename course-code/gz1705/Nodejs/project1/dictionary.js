var dictionary = {
	en: {
		indexid: "Index ID",
		name: "Name",
		age: "age"
	},
	cn: {
	 	indexid: "编码",
	 	name: "名称",
	 	age: "年龄"
	 }
}

var permission = {
	product: {
		"0": ["indexid", "name"],
		"1": ["indexid", "name", "age"],
	}
}



var lan = "en";

var dataset = [{index: 1, name: "张三", age: 18}, {indexid: 2, name: "李四", age: 20}];


$.each(dataset, function(index, item){
	//0
	var usertype = request.session.userType;//0, 1
	var tr = $("<tr></tr>");
	for(var key in item){
		if(permission.product[usertype].indexOf(key) > -1){
			$('<th></th>').text(dictionary[lan][key] || key).appendTo(tr);
		}
	}
})
<thead>
	<tr>
		<th>编码</th>
		<th>名称</th>
		<th>age</th>
	</tr>
</thead>

request.session.loginInfo = {
	username: 'dk',
	usertype: 1,
	userid: 1
}