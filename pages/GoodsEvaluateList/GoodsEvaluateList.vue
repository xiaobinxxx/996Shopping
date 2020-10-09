<template>
  <view class="page">
    <!--评价筛选-->
    <view class="evaluate-filtrate">
      <view class="filtrate-list">
        <view class="list">
          <text class="action">全部1.8万</text>
        </view>
        <view class="list">
          <text>好评1.4万+</text>
        </view>
        <view class="list">
          <text>中评1.2万+</text>
        </view>
        <view class="list">
          <text>中评99+</text>
        </view>
      </view>
    </view>
    <view class="evaluate-data">
      <view class="evaluate-list">
        <view class="list" v-for="(item,index) in 4" :key="index">
          <view class="user-info">
            <view class="thumb">
              <image src="/static/img/user_pic.jpg" mode=""></image>
            </view>
            <view class="nickname-grade">
              <view class="nickname">
                <text>哇哈哈</text>
              </view>
              <view class="grade">
                <view class="star">
                  <text class="cuIcon-favorfill lg text-gray" v-for="(value,idx) in 5" :key="idx"></text>
                </view>
                <view class="date">
                  <text>2020-12-12</text>
                </view>
              </view>
            </view>
          </view>
          <view class="content">
            <view class="character">
              <text class="two-omit">你们好，你们好，你们好，你好，感谢支持</text>
            </view>
            <view class="attr">
              <text>红色,XL</text>
            </view>
            <view class="thumb-list">
              <view class="video-info" @click="isVideoShow = true">
                <image src="/static/img/goods_thumb_09.png" class="picture"></image>
                <view class="shade">
                  <text class="iconfont icon-bofang"></text>
                </view>
              </view>
              <view class="list" v-for="(value,idx) in 8"
                    @click="onPreview(value,idx)"
                    :key="idx">
                <image :src="'/static/img/goods_thumb_0'+(idx+1)+'.png'"></image>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!--视频播放-->
    <view class="video-win" @click="onCloseVideo">
      <view class="cu-modal" :class="{'show':isVideoShow}">
        <view class="cu-dialog" @click.stop>
          <view class="bg-img" v-show="isVideoShow">
            <video id="evaluate-video" src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"></video>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isVideoShow: false,
      urls: [
        '/static/img/yf_02.jpg',
        '/static/img/wen_01.jpg',
        '/static/img/class_01.jpg',
        '/static/img/yf_01.png'
      ],
      videoContext: '',
    };
  },
  onReady: function (res) {
    this.videoContext = uni.createVideoContext('evaluate-video')
  },
  onLoad(){

  },
  methods:{
    /**
     * 图片点击预览
     * @param item
     * @param index
     */
    onPreview(item,index){
      uni.previewImage({
        urls: this.urls,
        indicator: 'number',
        current: index,
        longPressActions: {
          itemList: ['发送给朋友', '保存图片', '收藏'],
          success: function(data) {
            console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
          },
          fail: function(err) {
            console.log(err.errMsg);
          }
        }
      });
    },
    /**
     * 关闭视频点击
     */
    onCloseVideo(){
      this.videoContext.pause();
      this.isVideoShow = false;
    }
  }
}
</script>

<style scoped lang="scss">
@import "GoodsEvaluateList.scss";
</style>
