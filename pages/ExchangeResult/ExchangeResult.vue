<template>
	<view class="page">
		<!-- 顶部结果 -->
		<view class="head-result" v-if="ExchangeType == 0">
			<view class="icon">
				<text class="iconfont icon-success"></text>
			</view>
			<view class="title">
				<text>优惠券兑换成功</text>
			</view>
			<view class="describe">
				<text>优惠券有效期：</text>
				<text class="ac">2020.2.2-2020.4.4</text>
			</view>
		</view>
		<view class="head-result" v-else>
			<view class="icon">
				<text class="iconfont icon-success"></text>
			</view>
			<view class="title">
				<text>商品兑换成功</text>
			</view>
			<view class="describe">
				<text>我们将在10个工作日寄出</text>
			</view>
		</view>
		<!-- 收货信息 -->
		<view class="delivery-address" v-if="ExchangeType != 0">
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
			</view>
		</view>
		<!-- 返回按钮 -->
		<view class="back-btn">
			<view class="btn-bg" @click="onBackBtn(0)">回到首页</view>
			<view class="btn-br" @click="onBackBtn(1)">积分兑换</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ExchangeType: 0,
			};
		},
		onLoad(params) {
			this.ExchangeType = params.type||0;
		},
		methods:{
			/**
			 * 返回点击
			 */
			onBackBtn(type){
				switch (type){
					case 0:
						uni.switchTab({
							url: '/pages/home/home'
						})
						break;
					case 1:
						uni.redirectTo({
							url: '/pages/IntegralDetails/IntegralDetails'
						})
						break;
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'ExchangeResult.scss';
</style>
