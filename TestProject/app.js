// app.js
App({
   onLaunch:function(){
    this.globalData={userInfo:''};
   },

  is_login:function(){
    if (this.globalData.userInfo) {
      return true;
    }
    else {return false;}
  },
  setUserInfo:function(userInfo){
    this.globalData.userInfo =  userInfo;
    }
  

})
