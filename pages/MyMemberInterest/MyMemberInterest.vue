<template>
	<view class="page">
		<!-- 权益 -->
		<view class="vip-interests">
			<view class="vip-grade">
				<view class="grade">
					<text>我的会员等级</text>
					<text class="action">V1</text>
				</view>
				<view class="rule">
					<text>规则说明</text>
					<text class="iconfont icon-more"></text>
				</view>
			</view>
			<view class="grade-rate">
				<view class="plan">
					<view class="num">0</view>
					<view class="bal">
						<text></text>
					</view>
					<view class="num">1000</view>
					<view class="tips">
						<text>500</text>
					</view>
				</view>
				<view class="upgrade-prompt">
					<text>在获得500点成长值升级为</text>
					<text class="action">V2</text>
					<text>会员</text>
				</view>
			</view>
		</view>
		<!-- 我的会员权益 -->
		<view class="my-interests">
			<view class="interests-title">
				<text>我的会员权益</text>
			</view>
			<view class="interests-list">
				<view class="list" v-for="(item,index) in 9" :key="index">
					<view class="thumb">
						<image src="/static/coupon_default.png" mode=""></image>
					</view>
					<view class="title">24张/年</view>
					<view class="describe">每月免邮券</view>
				</view>
			</view>
		</view>
		<!-- 开通会员弹窗 -->
		<view class="dredge-vip">
			<view class="vip-win">
				<view class="describe">
					<view class="title">开通会员 享受更多特权</view>
					<view class="des">超级会员价/多倍积分/赠送免邮券</view>
				</view>
				<view class="btn" @click="onDredge">
					<text>立即开通</text>
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
			 * 开通会员
			 */
			onDredge(){
				uni.navigateTo({
					url: '/pages/MembersOpened/MembersOpened'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'MyMemberInterest.scss';
</style>
