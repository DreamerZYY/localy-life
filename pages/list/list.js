// pages/list/list.js
const fetch=require('../../utils/util')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //当前加载的分类
    category:[],
    //此分类下的全部店铺
    shops:[],
    pageIndex:0,
    pageSize:20,
    hasMore:true
  },
  loadMore:function(){
    if(this.data.hasMore){
      const {pageIndex,pageSize}=this.data
      const params={_page:++pageIndex,_limit:pageSize};
      //此处加return 的想让当前的then执行过后再执行接下来的then
      return fetch(`categories/${this.data.category.id}/shops`,{params})
      .then(res=>{
        const totalCount=paeseInt(res.header['x-Total-Count'])
        const hasMore=pageIndex*pageSize<totalCount;
        const shops=this.data.shops.concat(res.data)
        res.setData({shops,pageIndex,hasMore});
    })
    }
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
   // 后执行
  onLoad: function (options) {
    //console.log(options)；//cat的值,即各个模块传递过来的id
    fetch(`categories/${options.cat}`).then(res=>{
      // //这里不能确定一定是在onready之后执行的
      // //

      // console.log(res.data);
      // wx.setNavigationBarTitle({
      //   title:res.data.name
      // })
      this.setData({category:res.data});
        wx.setNavigationBarTitle({
          title:res.data.name
        })
        //加载完分类信息过后再去加载商铺信息
       this.loadMore()
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
   //先执行
  onReady: function () {
    if(this,data.category.name){
        wx.setNavigationBarTitle({
          title:res.data.name
        })
    }
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
    // console.log(123)
    //重新加载数据
    this.setData({shops:"",hasMore:true,pageIndex:0})
    this.loadMore().then(()=>wx.stopPullDownRefresh());
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //在这里加载下一页
    //需要判断是否正在加载，否则会有多次触发问题
    this.loadMore()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})