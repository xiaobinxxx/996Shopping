<template>
	<view class="page">
		<!-- 头部背景 -->
		<view class="head-bg">
			<view class="head-user">
				<view class="user">
					<image src="/static/img/user_pic.jpg" mode=""></image>
					<text>爱跳舞的汤姆</text>
				</view>
				<view class="exchange" @click="isRule = true">
					<text>规则说明</text>
					<text class="iconfont icon-more"></text>
				</view>
			</view>
			<view class="integral-balance">
				<view class="integral" @click="onIntegral">
					<text>累计获得积分</text>
					<text class="number">10000</text>
					<text class="btn" :class="{'action':SigninStatus===1}">{{SigninStatus===0?'立即签到':'已签到'}}</text>
				</view>
			</view>
			<view class="bg">
				<image src="/static/integral_bg1.png" mode=""></image>
			</view>
		</view>
		<!-- 签到 -->
		<view class="Signin-data">
			<view class="signin-title">
				<view class="title">
					<text>每日签到</text>
				</view>
			</view>
			<view class="day-list">
				<view class="list" v-for="(item,index) in 7" 
				:class="{'action':index <= 4}"
				:key="index">
					<view class="circle">
						<text v-show="index > 4">+{{index+1}}</text>
						<text class="iconfont icon-duihao" v-show="index <= 4"></text>
					</view>
					<view class="day">
						<text>{{index+1}}天</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 邀请新人 -->
		<view class="invitation-data">
			<view class="invitation-title">
				<view class="title">
					<text>我的邀请记录 &gt;</text>
				</view>
			</view>
			<view class="invitation-show">
				<view class="icon">
					<text class="iconfont icon-user"></text>
				</view>
				<view class="item">
					<view class="title-btn">
						<view class="title">
							<text class="bt">邀请好友</text>
							<text class="ji">+100积分/人</text>
						</view>
						<view class="btn">
							<text>邀请免费得</text>
						</view>
					</view>
					<view class="describe">
						<text>每邀请1位均可获得100积分，免费无上限</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 签到提示弹窗 -->
		<view class="sigin-hint">
			<view class="cu-modal" :class="{'show':isSignin}">
			  <view class="cu-dialog">
			    <view class="cu-bar bg-white justify-end">
			      <view class="content">签到成功</view>
			      <view class="action">
			        <text class="cuIcon-close text-red" @click="isSignin = false"></text>
			      </view>
			    </view>
			    <view class="sigin-content">
						<view class="icon">
							<text class="iconfont icon-signin"></text>
						</view>
						<view class="title">
							<view>恭喜您，连续签到<text>3</text>天，获得<text>7</text>积分</view>
						</view>
						<view class="hint">
							<text>连续签到7天可获得额外奖励</text>
						</view>
						<view class="btn" @click="isSignin = false">
							<text>我知道了</text>
						</view>
					</view>
			  </view>
			</view>
		</view>
		<!-- 规则说明弹窗 -->
		<view class="rule-win">
			<view class="cu-modal" :class="{'show':isRule}">
			  <view class="cu-dialog">
			    <view class="cu-bar bg-white justify-end">
			      <view class="content">规则说明</view>
			      <view class="action">
			        <text class="cuIcon-close text-red" @click="isRule = false"></text>
			      </view>
			    </view>
			    <view class="rule-content">
						<text>
							1.签到第1天送5积分，连续签到第2天送6积分，以此类推，连续签到第7天可获额外红包奖励。第8天签到则重新开始-个七日轮回，视为首日签到;若签到中断则重新计算;
							2.在幸福集市任意门店内，可进行门店打卡，将获赠额外积分，每日1次机会;
							4.本活动的红包奖励、宝箱奖励均为优惠券形式，具体面额、有效时间、使用渠道以实际到账的优惠券为准;
							5.积分可在“积分明细”中查询，优惠券可在“会员-优惠券”中查看。
						</text>
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
				isSignin: false,
				SigninStatus: 0,
				// 规则
				isRule: false,
			};
		},
		methods:{
			/**
			 * 签到点击
			 */
			onIntegral(){
				this.isSignin = true;
				this.SigninStatus = 1;
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'SignIn.scss';
</style>
