<template>
		<view class="cu-modal bottom-modal" :class="{'show':isShow}" @click="hide">
		  <view class="cu-dialog">
		    <view class="modal-title">
					<text>优惠券</text>
				</view>
				<view class="tips">可领取优惠券</view>
				<view class="coupon-list">
					<view class="list">
						<view class="coupon-price">
							<view class="discounts">
								<text class="min">￥</text>
								<text class="max">200</text>
							</view>
							<view class="full-reduction">
								<text>满600元减200元</text>
							</view>
							<view class="jag"></view>
						</view>
						<view class="coupon-info">
							<view class="info-title">
								<view class="tag">
									<text>限品类券</text>
								</view>
								<view class="title">
									<text>仅可购买酒水部分商品</text>
								</view>
							</view>
							<view class="date-get">
								<view class="date">
									<text>2020.3.09-2020.03.15</text>
								</view>
								<view class="get">
									<text>点击领取</text>
								</view>
							</view>
						</view>
					</view>
					<view class="list">
						<view class="coupon-price">
							<view class="discounts">
								<text class="min">￥</text>
								<text class="max">200</text>
							</view>
							<view class="full-reduction">
								<text>满600元减200元</text>
							</view>
							<view class="jag"></view>
						</view>
						<view class="coupon-info">
							<view class="info-title">
								<view class="tag">
									<text>限品类券</text>
								</view>
								<view class="title">
									<text>仅可购买酒水部分商品</text>
								</view>
							</view>
							<view class="date-get">
								<view class="date">
									<text>2020.3.09-2020.03.15</text>
								</view>
								<view class="get">
									<!-- <text>点击领取</text> -->
									<text class="use">可用商品</text>
								</view>
							</view>
						</view>
						<view class="use-status">
							<text>已领取</text>
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
				isShow: false,
				isPage: false,
			}
		},
		methods: {
			show(){
				this.isPage = true;
				setTimeout(() =>{
					this.isShow = true;
				},300)
			},
			hide(){
				this.isShow = false;
				setTimeout(() =>{
					this.isPage = false;
				},300)
			},
		},
	}
</script>

<style scoped lang="scss">
	@import 'GoodsCoupon.scss';
</style>
