<template>
	<view class="page">
		<view>
			<view class="pay-title">
				<text v-show="AffirmStatus === 1">请输入6位支付密码</text>
				<text v-show="AffirmStatus === 2">请设置6位支付密码</text>
				<text v-show="AffirmStatus === 3">请确认6位支付密码</text>
			</view>
			<view class="pay-password" @click="onPayUp">
				<view class="list">
					<text v-show="passwordArr.length >= 1">●</text>
				</view>
				<view class="list">
					<text v-show="passwordArr.length >= 2">●</text>
				</view>
				<view class="list">
					<text v-show="passwordArr.length >= 3">●</text>
				</view>
				<view class="list">
					<text v-show="passwordArr.length >= 4">●</text>
				</view>
				<view class="list">
					<text v-show="passwordArr.length >= 5">●</text>
				</view>
				<view class="list">
					<text v-show="passwordArr.length >= 6">●</text>
				</view>
			</view>
			<view class="hint">
				<text>忘记支付密码？</text>
			</view>
		</view>
		<CodeKeyboard ref="CodeKeyboard" passwrdType="pay" @KeyInfo="KeyInfo"></CodeKeyboard>
	</view>
</template>

<script>
	import CodeKeyboard from '../../components/CodeKeyboard/CodeKeyboard.vue';
	export default {
		components:{
			CodeKeyboard,
		},
		data() {
			return {
				AffirmStatus: 1,
				passwordArr: [],
				oldPasswordArr: [],
				newPasswordArr: [],
				afPasswordArr: [],
			};
		},
		onLoad() {
			
		},
		methods:{
			/**
			 * 唤起键盘
			 */
			onPayUp(){
				this.$refs['CodeKeyboard'].show();
			},
			/**
			 * 支付键盘回调
			 * @param {Object} val
			 */
			KeyInfo(val){
				if(val.index >= 6){
					return;
				}
				// 判断是否删除
				if(val.keyCode === 8){
					this.passwordArr.splice(val.index+1,1)
				}else{
					this.passwordArr.push(val.key);
				}
				// 判断是否等于6
				if(this.passwordArr.length === 6){
					this.passwordArr = [];
					this.AffirmStatus = this.AffirmStatus+1;
				}
				// 判断到哪一步了
				if(this.AffirmStatus === 1){
					this.oldPasswordArr = this.passwordArr;
				}else if(this.AffirmStatus === 2){
					this.newPasswordArr = this.passwordArr;
				}else if(this.AffirmStatus === 3){
					this.afPasswordArr = this.passwordArr;
				}else if(this.AffirmStatus === 4){
					console.log(this.oldPasswordArr.join(''));
					console.log(this.newPasswordArr.join(''));
					console.log(this.afPasswordArr.join(''));
					uni.showToast({
						title: '修改成功',
						icon: 'none'
					})
					setTimeout(() =>{
						uni.navigateBack();
					},2000)
				}
				this.$forceUpdate();
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'PaymentEdit.scss';
</style>
