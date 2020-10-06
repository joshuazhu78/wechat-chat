var app = getApp();
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    appInfo: {},
    login: false
  },
  onLoad: function (options) {
    var that = this;
    var vdata = {};
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          console.log("wx.getSetting success")
        }
      }
    })

  },
  bindGetUserInfo: function (e) {
    var that = this;
    var userinfo = e.detail;
    wx.login({
      success: function (res) {
        wx.getUserInfo({
          success: function (res) {
              app.setUserInfo(res.userInfo);
              wx.reLaunch({
                url: '/pages/index/index',
              })
            },
          fail: function (res) {
            // that.loginFail();
          }
        })
      }
    })
  }
})