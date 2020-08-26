<template>
	<view class="page">
		<!-- 发票列表 -->
		<view class="invoice-list">
			<view class="list" v-for="(item,index) in 6" :key="index">
				<view class="content">
					<view class="title">
						<text>深圳是奥啥都奥康</text>
					</view>
					<view class="identify-num">
						<text>91440300MA5FQYCP55</text>
					</view>
				</view>
				<view class="edit">
					<text class="iconfont icon-edit1"></text>
				</view>
			</view>
		</view>
		<!-- 添加按钮 -->
		<view class="add-btn">
			<view class="btn" @click="onInvoiceAdd">
				<text class="iconfont icon-jia"></text>
				<text>发票信息添加</text>
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
			 * 发票添加点击
			 */
			onInvoiceAdd(){
				uni.navigateTo({
					url: '/pages/InvoiceAdd/InvoiceAdd',
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'InvoiceList.scss';
</style>
