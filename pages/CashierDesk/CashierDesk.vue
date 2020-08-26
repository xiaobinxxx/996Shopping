<template>
	<view class="page">
		<view class="price-count-down">
			<view class="price">
				<text class="min">￥</text>
				<text class="max">299</text>
				<text class="min">.00</text>
			</view>
			<view class="count-down">
				<view class="title">支付剩余时间</view>
				<view class="count">
					<text class="time">{{hour}}</text>
					<text class="dot">:</text>
					<text class="time">{{min}}</text>
					<text class="dot">:</text>
					<text class="time">{{sec}}</text>
				</view>
			</view>
		</view> 
		<!-- 支付方式列表 -->
		<view class="pay-way">
			<view class="pay-list">
				<view class="list" v-for="(item,index) in PayList" 
				@click="onPayWay(item,index)"
				:key="index">
					<view class="pay-type">
						<image :src="item.icon" mode=""></image>
						<text>{{item.name}}</text>
					</view>
					<view class="check">
						<text class="iconfont" :class="PayWay === index ? 'icon-checked action':'icon-check'"></text>
					</view>
				</view>
			</view>
		</view>
		<view class="pay-submit">
			<view class="submit" @click="onSubmit">{{PayPirce}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				PayList: [
					{
						icon: '/static/wx_pay.png',
						name: '微信支付',
					},{
						icon: '/static/zfb_pay.png',
						name: '支付宝支付',
					},{
						icon: '/static/ye_pay.png',
						name: '余额支付',
					},
				],
				PayWay: 0,
				PayPirce: `微信支付￥299.00`,
				CountDown: 1000,
				day: 0,
				hour: 0,
				min: 0,
				sec: 0,
			};
		},
		onLoad(){
			this.CountDownData();
		},
		methods:{
			/**
			 * 支付方式切换点击
			 */
			onPayWay(item,index){
				this.PayWay = index;
				this.PayPirce = `${item.name}￥299.00`
			},
			/**
			 * 倒计时
			 */
			CountDownData(){
				setTimeout(() =>{
					this.CountDown--;
					this.day = parseInt(this.CountDown / (24*60*60))
					this.hour = parseInt(this.CountDown / (60 * 60) % 24);
					this.min = parseInt(this.CountDown / 60 % 60);
					this.sec = parseInt(this.CountDown % 60);
					if(this.CountDown <= 0){
						return
					}
					this.CountDownData();
				},1000)
			},
			/**
			 * 支付点击
			 */
			onSubmit(){
				uni.redirectTo({
					url: '/pages/PayResult/PayResult',
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'CashierDesk.scss';
</style>
