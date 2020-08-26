<template>
	<view class="page-total" v-show="isShow">
		<view class="key-list">
			<view class="list" v-for="(item,index) in keyList" 
			:class="{'special':item.keyCode==190||item.keyCode==8}"
			@click="onKeyList(item,index)"
			:key="index">
				<text>{{item.key}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: false,
				keyList: [
					{
						key: 1,
						en: '',
						keyCode: 49,
					},{
						key: 2,
						en: 'ABC',
						keyCode: 50,
					},{
						key: 3,
						en: 'ABC',
						keyCode: 51,
					},{
						key: 4,
						en: 'ABC',
						keyCode: 52,
					},{
						key: 5,
						en: 'ABC',
						keyCode: 53,
					},{
						key: 6,
						en: 'ABC',
						keyCode: 54,
					},{
						key: 7,
						en: 'ABC',
						keyCode: 55,
					},{
						key: 8,
						en: 'ABC',
						keyCode: 56,
					},{
						key: 9,
						en: 'ABC',
						keyCode: 57,
					},{
						key: '.',
						en: 'ABC',
						keyCode: 190,
					},{
						key: 0,
						en: 'ABC',
						keyCode: 48,
					},{
						key: 'del',
						en: 'DEL',
						keyCode: 8,
					},
				],
				keyIndex: -1,
			};
		},
		props:{
			passwrdType: {
				type: String,
				default: 'pay'
			}
		},
		methods:{
			show(){
				this.isShow = true;
			},
			hide(){
				this.isShow = false;
			},
			/**
			 * 密码键盘按下
			 * @param {Object} item
			 * @param {Number} index
			 */
			onKeyList(item,index){
				let KeyInfo = item;	
				// 删除键
				if(KeyInfo.keyCode === 8 && this.keyIndex > -1){
					this.keyIndex--;
				}
				// 不是删除键
				if(KeyInfo.keyCode != 8){
					if(this.passwrdType == 'pay' && this.keyIndex >= 5){
						console.log('支付键盘');
						this.keyIndex = -1;
						return;
					}
					this.keyIndex++;
				}
				KeyInfo.index = this.keyIndex;
				this.$emit('KeyInfo',KeyInfo);
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'CodeKeyboard.scss';
</style>
