<template>
	<view class="page">
		<!-- 商品 -->
		<view class="goods-data">
			<view class="goods-list">
				<view class="list">
					<view class="thumb">
						<image src="/static/img/souji.webp" mode=""></image>
					</view>
					<view class="item">
						<view class="title">
							<text class="two-omit">华为 HUAWEI 畅享9s 4GB+128GB 极光蓝</text>
						</view>
						<view class="price-num">
							<view class="price">
								<text>单价：</text>
								<text class="action">￥1999.00</text>
							</view>
							<view class="num">
								<text>数量：</text>
								<text class="action">1</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 售后类型选择 -->
		<view class="type-select">
			<view class="type-list">
				<view class="list" @click="onReturnType(0)">
					<view class="title">
						<image src="/static/sale_tk.png" mode=""></image>
						<text>退款</text>
					</view>
					<view class="content">
						<text>申请商品的退款</text>
						<text class="iconfont icon-more"></text>
					</view>
				</view>
				<view class="list" @click="onReturnType(1)">
					<view class="title">
						<image src="/static/sale_th.png" mode=""></image>
						<text>退货</text>
					</view>
					<view class="content">
						<text>申请商品的退货</text>
						<text class="iconfont icon-more"></text>
					</view>
				</view>
				<view class="list" @click="onReturnType(2)">
					<view class="title">
						<image src="/static/sale_hh.png" mode=""></image>
						<text>换货</text>
					</view>
					<view class="content">
						<text>申请商品的换货</text>
						<text class="iconfont icon-more"></text>
					</view>
				</view>
			</view>
		</view>
		<!-- 联系客服 -->
		<view class="contact-service">
			<view class="btn">
				<text class="iconfont icon-kefu"></text>
				<text>联系客服</text>
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
			 * 退款类型点击
			 */
			onReturnType(type){
				uni.navigateTo({
					url: '/pages/ReturnDetails/ReturnDetails?type=' + type,
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'AfterSaleType.scss';
</style>
