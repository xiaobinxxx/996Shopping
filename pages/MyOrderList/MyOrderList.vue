<template>
	<view class="page">
		<view class="head-back">
			<view class="back" @click="onBack">
				<text></text>
			</view>
			<view class="title">
				<text>我的订单</text>
			</view>
			<view class="more-icon">
				<view class="icon-list">
					<text class="iconfont icon-fadajing"></text>
				</view>
			</view>
		</view>
		<!-- 订单tab -->
		<view class="order-tab">
			<view class="tab" :class="{'action':OrderType==0}" @click="onOrderTab(0)">
				<text>全部</text>
				<text class="line"></text>
			</view>
			<view class="tab" :class="{'action':OrderType==1}" @click="onOrderTab(1)">
				<text>待付款</text>
				<text class="line"></text>
			</view>
			<view class="tab" :class="{'action':OrderType==2}" @click="onOrderTab(2)">
				<text>待发货</text>
				<text class="line"></text>
			</view>
			<view class="tab" :class="{'action':OrderType==3}" @click="onOrderTab(3)">
				<text>待收货</text>
				<text class="line"></text>
			</view>
			<view class="tab" :class="{'action':OrderType==4}" @click="onOrderTab(4)">
				<text>待评价</text>
				<text class="line"></text>
			</view>
		</view>
		<!-- 订单列表 -->
		<view class="order-list">
			<view class="list" v-for="(item,index) in 10" @click="onOrderList" :key="index">
				<view class="title-status">
					<view class="title">
						<text>下单时间：2020-12-12 18:56</text>
					</view>
					<view class="status">
						<text>待付款</text>
						<text class="iconfont icon-laji del"></text>
					</view>
				</view>
				<view class="goods-list">
					<view class="goods">
						<view class="thumb">
							<image :src="'/static/img/goods_thumb_0'+(index+1)+'.png'" mode=""></image>
						</view>
						<view class="item">
							<view class="goods-name">
								<text class="two-omit">薇妮(Viney)时尚包包女包牛皮单肩包女休闲百搭斜挎包韩版小方包潮(枪色)</text>
							</view>
							<view class="goods-price">
								<text class="min">￥</text>
								<text class="max">299</text>
								<text class="min">.00</text>
							</view>
						</view>
					</view>
				</view>
				<view class="status-btn">
					<view class="btn">
						<text>取消订单</text>
					</view>
					<view class="btn action" @click.stop="onEvaluate">
						<text>评价</text>
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
			};
		},
		onLoad(params) {
			this.OrderType = params.type;
		},
		methods:{
			/**
			 * 返回点击
			 */
			onBack(){
				uni.navigateBack();
			},
			/**
			 * 订单tab点击
			 */
			onOrderTab(type){
				this.OrderType = type;
				// #ifdef H5
				uni.redirectTo({
					url: '/pages/MyOrderList/MyOrderList?type=' + type,
				})
				//#endif
			},
			/**
			 * 订单列表点击
			 */
			onOrderList(){
				uni.navigateTo({
					url: '/pages/OrderDetails/OrderDetails',
				})
			},
      /**
       * 评价点击
       */
      onEvaluate(){
			  uni.navigateTo({
          url: '/pages/MyEvaluatePush/MyEvaluatePush'
        })
      }
		}
	}
</script>

<style scoped lang="scss">
	@import 'MyOrderList.scss';
</style>
