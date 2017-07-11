//index.js
//获取应用实例
Page({
  data: {
    open: false
  },
  tap_ch: function (e) {
    if (this.data.open) {
      this.setData({
        open: false
      });
    } else {
      this.setData({
        open: true
      });
    }
  }
})
