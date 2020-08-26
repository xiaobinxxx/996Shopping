<template>
	<view class="page">
		<!-- 编辑 -->
		<view class="article-edit">
			<view class="edit">
				<text>清空</text>
			</view>
			<view class="edit" @click="isEdit = !isEdit">
				<text>{{isEdit?'完成':'编辑'}}</text>
			</view>
		</view>
		<!-- 记录列表 -->
		<view class="record-data">
			<view class="record-list" v-for="(item,index) in 3" :key="index">
				<view class="record-date">
					<text>3月30日</text>
				</view>
				<view class="goods-list">
					<view class="list" v-for="(value,idx) in 2" :key="idx">
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
							</view>
							<view class="goods-btn">
								<view class="btn">
									<text>看相似</text>
								</view>
								<view class="cart">
									<text class="iconfont icon-cart"></text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="footer-btn" :style="isEdit?'display: flex':'display: none'">
			<view class="btn">删除</view>
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
	@import 'BrowsingHistory.scss';
</style>
