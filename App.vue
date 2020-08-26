<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
		// setTimeout(()=>{
		//   uni.hideTabBar()  
		// },100)
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
/*每个页面公共css */
@import 'colorui/main.css';
@import 'colorui/icon.css';
@import 'style/FontStyle.css';
body{
	-webkit-text-size-adjust:none;
}
/* 超出一行省略号 */
.one-omit {
	white-space: nowrap; /*规定段落中的文本不进行换行*/
	overflow: hidden; /*内容会被修剪，并且其余内容是不可见的。*/
	text-overflow: ellipsis; /*显示省略号来代表被修剪的文本*/
}

.two-omit {
	display: -webkit-box;
	-webkit-line-clamp: 2;
	overflow: hidden;
	text-overflow: ellipsis;
	-webkit-box-orient: vertical;
}
img{
	width: 100%;
}
</style>
