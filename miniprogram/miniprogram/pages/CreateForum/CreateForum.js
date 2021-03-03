// miniprogram/pages/CreateForum/CreateForum.js
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
     this.ForumCreate();
  },

  ForumCreate:function(){
    const db = wx.cloud.database();
    db.collection('Forum').add({
      data:{
        ForumTitle:"《桥家》大型杂技剧在南京首演",
        ForumAuthor:"工人日报",
        ForumContent:"工人日报客户端通讯员 杨凝 记者邹明强 国内首部现实主义题材的大型杂技剧《桥家》，3月1日在南京文化艺术中心首演。作为《桥家》剧目故事原形的单位，中铁大桥局四公司相关领导及南京长江大桥建设者共计三十余人受邀观看首演。",
        ForumPubTime:new Date(),
        ForumCommentsNub:"12",
        ForumLikesNub:"32",

      }
    }).then(res =>{
      console.log(res);
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})