<template>
	<view class="page">
		<!-- 用户信息 -->
		<view class="user-info">
			<view class="user-data" @click="onUserInfo">
				<view class="portrait-nickname">
					<view class="portrait">
						<image src="/static/img/user_pic.jpg" mode=""></image>
					</view>
					<view class="nickname">
						<text>爱跳舞的汤姆猫</text>
					</view>
				</view>
				<view class="more">
					<text class="iconfont icon-more"></text>
				</view>
			</view>
			<view class="address" @click="onAddress">
				<view class="title">
					<text>地址管理</text>
				</view>
				<view class="more">
					<text class="iconfont icon-more"></text>
				</view>
			</view>
		</view>
		<!-- 设置列表 -->
		<view class="setting-list">
			<view class="list" @click="onSetting('account')">
				<view class="title">
					<text>账户安全</text>
				</view>
				<view class="more-content">
					<text class="content">密码/支付等管理</text>
					<text class="iconfont icon-more more"></text>
				</view>
			</view>
			<view class="list" @click="onSetting('pay')">
				<view class="title">
					<text>支付设置</text>
				</view>
				<view class="more-content">
					<text class="iconfont icon-more more"></text>
				</view>
			</view>
			<view class="list" @click="onSetting('invoice')">
				<view class="title">
					<text>发票</text>
				</view>
				<view class="more-content">
					<text class="content">添加发票</text>
					<text class="iconfont icon-more more"></text>
				</view>
			</view>
			<view class="list" @click="onSetting('vip')">
				<view class="title">
					<text>商城会员</text>
				</view>
				<view class="more-content">
					<text class="content">会员专属商品</text>
					<text class="iconfont icon-more more"></text>
				</view>
			</view>
		</view>
		<!-- 设置列表 -->
		<view class="setting-list">
			<!-- #ifndef H5 -->
				<view class="list" @click="onSetting('common')">
					<view class="title">
						<text>通用</text>
					</view>
					<view class="more-content">
						<text class="content">清除本地缓存等</text>
						<text class="iconfont icon-more more"></text>
					</view>
				</view>
			<!-- #endif -->
			<view class="list" @click="onSetting('about')">
				<view class="title">
					<text>关于我们</text>
				</view>
				<view class="more-content">
					<text class="content"></text>
					<text class="iconfont icon-more more"></text>
				</view>
			</view>
		</view>
		<!-- 退出 -->
		<view class="quit-login" @click="onQuitLogin">
			<text>退出登录</text>
		</view>
		<!-- 提示框 -->
		<DialogBox ref="DialogBox"></DialogBox>
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
			 * 用户信息点击
			 */
			onUserInfo(){
				uni.navigateTo({
					url: '/pages/Information/Information'
				})
			},
			/**
			 * 地址点击
			 */
			onAddress(){
				uni.navigateTo({
					url: '/pages/AddressList/AddressList',
				})
			},
			/**
			 * 设置列表点击
			 * @param {String} type
			 */
			onSetting(type){
				switch(type) {
					case 'account':
						uni.navigateTo({
							url: '/pages/AccountSecurity/AccountSecurity'
						})
						break;
					case 'pay':
						uni.navigateTo({
							url: '/pages/PaymentPassword/PaymentPassword'
						})
						break;
					case 'invoice':
						uni.navigateTo({
							url: '/pages/InvoiceList/InvoiceList'
						})
						break;
					case 'vip':
						uni.navigateTo({
							url: '/pages/MyMemberInterest/MyMemberInterest'
						})
						break;
					case 'common':
						uni.navigateTo({
							url: '/pages/SettingCommon/SettingCommon'
						})
						break;
					case 'about':
						uni.navigateTo({
							url: '/pages/AboutUs/AboutUs'
						})
						break;
				}
			},
			/**
			 * 退出点击
			 */
			onQuitLogin(){
				this.$refs['DialogBox'].confirm({
					title: '提示',
					content: '是否要退出登录?',
					DialogType: 'inquiry',
					animation: 0
				}).then(()=>{
					uni.navigateBack();
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'Setting.scss';
</style>
