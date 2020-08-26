<template>
	<view class="page">
		<!-- 订单tab -->
		<view class="order-tab">
			<view class="tab" :class="{'action':OrderType==0}" @click="onOrderTab(0)">
				<text>售后申请</text>
				<text class="line"></text>
			</view>
			<view class="tab" :class="{'action':OrderType==1}" @click="onOrderTab(1)">
				<text>处理中</text>
				<text class="line"></text>
			</view>
			<view class="tab" :class="{'action':OrderType==2}" @click="onOrderTab(2)">
				<text>售后评价</text>
				<text class="line"></text>
			</view>
			<view class="tab" :class="{'action':OrderType==3}" @click="onOrderTab(3)">
				<text>申请记录</text>
				<text class="line"></text>
			</view>
		</view>
		<!-- 订单搜索 -->
		<view class="order-search">
			<view class="search">
				<text class="iconfont icon-fadajing"></text>
				<input type="text" placeholder="商品名称/商品编号/订单号/序列号">
			</view>
			<view class="filtrate" @click="isFiltrate = true">
				<text>筛选</text>
			</view>
		</view>
		<!-- 订单列表 -->
		<view class="order-list">
			<view class="list">
				<view class="order-number">
					<view class="number">
						<text>服务单号：621912345678</text>
					</view>
					<view class="type">
						<image src="/static/sale_th.png" mode=""></image>
						<text>退货</text>
					</view>
				</view>
				<view class="goods-list">
					<view class="list">
						<view class="thumb">
							<image src="/static/img/souji.webp" mode=""></image>
						</view>
						<view class="item">
							<view class="title">
								<text class="two-omit">荣耀20青春版 AMOLED屏幕指纹 4000mAh大电池 20W快充 4800万 手机 4GB+64GB 冰岛幻境</text>
							</view>
							<view class="num">
								<text>申请数量：1</text>
							</view>
						</view>
					</view>
				</view>
				<view class="order-status" v-if="OrderType != 0">
					<text>审核中</text>
					<text>当前订单退货审核中</text>
				</view>
				<view class="order-btn" v-if="OrderType === 0">
					<text class="action">申请售后</text>
				</view>
			</view>
		</view>
		<!-- 筛选弹窗 -->
		<view class="filtrate-win" @click="isFiltrate = false">
			<view class="cu-modal drawer-modal justify-end" :class="{'show':isFiltrate}">
			  <view class="cu-dialog basis-lg">
			    <view class="order-time">
						<view class="title">
							<text>下单时间</text>
						</view>
						<view class="time-list">
							<view class="list action">
								<text>全部</text>
							</view>
							<view class="list">
								<text>一个月内</text>
							</view>
							<view class="list">
								<text>一个月至三个月</text>
							</view>
							<view class="list">
								<text>三个月六个月</text>
							</view>
							<view class="list">
								<text>六个月至一年</text>
							</view>
							<view class="list">
								<text>一年以上</text>
							</view>
						</view>
					</view>
					<view class="footer-btn">
						<view class="btn" @click="isFiltrate = false">
							<text>重置</text>
						</view>
						<view class="btn action" @click="isFiltrate = false">
							<text>确定</text>
						</view>
					</view>
			  </view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				OrderType: 0,
				isFiltrate: false,
			};
		},
		methods:{
			/**
			 * 订单tab切换状态
			 * @param {Number} type
			 */
			onOrderTab(type){
				this.OrderType = type;
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'AfterSalesOrder.scss';
</style>
