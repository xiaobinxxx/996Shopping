<template>
	<view class="page">
		<!-- 优惠券兑换 -->
		<view class="banner-title" v-if="ExchangeType == 0">
			<view class="banner">
				<image src="/static/coupon_default.png" mode=""></image>
			</view>
			<view class="title">
				<view class="name">10元直减优惠券</view>
				<view class="describe">领券当日开始90天内有效</view>
			</view>
			<view class="integral-title">
				<view class="integral">
					<text class="action">1000</text>
					<text>积分</text>
				</view>
				<view class="integral">
					<text>剩余</text>
					<text class="action">1000</text>
					<text>件</text>
				</view>
			</view>
		</view>
		<!-- 商品兑换 -->
		<view class="banner-goods" v-else>
			<view class="banner">
				<swiper class="screen-swiper round-dot" indicator-dots="true" circular="true" autoplay="true" interval="5000" duration="500">
					<swiper-item v-for="(item, index) in swiperList" :key="index">
						<image :src="item.url" mode="widthFix"></image>
					</swiper-item>
				</swiper>
			</view>
			<view class="goods-title">
				<view class="title-vip">
					<view class="title">
						<text>荣耀20青春版 AMOLED屏幕指纹 4000mAh大电池 20W快充 4800万 手机 4GB+64GB 冰岛幻境</text>
					</view>
					<view class="vip">
						<text>超级会员</text>
					</view>
				</view>
				<view class="integral-title">
					<view class="integral">
						<text class="action">10000</text>
						<text>积分</text>
					</view>
					<view class="integral">
						<text>剩余</text>
						<text class="action">1000</text>
						<text>件</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 兑换须知 -->
		<view class="convertible-notes">
			<view class="title">兑换须知</view>
			<view class="content">
				<view>1、领券当日开始90天内有效;</view>
				<view>2、本优惠券限量1000件/期，兑完即止;</view>
				<view>3、部分新品、特价商品、拼团特惠、限时特惠和超级会员特价商品不可使用;</view>
				<view>4、优惠券兑换后，不可取消兑换并返还积分。</view>
			</view>
		</view>
		<!-- 兑换按钮 -->
		<view class="exchange-btn">
			<view class="btn" @click="isExchange = true">立即兑换</view>
		</view>
		<!-- 兑换弹窗 -->
		<view class="exchange-win">
			<view class="cu-modal" :class="{'show':isExchange}">
			  <view class="cu-dialog">
			    <view class="bg-img" style="background-image: url('/static/img/banner_04.png');height:200px;">
			      <view class="cu-bar justify-end text-white">
			        <view class="action">
			          <text class="cuIcon-close" @click="isExchange = false"></text>
			        </view>
			      </view>
			    </view>
			    <view class="goods-title">
			    	<view class="title-vip">
			    		<view class="title">
			    			<text class="two-omit">荣耀20青春版 AMOLED屏幕指纹 4000mAh大电池 20W快充 4800万 手机 4GB+64GB 冰岛幻境</text>
			    		</view>
			    		<view class="vip">
			    			<text>超级会员</text>
			    		</view>
			    	</view>
			    	<view class="integral-title">
			    		<view class="integral">
			    			<text class="action">10000</text>
			    			<text>积分</text>
			    		</view>
			    		<view class="integral">
			    			<text>剩余</text>
			    			<text class="action">1000</text>
			    			<text>件</text>
			    		</view>
			    	</view>
			    </view>
					<view class="delivery-address">
						<view class="title">收货地址</view>
						<view class="address-phone">
							<view class="icon">
								<text class="iconfont icon-dingwei1"></text>
							</view>
							<view class="address">
								<view class="location">
									<text class="one-omit">南山区科苑路15号科兴科学园</text>
								</view>
								<view class="name-phone">
									<text>王哈哈</text>
									<text>188****8888</text>
								</view>
							</view>
							<view class="more">
								<text class="iconfont icon-more"></text>
							</view>
						</view>
					</view>
					<view class="affirm-btn">
						<view class="btn" @click="onAffirm">确认</view>
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
				ExchangeType: 0,
				isExchange: false,
        swiperList: [
          {
            id: 0,
            type: 'image',
            url: '/static/img/banner_01.png'
          },
          {
            id: 1,
            type: 'image',
            url: '/static/img/banner_02.png'
          },
          {
            id: 2,
            type: 'image',
            url: '/static/img/banner_03.png'
          },
          {
            id: 3,
            type: 'image',
            url: '/static/img/banner_04.png'
          },
          {
            id: 4,
            type: 'image',
            url: '/static/img/banner_01.png'
          },
          {
            id: 5,
            type: 'image',
            url: '/static/img/banner_01.png'
          }
        ],
			};
		},
		onLoad(params) {
			this.ExchangeType = params.type||0;
		},
		methods:{
			/**
			 * 兑换确认点击
			 */
			onAffirm(){
				uni.navigateTo({
					url: '/pages/ExchangeResult/ExchangeResult?type=' + this.ExchangeType,
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'ExchangeDetails.scss';
</style>
