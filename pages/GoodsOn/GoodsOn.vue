<template>
	<view class="page">
		<view class="goods-tab">
			<view class="tab">
				<text class="action">默认</text>
			</view>
			<view class="tab">
				<text>降价</text>
			</view>
			<view class="tab">
				<text>促销</text>
			</view>
			<view class="tab">
				<text>分类</text>
			</view>
			<view class="tab" @click="isEdit = !isEdit">
				<text>{{isEdit?'完成':'编辑'}}</text>
			</view>
		</view>
		<view class="goods-list">
			<view class="list" v-for="(item,index) in 8" :key="index">
				<view class="check" :style="isEdit?'display: flex':'display: none'">
					<text class="iconfont icon-check"></text>
				</view>
				<view class="thumb">
					<image :src="'/static/img/goods_thumb_0'+(index+1)+'.png'" mode=""></image>
				</view>
				<view class="item">
					<view class="title">
						<text class="two-omit">薇妮(Viney)时尚包包女包牛皮单肩包女休闲百搭斜挎包韩版小方包潮(枪色)</text>
					</view>
					<view class="price-more">
						<view class="price">￥188.00</view>
						<view class="depreciate" :style="!isEdit?'display: flex':'display: none'">
							<text>比关注时降价300.00元</text>
						</view>
					</view>
					<view class="goods-btn">
						<view class="btn">
							<text>看相似</text>
							<text>降价通知</text>
						</view>
						<view class="cart">
							<text class="iconfont icon-cart"></text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="footer-btn" :style="isEdit?'display: flex':'display: none'">
			<view class="btn">取消关注</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isEdit: false,
			};
		},
		methods:{
			
		}
	}
</script>

<style scoped lang="scss">
	@import 'GoodsOn.scss';
</style>
