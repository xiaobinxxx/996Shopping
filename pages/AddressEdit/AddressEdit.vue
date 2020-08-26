<template>
	<view class="page">
		<view class="address-input">
			<view class="list-input">
				<view class="title">
					<text>收货人</text>
				</view>
				<view class="content">
					<input type="text" placeholder="请填写收货人姓名">
				</view>
			</view>
			<view class="list-input">
				<view class="title">
					<text>手机号</text>
				</view>
				<view class="content">
					<input type="tel" placeholder="请填写收货人手机号">
				</view>
			</view>
			<view class="list-input">
				<view class="title">
					<text>所在地区</text>
				</view>
				<view class="content">
					<input type="tel" placeholder="省市区县/乡镇等">
				</view>
			</view>
			<view class="list-textarea">
				<view class="title">
					<text>详细地址</text>
				</view>
				<view class="content">
					<textarea type="tel" placeholder="街道/楼牌号等" />
				</view>
			</view>
		</view>
		<view class="tag-default">
			<view class="tag-list">
				<view class="title">
					<text>标签</text>
				</view>
				<view class="content">
					<view class="list action">
						<text>家</text>
					</view>
					<view class="list">
						<text>公司</text>
					</view>
					<view class="list">
						<text>学校</text>
					</view>
				</view>
			</view>
			<view class="default-address">
				<view class="title">
					<text>默认地址</text>
				</view>
				<view class="switch-default">
					<switch class="red sm" color="#0077EE !important" checked></switch>
				</view>
			</view>
		</view>
		<view class="footer-btn">
			<view class="btn">
				<text>保存</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				addressType: '2',
			};
		},
		onLoad(params) {
			this.addressType = params.type||'2';
			uni.setNavigationBarTitle({
				title: this.addressType === '1' ? '编辑收货地址':'新建收货地址'
			})
		}
	}
</script>

<style scoped lang="scss">
	@import 'AddressEdit.scss';
</style>
