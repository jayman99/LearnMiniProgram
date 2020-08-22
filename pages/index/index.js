// pages/index/index.js
import request from '../../service/network.js'
Page({
  data: {
    
  },
  onLoad: function (options) {
    // ----------1.原生发送网络请求
    this.get_data_origin()

    //-----------2.使用封装的request发送网络请求
    // Promise最大的好处就是防止出现回调地狱
    request({
      url: 'http://httpbin.org/get'
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
  get_data_origin() {
    // 1.发送最简单的get请求
    // wx.request({
    //   url: 'http://httpbin.org/get',
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })

    // 2.发送携带参数的get请求
    // wx.request({
    //   url: 'http://httpbin.org/get',
    //   data: {
    //     type: 'sell',
    //     page: 1
    //   },
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })

    //3.发送post请求且携带参数
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method: 'post',
    //   data: {
    //     name: '不良人',
    //     age: 18
    //   },
    //   success: function(res) {
    //     console.log(res)
    //   },
    //   fail: function(err) {
    //     console.log(err)
    //   }
    // })
  }
})