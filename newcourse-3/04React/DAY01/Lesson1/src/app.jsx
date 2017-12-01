var React = require('react'); // => react.js
var ReactDOM = require('react-dom'); // => react-dom.js

//div1
ReactDOM.render(<h1>Div1：Tom</h1>, document.getElementById('div1'));

//div2
var name = 'Tom';
ReactDOM.render(<h1>Div2：{name}</h1>, document.getElementById('div2'));

//div3
var obj = {name: 'Tom'};
ReactDOM.render(<h1>Div3：{obj.name}</h1>, document.getElementById('div3'));

//div4
var array = ['Tom', 'Sam'];
ReactDOM.render(
	<div>{
		array.map(function(index, elem) {
			return <h1 key={index}>Div4：{index}</h1>;
		})
	}</div>, 
	document.getElementById('div4')
);