//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    date: '请选择',
    date1: '请选择',
  },
  changeDate(e) {
      this.setData({
        date: e.detail.value
      });
  },
  changeDate1(e) {
    console.log(e)
    this.setData({
      date1: e.detail.value
    });
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
