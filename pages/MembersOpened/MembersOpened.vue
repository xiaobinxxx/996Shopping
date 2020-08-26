<template>
	<view class="page">
		<!-- 背景 -->
		<view class="head-bg">
			<view class="vip-title">
				<text>开通超级会员</text>
			</view>
			<view class="vip-describe">
				<text>专享9大权益</text>
			</view>
		</view>
		<!-- 会员权益 -->
		<view class="vip-interests">
			<view class="interests-list">
				<view class="list" v-for="(item,index) in 9" :key="index">
					<view class="thumb">
						<image src="/static/coupon_default.png" mode=""></image>
					</view>
					<view class="title">24张/年</view>
					<view class="describe">每月免邮券</view>
				</view>
			</view>
			<view class="vip-tips">
				<text class="iconfont icon-qian"></text>
				<text>开通超级会员预计一年可省</text>
				<text class="price">999</text>
				<text>元</text>
			</view>
			<view class="dredge-btn">
				<text>立即开通￥199/年</text>
			</view>
			<view class="exchange-btn">
				<text>兑换会员</text>
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
	@import 'MembersOpened.scss';
</style>
