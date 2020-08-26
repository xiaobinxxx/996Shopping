<template>
	<view class="page-total" v-show="isPage" @click="hide">
		<view class="dialog" :class="{'show':isShow}">
			<view class="serve-list">
				<view class="list">
					<view class="title">
						<text>及时配送</text>
					</view>
					<view class="content">
						<text>下单后最快将于30分钟内收到商品，如遇不可抗因素可能会导致延迟。</text>
					</view>
				</view>
				<view class="list">
					<view class="title">
						<text>瞬间退款保证</text>
					</view>
					<view class="content">
						<text>有任何不满意，可在App享受7天内瞬间退款服务门店购物亦可在手机App操作售后。</text>
					</view>
				</view>
				<view class="list">
					<view class="title">
						<text>真正的安全放心</text>
					</view>
					<view class="content">
						<text>八大环节重重检验筛选，为安全把关严格执行“四度一味一安全”食品分级标准</text>
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
				isShow: false,
				isPage: false,
			};
		},
		methods:{
			show(){
				this.isPage = true;
				setTimeout(()=>{
					this.isShow = true;
				},200)
			},
			hide(){
				this.isShow = false;
				setTimeout(()=>{
					this.isPage = false;
				},200)
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'GoodsServe.scss';
</style>
