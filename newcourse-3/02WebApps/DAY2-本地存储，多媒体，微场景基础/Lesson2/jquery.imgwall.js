//jQuery 封装瀑布流图片墙
//作者: dk
//date: 2016-10-13
/*
$.imgwall({
    content: object, // jquery 容器
    col: n, // 列数
    callback: function(data){}//回调方法 => 有参数回传
})
*/
(function ($) {
    //jQuery 扩展的插件名
    //opts => obj{}
    $.imgwall = function (opts) {
        var _default = {
            content: null,
            col: 3
        };
        //jQuery 扩展方法（两个对象合并）对象克隆（产生新的对象）
        //加了 true 表示深度克隆
        opts = $.extend(true, _default, opts);
        var col = opts.col;
        var obj = {};
        var _width = $(window).width() / col;
        $('img').each(function (i, img) {
            /*
            var obj = {
                0:{left: 0, top: 0, width: 300},
                1:{left: obj[i - 1].left + obj[i - 1].width},
                2:{left: obj[i - 1].left + obj[i - 1].width},
                3:{left: obj[i - col].left, top: obj[i - col].top + $('img').eq(i - col).height()}
            */
            var _obj = {
                left: i < 1 ? 0 : (i < col ? obj[i - 1].left + obj[i - 1].width : obj[i - col].left),
                top: i < col ? 0 : obj[i - col].top + $('img').eq(i - col).height(),
                width: _width,
            }
            obj[i] = _obj;
            $(img).css(_obj);
        });
        if (typeof opts.callback == 'function') {
            opts.callback(obj);
        }
    }
})(jQuery)