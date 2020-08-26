<template>
	<view class="page">
		<view class="relevance-list">
			<view class="list" @click="onRelevance('wx')">
				<view class="title">
					<image src="/static/wx_pay.png" mode=""></image>
					<text>微信</text>
				</view>
				<view class="more">
					<text>已关联</text>
					<text class="iconfont icon-more"></text>
				</view>
			</view>
		</view>
		<view class="hint">
			<text>账号关联之后，用户可以使用微信账号快速登录。在进行各个渠道进行购物时，均可同步会员账号，享受会员特权，同步订单物流信息。</text>
		</view>
		<!-- 提示框 -->
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
			 * 账号关联点击
			 * @param {String} type
			 */
			onRelevance(type){
				switch (type){
					case 'wx':
						this.$refs['DialogBox'].confirm({
							title: '提示',
							content: '是否要解除关联?',
							DialogType: 'inquiry',
							animation: 0
						}).then(()=>{
							uni.navigateBack();
						})
						break;
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'AccountAssociated.scss';
</style>
