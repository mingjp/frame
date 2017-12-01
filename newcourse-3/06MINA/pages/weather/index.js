//index.js  
//注册页面
//获取在 app.js 注册的程序
Page( {  
  data: {  
    winWidth: 0,  
    winHeight: 0,  
    currentTab: 0,
    citys: ['北京', '上海', '广州', '深圳'],
    loadingHidden: false   
  },  
  onLoad: function() {  
    var that = this;  
    wx.getSystemInfo( {  
      success: function( res ) {  
        that.setData( {  
          winWidth: res.windowWidth,  
          winHeight: res.windowHeight  
        });  
      }  
    });  
  },  
  bindChange: function( e ) {  
    var that = this;  
    console.log(e)
    that.setData( { currentTab: e.detail.current });  
  
  },  
  swichNav: function( e ) {  
    var that = this;  
    if( this.data.currentTab === e.target.dataset.current ) {  
      return false;  
    } else {  
      that.setData( {  
        currentTab: e.target.dataset.current  
      })  
      that.initWeather({loadingHidden: false});
    }  
  },
  initWeather: function(){
    var _self = this;
    //ajax
    wx.request({
      url: 'https://wthrcdn.etouch.cn/weather_mini',
      header: {'content-type': 'application/x-www-form-urlencoded; charset=utf-8'},
      data: {city: _self.data.citys[_self.data.currentTab]},
      method: 'GET',
      success: function(res){
        if(res.statusCode == 200){
          var _data = res.data.data;
          for(var i = 0; i < _data.forecast.length; i++){
            _data.forecast[i].high = _data.forecast[i].high.replace('高温', '').replace(' ', '').replace('℃', '°');
            _data.forecast[i].low = _data.forecast[i].low.replace('低温', '').replace(' ', '').replace('℃', '°');
          }
          _self.setData({weatherData: _data, loadingHidden: true});
          console.log(_data);
        }
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  },
  onReady: function(){
    this.initWeather();
  }  
})