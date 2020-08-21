// pages/index/index.js
Page({
  data: {
    counter: 0,
    isShow: true
  },
  handleIncrement(event) {
    console.log("-----------------", event)
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleTabClick(event) {
    console.log(event)
  },
  handleIncrementCpn() {
    console.log('--------------------')
    // 目的是修改组件的数据
    // 1.获取组件对象
    const my_sel = this.selectComponent("#sel_id")
    // console.log(my_sel)
    // 2.通过setData()修改组件中的数据(一般不采用)
    // my_sel.setData({
    //   counter: my_sel.data.counter + 20
    // })

    // 3.通过组件方法暴露一个对象，再修改数据
    my_sel.incrementCounter(10)
  },
  handleChangeShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  }
})