<template>
	<view class="page">
    <view class="evaluate-goods">
      <view class="list">
        <view class="picture">
          <image src="/static/img/goods_thumb_01.png"></image>
        </view>
        <view class="item">
          <view class="title">
            <text>商品评价</text>
          </view>
          <view class="star-list">
            <view class="star">
              <text class="cuIcon-favorfill lg text-gray ac"></text>
              <text class="cuIcon-favorfill lg text-gray ac"></text>
              <text class="cuIcon-favorfill lg text-gray ac"></text>
              <text class="cuIcon-favorfill lg text-gray"></text>
              <text class="cuIcon-favorfill lg text-gray"></text>
            </view>
            <view class="hint">
              <text>满意</text>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!--填写-->
    <view class="input-info">
      <view class="input-title">
        <text>分享你的使用体验吧</text>
      </view>
      <view class="input-text">
        <textarea placeholder="感觉怎么？跟大家分享一下吧~"></textarea>
        <view class="record-text">
          <text>已写</text>
          <text class="ac">12</text>
          <text>个字</text>
        </view>
      </view>
      <view class="anonymous">
        <radio class="radio" :checked="isChecked" color="red" style="transform:scale(0.7)"></radio>
        <text>匿名评价</text>
      </view>
    </view>
    <!--上传图片-->
    <view class="upload-img">
      <view class="img-title">
        <text>上传图片/视频</text>
      </view>
      <view class="img-list">
        <view class="list up-img">
          <image src="/static/up_video.png"></image>
        </view>
        <view class="list up-img">
          <image src="/static/up_img.png"></image>
        </view>
        <view class="list">
          <image src="/static/img/goods_thumb_01.png"></image>
          <text class="iconfont icon-close1"></text>
        </view>
        <view class="list">
          <image src="/static/img/goods_thumb_01.png"></image>
          <text class="iconfont icon-close1"></text>
        </view>
      </view>
    </view>
    <!--提交-->
    <view class="submit-btn">
      <view class="btn">
        <text>提交</text>
      </view>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        isChecked: false,
			};
		}
	}
</script>

<style scoped lang="scss">
  @import "MyEvaluatePush.scss";
</style>
