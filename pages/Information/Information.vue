<template>
	<view class="page">
		<!-- 用户信息列表 -->
		<view class="user-list">
			<view class="list" style="height: 160rpx;">
				<view class="title">
					<text>头像</text>
				</view>
				<view class="more-content">
					<image src="/static/img/user_pic.jpg" mode=""></image>
					<text class="iconfont icon-more more"></text>
				</view>
			</view>
			<view class="list" @click="onNickname">
				<view class="title">
					<text>昵称</text>
				</view>
				<view class="more-content">
					<text class="content">{{nickname}}</text>
					<text class="iconfont icon-more more"></text>
				</view>
			</view>
			<view class="list">
				<view class="title">
					<text>性别</text>
				</view>
				<view class="more-content">
					<text class="content">{{sexText}}</text>
					<text class="iconfont icon-more more"></text>
				</view>
				<view class="picker">
					<picker @change="sexPickerChange" :value="sexIndex" :range="sexArray">
						<view class="uni-input" style="height: 100rpx;">{{sexText}}</view>
					</picker>
				</view>
			</view>
			<view class="list">
				<view class="title">
					<text>出生日期</text>
				</view>
				<view class="more-content">
					<text class="content">{{birthday}}</text>
					<text class="iconfont icon-more more"></text>
				</view>
				<view class="picker">
					<picker @change="birthdayPickerChange" mode="date" :value="birthdayDate" :start="startDate" :end="endDate">
						<view class="uni-input" style="height: 100rpx;">{{birthdayDate}}</view>
					</picker>
				</view>
			</view>
		</view>
		<!-- 提示框 -->
		<DialogBox ref="DialogBox"></DialogBox>
	</view>
</template>

<script>
	export default {
		data() {
			const currentDate = this.getDate({
					format: true
			})
			return {
				// 性别
				sexArray: ['男','女','保密'],
				sexIndex: 0,
				sexText: '保密',
				// 生日
				birthdayDate: currentDate,
				startDate: this.getDate('start'),
				endDate: this.getDate('end'),
				birthday: '2020-02-02',
				DialogBox: {},
				// 昵称
				nickname: '爱跳舞的汤姆猫',
			};
		},
		onLoad() {
		},
		methods:{
			/**
			 * 性别
			 * @param {Object} e
			 */
			sexPickerChange(e){
				this.sexIndex = e.detail.value;
				this.sexText = this.sexArray[this.sexIndex];
			},
			/**
			 * 生日
			 * @param {Object} e
			 */
			birthdayPickerChange(e){
				this.birthday = e.detail.value;
			},
			/**
			 * 获取日期
			 * @param {Object} type
			 */
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
						year = year - 60;
				} else if (type === 'end') {
						year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			/**
			 * 昵称点击
			 */
			onNickname(){
				this.$refs['DialogBox'].confirm({
					title: '更改昵称',
					placeholder: '请输入修改的昵称',
					value: this.nickname,
					DialogType: 'input',
					animation: 0
				}).then((res)=>{
					this.nickname = res.value;
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'Information.scss';
</style>
