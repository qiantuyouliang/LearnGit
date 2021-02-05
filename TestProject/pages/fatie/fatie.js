// pages/fatie/fatie.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(app.is_login()){
      console.log("已经授权")
    }else{
      wx.navigateTo({
        url: '../login/login',
      })
    }

  },

  // submitEvent: function(event){
  //   var content = event.detail.value.content;
  //   var pages = getCurrentPages;
  //   console.log(pages)
  

  // }

  
})