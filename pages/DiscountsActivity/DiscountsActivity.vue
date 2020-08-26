<template>
	<view class="page">
		<view class="activity-list">
			<view class="list" v-for="(item,index) in 6" :key="index">
				<view class="date">
					<text>09.13 09:20</text>
				</view>
				<view class="item">
					<view class="title">
						<text class="one-omit">活动标题不要超过一行哦哦哦哦哦哦哦哦哦</text>
					</view>
					<view class="pictrue">
						<image src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=116920515,1155864188&fm=26&gp=0.jpg" mode=""></image>
						<view class="hint">
							<text>活动结束</text>
						</view>
					</view>
					<view class="describe">
						<text class="two-omit">活动内容的描述：描述内容请控制在两行以内，超过两行的部分请用</text>
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
				
			};
		}
	}
</script>

<style scoped lang="scss">
	@import 'DiscountsActivity.scss';
</style>
