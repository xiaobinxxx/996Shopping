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
		<view class="code-get" v-else>
			<view class="phone">
				<input type="tel" maxlength="11" placeholder="请输入新的手机号"/>
			</view>
			<view class="code">
				<input type="tel" maxlength="6" placeholder="请输入短信验证码">
				<text>获取验证码</text>
			</view>
			<view class="btn" @click="isSetting = true">
				<text>完成</text>
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
	@import 'ModifyPhone.scss';
</style>
