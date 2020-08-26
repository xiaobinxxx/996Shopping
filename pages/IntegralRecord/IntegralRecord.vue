<template>
	<view class="page">
		<!-- tab -->
		<view class="integral-tab">
			<view class="tab action">
				<text>全部</text>
			</view>
			<view class="tab">
				<text>收入</text>
			</view>
			<view class="tab">
				<text>支出</text>
			</view>
		</view>
		<!-- 记录列表 -->
		<view class="record-list">
			<view class="list" v-for="(item,index) in 10" :key="index">
				<view class="title-date">
					<view class="title">
						<text>10元直减优惠券</text>
					</view>
					<view class="date">
						<text>2020-2-2 13:11</text>
					</view>
				</view>
				<view class="integral">
					<text :class="{'add':index>5}">{{index > 5 ? '+1000':'-1000'}}</text>
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
	@import 'IntegralRecord.scss';
</style>
