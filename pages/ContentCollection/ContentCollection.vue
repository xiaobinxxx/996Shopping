<template>
	<view class="page">
		<!-- 编辑 -->
		<view class="article-edit">
			<view class="edit" @click="isEdit = !isEdit">
				<text>{{isEdit?'完成':'编辑'}}</text>
			</view>
		</view>
		<!-- 文章列表 -->
		<view class="article-list">
			<view class="list" v-for="(item,index) in 6" :key="index">
				<view class="check" :style="isEdit?'display: flex':'display: none'">
					<text class="iconfont icon-check"></text>
				</view>
				<view class="item">
					<view class="title">
						<text>华为新机为何如此强悍，自研发的能力是真的强，带领新的风尚！</text>
					</view>
					<view class="like">
						<text>199人喜欢</text>
					</view>
				</view>
				<view class="thumb">
					<image :src="'/static/img/goods_thumb_'+(index+11)+'.png'" mode=""></image>
				</view>
			</view>
		</view>
		<!-- 底部 -->
		<view class="footer-btn" :style="isEdit?'display: flex':'display: none'">
			<view class="btn">取消收藏</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isEdit: false,
			};
		}
	}
</script>

<style scoped lang="scss">
	@import 'ContentCollection.scss'
</style>
