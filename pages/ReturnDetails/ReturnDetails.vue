<template>
	<view class="page">
		<!-- 商品 -->
		<view class="goods-data">
			<view class="goods-list">
				<view class="list">
					<view class="thumb">
						<image src="/static/img/souji.webp" mode=""></image>
					</view>
					<view class="item">
						<view class="title">
							<text class="two-omit">华为 HUAWEI 畅享9s 4GB+128GB 极光蓝</text>
						</view>
						<view class="price-num">
							<view class="price">
								<text>单价：</text>
								<text class="action">￥1999.00</text>
							</view>
							<view class="num">
								<text>数量：</text>
								<text class="action">1</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 申请数据 -->
		<view class="apply-data">
			<view class="apply-list">
				<view class="list" @click="isApplyCause = true">
					<view class="title">
						<text>申请原因</text>
					</view>
					<view class="more">
						<text>请选择申请原因</text>
						<text class="iconfont icon-more1"></text>
					</view>
				</view>
				<view class="list">
					<view class="title">
						<text>申请金额</text>
					</view>
					<view class="more">
						<input type="number" placeholder="请输入退款金额" />
					</view>
				</view>
				<view class="list describe">
					<textarea placeholder="请具体描述申请原因" />
				</view>
				<view class="voucher">
					<view class="thumb">
						<image src="/static/voucher_bg.png" mode=""></image>
					</view>
					<view class="thumb">
						<image src="/static/img/wen_01.jpg" mode=""></image>
						<text class="iconfont icon-close1"></text>
					</view>
					<view class="thumb">
						<image src="/static/img/wen_01.jpg" mode=""></image>
						<text class="iconfont icon-close1"></text>
					</view>
				</view>
			</view>
		</view>
		<!-- 提交 -->
		<view class="submit-btn">
			<view class="btn">提交</view>
		</view>
		<!-- 申请原因弹窗 -->
		<view class="apply-cause-win cu-modal bottom-modal" :class="{'show':isApplyCause}" @click="isApplyCause = false">
			<view class="cu-dialog">
				<view class="title">申请原因</view>
				<view class="cause-list">
					<view class="list">
						<view class="cause">质量问题</view>
						<view class="check">
							<text class="iconfont icon-check"></text>
						</view>
					</view>
					<view class="list">
						<view class="cause">拍错/多拍/不想要</view>
						<view class="check">
							<text class="iconfont icon-check"></text>
						</view>
					</view>
					<view class="list">
						<view class="cause">协商一致退款</view>
						<view class="check">
							<text class="iconfont icon-check"></text>
						</view>
					</view>
					<view class="list">
						<view class="cause">缺货</view>
						<view class="check">
							<text class="iconfont icon-check"></text>
						</view>
					</view>
					<view class="list">
						<view class="cause">未按约定时间发货</view>
						<view class="check">
							<text class="iconfont icon-check"></text>
						</view>
					</view>
					<view class="list">
						<view class="cause">其他</view>
						<view class="check">
							<text class="iconfont icon-check"></text>
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
				isApplyCause: false,
			};
		}
	}
</script>

<style scoped lang="scss">
	@import 'ReturnDetails.scss';
</style>
