// pages/detail/detail.js
Page({
  data: {

  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onLoad: function(options) {
    console.log(options)
  },
  onUnload: function () {
    console.log('页面退出')
    // 1.获取首页的页面对象
    // getCurrentPages()当前所有栈的页面
    const pages = getCurrentPages()
    // console.log(pages)
    const index = pages[pages.length - 2]

    // 2.调用页面对象的setData
    index.setData({
      title: '嘿嘿嘿'
    })
  },
  handleBackHome() {
    wx.navigateBack({
      delta: 1
    })
  }
})