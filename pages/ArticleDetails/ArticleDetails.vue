<template>
	<view class="page">
		<!-- banner -->
		<view class="banner">
			<swiper class="screen-swiper round-dot" indicator-dots="true" circular="true" autoplay="true" interval="5000" duration="500">
				<swiper-item v-for="(item, index) in swiperList" :key="index">
					<image :src="item.url" mode="widthFix"></image>
					<!-- <video src="{{item.url}}" autoplay loop muted show-play-btn="{{false}}" controls="{{false}}" objectFit="cover" wx:if="{{item.type=='video'}}"></video> -->
				</swiper-item>
			</swiper>
		</view>
		<!-- 文章内容 -->
		<view class="article-data">
			<view class="article-title">
				<text>我的快充秘诀-爱国者充电宝</text>
			</view>
			<view class="article-content">
				<text>入手这款充电宝，是真的好，真的好，真的好，真的好，真的好，真的好，真的好，真的好，真的好，真的好</text>
			</view>
		</view>
		<!-- 猜你喜欢 -->
		<view class="guess-like">
			<view class="guess-like-title">
				<text class="line"></text>
				<text>猜你喜欢</text>
			</view>
			<view class="article-list">
				<view class="box-wrapper">
					<view class="list">
						<view class="thumb">
							<image src="http://img0.imgtn.bdimg.com/it/u=791178039,1753704237&fm=26&gp=0.jpg" mode="widthFix"></image>
						</view>
						<view class="title">
							<text>安利一款笔记本电脑啊，非常好用</text>
						</view>
						<view class="like">
							<text class="iconfont icon-guanzhu"></text>
							<text>100</text>
						</view>
					</view>
					<view class="list">
						<view class="thumb">
							<image src="http://img2.imgtn.bdimg.com/it/u=147264006,1706829998&fm=26&gp=0.jpg" mode="widthFix"></image>
						</view>
						<view class="title">
							<text>安利一款笔记本电脑啊，非常好用</text>
						</view>
						<view class="like">
							<text class="iconfont icon-guanzhu"></text>
							<text>100</text>
						</view>
					</view>
					<view class="list">
						<view class="thumb">
							<image src="http://img0.imgtn.bdimg.com/it/u=791178039,1753704237&fm=26&gp=0.jpg" mode="widthFix"></image>
						</view>
						<view class="title">
							<text>安利一款笔记本电脑啊，非常好用</text>
						</view>
						<view class="like">
							<text class="iconfont icon-guanzhu"></text>
							<text>100</text>
						</view>
					</view><view class="list">
						<view class="thumb">
							<image src="http://img0.imgtn.bdimg.com/it/u=791178039,1753704237&fm=26&gp=0.jpg" mode="widthFix"></image>
						</view>
						<view class="title">
							<text>安利一款笔记本电脑啊，非常好用</text>
						</view>
						<view class="like">
							<text class="iconfont icon-guanzhu"></text>
							<text>100</text>
						</view>
					</view><view class="list">
						<view class="thumb">
							<image src="http://img0.imgtn.bdimg.com/it/u=791178039,1753704237&fm=26&gp=0.jpg" mode="widthFix"></image>
						</view>
						<view class="title">
							<text>安利一款笔记本电脑啊，非常好用</text>
						</view>
						<view class="like">
							<text class="iconfont icon-guanzhu"></text>
							<text>100</text>
						</view>
					</view><view class="list">
						<view class="thumb">
							<image src="http://img0.imgtn.bdimg.com/it/u=791178039,1753704237&fm=26&gp=0.jpg" mode="widthFix"></image>
						</view>
						<view class="title">
							<text>安利一款笔记本电脑啊，非常好用</text>
						</view>
						<view class="like">
							<text class="iconfont icon-guanzhu"></text>
							<text>100</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 底部 -->
		<view class="article-footer">
			<view class="footer-left">
				<view class="list" @click="isComment = true">
					<text class="iconfont icon-xiaoxi"></text>
				</view>
				<view class="list">
					<text class="iconfont icon-guanzhu"></text>
				</view>
			</view>
			<view class="footer-right" @click="isGoods = true">
				<text>买同款（1）</text>
			</view>
		</view>
		<!-- 评论弹窗 -->
		<view class="cu-modal bottom-modal comment-win" :class="{'show':isComment}" @click="isComment = false">
		  <view class="cu-dialog">
				<view class="comment-title">
					<view class="title">
						<text class="iconfont icon-xiaoxi"></text>
						<text>全部评论(3)</text>
					</view>
				</view>
				<view class="comment-list">
					<view class="list" v-for="(item,index) in 10" :key="index">
						<view class="portrait">
							<image src="/static/img/user_pic.jpg" mode="widthFix"></image>
						</view>
						<view class="item">
							<view class="title">
								<view class="name-date">
									<view class="name">
										<text>哈哈哈哈</text>
									</view>
									<view class="date">
										<text>12月27日</text>
									</view>
								</view>
								<view class="praise">
									<text>赞</text>
									<text class="iconfont icon-zan"></text>
								</view>
							</view>
							<view class="content">
								<text>这个真好，这个不错，购买来试一下看看！！</text>
							</view>
						</view>
					</view>
				</view>
				<view class="comment-input">
					<view class="comment">
						<input type="text" placeholder="写写你的看法吧">
					</view>
					<view class="send">
						<text>发送</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 商品弹窗 -->
		<view class="cu-modal bottom-modal goods-win" :class="{'show':isGoods}" @click="isGoods = false">
		  <view class="cu-dialog">
				<view class="goods-title">
					<view class="title">2个商品</view>
				</view>
				<view class="goods-list">
					<view class="list" v-for="(item,index) in 2" :key="index">
						<view class="thumb">
							<image src="http://img0.imgtn.bdimg.com/it/u=791178039,1753704237&fm=26&gp=0.jpg" mode=""></image>
						</view>
						<view class="item">
							<view class="title">
								<text class="two-omit">爱国者充电宝 4000毫安快速充电 安全稳定 动感灯光 全新上市</text>
							</view>
							<view class="price-look">
								<view class="price">
									<text>￥167.00</text>
								</view>
								<view class="look">
									<text>去看看&gt;</text>
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
				isComment: false,
				isGoods: false,
			};
		}
	}
</script>

<style scoped lang="scss">
	@import 'ArticleDetails.scss';
</style>
