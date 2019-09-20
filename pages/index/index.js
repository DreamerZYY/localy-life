// pages/message/message.js
const fetch=require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    sliders:[],
    categories:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   //随意填写
    //   url:"https://api.douban.com/v2/movie/coming_soon",
    //   header:{
    //     'Content-Type':'json'
    //   },
    //   success:function(res){
    //     console.log(res);
    //   }
    // })
    //发送异步请求不再是web那套 AJAX
    //没有跨域
    //请求的地址必须在管理后台添加白名单
    //域名必须备案，服务端必须采用HTTPs

    //此处这样做的目的是，将ajax的请求封装成了一个公共的函数
    fetch('sliders').then(res=>{
      this.setData({sliders:res.data})
    })
    fetch('categories').then(res=>{
      this.setData({categories:res.data})
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