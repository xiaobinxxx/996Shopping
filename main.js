import Vue from 'vue';
import App from './App';
// 弹出框
import DialogBox from './components/DialogBox/DialogBox';


Vue.config.productionTip = false

// 全局组件
Vue.component('DialogBox', DialogBox);

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
