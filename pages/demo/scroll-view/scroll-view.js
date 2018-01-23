// pages/demo/scroll-view/scroll-view.js
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView: 'yellow',
    scrollTop: 100
  },
  upper: function(e){
    console.log(e)
  },
  lower: (e) => {
    console.log(e);
  },
  scroll: (e) => {
    console.log(e);
  },
  tap: function (e) {
    console.log(this.data.toView);
    for (let i = 0; i < order.length; i++) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i+1]
        })
        break;
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    });
    console.log(this.data.scrollTop);
  }
})