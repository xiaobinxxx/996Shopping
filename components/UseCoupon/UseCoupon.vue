<template>
	<view class="page-total">
		<view class="cu-modal bottom-modal" :class="{ show: isShow }" @click="hide">
			<view class="cu-dialog">
				<view class="coupon-title">
					<view class="title">优惠券</view>
					<view class="explain">使用说明</view>
				</view>
				<view class="coupon-tab">
					<view class="tab" :class="{'action':TabShow===0}" @click.stop="onTab(0)">
						<text>可用优惠券（1）</text>
						<text class="line"></text>
					</view>
					<view class="tab" :class="{'action':TabShow===1}" @click.stop="onTab(1)">
						<text>不可用优惠券（1）</text>
						<text class="line"></text>
					</view>
				</view>
				<!-- 优惠券数据 -->
				<view class="coupon-data">
					<view class="coupon-list">
						<view class="list" :class="{'forbidden':TabShow === 1}" v-for="(item,index) in 6" :key="index">
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
								<view class="check" v-show="TabShow === 0">
									<view class="iconfont icon-check"></view>
								</view>
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
									<!-- <view class="get">
										<text>点击领取</text>
									</view> -->
								</view>
							</view>
						</view>
					</view>
				</view>
				<!--确认 -->
				<view class="cpupon-confirm">
					<view class="confirm" @click.stop="onConfirm">确定</view>
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
				TabShow: 0
			};
		},
		methods:{
			show(){
				this.isShow = true;
			},
			hide(){
				this.isShow = false;
			},
			/**
			 * tab 点击
			 */
			onTab(index){
				this.TabShow = index;
			},
			/**
			 * 确认点击
			 */
			onConfirm(){
				this.hide();
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'UseCoupon.scss';
</style>
