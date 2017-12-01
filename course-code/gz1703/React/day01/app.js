var React = require('react');
var ReacMOM = require('react-dom');

var array = ["Tom", "Lucy", "Lily"];
ReactDOM.render(
    <div>
        <ul>
            {
                array.map(function(arg1, arg2){
                    return <li key={arg2}>{arg1}</li>;
                })
            }
        </ul>
        <ul><li>Sam</li></ul>
        <ul><li><input type="text" /></li></ul>
    </div>,
    document.getElementById('div1')
);