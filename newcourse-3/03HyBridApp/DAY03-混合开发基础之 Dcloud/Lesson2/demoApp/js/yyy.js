/*摇一摇*/ 
$(document).ready(function() { 
	//判断系统是否支持html5摇一摇的相关属性 
    if (window.DeviceMotionEvent){ 
    	var speed = 25; 
        var x = t = z = lastX = lastY = lastZ = 0; 
        window.addEventListener('devicemotion', 
        function () { 
            var acceleration = event.accelerationIncludingGravity; 
            x = acceleration.x; 
            y = acceleration.y; 
            if (Math.abs(x - lastX) > speed || Math.abs(y - lastY) > speed) { 
                // 判断要不要执行 
                if($('.home_mask').is(':visible')) {
                	return false;
                }
                //摇一摇后js代码 
                $('.home_page .ico').addClass('wobble'); 
                 
                 //手机震动1秒 
	            if (navigator.vibrate) { 
	                navigator.vibrate(1000);//震动1000毫秒 
	            } else if (navigator.webkitVibrate) { 
	                navigator.webkitVibrate(1000); 
	            } 
            }; 
            lastX = x; 
            lastY = y; 
        },false); 
    } else { 
	    alert('not support mobile event'); 
	} 
}); 