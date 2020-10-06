//app.js
App({
  onLaunch: function () {
    var that = this;
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.checkSession({
      success: function(){
        that.login();
      },
      fail: function(){
        console.log("wx.checkSession fail")
      }
    })
  },
  getUserInfo:function(cb){
    console.log("App.getUserInfo")
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      console.log("wx.login")
      that.login()
    }
  },
  setUserInfo:function(data){   //将用户信息缓存保存
    this.globalData.userInfo = data;
    wx.setStorage({
      key:"userInfo",
      data:data
    })
  },
  login:function(){
    wx.reLaunch({
      url: '/pages/login/login'
    })
  },
  globalData:{
    userInfo:null
  }
})