// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    sources:[ '我的第二个帖子', '我的第三个帖子', '我的第四个帖子', '我的第五个帖子', '我的第六个帖子', '我的第七个帖子', '我的第八个帖子', '我的第九个帖子'],
  forums:[]
  },
/**
 * 生命周期函数--监听页面加载
 */
  onLoad:function(options) {
  var systemInfo = wx.getSystemInfoSync();
  var width = systemInfo.windowWidth;
  var height = width/2;
  this.setData({
    width:width,
    height:height
  })  
  },
 /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady:function(options){
    var that = this;
    setTimeout(function(){
      var sources = that.data.sources;
      var forums =[];
      for(var index=0;index<6;index++)
         {   var forum = sources[index];
              forums.push(forum);
              }
          that.setData({
            forums:forums})
             },1000 );
  },
  

  onClearEvent: function (event) {
    this.setData({
      value: ""
    })

  }

  
})
