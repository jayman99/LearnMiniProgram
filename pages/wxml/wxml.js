// pages/wxml/wxml.js
Page({
  data: {
    message: '你好，小程序！',
    firstname: 'Bryant',
    lastname: 'Kobe',
    age: 18,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score: 45,
    movies: ['星际穿越', '变形金刚', '哪吒之魔童降世'],
    nums: [
      [0, 1, 2, 3],
      [4, 5, 6, 7],
      [8, 9, 1, 2]
    ],
    letters: ['a', 'b', 'c', 'd']
  },
  onLoad() {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    }, 1000)
  },
  handleSwitchColor() {
    console.log("----------")
    this.setData({
      isActive: !this.data.isActive
    })
  },
  handleSwitchShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  handleIncrement() {
    this.setData({
      score: this.data.score + 10
    })
  }
})