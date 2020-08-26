<template>
	<view class="page">
		<!-- 搜索 -->
		<view class="article-search">
			<!-- <view class="icon">
				<text class="iconfont icon-saoyisao"></text>
			</view> -->
			<view class="search">
				<view class="iconfont icon-fadajing"></view>
				<input type="text" placeholder="输入搜索内容" />
			</view>
			<!-- <view class="icon">
				<text class="iconfont icon-xiaoxi"></text>
			</view> -->
		</view>
		<!-- 文章数据 -->
		<view class="article-data">
			<view class="article-list">
				<view class="list" v-for="(item,index) in 8" 
				@click="onArticle"
				:key="index">
					<view class="item">
						<view class="title">
							<text class="two-omit">贴身内衣裤挑选指南，专业知识在这里</text>
						</view>
						<view class="find-collect">
							<view class="find">
								<text class="iconfont icon-chankan"></text>
								<text>26.8万人</text>
							</view>
							<view class="find">
								<text class="iconfont icon-shoucang"></text>
								<text>7000人</text>
							</view>
						</view>
					</view>
					<view class="thumb">
						<image :src="'/static/img/goods_thumb_0'+(index+1)+'.png'"></image>
					</view>
				</view>
			</view>
		</view>
		<!-- tabbar -->
		<TabBar :tabBarShow="2"></TabBar>
	</view>
</template>

<script>
	import TabBar from '../../components/TabBar/TabBar.vue';
	export default {
		components:{
			TabBar,
		},
		data() {
			return {
				
			};
		},
		onReady() {
			uni.hideTabBar();
		},
		methods:{
			/**
			 * 文章点击
			 */
			onArticle(){
				uni.navigateTo({
					url: '/pages/ArticleDetails/ArticleDetails',
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'discover.scss';
</style>
