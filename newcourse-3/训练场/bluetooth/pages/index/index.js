/**
 * 搜索设备界面
 */
Page({
  data: {
    BluetoothList: []
  },
  onLoad: function () {
    if(!wx.openBluetoothAdapter){
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
      return;
    }
    var self = this;
    //初始化蓝牙适配器
    wx.openBluetoothAdapter({
      success: function(res){
        //获取本机蓝牙适配器状态
        wx.getBluetoothAdapterState({
          success: function(res){
            console.log('获取本机蓝牙适配器状态-成功');
            wx.showLoading({
              title: "查找蓝牙设备",
              mask: true
            })
            //开始搜寻附近的蓝牙外围设备
            wx.startBluetoothDevicesDiscovery({
              services: [],
              success: function(res){
                console.log('开始搜寻附近的蓝牙外围设备-成功');
                console.log(res);      
                //监听寻找到新设备的事件
                wx.onBluetoothDeviceFound(function(devices) {
                  if(devices.name){
                    var _BluetoothList = self.data.BluetoothList;
                    _BluetoothList.splice(-1, 0, devices);
                    self.setData({BluetoothList: _BluetoothList});
                    console.log(self.data);
                  }
                  // callback
                })
                // 获取所有已发现的蓝牙设备，包括已经和本机处于连接状态的设备
                // wx.getBluetoothDevices({
                //   services: [],
                //   success: function(res){
                //     console.log('获取所有已发现的蓝牙设备-成功');
                //     console.log(res);
                //   },
                //   fail: function(res) {
                //     console.log('获取所有已发现的蓝牙设备-失败');
                //     console.log(res);
                //   },
                //   complete: function(res) {
                //     // complete
                //   }
                // })   
              },
              fail: function(res) {
                console.log('开始搜寻附近的蓝牙外围设备-失败');
                console.log(res);
              },
              complete: function(res) {
                wx.hideLoading();
              }
            })
          },
          fail: function(res) {
            console.log('获取本机蓝牙适配器状态-失败');
            console.log(res);
          },
          complete: function(res) {
            // complete
          }
        })
      },
      fail: function(res) {
        wx.showModal({
          title: '提示',
          content: '当前设备没有打开蓝牙，请先打开蓝牙。'
        })
      },
      complete: function(res) {
        // complete
      }
    })
  },
  connectBluetooth: function(event){
    console.log(event.target.dataset);
    wx.redirectTo({
      url: '../connect/index?deviceId=' + event.target.dataset.deviceId + '&name=' + event.target.dataset.name,
      success: function(res){
        // success
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  }
})
