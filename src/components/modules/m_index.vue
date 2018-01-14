<template>
  <div class="m_index">
    <el-container>
    <el-header style="background: #1b1b1b;border-bottom: 2px solid #0f0f0f;"><img src="../../assets/logo.png" />后台管理模块</el-header>
    <el-container style="position: absolute;
    top: 60px;
    width: 100%;
    height: 100%;">
      <el-aside style="width: 120px;background: #1b1b1b;border-right: 2px solid #0f0f0f;">
          <el-row class="tac">
            <el-col :span="12">
              <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-menu-item index="1" style="background: #1b1b1b !important">
                  <i class="el-icon-menu"></i>
                  <span slot="title">
                    <router-link to="/MUser">用户管理</router-link>
                  </span>
                </el-menu-item>
                <el-menu-item index="2" style="background: #1b1b1b !important">
                  <i class="el-icon-menu"></i>
                  <span slot="title">
                    <router-link to="/MExchange">技术杂谈</router-link>
                  </span>
                </el-menu-item>
              </el-menu>
            </el-col>
        </el-row>
      </el-aside>
      <el-main style="background: #121212;"><router-view/></el-main>
    </el-container>
</el-container>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
   methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-col-12 {
    width: 100% !important;
}
.el-menu{border-right: 0px !important;}
</style>
