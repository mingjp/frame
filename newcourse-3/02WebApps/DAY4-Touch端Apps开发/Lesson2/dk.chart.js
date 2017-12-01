function DKChart(_container, _opts){
	var _defalut = {
		x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
		y: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200]

	}
	//x 轴的基础单位
	var baseX = 48;
	//y 轴的基础单位
	var baseY = 48;

	//只接受 id
	var container = document.getElementById(_container);

	//初始化图表（生成图表）
	var init = function(){
		//图表 div
		var div = document.createElement('div');
		div.style.height = baseY * (_defalut.y.length - 1) + 'px';
		div.style.width = baseX * _defalut.x.length + 'px';
		div.className = 'dkChart';
		//生成 y 轴
		var ulY = document.createElement('ul');
		ulY.className = 'chartY';
		_defalut.y.forEach(function(item, index){
			var li = document.createElement('li');
			li.innerText = _defalut.y[_defalut.y.length - index - 1];
			li.style.left = '-52px';
			li.style.top = index * baseY - 10 + 'px';
			li.style.textAlign = 'right';
			li.style.width = '42px';
			ulY.appendChild(li);
		})

		//生成 x 轴
		var ulX = document.createElement('ul');
		ulX.className = 'chartX';
		var ulColumn = document.createElement('ul');
		ulColumn.className = 'chartColumn';
		
		_defalut.x.forEach(function(item, index){
			var li = document.createElement('li');
			li.innerText = item;
			li.style.bottom = '-20px';
			li.style.left = index * baseX + baseX / 2 + 'px';			
			ulX.appendChild(li);

			//生成柱子
			li = document.createElement('li');
			li.style.bottom = 0;
			li.style.height = '50%';
			li.style.left = index * baseX + baseX / 2 + 'px';
			li.style.width = '20px';
			li.style.backgroundColor = '#ccc';

			ulColumn.appendChild(li);
		})

		div.appendChild(ulX);
		div.appendChild(ulColumn);

		div.appendChild(ulY);

		container.appendChild(div);
	}

	init();
}

//[20,30...]
//参数是柱子的高度，下标和柱子的下标一致
DKChart.prototype.update = function(_args){
	var liColumns = document.getElementsByClassName('chartColumn')[0].children;
	for(var i = 0; i < liColumns.length; i++){
		liColumns[i].style.height = _args[i] + '%';
	}

}