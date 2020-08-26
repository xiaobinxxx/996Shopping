<template>
	<view class="page">
		<view class="logo">
			<image src="/static/logo.png" mode=""></image>
		</view>
		<view class="versions">
			<text>For V1.0.0 build 70099</text>
		</view>
		<view class="code">
			<image src="/static/code.png" mode=""></image>
			<text>扫描二维码，您的朋友也可以使用或下载商城哦~</text>
		</view>
		
		<view class="about-list">
			<!-- #ifndef H5 -->
				<view class="list">
					<view class="title">
						<text>检查更新</text>
					</view>
					<view class="more">
						<text class="iconfont icon-more"></text>
					</view>
				</view>
			<!-- #endif -->
			<view class="list">
				<view class="title">
					<text>使用帮助</text>
				</view>
				<view class="more">
					<text class="iconfont icon-more"></text>
				</view>
			</view>
			<view class="list">
				<view class="title">
					<text>隐私政策</text>
				</view>
				<view class="more">
					<text class="iconfont icon-more"></text>
				</view>
			</view>
		</view>
		
		<view class="copyright">
			<text>Copyright©2020</text>
			<text>希哩哩版权所有</text>
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
	@import 'AboutUs.scss';
</style>
