export default function request(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      data: options.data || {},
      method: options.method || 'get',
      success: resolve,
      fail: reject
    })
  })
}


// export default function request(options) {
//   return new Promise((resolve, reject) => {
//     wx.request({
//       url: options.url,
//       data: options.data || {},
//       method: options.method || 'get',
//       success: (res) => {
//         resolve(res)
//       },
//       fail: (err) => {
//         reject(err)
//       }
//     })
//   })
// }