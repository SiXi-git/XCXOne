/*
 * @Description: 
 * @Autor: Sixi
 * @LastEditTime: 2021-01-15 16:36:38
 */
// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图配置
    imgUrls: [
      "http://www.qinkeshi.com/uploads/190123/1-1Z123142309239.png",
      "http://www.qinkeshi.com/uploads/190123/1-1Z123134103440.jpg",
      "http://www.aveo-china.com/upload/images/20181120_200307.jpg",
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    gridItem:[
      {
        icon: "flower-o",
        text: "平",
        url: "https://www.baidu.com"
      },
      {
        icon: "flower-o",
        text: "安",
        url: "https://www.baidu.com"
      },
      {
        icon: "flower-o",
        text: "喜",
        url: "https://www.baidu.com"
      },
      {
        icon: "flower-o",
        text: "乐",
        url: "https://www.baidu.com"
      },
    ]
  },
itemClick(event){
  console.log("🚀 ~ file: home.js ~ line 48 ~ itemClick ~ event", event)
  wx.navigateTo({
      url: event.currentTarget.dataset.url,
    });
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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