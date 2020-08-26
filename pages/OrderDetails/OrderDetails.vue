<template>
	<view class="page">
		<!-- 订单状态 -->
		<view class="order-status">
			<view class="status">
				<text class="iconfont icon-zhuyi"></text>
				<text>待付款</text>
			</view>
			<view class="reason">
				<text>剩余12分68秒</text>
			</view>
		</view>
		<!-- 收货地址 -->
		<view class="shipping-address">
			<view class="name-phone">
				<text class="iconfont icon-dingwei"></text>
				<text>王哈哈</text>
				<text>1788****8888</text>
			</view>
			<view class="address">
				<text>黑龙江道里区爱建路按揭贷款接啊禄口街道克拉克爱神的箭阿拉斯加刷卡机卡</text>
			</view>
		</view>
		<!-- 订单商品 -->
		<view class="order-goods">
			<view class="goods-list">
				<view class="list" v-for="(item,index) in 2" :key="index">
					<view class="thumb">
						<image :src="'/static/img/goods_thumb_0'+(index+1)+'.png'" mode=""></image>
					</view>
					<view class="item">
						<view class="title">
							<text class="one-omit">薇妮(Viney)时尚包包女包牛皮单肩包女休闲百搭斜挎包韩版小方包潮(水电费枪色)</text>
						</view>
						<view class="num-size">
							<text>数量：88</text>
							<text>颜色：黑色,XL,全国联保</text>
						</view>
						<view class="price">
							<text>￥299.00</text>
						</view>
						<view class="order-btn">
							<view class="btn" @click="onApplyAftersales">
								<text>申请售后</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="contact">
				<text class="iconfont icon-kefu"></text>
				<text>联系客服</text>
			</view>
		</view>
		<!-- 订单信息 -->
		<view class="order-info">
			<view class="info-list">
				<view class="list">
					<view class="title">订单编号:</view>
					<view class="content">
						<text>15551231231231</text>
						<text class="btn">复制</text>
					</view>
				</view>
				<view class="list">
					<view class="title">下单时间:</view>
					<view class="content">
						<text>2020-12-12 13:11:11</text>
					</view>
				</view>
				<view class="list">
					<view class="title">支付方式:</view>
					<view class="content">
						<text>在线支付</text>
					</view>
				</view>
				<view class="list">
					<view class="title">配送方式:</view>
					<view class="content">
						<text>普通快递</text>
					</view>
				</view>
				<view class="list">
					<view class="title">配送日期:</view>
					<view class="content">
						<text>2020-11-11</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 订单明细 -->
		<view class="order-details">
			<view class="details-list">
				<view class="list">
					<view class="title">
						<text>商品总额</text>
					</view>
					<view class="price">
						<text>￥299.00</text>
					</view>
				</view>
				<view class="list">
					<view class="title">
						<text>运费</text>
					</view>
					<view class="price">
						<text>+￥20.00</text>
					</view>
				</view>
				<view class="list action">
					<view class="title">
						<text>实付款：</text>
					</view>
					<view class="price">
						<text>￥319.00</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 底部按钮 -->
		<view class="footer-btn">
			<view class="del">
				<text>删除订单</text>
			</view>
			<view class="btn">
				<text>查看发票</text>
				<text class="action">确认付款</text>
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
			 * 售后点击
			 */
			onApplyAftersales(){
				uni.navigateTo({
					url: '/pages/AfterSaleType/AfterSaleType',
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'OrderDetails.scss';
</style>
