<template>
	<view class="cu-modal bottom-modal" :class="{'show':isShow}" @click="hide">
	  <view class="cu-dialog">
			<view class="goods-data">
				<view class="thumb">
					<image src="https://axhub.im/pro/bb1f7bd347952764/images/%E9%A6%96%E9%A1%B5/u640-0.png" mode=""></image>
				</view>
				<view class="item">
					<view class="title">
						<text></text>
					</view>
					<view class="price">
						<text class="min">￥</text>
						<text class="max">299</text>
						<text class="min">.00</text>
					</view>
					<view class="inventory">
						<text>库存：3000</text>
					</view>
				</view>
			</view>
			<view class="attr-size">
				<view class="attr-list" v-for="(item,index) in AttrSizeList" :key="index">
					<view class="title">
						<text>{{item.attr}}</text>
					</view>
					<view class="size-list">
						<div class="list" v-for="(value,idx) in item.SizeList" 
						:class="{'action':AttrSizeList[index].index === idx}"
						@click.stop="onAttrSize(item,value,index,idx)" :key="idx">
							<text>{{value.size}}</text>
						</div>
					</view>
				</view>
				<view class="attr-number" @click.stop="onStop">
					<view class="tit">数量</view>
					<view class="number">
						<text class="iconfont icon-jian"></text>
						<input type="tel" value="1" maxlength="8">
						<text class="iconfont icon-jia"></text>
					</view>
				</view>
			</view>
			<view class="attr-btn">
				<view class="add-cart" v-if="BuyType === 1" @click="onConfirm(BuyType)">加入购物车</view>
				<view class="add-buy" v-if="BuyType === 1" @click="onConfirm(BuyType)">立即购买</view>
				<view class="confirm" v-if="BuyType === 2 || BuyType === 3" @click="onConfirm(BuyType)">确定</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: false,
				AttrIndex: 0,
				SizeIndex: 0,
				AttrSizeList:[
					{
						index: 0,
						attr: '颜色',
						SizeList: [
							{
								index: 0,
								size: '白色'
							},{
								index: 1,
								size: '黑色'
							},{
								index: 2,
								size: '粉丝'
							},{
								index: 3,
								size: '灰色'
							},
						],
					},{
						index: 0,
						attr: '尺码',
						SizeList: [
							{
								index: 0,
								size: 'M尺码'
							},{
								index: 1,
								size: 'L尺码'
							},{
								index: 2,
								size: 'XL尺码'
							},{
								index: 3,
								size: 'XXL尺码'
							},
						],
					}
				],
				// 购买类型
				BuyType: 0,
			};
		},
		methods:{
			/**
			 * 显示 
			 * @param {Number} type 1 点击选择 2 加入购物 3 立即购买
			 */
			show(type){
				this.BuyType = type;
				this.isShow = true;
			},
			hide(){
				this.isShow = false;
			},
			onStop(){
				
			},
			/**
			 * 属性选择点击
			 */
			onAttrSize(item,value,index,idx){
				this.AttrSizeList[index].index = idx;
				this.AttrIndex = item.index;
				this.SizeIndex = value.index;
			},
			/**
			 * 确认点击
			 */
			onConfirm(type){
				uni.navigateTo({
					url: '/pages/ConfirmOrder/ConfirmOrder'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'GoodsAttr.scss';
</style>
