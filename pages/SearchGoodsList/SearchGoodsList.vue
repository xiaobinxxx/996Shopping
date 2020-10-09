<template>
	<view class="page">
		<!-- 搜索 -->
		<view class="search-head">
			<view class="back" @click="onBack">
				<text></text>
			</view>
			<view class="search">
				<text class="iconfont icon-fadajing"></text>
				<input type="text" v-model="keyword" placeholder="搜索商品" />
			</view>
			<view class="cut" @click="isList = !isList">
				<text class="iconfont" :class="isList?'icon-shitu01':'icon-shitu02'"></text>
			</view>
		</view>
		<!-- 筛选 -->
		<view class="screen-info">
			<view class="screen-list">
				<view class="list" :class="{'action':screenShow===0}" @click="onSynthesize(0)">
					<text>综合</text>
					<text class="iconfont icon-sanjiao icon_z"></text>
				</view>
				<view class="list">
					<text>销量</text>
					<text></text>
				</view>
				<view class="list">
					<text>价格</text>
					<view class="icon_j">
						<text class="iconfont icon-sanjiao up"></text>
						<text class="iconfont icon-sanjiao down"></text>
					</view>
				</view>
				<view class="list" @click="isDrawer = true">
					<text>筛选</text>
					<text class="iconfont icon-shaixuan icon_s"></text>
				</view>
			</view>
			<!-- 筛选弹窗 -->
			<view class="screen-popup" @click.stop="isScreen = false" v-show="isScreen">
				<view class="synthesize">
					<view class="list">
						<text class="check"></text>
						<text class="title">综合排序</text>
					</view>
					<view class="list">
						<text class="check"></text>
						<text class="title">评论数从高到低</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 商品列表 -->
		<view class="goods-data">
			<mescroll-body ref="mescrollRef"
				@init="mescrollInit"
				@down="downCallback"
				@up="upCallback"
				:down="downOption"
				:up="upOption"
				:top="0">
				<view class="goods-list">
					<view :class="isList?'list-view':'list-li'" v-for="(item,index) in goodsList" @click="onGoodsList" :key="index">
						<view class="thumb">
							<image :src="item.img" mode="heightFix"></image>
						</view>
						<view class="item">
							<view class="title">
								<text class="two-omit">{{item.name}}</text>
							</view>
							<view class="price">
								<view class="retail-price">
									<text class="min">￥</text>
									<text class="max">{{item.price}}</text>
									<view class="tag" v-if="item.is_goods === 1">
										<text>抢购价</text>
									</view>
								</view>
								<view class="vip-price">
									<text class="min">￥</text>
									<text class="max">{{item.vip_price}}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</mescroll-body>
		</view>
		<!-- 抽屉 -->
		<view class="cu-modal drawer-modal justify-end" :class="{'show':isDrawer}" @click="isDrawer = false" style="position: absolute;">
			<view class="cu-dialog basis-lg" @click.stop="isDrawer = true">
				<view class="serve">
					<view class="title">
						<text>服务</text>
					</view>
					<view class="serve-list">
						<view class="list action">
							<text>会员专享</text>
						</view>
						<view class="list">
							<text>活动</text>
						</view>
						<view class="list">
							<text>活动</text>
						</view>
					</view>
				</view>
				<view class="price-screen">
					<view class="title">
						<text>价格区间</text>
					</view>
					<view class="price-section">
						<input type="number" placeholder="最低价">
						<text></text>
						<input type="number" placeholder="最高价">
					</view>
				</view>
				<view class="operation-btn">
					<view class="btn" @click.stop="isDrawer = false">
						<text>取消</text>
					</view>
					<view class="btn action">
						<text>确认</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// 引入mescroll-mixins.js
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	export default {
		mixins: [MescrollMixin], // 使用mixin
		data() {
			return {
				mescroll: null, // mescroll实例对象 (此行可删,mixins已默认)
				// 下拉刷新的配置(可选, 绝大部分情况无需配置)
				downOption: {},
				// 上拉加载的配置(可选, 绝大部分情况无需配置)
				upOption: {
				},
				// 列表视图切换
				isList: true,
				// 筛选弹窗
				isScreen: false,
				// 筛选切换
				screenShow: 0,
				// 抽屉
				isDrawer: false,
				keyword: '',
        goodsList:[
          {
            id: 1,
            name: 'BANDALY 2020夏季女装连衣裙韩版大码宽松显瘦套装裙子两件套 JX19301 上豆绿下米白 M ',
            price: '219.00',
            vip_price: '129.00',
            img: '/static/img/goods_thumb_01.png',
            is_goods: 0,
          },{
            id: 1,
            name: '花花公子 卫衣男秋季圆领薄款休闲体恤男士时尚长袖T恤外套上衣男生情侣装套头衣服秋天男装 白色 XL',
            price: '139.00',
            vip_price: '99.00',
            img: '/static/img/goods_thumb_02.png',
            is_goods: 1,
          },{
            id: 1,
            name: '【两件套】花花公子PLAYBOY短袖T恤男套装夏季新款卫衣男士韩版修身冰丝宽松运动休闲上衣服裤子男装 CYFS903卡其色 XL',
            price: '168.00',
            vip_price: '158.00',
            img: '/static/img/goods_thumb_03.png',
            is_goods: 1,
          },{
            id: 1,
            name: '雪域森林短袖T恤男装2020夏季潮流时尚衣服男潮牌圆领印花宽松T恤半袖男 20855橙色 XL',
            price: '68.00',
            vip_price: '36.00',
            img: '/static/img/goods_thumb_04.png',
            is_goods: 0,
          },{
            id: 1,
            name: '短袖男夏季T恤男装韩版潮流印花套头衣服男士圆领宽松五分袖学生休闲夏天运动时尚情侣装大码 D119白色 XL',
            price: '68.00',
            vip_price: '59.00',
            img: '/static/img/goods_thumb_05.png',
            is_goods: 0,
          },{
            id: 1,
            name: '时尚休闲套装女夏季热天宽松女孩中学生高中初中生女生短袖套装衣服夏天少女学生韩版原宿风T恤潮流裤子一套 绿字母上衣+绿色裤两件套 均码',
            price: '83.00',
            vip_price: '78.00',
            img: '/static/img/goods_thumb_06.png',
            is_goods: 1,
          },{
            id: 1,
            name: '北极绒2020春夏季棉质睡衣女睡裙女夏季韩版纯棉短袖少女性感睡衣甜美可爱卡通家居服连衣裙 A3023 M【纯棉 品质保障】',
            price: '68.00',
            vip_price: '48.00',
            img: '/static/img/goods_thumb_07.png',
            is_goods: 1,
          },{
            id: 1,
            name: '韩卡婷 2020新款夏季短袖t恤女宽松学生衣服原宿风青春百搭显瘦上衣体恤闺蜜女装 白色 均码【80-120斤】',
            price: '29.00',
            vip_price: '19.00',
            img: '/static/img/goods_thumb_08.png',
            is_goods: 0,
          },{
            id: 1,
            name: '美连诚雪纺连衣裙 2020新款女夏裙子波点气质沙滩裙仙气时尚女装休闲衣服大码女装 白底红点 M ',
            price: '168.00',
            vip_price: '160.00',
            img: '/static/img/goods_thumb_09.png',
            is_goods: 0,
          },{
            id: 1,
            name: '凝拉t恤女短袖纯棉2020新款夏装中长款韩版宽松大码欧货潮上衣服半袖体恤 桔色2053 2XL（建议150-170斤)',
            price: '89.00',
            vip_price: '78.00',
            img: '/static/img/goods_thumb_10.png',
            is_goods: 0,
          },{
            id: 1,
            name: '荣耀Play4T 全网通6GB+128GB大内存 幻夜黑 4000mAh大电池 4800万AI摄影  6.39英寸魅眼屏',
            price: '1190.00',
            vip_price: '1100.00',
            img: '/static/img/goods_thumb_11.png',
            is_goods: 0,
          },{
            id: 1,
            name: '小米（MI） Redmi 8A',
            price: '699.00',
            vip_price: '599.00',
            img: '/static/img/goods_thumb_12.png',
            is_goods: 0,
          },{
            id: 1,
            name: 'Apple iPhone 11',
            price: '5899.00',
            vip_price: '5800.00',
            img: '/static/img/goods_thumb_13.png',
            is_goods: 0,
          },{
            id: 1,
            name: '戴尔(DELL)成就3681英特尔酷睿i5商用办公高性能台式机电脑整机(十代i5-10400 8G 1T 三年上门售后)21.5英寸',
            price: '3699.00',
            vip_price: '3600.00',
            img: '/static/img/goods_thumb_14.png',
            is_goods: 0,
          },{
            id: 1,
            name: '戴尔DELL灵越5000 14英寸酷睿i5网课学习轻薄笔记本电脑(十代i5-1035G1 8G 512G MX230 2G独显)银',
            price: '4888.00',
            vip_price: '4999.00',
            img: '/static/img/goods_thumb_15.png',
            is_goods: 0,
          },{
            id: 1,
            name: '联想(Lenovo) 来酷 Lecoo一体台式机电脑23英寸(J4105 8G 256G SSD 三年上门）白',
            price: '4888.00',
            vip_price: '3600.00',
            img: '/static/img/goods_thumb_16.png',
            is_goods: 0,
          },{
            id: 1,
            name: 'Apple 2020新款 MacBook Pro 13.3【带触控栏】十代i5 16G 512G 2.0GHz 深空灰 笔记本电脑 轻薄本 MWP42CHA',
            price: '18200.00',
            vip_price: '18200.00',
            img: '/static/img/goods_thumb_17.png',
            is_goods: 0,
          },{
            id: 1,
            name: 'Apple新款 Mac mini台式电脑主机 八代i5 8G 512G SSD 台式机 MXNG2CHA',
            price: '8299.00',
            vip_price: '8200.00',
            img: '/static/img/goods_thumb_18.png',
            is_goods: 0,
          },{
            id: 1,
            name: '同仁堂美白祛斑霜套装 淡斑美白祛黄提亮补水保湿套装 男女士护肤美白化妆品套装',
            price: '288.00',
            vip_price: '282.00',
            img: '/static/img/goods_thumb_19.png',
            is_goods: 0,
          },{
            id: 1,
            name: '【限定款·雕花口红8支礼盒装】中国风口红套装七夕礼物送女朋友老婆生日礼物唇膏唇釉花仙西子同心锁口红 【限定款8支雕花口红】',
            price: '188.00',
            vip_price: '99.00',
            img: '/static/img/goods_thumb_20.png',
            is_goods: 0,
          },
        ],
			}
		},
		onLoad(params) {
			this.keyword = decodeURIComponent(params.keyword||'');
		},
		methods: {
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
			 * 返回点击
			 */
			onBack(){
				uni.navigateBack();
			},
			/**
			 * 综合点击
			 * @param {Number} type
			 */
			onSynthesize(type){
				this.screenShow = type;
				this.isScreen = !this.isScreen;
			},
			/**
			 * 商品列表点击
			 */
			onGoodsList(item,index){
				uni.navigateTo({
					url: '/pages/GoodsDetails/GoodsDetails',
					animationType: 'zoom-fade-out',
					animationDuration: 200
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import  'SearchGoodsList.scss';
</style>
