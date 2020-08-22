const TOKEN = 'token'

App({
  // 对象： 小程序关闭就会被回收
  globalData: {
    token: ''
  },
  onLaunch: function() {
    // 一.先从缓存中取token
    const token = wx.getStorageSync(TOKEN)

    // 二.判断token是否有值
    if(token && token.length !== 0) {
      // 验证token 是否过期
      this.check_token(token)
    } else {
      // 登录操作
      this.login()
    }
  },
  login() {
    // 登录操作
    console.log('执行登录操作')
    wx.login({
      // code只有5分钟的有效期
      success: (res) => {
        // console.log(res)
        // 1.获取code
        const code = res.code;

        // 2.将code发送到我们的服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code: code
          },
          success: (res) => {
            console.log(res)
            // 1. 取出token
            const token = res.data.token;

            // 2.将token保存在globalData中
            this.globalData.token = token;

            // console.log(this.globalData.token)
            // 3.进行本地的存储
            wx.setStorageSync(TOKEN, token)
          }
        })
      }
    })
  },
  // 验证token是否过期
  check_token(token) {
    console.log('执行验证token操作')
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: {
        token
      },
      success: (res) => {
        if(!res.data.errCode) {
          console.log('token有效')
          this.globalData.token = token;
        } else {
          this.login()
        }
      },
      fail: (err) => {
        console.log(err)
      }
    })
  }
})

