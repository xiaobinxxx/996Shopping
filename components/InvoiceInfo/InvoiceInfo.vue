<template>
	<view class="page-total">
		<view class="cu-modal bottom-modal" :class="{ show: isShow }" @click="hide">
			<view class="cu-dialog">
				<view class="invoice-title">
					<view class="title">发票</view>
					<view class="notice">发票须知</view>
				</view>
				<!-- 发票数据 -->
				<view class="invoice-data" @click.stop="onStop">
					<view class="invoice-type">
						<view class="title">发票类型</view>
						<view class="type-list">
							<view class="list" :class="{'action':InvoiceType===0}" @click.stop="onInvoiceType(0)">
								<text>普通发票</text>
							</view>
							<view class="list" :class="{'action':InvoiceType===1}" @click.stop="onInvoiceType(1)">
								<text>增值营业专业税</text>
							</view>
						</view>
					</view>
					<view class="invoice-rise">
						<view class="title">发票抬头</view>
						<view class="type-list">
							<view class="list" :class="{'action':InvoiceRise===0}" @click.stop="onInvoiceRise(0)">
								<text>个人</text>
							</view>
							<view class="list" :class="{'action':InvoiceRise===1}" @click.stop="onInvoiceRise(1)">
								<text>单位</text>
							</view>
						</view>
						<view class="invoice-input">
							<view class="list">
								<text>单位名称</text>
								<input type="text" placeholder="请填写单位名称" />
							</view>
							<view class="list">
								<text>纳税人识别号</text>
								<input type="text" placeholder="请填写纳税人识别号" />
							</view>
						</view>
					</view>
					<view class="invoice-rise">
						<view class="title">收票人信息</view>
						<view class="invoice-input">
							<view class="list">
								<text>收票人手机*</text>
								<input type="text" placeholder="可通过手机号在发票服务平台查询" />
							</view>
							<view class="list">
								<text>收票人邮箱</text>
								<input type="text" placeholder="用来接收电子发票邮箱,可选填" />
							</view>
						</view>
					</view>
					<view class="invoice-rise">
						<view class="title">发票内容</view>
						<view class="type-list">
							<view class="list action">
								<text>商品明细</text>
							</view>
						</view>
					</view>
				</view>
				<!-- 确认 -->
				<view class="footer-Affirm">
					<view class="no-invoice" @click.stop="onNoInvoice">不开发票</view>
					<view class="Affirm-invoice" @click.stop="onAffirmInvoice">确定</view>
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
			InvoiceType: 0,
			InvoiceRise: 0,
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
		 * 阻止冒泡
		 */
		onStop(){
			
		},
		/**
		 * 发票类型点击
		 */
		onInvoiceType(type){
			this.InvoiceType = type;
		},
		/**
		 * 发票抬头点击
		 */
		onInvoiceRise(type){
			this.InvoiceRise = type;
		},
		/**
		 * 不开发票点击
		 */
		onNoInvoice(){
			this.hide();
		},
		/**
		 * 开发票点击
		 */
		onAffirmInvoice(){
			this.hide();
		}
	}
};
</script>

<style scoped lang="scss">
@import 'InvoiceInfo.scss';
</style>
