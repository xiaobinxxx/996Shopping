<template>
	<view class="page">
		<!--  -->
		<view class="card-data">
			<!-- 会员 -->
			<view class="member-data">
				<view class="phone">
					<text>188****8888</text>
				</view>
				<view class="vip-level">
					<image src="/static/rank.png"></image>
					<text>v1</text>
				</view>
			</view>
			<!-- 余额 -->
			<view class="balance-data">
				<view class="data">
					<view class="price">{{isPirce?'10000.00':'*****'}}</view>
					<view class="title" @click="isPirce = !isPirce">
						<text>余额</text>
						<text class="iconfont" :class="isPirce?'icon-eye-on':'icon-eye-off'"></text>
					</view>
				</view>
			</view>
			<!-- 付款码 -->
			<view class="payment-code">
				<view class="number" @click="isNumber = !isNumber">
					<text>{{isNumber?'7118 5881 7024 5795':'7118 **** **** 5795'}}</text>
					<text>查看数字</text>
				</view>
				<view class="code">
					<image src="/static/img/code.png" mode=""></image>
				</view>
				<view class="hint">
					<text>付款码每30秒自动更新，请在店内消费时使用</text>
				</view>
			</view>
			<!-- 其他支付方式 -->
			<view class="payment-way">
				<view class="title">
					<text>其他支付方式</text>
				</view>
				<view class="btn" @click="isPayWay = true">
					<text>{{PayWayText}}</text>
					<text class="tag">点击选择</text>
				</view>
			</view>
		</view>
		<!-- 支付方式选择窗口 -->
		<view class="pay-way-win" @click="isPayWay = false">
			<view class="cu-modal bottom-modal" :class="{'show':isPayWay}">
			  <view class="cu-dialog">
			    <view class="pay-list">
						<view class="list" @click.stop="onPayWay(0)">
							<view class="pay">
								<image src="/static/ye_pay.png" mode=""></image>
								<text>余额支付</text>
							</view>
							<view class="check">
								<text class="iconfont" :class="PayWay===0?'icon-checked action':'icon-check'"></text>
							</view>
						</view>
						<view class="list" @click.stop="onPayWay(1)">
							<view class="pay">
								<image src="/static/wx_pay.png" mode=""></image>
								<text>微信支付</text>
							</view>
							<view class="check">
								<text class="iconfont" :class="PayWay===1?'icon-checked action':'icon-check'"></text>
							</view>
						</view>
						<view class="list" @click.stop="onPayWay(2)">
							<view class="pay">
								<image src="/static/zfb_pay.png" mode=""></image>
								<text>支付宝支付</text>
							</view>
							<view class="check">
								<text class="iconfont" :class="PayWay===2?'icon-checked action':'icon-check'"></text>
							</view>
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
				isPayWay: false,
				PayWay: 0,
				PayWayText: '余额支付',
				// 数字
				isNumber: false,
				// 金额
				isPirce: false,
			};
		},
		methods:{
			/**
			 * 支付方式选择点击
			 * @param {Number} type 0 余额 1 微信 2 支付宝
			 */
			onPayWay(type){
				this.PayWay = type;
				switch (type) {
					case 0:
						this.PayWayText = '余额支付';
						break;
					case 1:
						this.PayWayText = '微信支付';
						break;
					case 2:
						this.PayWayText = '支付宝支付';
						break;
				}
				this.isPayWay = false;
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'PaymentCode.scss';
</style>
