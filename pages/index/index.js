// pages/index/index.js
Page({
  data: {
    titles: ['衣服', '裤子', '鞋子']
  },
  handleBtnClick() {
    console.log("按钮被点击了")
  },
  handleTouchStart() {
    console.log('handleTouchStart')
  },
  handleTouchMove() {
    console.log('handleTouchMove')
  },
  handleTouchEnd() {
    console.log('handleTouchEnd')
  },
  handleTap() {
    console.log('handleTap')
  },
  handleLongpress() {
    console.log('handleLongpress')
  },
  handleEventClick(event) {
    console.log("------------", event)
  },
  handleEventEnd(event) {
    console.log("++++++++++++", event)
  },
  handleEventInner(event) {
    console.log(event)
  },
  handleEventOuter(event) {
    console.log(event)
  },
  handleItemClick(event) {
    console.log(event)
    // title - index
    const dataset = event.currentTarget.dataset;
    const title = dataset.item;
    const index = dataset.index;
    console.log(title, index)
  },

  // --------事件冒泡和事件捕获
  // 最外层
  handleCaptureViewOut() {
    console.log('handleCaptureViewOut')
  },
  handleBindViewOut() {
    console.log('handleBindViewOut')
  },
  // 中间层
  handleCaptureViewMiddle() {
    console.log('handleCaptureViewMiddle')
  },
  handleBindViewMiddle() {
    console.log('handleBindViewMiddle')
  },
  // 最里层
  handleCaptureViewIn() {
    console.log('handleCaptureViewIn')
  },
  handleBindViewIn() {
    console.log('handleBindViewIn')
  }
})