<template>
  <div class="login-container">

    <!--      大盒子-->
    <div class="title-container">
      <!--        logo-->
      <div class="title">
        <img alt="" src="@/assets/common/logo.png">
      </div>
      <!--        /logo-->
      <!--        表单区域-->
      <el-form ref="loginForm" auto-complete="on" class="login-form" label-position="left">
        <!--        手机号-->
        <el-form-item class="el-form-item">
          <span class="iconfont icon-shoujihao" />
          <el-input v-model="loginForm.admin" placeholder="请输入账号" />
        </el-form-item>
        <!--        /手机号-->
        <!--        密码-->
        <el-form-item class="el-form-item">
          <span class="iconfont icon-mima" />
          <el-input ref="pwd" v-model="loginForm.password" :type="passwordType" placeholder="请输入密码" />
          <!--          眼睛状态-->
          <span class="svg-container" @click="changePwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
          <!--          /眼睛状态-->
        </el-form-item>
        <!--        /密码-->
        <!--        验证码-->
        <el-form-item class="el-form-item ">
          <span class="iconfont icon-yanzhengma2" />
          <el-input />
          <div class="authCode"><img alt="" src=""></div>
        </el-form-item>
        <!--        /验证码-->

        <el-button class="loginBtn">登录</el-button>
      </el-form>
      <!--        /表单区域-->
    </div>
    <!--      /大盒子-->

  </div>

</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        admin: 'admin',
        password: 123456
      },
      passwordType: 'password'
    }
  },
  methods: {
    changePwd() {
      this.passwordType === 'password' ? this.passwordType = '' : this.passwordType = 'password'
      this.$nextTick(() => {
        this.$refs.pwd.focus()
      })
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #666;
$cursor: #999;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  background-image: url('~@/assets/common/background.png'); // 设置背景图片
  background-position: center; // 将图片位置设置为充满整个屏幕

  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      width: 380px;
      background: transparent;
      border: 0;
      -webkit-appearance: none;
      border-radius: 0;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item__content {
    border: 1px solid #e2e2e2;
    // background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
    background: rgba(255, 255, 255, 0.7); // 输入登录表单的背景色
    .iconfont {
      margin-left: 10px;
    }

    .authCode {
      float: left;
    }

    .svg-container {
      padding: 6px 5px 6px 15px;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
    }

  }

  .el-form-item__error {
    color: #fff
  }

  .loginBtn {
    color: white;
    width: 100%;
    height: 52px;
    line-height: 32px;
    font-size: 16px;
    background: linear-gradient(262deg, #2e50e1, #6878f0);
  }

}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #68b0fe;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-form {
    width: 520px;
    max-width: 100%;
    padding: 80px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      // background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
      background: rgba(255, 255, 255, 0.7); // 输入登录表单的背景色
    }

  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;
    width: 518px;
    height: 388px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 3px 70px 0 rgba(30, 111, 72, .35);

    .title {
      position: absolute;
      width: 96px;
      height: 96px;
      left: 50%;
      transform: translate(-50%, -50%);

      img {
        width: 100%;
      }
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
