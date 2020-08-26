<template>
	<view class="page">
		<!-- 头部背景 -->
		<view class="head-bg">
			<view class="head-user">
				<view class="user">
				</view>
				<view class="exchange" @click="onConsumeRecord">
					<text>消费明细</text>
					<text class="iconfont icon-more"></text>
				</view>
			</view>
			<view class="wallet-balance">
				<view class="wallet">
					<text class="number">￥10000</text>
					<text><text class="iconfont icon-qianbao" style="margin-right: 20rpx;"></text>当前余额</text>
				</view>
			</view>
			<view class="bg">
				<image src="/static/integral_bg1.png" mode=""></image>
			</view>
		</view>
		<!-- 钱包充值 -->
		<view class="wallet-recharge">
			<view class="recharge-title">
				<text>钱包充值</text>
			</view>
			<view class="recharge-list">
				<view class="list" v-for="(item,index) in 8" 
				:class="{'action':index===0}"
				:key="index">
					<view class="price">
						<text>100元</text>
					</view>
					<view class="give">
						<text>送2.00元</text>
					</view>
				</view>
			</view>
		</view>
		<view class="recharge-btn">
			<view class="btn">立即充值 ￥100</view>
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
			 * 消费明细点击
			 */
			onConsumeRecord(){
				uni.navigateTo({
					url: '/pages/ConsumeRecord/ConsumeRecord'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'MyWallet.scss';
</style>
