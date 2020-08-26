<template>
	<view class="page" ref="page">
		<!-- 搜索 -->
		<view class="search-index">
			<!-- #ifndef H5 -->
				<view class="icon" @click="onCode">
					<text class="iconfont icon-saoyisao"></text>
				</view>
			<!-- #endif -->
			<!-- #ifdef  H5 -->
			<view class="icon" @click="onPayCode">
				<text class="iconfont icon-fukuanma"></text>
			</view>
			<!-- #endif -->
			<view class="search">
				<view class="iconfont icon-fadajing"></view>
				<input type="text" placeholder="输入搜索内容" />
			</view>
			<view class="icon">
				<text class="iconfont icon-xiaoxi"></text>
			</view>
		</view>
		<!-- 分类数据 -->
		<view class="classify-data" :style="'height:'+height+'px'">
			<view class="classify-one">
				<scroll-view scroll-y class="classify-list">
					<view class="list action">
						<text>推荐分类</text>
					</view>
					<view class="list" v-for="(item,index) in 10" :key="index">
						<text>分类{{index}}</text>
					</view>
				</scroll-view>
			</view>
			<view class="classify-two-three">
				<scroll-view scroll-y class="scroll">
					<view class="classify-two" v-for="(item,index) in 6" :key="index">
						<view class="two-name">
							<view class="name">常用分类</view>
						</view>
						<view class="classify-three">
							<view class="list">
								<image :src="'/static/img/goods_thumb_0'+(index+1)+'.png'"></image>
								<text>女衣服</text>
							</view>
							<view class="list">
								<image :src="'/static/img/goods_thumb_0'+(index+1)+'.png'"></image>
								<text>男衣服</text>
							</view>
							<view class="list">
								<image :src="'/static/img/goods_thumb_0'+(index+1)+'.png'"></image>
								<text>衣服啊</text>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<!-- tabbar -->
		<TabBar :tabBarShow="1"></TabBar>
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
				height: 0,
			};
		},
		onReady() {
			setTimeout(()=>{
			  uni.hideTabBar()  
			},100)
			let info = uni.createSelectorQuery().select(".page");
　　　  info.boundingClientRect((data) => { //data - 各种参数
					console.log(data.height);
					this.height = data.height - 100;
				  // #ifdef APP-PLUS 
					this.height = data.height - 130;
					// #endif 
					
　　    }).exec()
		},
		methods:{
			/**
			 * 扫一扫点击
			 */
			onCode(){
				// 只允许通过相机扫码
				uni.scanCode({
					onlyFromCamera: true,
					success: function (res) {
							console.log('条码类型：' + res.scanType);
							console.log('条码内容：' + res.result);
					}
				});
			},
			/**
			 * 付款码点击
			 */
			onPayCode(){
				uni.navigateTo({
					url: '/pages/PaymentCode/PaymentCode'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
@import 'classify.scss'
</style>
