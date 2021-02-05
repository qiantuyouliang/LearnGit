// pages/login/login.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {  },
  
  /**
   * 获取用户信息***/
 onGetUserInfoTab:function(event){
  const userInfo= event.detail.userInfo;
  if(userInfo){
    app.setUserInfo(userInfo);
       wx.showToast({
          title: '恭喜授权成功',
          });
  setTimeout(()=>{
    wx.navigateBack();
          },1500)
    }
 },
 
 navigateBackIndex:function(){
    wx.switchTab({
      url: '../index/index',
    });
 }
})