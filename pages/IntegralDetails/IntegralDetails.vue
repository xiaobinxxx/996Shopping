<template>
	<view class="page">
		<!-- 头部背景 -->
		<view class="head-bg">
			<view class="head-user">
				<view class="user">
					<image src="/static/img/user_pic.jpg" mode=""></image>
					<text>爱跳舞的汤姆</text>
				</view>
				<view class="exchange" @click="onExchangeRecord">
					<text>兑换记录</text>
					<text class="iconfont icon-more"></text>
				</view>
			</view>
			<view class="integral-balance">
				<view class="integral" @click="onIntegral">
					<text>当前可用积分</text>
					<text class="number">10000</text>
				</view>
			</view>
			<view class="bg">
				<image src="/static/integral_bg1.png" mode=""></image>
			</view>
		</view>
		<!-- 优惠券兑换专区 -->
		<view class="coupon-exchange">
			<view class="exchange-title">
				<view class="title">优惠券兑换</view>
			</view>
			<view class="coupon-list">
				<view class="list" v-for="(item,index) in 6"
					@click="onExchange(0)"
					:key="index">
					<view class="thumb">
						<image src="" mode=""></image>
					</view>
					<view class="title">10元直减优惠券</view>
					<view class="integral">1000积分</view>
				</view>
			</view>
		</view>
		<!-- 精选积分兑换 -->
		<view class="handpick-exchange">
			<view class="exchange-title">
				<view class="title">精选兑换</view>
			</view>
			<view class="handpick-list">
				<view class="list" v-for="(item,index) in 6"
				@click="onExchange(1)"
				:key="index">
					<view class="thumb">
						<image :src="'/static/img/goods_thumb_0'+(index+1)+'.png'" mode=""></image>
					</view>
					<view class="title">
						<text class="two-omit">荣耀20青春版 AMOLED屏幕指纹 4000mAh大电池 20W快充 4800万 手机 4GB+64GB 冰岛幻境</text>
					</view>
					<view class="price-integral">
						<text class="integral">10000积分</text>
						<text class="price">￥1999.00</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 超级会员专属兑换 -->
		<view class="vip-exchange">
			<view class="exchange-title">
				<view class="title">超级会员专属兑换</view>
			</view>
			<view class="goods-list">
				<view class="list" v-for="(item,index) in 6"
				@click="onExchange(2)"
				:key="index">
					<view class="thumb">
						<image :src="'/static/img/goods_thumb_0'+(index+4)+'.png'" mode=""></image>
					</view>
					<view class="item">
						<view class="title">
							<text class="two-omit">荣耀20青春版 AMOLED屏幕指纹 4000mAh大电池 20W快充 4800万 手机 4GB+64GB 冰岛幻境</text>
						</view>
						<view class="price-integral-btn">
							<view class="price-integral">
								<text class="integral">10000积分</text>
								<text class="price">￥1999.00</text>
							</view>
							<view class="btn">
								<text>立即兑换</text>
							</view>
						</view>
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

			};
		},
		methods:{
			/**
			 * 兑换点击
			 * @param {Number} type 0 优惠券 1 普通商品 2 会员商品
			 */
			onExchange(type){
				uni.navigateTo({
					url: '/pages/ExchangeDetails/ExchangeDetails?type=' + type,
				})
			},
			/**
			 * 兑换记录
			 */
			onExchangeRecord(){
				uni.navigateTo({
					url: '/pages/ExchangeRecord/ExchangeRecord',
				})
			},
			/**
			 * 积分点击
			 */
			onIntegral(){
				uni.navigateTo({
					url: '/pages/IntegralRecord/IntegralRecord'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'IntegralDetails.scss';
</style>
