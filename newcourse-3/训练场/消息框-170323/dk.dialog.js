/*
1、显示
2、销毁
3、配置标题
4、配置内容
5、配置按钮
6、自定义宽高
 */
//this 事件源本身
var DKDialog = function(){
	var self = this;
	var _default = {
		title: '标题',
		content: '内容',
		buttons: [{name: 'colse', events: function(_obj){
			console.log(_obj);
			self.close();
		}}]
	}

	this.opts = _default;
}

DKDialog.prototype.init = function(){
	var htmlStr = '<div class="dkMask">';
	htmlStr += '<div class="dkDialog">';
	htmlStr += '<div>'+ this.opts.title +'</div>';
	htmlStr += '<div>' + this.opts.content + '</div>';
	htmlStr += '<div></div>';
	htmlStr += '</div>';	
	htmlStr += '</div>';
	var div = document.createElement('div');
	div.innerHTML = htmlStr;

	var dkMask = div.children[0];
	var dkDialog = dkMask.children[0];
	var btnContent = dkDialog.lastElementChild;

	this.opts.buttons.forEach(function(item, index){
		var button = document.createElement('button');
		button.innerText = item.title || item.name;
		button.onclick = function(){
			item.events(div);
		}
		btnContent.appendChild(button);
	})

	document.body.appendChild(div);

	this.divContent = div;
	return this.divContent;
}

DKDialog.prototype.close = function(_dialog){
	document.body.removeChild(_dialog || this.divContent);
}