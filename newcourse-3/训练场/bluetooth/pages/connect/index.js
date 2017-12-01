// pages/connect/index.js
Page({
  data:{},
  onLoad:function(options){
    console.log(options.deviceId);
    wx.showLoading({
      title: "正在配对",
      mask: true
    })
    //连接低功耗蓝牙设备
    wx.createBLEConnection({
      deviceId: options.deviceId,
      success: function(res){
        console.log('连接低功耗蓝牙设备-成功');
        console.log(res);
        //获取蓝牙设备所有 service（服务）
        wx.getBLEDeviceServices({
          deviceId: options.deviceId,
          success: function(res){
            console.log('获取蓝牙设备所有 service（服务）-成功');
            console.log(res);
          },
          fail: function(res) {
            // fail
          },
          complete: function(res) {
            // complete
          }
        })
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        wx.hideLoading();
      }
    })
  }
})