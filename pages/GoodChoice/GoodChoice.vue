<template>
	<view class="page">
		<view class="head-back">
			<view class="back" @click="onBack">
				<text></text>
			</view>
			<view class="title">
				<image src="/static/good_title.png" mode=""></image>
			</view>
		</view>
		<view class="head-bg">
			<view class="banner">
				<swiper class="screen-swiper square-dot" indicator-dots="true" circular="true" autoplay="true" interval="5000" duration="500">
					<swiper-item v-for="(item,index) in swiperList" :key="index">
						<image :src="item.url" mode="aspectFill"></image>
						<!-- <video src="{{item.url}}" autoplay loop muted show-play-btn="{{false}}" controls="{{false}}" objectFit="cover" wx:if="{{item.type=='video'}}"></video> -->
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="goods-data">
			<view class="goods-list">
				<view class="list" v-for="(item,index) in 8" 
				@click="onGoods"
				:key="index">
					<view class="thumb">
						<image :src="'/static/img/goods_thumb_'+(index+11)+'.png'" mode=""></image>
					</view>
					<view class="item">
						<view class="title">
							<text class="two-omit">Apple 2020新款 MacBook Pro 13.3【带触控栏】十代i5 16G 512G 2.0GHz 深空灰 笔记本电脑 轻薄本 MWP42CHA</text>
						</view>
						<view class="introduce">
							<text class="two-omit">奢华设计，尽显高端品质，真皮材质，给你一种奢侈的享受，独家匠心制作，纯手工打造，设计唯美，大方，出门有面子，朋友羡慕。</text>
						</view>
						<view class="like-goods">
							<view class="like">
								<text>300人喜欢</text>
								<text class="iconfont icon-guanzhu"></text>
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
				swiperList: [
					{
						id: 0,
						type: 'image',
						url: '/static/img/banner_01.png'
					},
					{
						id: 1,
						type: 'image',
						url: '/static/img/banner_02.png'
					},
					{
						id: 2,
						type: 'image',
						url: '/static/img/banner_03.png'
					},
					{
						id: 3,
						type: 'image',
						url: '/static/img/banner_04.png'
					},
					{
						id: 4,
						type: 'image',
						url: '/static/img/banner_01.png'
					},
					{
						id: 5,
						type: 'image',
						url: '/static/img/banner_01.png'
					}
				],
			};
		},
		methods:{
			/**
			 * 返回点击
			 */
			onBack(){
				uni.navigateBack();
			},
			/**
			 * 商品点击
			 */
			onGoods(){
				uni.navigateTo({
					url: '/pages/ArticleDetails/ArticleDetails'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'GoodChoice.scss';
</style>
