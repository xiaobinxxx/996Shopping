<template>
	<view class="page">
		<view class="message-list">
			<view class="list" @click="onMessage('activity')">
				<view class="icon-data">
					<view class="icon">
						<image src="/static/hd-mess.png" mode=""></image>
					</view>
					<view class="data">
						<view class="title">
							<text>优惠活动</text>
						</view>
						<view class="describe">
							<text>双十一5折起</text>
						</view>
					</view>
				</view>
				<view class="more">
					<text class="iconfont icon-more"></text>
				</view>
			</view>
			<view class="list" @click="onMessage('inform')">
				<view class="icon-data">
					<view class="icon" style="background-color: rgba(255, 125, 88, 1);">
						<image src="/static/tz-mess.png" mode=""></image>
					</view>
					<view class="data">
						<view class="title">
							<text>通知消息</text>
						</view>
						<view class="describe">
							<text>您的订单已发货</text>
						</view>
					</view>
				</view>
				<view class="more">
					<text class="iconfont icon-more"></text>
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
			 * 消息点击
			 * @param {String} type
			 */
			onMessage(type){
				switch(type){
					case 'activity':
						uni.navigateTo({
							url: '/pages/DiscountsActivity/DiscountsActivity',
						})
						break;
					case 'inform':
						uni.navigateTo({
							url: '/pages/NotificationMessage/NotificationMessage',
						})
						break;
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'Message.scss';
</style>
