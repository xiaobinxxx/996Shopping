<template>
	<view class="page">
		<view class="add-list">
			<view class="list">
				<view class="title">
					<text>发票抬头</text>
					<text class="star">*</text>
				</view>
				<view class="content">
					<input type="text" placeholder="请填写发票抬头">
				</view>
			</view>
			<view class="list">
				<view class="title">
					<text>企业税号</text>
				</view>
				<view class="content">
					<input type="text" placeholder="请填企业纳税识别号">
				</view>
			</view>
		</view>
		<!-- 保存按钮 -->
		<view class="save-btn">
			<view class="btn" @click="onSave">保存</view>
		</view>
		<DialogBox ref="DialogBox"></DialogBox>
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
			 * 保存点击
			 */
			onSave(){
				this.$refs['DialogBox'].confirm({
					title: '请确认您填写的纳税识别号',
					content: '91440300MA5FQYCP55',
					DialogType: 'inquiry',
					animation: 0,
				}).then(res =>{
					uni.showToast({
						title: '保存成功',
						icon: 'success',
					}).then(()=>{
						uni.navigateBack();
					})
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'InvoiceAdd.scss';
</style>
