<template>
	<view class="page">
		<!-- 地址列表 -->
		<view class="address-list">
			<view class="list" v-for="(item,index) in 4" :key="index">
				<view class="name-phone">
					<view class="name">
						<text class="one-omit">哇哈哈</text>
					</view>
					<view class="phone">
						<text>188****8888</text>
						<text class="tag">默认</text>
						<text class="tag blue">公司</text>
					</view>
				</view>
				<view class="address-edit">
					<view class="address">
						<text>黑龙江哈尔滨市道里区爱建路你猜楼5号886室</text>
					</view>
					<view class="edit" @click.stop="onAddressEdit(1)">
						<text class="iconfont icon-edit1"></text>
					</view>
				</view>
			</view>
		</view>
		<!-- 添加地址 -->
		<view class="add-address">
			<view class="btn" @click="onAddressEdit(2)">
				<text>新建收货地址</text>
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
			 * 编辑地址点击
			 */
			onAddressEdit(type){
				uni.navigateTo({
					url: '/pages/AddressEdit/AddressEdit?type=' + type,
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'AddressList.scss';
</style>
