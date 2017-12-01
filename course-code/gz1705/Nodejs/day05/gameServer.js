var io = require('socket.io')();
//events

var onlinePersons = {};

io.on("connection", function(client){
	// console.log(123);
	client.on('ServerLogin', function(_person){
		var personObj = JSON.parse(_person);
		onlinePersons[personObj.id] = personObj;

		io.emit("CreatePersons", JSON.stringify(onlinePersons));
		console.log(onlinePersons);
	})

	client.on("ServerMove", function(_person){
		var personObj = JSON.parse(_person);
		onlinePersons[personObj.id] = personObj;
		io.emit("ClientMove", JSON.stringify(personObj));
	})
})

io.listen(888);