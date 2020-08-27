<template>
	<view class="page">
		<view class="head-back">
			<view class="back" @click="onBack">
				<text></text>
			</view>
			<view class="title">
				<image src="/static/flash_title.png" mode=""></image>
			</view>
		</view>
		<view class="head-bg">
			<view class="session" :class="{'activity':scrollTop > 50}">
				<view class="list action">
					<text class="time">16:00</text>
					<text class="status">抢购中</text>
				</view>
				<view class="list">
					<text class="time">18:00</text>
					<text class="status">即将开始</text>
				</view>
				<view class="list">
					<text class="time">20:00</text>
					<text class="status">即将开始</text>
				</view>
				<view class="list">
					<text class="time">22:00</text>
					<text class="status">即将开始</text>
				</view>
				<view class="list">
					<text class="time">00:00</text>
					<text class="status">即将开始</text>
				</view>
			</view>
		</view>
		<view class="goods-list">
			<view class="list" v-for="(item,index) in 8" 
			@click="onGoods"
			:key="index">
				<view class="thumb">
					<image :src="'/static/img/goods_thumb_0'+(index+1)+'.png'"></image>
				</view>
				<view class="item">
					<view class="title">
						<text class="one-omit">薇妮(Viney)时尚包包女包牛皮单肩包女休闲百搭斜挎包韩版小方包潮(水电费枪色)</text>
					</view>
					<view class="price-data">
						<view class="price">
							<text>￥2999.00</text>
							<text class="lineation ">￥3299</text>
						</view>
						<view class="data">
							<view class="btn">
								<text>立即抢购</text>
							</view>
							<view class="schedule">
								<view class="num">已售50%</view>
								<view class="bar">
									<text></text>
								</view>
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
				scrollTop: 0,
			};
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		methods:{
			/**
			 * 返回
			 */
			onBack(){
				uni.navigateBack();
			},
			/**
			 * 商品点击
			 */
			onGoods(){
				uni.navigateTo({
					url: '/pages/GoodsDetails/GoodsDetails?type=1'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'FlashSale.scss';
</style>
