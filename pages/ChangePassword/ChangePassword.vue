<template>
	<view class="page">
		<view class="code-get" v-if="!isSetting">
			<view class="phone">
				<text>请输入188****8888短信验证码</text>
			</view>
			<view class="code">
				<input type="tel" maxlength="6" placeholder="请输入短信验证码">
				<text>获取验证码</text>
			</view>
			<view class="btn" @click="isSetting = true">
				<text>下一步</text>
			</view>
		</view>
		<view class="setting-password" v-else>
			<view class="inpu-password">
				<text>设置密码</text>
				<input type="password" placeholder="请输入要设置的密码" />
				<text class="iconfont icon-eye-on icon"></text>
			</view>
			<view class="btn">
				<text>确认</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isSetting: false,
			};
		}
	}
</script>

<style scoped lang="scss">
	@import 'ChangePassword.scss';
</style>
