<template>
  <div class="container demo-1">
			<div class="content">
				<div id="large-headers" class="large-header">
					<canvas id="demo-canvas"></canvas>
					<div class="logo_box">
						<h3>Air 欢迎你</h3>
						<form action="#" name="f" method="post">
							<div class="input_outer">
								<span class="u_user"></span>
								<input name="username" id = "username" class="text" style="color: #FFFFFF !important" type="text" placeholder="请输入用户名">
							</div>
							<div class="input_outer">
								<span class="us_uer"></span>
								<input name="password" id = "password" class="text" style="color: #FFFFFF !important; position:absolute; z-index:100;" type="password" placeholder="请输入密码">
							</div>
							<el-button type="primary" @click="SignIn();" style="width: 100%;border-radius: 50px;">Sign up for Air</el-button>
						</form>
					</div>
				</div>
			</div>
		</div>
</template>
<script>
import '../../assets/css/normalize.css'
import '../../assets/css/demo.css'
import '../../assets/css/component.css'
import $ from 'jquery/dist/jquery.min.js'
import axios from 'axios'
  export default {
    name: 'login',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
       SignIn(){
				 var username = $('#username').val();
				 var password = $('#password').val();
				 if(username == '' || password == ''){
					 this.$message.error('！用户名或密码不能为空');
				 }else{
            axios.get('/api/Login/signUser',{
								params:{
									username:username,
									password:password
								}
			    	}).then(function (ret) {
							   if(ret.data.code == 0){
										console.log(ret,'===登录成功');
								 }
  					}).catch(function (error) {
							console.log(error,'登录失败');
  			   	});
				 }
			 }
    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 /* .login{height:600px;width:500px;color:red;} */
 .large-header{height:800px};
 .login{width: 100%;
    border-radius: 50px;}
</style>
