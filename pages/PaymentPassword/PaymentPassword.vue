<template>
	<view class="page">
		<view class="setting-list">
			<view class="list" @click="onSetting('edit')">
				<view class="title">
					<text>修改6位数字支付密码</text>
				</view>
				<view class="more">
					<text class="iconfont icon-more"></text>
				</view>
			</view>
			<view class="list" @click="onSetting('forget')">
				<view class="title">
					<text>忘记6位数字支付密码</text>
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
			 * 设置点击
			 * @param {String} type
			 */
			onSetting(type){
				switch (type){
					case 'edit':
						uni.navigateTo({
							url: '/pages/PaymentEdit/PaymentEdit'
						})
						break;
					case 'forget':
						uni.navigateTo({
							url: '/pages/PaymentForget/PaymentForget'
						})
						break;
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'PaymentPassword.scss';
</style>
