// pages/demo/from/from.js
var buttonTypes = ["btnDefault", 'btnPrimary', 'btnWarn']

var pageObject = {
  data: {
    btnDefaultSize: 'default',
    btnPrimarySize: 'default',
    btnWarnSize: 'default',
    btnDisabled: false,
    btnPlain: false,
    btnLoading: false,
    checkboxItems: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: true },
      { name: 'BRA', value: '巴西', color: 'yellow' },
      { name: 'JPN', value: '日本', disabled: true },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' }
    ]
  },
  setDisabled: function (e) {
    this.setData({
      btnDisabled: !this.data.btnDisabled
    })
  },
  setPlain: function (e) {
    this.setData({
      btnPlain: !this.data.btnPlain
    })
  },
  setLoading: function (e) {
    this.setData({
      btnLoading: !this.data.btnLoading
    })
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为:' + e.detail.value);
  }
}

for (let i = 0; i < buttonTypes.length; i++) {
  (function(type){
    pageObject[type] = function (e) {
      var key = type + 'Size';
      var changedData = {};
      changedData[key] = this.data[key] === 'default' ? 'mini' : 'default'
      this.setData(changedData)
    }
  })(buttonTypes[i])
}

Page(pageObject)