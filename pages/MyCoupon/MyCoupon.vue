<template>
	<view class="page">
		<!-- 优惠券tab -->
		<view class="coupon-tab">
			<view class="tab" :class="{'action':TabShow===0}" @click="onCouponTab(0)">
				<text>未使用</text>
				<text class="line"></text>
			</view>
			<view class="tab" :class="{'action':TabShow===1}" @click="onCouponTab(1)">
				<text>已使用</text>
				<text class="line"></text>
			</view>
			<view class="tab" :class="{'action':TabShow===2}" @click="onCouponTab(2)">
				<text>已过期</text>
				<text class="line"></text>
			</view>
		</view>
		<!-- 优惠券列表 -->
		<view class="coupon-list">
			<view class="list" v-for="(item,index) in 6" :key="index">
				<view class="list-data" :class="{'coupon-lose':TabShow!=0}">
					<view class="coupon-price">
						<view class="discounts">
							<text class="min">￥</text>
							<text class="max">200</text>
						</view>
						<view class="full-reduction"><text>满600元减200元</text></view>
						<view class="jag"></view>
					</view>
					<view class="coupon-info">
						<view class="info-title">
							<view class="tag"><text>限品类券</text></view>
							<view class="title"><text>仅可购买酒水部分商品</text></view>
						</view>
						<view class="date-get">
							<view class="date"><text>2020.3.09-2020.03.15</text></view>
							<view class="get" @click="onCouponUse" v-if="TabShow===0">
								<text>立即使用</text>
							</view>
						</view>
						<view class="describe-title" @click="isDes=!isDes">
							<text>详细信息</text>
							<text class="iconfont icon-more more" :style="isDes?'transform: rotate(-90deg);':'transform: rotate(90deg);'"></text>
						</view>
					</view>
				</view>
				<view class="use-status" v-if="TabShow != 0">
					<text v-if="TabShow === 1">已使用</text>
					<text v-else-if="TabShow === 2">已过期</text>
				</view>
				<view class="describe" v-show="isDes">
					<text>限品类：尽可购买酒水部分商品</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			TabShow: 0,
			isDes: false,
		};
	},
	methods:{
		/**
		 * 优惠券tab点击
		 * @param {Number} type
		 */
		onCouponTab(type){
			this.TabShow = type;
		},
		/**
		 * 去使用点击
		 */
		onCouponUse(){
			uni.navigateTo({
				url: '/pages/SearchGoodsList/SearchGoodsList'
			})
		}
	}
};
</script>

<style scoped lang="scss">
@import 'MyCoupon.scss';
</style>
