<template>
  <div class="container">
    <!-- header -->
    <div class="header">
      <div class="location">
        <img src="../../assets/logo.png" />
      </div>
      <div class="location menu">
        <ul>

          <li>
            <router-link to="/">首页</router-link>
          </li>

          <li>
            <router-link to="/Exchange">技术杂谈</router-link>
          </li>

          <li>
            <router-link to="/Message">给我留言</router-link>
          </li>
        </ul>
      </div>
      <div class="location" style="position: absolute;
    right: 20px;">
        <el-input placeholder="请输入内容" v-model="input23">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
    </div>
    <!-- content -->
    <div class="content"><router-view/></div>
    <!-- footer -->
    <div class="clear"></div>
    <div class="footer">
       <!--version 1.0-->
       <router-link to="/MIndex">后台管理</router-link>
    </div>
    <div class="public_window_top">
        <i class = "fa fa-long-arrow-up hover" @click="TopWindow();"></i>
        <div class="hover" @click = "SignIn();">登录</div>
        <i class = "fa fa-long-arrow-down hover" @click="BottomWindow();"></i>
      </div>
  </div>
</template>
<script>
import $ from 'jquery/dist/jquery.min.js'
  export default {
    name: 'container',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      TopWindow(){//回到顶端
        $('html,body').animate({scrollTop:0},100);
      },
      BottomWindow(){//回到底端
        $('html,body').animate({scrollTop:$('html,body')[0].scrollHeight},100);
      },
      SignIn(){//登录
        alert('222');
       
      }
    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .container {
    width: 100%;
    height: auto;
  }
  .public_window_top{position: fixed;right: 10px;bottom: 70px;color: #f56c6c;background: #fef0f0;font-weight: bold;
    cursor: pointer;width: 35px;text-align: center;line-height: 30px;}
   .public_window_top .hover:hover{background: #f56c6c;color:#fff;}
   .public_window_top .hover:active{background: #dd6161;color:#fff;}
  .public_window_top i{width: 100%;line-height: 35px;}
  .public_window_top div{width: 100%;line-height: 35px;border-top: 1px solid;border-bottom: 1px solid;}
  /* header */

  .container .header {
    background: #1b1b1b;
    width: 100%;
    height: 70px;
    /* padding: 0px 60px; */
    border-bottom: 2px solid #0f0f0f;
    display: -webkit-box;
  }
.el-input__icon {
    line-height: 0px !important;
}
.el-input__inner {
    background-color: #1b1b1b !important;
    border-radius: 3px !important;
    border: 1px solid rgba(255, 255, 255, 0.43) !important;
    color: #fff !important;
}
  .container .header .location {
    height: 40px;
    position: relative;
    top: 30px;
    padding: 0px 60px;
  }

  .container .header .menu ul {
    display: -webkit-box;
  }

  .container .header .menu ul li {
    cursor: pointer;
    line-height: 38px;
    padding: 0px 10px;
  }

  .container .header .menu ul li:first-child {
    border-bottom: 3px solid #022662;
  }

  .container .header .menu ul li:hover {
    border-bottom: 3px solid #022662;
  }


  .el-input--prefix .el-input__inner {
    padding-left: 30px;
    height: 30px !important;
  }
  /* content */

  .container .content {background: #121212;padding: 20px 60px;}
  /* footer */

  .container .footer {
    height: 60px;
    background: #121212;
    border-top: 2px solid #807070;
    text-align: center;
    line-height: 60px;
  }

</style>
