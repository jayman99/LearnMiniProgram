// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '不良人',
    age: 18,
    friends: [{
        name: '园园',
        tel: 110,
        age: 20
      },
      {
        name: '团团',
        tel: 119,
        age: 21
      },
      {
        name: '明明',
        tel: 120,
        age: 22
      },
      {
        name: '亮亮',
        tel: 114,
        age: 19
      }
    ],
    num: 0
  },
  handelBtnClick1() {
    // 1. 错误做法：界面不会刷新的
    // this.data.num += 1
    // console.log(this.data.num)

    // 2. this.setData()
    this.setData({
      num: this.data.num + 1
    })
  },
  handelBtnClick2() {
    this.setData({
      num: this.data.num - 1
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})