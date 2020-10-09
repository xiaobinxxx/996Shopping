<template>
	<view class="page">
		<view class="head">
			<!-- #ifdef APP-PLUS -->
			<view class="title">购物车</view>
			<!-- #endif -->
			<view class="edit" @click="isEdit = !isEdit">
				<text>{{isEdit?'完成':'编辑'}}</text>
			</view>
		</view>
		<!-- 购物车列表 -->
    <mescroll-body ref="mescrollRef"
                   @down="downCallback"
                   @up="upCallback"
                   :down="downOption"
                   :up="upOption"
                   :top="0">
		<view class="cart-list">
			<view class="list">
				<view class="check">
					<text class="iconfont icon-checked"></text>
				</view>
				<view class="goods">
					<view class="thumb">
						<image src="/static/img/goods_thumb_09.png" mode=""></image>
					</view>
					<view class="item">
						<view class="title">
							<text class="two-omit">薇妮(Viney)时尚包包女包牛皮单肩包女休闲百搭斜挎包韩版小方包潮(水电费枪色)</text>
						</view>
						<view class="attribute">
							<view class="attr">
								<text>金色,大尺码</text>
								<text class="more"></text>
							</view>
						</view>
						<view class="price-num">
							<view class="price">
								<text class="min">￥</text>
								<text class="max">89.00</text>
							</view>
							<view class="num">
								<view class="add">
									<text class="iconfont icon-jian"></text>
								</view>
								<view class="number">
									<text>2</text>
								</view>
								<view class="add">
									<text class="iconfont icon-jia"></text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="list" v-for="(item,index) in 2" :key="index">
				<view class="check">
					<text class="iconfont icon-check"></text>
				</view>
				<view class="goods">
					<view class="thumb">
						<image :src="'/static/img/goods_thumb_0'+(index+1)+'.png'" mode=""></image>
					</view>
					<view class="item">
						<view class="title">
							<text class="two-omit">薇妮(Viney)时尚包包女包牛皮单肩包女休闲百搭斜挎包韩版小方包潮(水电费枪色)</text>
						</view>
						<view class="attribute">
							<view class="attr">
								<text>金色,大尺码</text>
								<text class="more"></text>
							</view>
						</view>
						<view class="price-num">
							<view class="price">
								<text class="min">￥</text>
								<text class="max">89.00</text>
							</view>
							<view class="num">
								<view class="add">
									<text class="iconfont icon-jian"></text>
								</view>
								<view class="number">
									<text>2</text>
								</view>
								<view class="add">
									<text class="iconfont icon-jia"></text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
    <!-- 购物车失效商品列表 -->
    <view class="lose-efficacy-list">
      <view class="lose-efficacy-title">
        <view class="title">
          <text>失效商品1件</text>
        </view>
        <view class="empty">
          <text>清空失效商品</text>
        </view>
      </view>
      <view class="list" v-for="(item,index) in 2" :key="index">
        <view class="tag">
          <text>失效</text>
        </view>
        <view class="goods" @click="onSkip('goods')">
          <view class="pictrue">
            <image :src="'/static/img/goods_thumb_0'+ (index+1) +'.png'" mode=""></image>
          </view>
          <view class="item">
            <view class="title">
              <text class="two-omit">薇妮(Viney)时尚包包女包牛皮单肩包女休闲百搭斜挎包韩版小方包潮(水电费枪色)</text>
            </view>
            <view class="explain">
              <text>商品已不能购买，请联系客服进行沟通</text>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- 为你推荐 -->
    <view class="recommend-info">
      <view class="recommend-title">
        <view class="title">
          <image src="/static/wntj_title.png" mode=""></image>
        </view>
      </view>
      <view class="goods-list">
        <view class="list" v-for="(item,index) in goodsList" @click="onSkip('goods')" :key="index">
          <view class="pictrue">
            <image :src="item.img" mode="heightFix"></image>
          </view>
          <view class="title-tag">
            <view class="tag">
              <text v-if="item.is_goods === 1">特价</text>
              {{item.name}}
            </view>
          </view>
          <view class="price-info">
            <view class="user-price">
              <text class="min">￥</text>
              <text class="max">{{item.price}}</text>
            </view>
            <view class="vip-price">
              <image src="/static/vip_ico.png"></image>
              <text>￥{{item.vip_price}}</text>
            </view>
          </view>
        </view>
      </view>
    </view>
		<!-- 结算 -->
		<view class="close-account">
			<view class="check-total">
				<view class="check">
					<text class="iconfont icon-check"></text>
					<text class="all">全选</text>
				</view>
				<view class="total">
					<text>合计：</text>
					<text class="price">￥200.00</text>
				</view>
			</view>
			<view class="account">
				<view class="btn-calculate" v-if="!isEdit">
					<text>去结算(1)</text>
				</view>
				<view class="btn-del" v-else>
					<text class="attention">移入关注</text>
					<text class="del">删除</text>
				</view>
			</view>
		</view>
    </mescroll-body>
		<!-- tabbar -->
		<TabBar :tabBarShow="3"></TabBar>
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
          use: false,
          toTop: {
            src: '',
          }
        },
				isEdit: false,
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
			};
		},
		onReady() {
      uni.hideTabBar()
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
       * 跳转点击
       * @param {String} type 跳转类型
       */
      onSkip(type){
        switch (type){
          case 'classify':
            uni.navigateTo({
              url: '/pages/SearchGoodsList/SearchGoodsList',
            })
            break;
          case 'goods':
            uni.navigateTo({
              url: '/pages/GoodsDetails/GoodsDetails',
              animationType: 'zoom-fade-out',
              animationDuration: 200
            })
            break;
        }
      }
    }
	}
</script>

<style scoped lang="scss">
	@import 'cart.scss';
</style>
