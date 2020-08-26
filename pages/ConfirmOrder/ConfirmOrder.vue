<template>
	<view class="page">
		<!-- 地址 -->
		<view class="address-data">
			<view class="address-list" @click="onSkip('address')">
				<view class="list">
					<text>黑龙江哈尔滨市道里区城区</text>
				</view>
				<view class="list">
					<text class="address">爱建路1333号</text>
				</view>
				<view class="list">
					<text>张三</text>
					<text>178****8888</text>
				</view>
				<view class="list">
					<text class="tips">(如果快递不方便接收，您可以选择暂时寄存服务)</text>
				</view>
			</view>
			<view class="bar">

			</view>
		</view>
		<!-- 商品 -->
		<view class="goods-data">
			<view class="goods-title">
				<text>商品信息</text>
			</view>
			<view class="goods-list">
				<view class="list" v-for="(item,index) in 4" :key="index">
					<view class="thumb">
						<image :src="'/static/img/goods_thumb_0'+(index+1)+'.png'" mode=""></image>
					</view>
					<view class="item">
						<view class="title">
							<text class="name one-omit">美连诚雪纺连衣裙 2020新款女夏裙子波点气质沙滩裙仙气时尚女装休闲衣服大码女装 白底红点 M</text>
							<text class="attr">颜色：灰色,XL</text>
						</view>
						<view class="price-number">
							<view class="price">
								<text class="min">￥</text>
								<text class="max">299</text>
								<text class="min">.00</text>
							</view>
							<view class="number">
								<text>x 1</text>
							</view>
						</view>
						<!-- <view class="tag">
							<text>支持七天无理由退货</text>
						</view> -->
					</view>
				</view>
			</view>
			<view class="delivery">
				<div class="list">
					<view class="title">配送</view>
					<view class="content">
						<text>快递运输</text>
						<text class="iconfont icon-more"></text>
					</view>
				</div>
				<div class="list">
					<view class="title">运费险</view>
					<view class="content">
						<text>￥10.00</text>
						<text class="iconfont icon-check"></text>
					</view>
				</div>
				<div class="list">
					<view class="title">留言</view>
					<view class="content">
						<input type="text" placeholder="选填,建议先和商家沟通确认">
					</view>
				</div>
			</view>
		</view>
		<!-- 优惠 -->
		<view class="discounts-data">
			<view class="discounts">
				<div class="list" @click="$refs['InvoiceInfo'].show()">
					<view class="title">发票</view>
					<view class="content">
						<text>不开发票</text>
						<text class="iconfont icon-more"></text>
					</view>
				</div>
				<div class="list" @click="$refs['UseCoupon'].show()">
					<view class="title">优惠券</view>
					<view class="content">
						<text>无可用</text>
						<text class="iconfont icon-more"></text>
					</view>
				</div>
				<div class="list">
					<view class="title">积分</view>
					<view class="content">
						<text>共300，满1000可用</text>
						<!-- <text class="iconfont icon-more"></text> -->
					</view>
				</div>
			</view>
		</view>
		<!-- 订单金额 -->
		<view class="order-price">
			<view class="price-list">
				<view class="list">
					<view class="title">
						<text>商品金额</text>
					</view>
					<view class="price">
						<text>￥299.00</text>
					</view>
				</view>
				<view class="list">
					<view class="title">
						<text>会员折扣</text>
					</view>
					<view class="price">
						<text>-￥19.00</text>
					</view>
				</view>
				<view class="list">
					<view class="title">
						<text>运费</text>
					</view>
					<view class="price">
						<text class="highlight">+￥0.00</text>
					</view>
				</view>
				<view class="list">
					<view class="title">
						<text>运费险</text>
					</view>
					<view class="price">
						<text class="highlight">+￥0.00</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 地址提示 -->
		<view class="address-tips" :style="scrollTop >= 100 ? '':'display:none'">
			<text>黑龙江哈尔滨市道里区爱建路1333号</text>
		</view>
		<!-- 底部合计提交 -->
		<view class="footer-submit">
			<view class="price">
				<text class="min">￥</text>
				<text class="max">299</text>
				<text class="min">.00</text>
			</view>
			<view class="submit" @click="onSubmit">
				<text>提交订单</text>
			</view>
		</view>
		<!-- 发票 -->
		<invoice-info ref="InvoiceInfo"></invoice-info>
		<!-- 优惠券 -->
		<use-coupon ref="UseCoupon"></use-coupon>
	</view>
</template>

<script>
	import InvoiceInfo from '../../components/InvoiceInfo/InvoiceInfo.vue';
	import UseCoupon from '../../components/UseCoupon/UseCoupon.vue'
	export default {
		components:{
			// 发票
			InvoiceInfo,
			// 优惠券
			UseCoupon,
		},
		data() {
			return {
				scrollTop: 0,
			};
		},
		onPageScroll(e){
			this.scrollTop = e.scrollTop;
		},
		methods:{
			/**
			 * 提交订单
			 */
			onSubmit(){
				uni.redirectTo({
					url: '/pages/CashierDesk/CashierDesk',
				})
			},
      /**
       * 跳转点击
       * @param {String} type 跳转类型
       */
      onSkip(type){
        switch (type){
          case 'address':
            uni.navigateTo({
              url: '/pages/AddressList/AddressList',
            })
            break;
        }
      }
		}
	}
</script>

<style scoped lang="scss">
	@import 'ConfirmOrder.scss';
</style>
