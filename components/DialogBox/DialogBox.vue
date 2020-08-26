<template>
	<view class="page-total" v-if="isShow">
		<view class="box" :class="AClass[AnIndex][AnIdx]">
			<view class="dialog-box">
				<view class="title">{{options.title}}</view>
				<view class="content" v-if="options.DialogType == 'input'">
					<input type="text" v-model="options.value" :placeholder="options.placeholder">
					<text class="iconfont icon-clear" @click.stop="onClear"></text>
				</view>
				<view class="inquiry" v-else-if="options.DialogType == 'inquiry'">
					<text>{{options.content}}</text>
				</view>
				<view class="operation-btn">
					<view class="btn" @click="onCancel">
						<text>取消</text>
						<text class="tag"></text>
					</view>
					<view class="btn" @click="onConfirm">
						<text class="activity">确定</text>
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
				AClass:[
					['a-fadein', 'a-fadeout'],
					['a-bouncein', 'a-bounceout'],
				],
				AnIndex: 0,
				AnIdx: 0,
				isShow: false,
				SetTime: null,
				value: '',
				// parmoise
				resolve: '',
				reject: '',
				promise: '',
				// 配置
				options:{
					// 提示标题
					title: '提示',
					// 内容
					content: '',
					// 提示内容
					placeholder: '请输入内容',
					// 提示框类型
					DialogType: 'input',
					// 动画类型
					animation: 0,
				},
			};
		},
		props:{
			// 提示标题
			title: {
				type: String,
				default: '提示',
			},
			// 内容
			content: {
				type: String,
				default: '',
			},
			// 提示内容
			placeholder: {
				type: String,
				default: '请输入内容',
			},
			// 提示框类型
			DialogType: {
				type: String,
				default: 'input'
			},
			// 动画类型
			animation: {
				type: Number,
				default: 0
			}
		},
		methods:{
			// 询问框
			confirm(options) {
				this.AnIndex = options.animation||0;
				this.AnIdx = options.animation||0;
				this.options = {
					// 提示标题
					title: options.title||'提示',
					// 内容
					content: options.content||'',
					// 提示内容
					placeholder: options.placeholder||'请输入内容',
					// 提示框类型
					DialogType: options.DialogType||'input',
					// 动画类型
					animation: options.animation||0,
					// input输入的值
					value: options.value||'',
				};
				this.show();
				this.promise = new Promise((resolve, reject) => {
						this.resolve = resolve;
						this.reject = reject;
				});
				return this.promise; //返回promise对象,给父级组件调用
			},
			/**
			 * 显示
			 */
			show(callback){
				this.isShow = true;
			},
			/**
			 * 隐藏
			 */
			hide(){
				this.AnIdx = 1;
				this.SetTime = setTimeout(() => {
					this.isShow = false;
				}, 300);
			},
			/**
			 * 清除输入值
			 */
			onClear(){
				this.options.value = '';
			},
			/**
			 * 取消点击
			 */
			onCancel(){
				this.hide();
				this.reject({
					value: this.options.value,
					isConfirm: true,
				});
			},
			/**
			 * 确定点击
			 */
			onConfirm(){
				this.hide();
				this.resolve({
					value: this.options.value,
					isConfirm: true,
				});
			},
		},
	}
</script>

<style scoped lang="scss">
	@import 'DialogBox.scss'
</style>
