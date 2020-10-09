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
    <mescroll-body ref="mescrollRef"
                   @down="downCallback"
                   @up="upCallback"
                   :down="downOption"
                   :up="upOption"
                   :top="0">
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
    </mescroll-body>
		<!-- tabbar -->
		<TabBar :tabBarShow="2"></TabBar>
	</view>
</template>

<script>
	import TabBar from '../../components/TabBar/TabBar.vue';
  // 引入mescroll-mixins.js
  import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	export default {
    mixins: [MescrollMixin], // 使用mixin
		components:{
			TabBar,
		},
		data() {
			return {
        mescroll: null, // mescroll实例对象 (此行可删,mixins已默认)
        // 下拉刷新的配置(可选, 绝大部分情况无需配置)
        downOption: {},
        // 上拉加载的配置(可选, 绝大部分情况无需配置)
        upOption: {
        },
			};
		},
		onReady() {
			uni.hideTabBar();
		},
		methods:{
      /*下拉刷新的回调, 有三种处理方式:*/
      downCallback(){
        this.mescroll.endSuccess();
      },
      /*上拉加载的回调*/
      upCallback(page) {
        setTimeout(() =>{
          this.mescroll.endByPage(10, 20);
        },2000)
      },
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
