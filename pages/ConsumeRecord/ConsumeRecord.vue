<template>
	<view class="page">
		<!-- 头部背景 -->
		<view class="head-bg">
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
		<!-- 记录列表 -->
		<view class="record-list">
			<view class="list" v-for="(item,index) in 10" :key="index">
				<view class="title-date">
					<view class="title">
						<text>10线上消费</text>
					</view>
					<view class="date">
						<text>2020-2-2 13:11</text>
					</view>
				</view>
				<view class="integral">
					<text v-if="index > 3" style="color: #22AA44;">+1000</text>
					<text v-else>-100</text>
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
		}
	}
</script>

<style scoped lang="scss">
	@import 'ConsumeRecord.scss';
</style>
