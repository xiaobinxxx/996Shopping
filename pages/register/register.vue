<template>
  <view class="page">
    <view class="logo">
      <image src="../../static/logo.png" mode=""></image>
    </view>
    <!-- 填写区 -->
    <view class="input-info">
      <view class="info">
        <input type="tel" v-model="form.phone" maxlength="11" placeholder="手机号">
        <view class="more">

        </view>
      </view>
      <view class="info">
        <input type="tel" v-model="form.code" maxlength="6" placeholder="请输入验证码">
        <view class="more">
          <text class="mo">获取验证码</text>
          <text class="mo" style="display: none">59秒后重试</text>
        </view>
      </view>
      <view class="info">
        <input :password='!isPassword' maxlength="26" v-model="form.password" placeholder="请输入密码">
        <view class="more">
          <text class="iconfont" :class="isPassword?'icon-eye-on':'icon-eye-off'" @click="isPassword = !isPassword"></text>
        </view>
      </view>
    </view>
    <!-- 按钮 -->
    <view class="btn-info">
      <view class="btn" :style="isRegister?'opacity:1':'opacity:0.4'" @click="isRegister?onRegister():''">
        <text>注册</text>
      </view>
    </view>
    <!-- 操作 -->
    <view class="operation">
      <text></text>
      <text @click="onLogin">已有账号?登录</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isPassword: false,
      isRegister: false,
      // 表单
      form:{
        phone: '',
        code: '',
        password: '',
      },
    };
  },
  methods:{
    onLogin(){
      uni.redirectTo({
        url: '/pages/login/login'
      })
    },
    /**
     * 注册点击
     */
    onRegister(){
    }
  },
  watch:{
    form:{
      handler(newValue, oldValue) {
        if(newValue.phone && newValue.code && newValue.password){
          this.isRegister = true;
        }else{
          this.isRegister = false;
        }
      },
      deep: true
    }
  }
}
</script>

<style scoped lang="scss">
@import 'register.scss';
</style>
