<template>
	<view class="page">
		<!-- 头部背景 -->
		<view class="head-bg">
			<view class="integral-balance">
				<view class="integral">
					<text>当前可用积分</text>
					<text class="number">10000</text>
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
						<text>10元直减优惠券</text>
					</view>
					<view class="date">
						<text>2020-2-2 13:11</text>
					</view>
				</view>
				<view class="integral">
					<text>-1000</text>
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
	@import 'ExchangeRecord.scss';
</style>
