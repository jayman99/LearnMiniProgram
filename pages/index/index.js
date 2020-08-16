// pages/index/index.js
// getApp() 获取App()产生的示例对象
// const app = getApp()

// const name = app.globalData.name;
// const age = app.globalData.age;

// 注册一个页面，页面有自己的生命周期函数
Page({
  // -----------2. 初始化数据-------------
  data: {
    message: "QQ音乐",
    list: []
  },
  // -----------1. 监听页面的生命周期-------------
  // 页面被加载出来时
  onLoad() {
    console.log('onLoad')
    // 发送请求
    wx.request({
      // qq音乐热门推荐
      url: 'https://api.qq.jsososo.com/recommend/playlist',
      success: (res) => {
        console.log(res)
        const data = res.data.data.list;
        console.log(data)
        this.setData({
          list: data
        })
      }
    })
  },
  // 页面显示出来时
  onShow() {
    console.log('onShow')
  },
  // 页面初次渲染完成时
  onReady() {
    console.log('onReady')
  },
  // 页面被隐藏时
  onHide() {
    console.log('onHide')
  },
  onUnload() {
    console.log('onUnload')
  },
  // -----------3. 监听wxml中相关的一些事件-------------
  handleUserInfo(event) {
    console.log(event)
  },
  handleViewClick() {
    console.log("QQ音乐被点击了")
  },
  // -----------4. 监听其他事件-------------
  onPageScroll(obj) {
    console.log("页面被滚动了")
  },
  onReachBottom() {
    console.log("页面到底部了")
  },
  onPullDownRefresh() {
    console.log("页面下拉刷新")
  }
})