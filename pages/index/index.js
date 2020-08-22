// pages/index/index.js
Page({
  handleShowToast() {
    wx.showToast({
      title: '加载中',
      duration: 3000,
      icon: 'loading',
      // image: '/assets/icon/icon.png'
      mask: true,
      success: () => {
        console.log('展示成功')
      },
      fail: () => {
        console.log('展示失败')
      },
      complete: () => {
        console.log('展示完成')
      }
    })
  },
  handleShowModal() {
    wx.showModal({
      title: 'Modal的标题',
      content: 'Modal的内容',
      // showCancel: false,
      cancelText: '退出',
      cancelColor: 'red',
      success: (res) => {
        console.log(res)
        if(res.cancel) {
          console.log('用户点击了取消按钮')
        }
        if(res.confirm) {
          console.log('用户点击了确定按钮')
        }
      }
    })
  },
  handleShowLoading() {
    wx.showLoading({
      title: '加载中',
      mask: true
    })

    setTimeout(() => {
      // 必须手动hideLoading才会让loading消失
      wx.hideLoading()
    }, 1000)
  },
  handleShowActionSheet() {
    wx.showActionSheet({
      itemList: ['相册', '拍照'],
      itemColor: 'red',
      success: (res) => {
        console.log(res)
      }
    })
  },
  onShareAppMessage: (options) => {
    return {
      title: '你好啊！',
      path: '/pages/index/index',
      imageUrl: 'http://r.photo.store.qq.com/psb?/V11IWYp61c6zKx/rQHWdB5aA*QVHwGzg3ecmMxAnViImW5GsxPqKki8mUs!/r/dD0BAAAAAAAA'
    }
  }
})