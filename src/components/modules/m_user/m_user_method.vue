<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="addnubModel demo-ruleForm">
  <title>添加用户</title>
  <!-- <el-form-item label="ID" prop="ID">
    <el-input v-model="ruleForm.ID" placeholder="请输入ID"></el-input>
  </el-form-item> -->
  <el-form-item label="用户名" prop="name">
    <el-input v-model="ruleForm.name" placeholder="请输入用户名"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input v-model="ruleForm.pass" placeholder="请输入密码"></el-input>
  </el-form-item>
  <el-form-item label="日期" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择日期" value-format="yyyy-MM-dd" v-model="ruleForm.datetime" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
  <el-form-item label="邮箱" prop="email">
    <el-input v-model="ruleForm.email" placeholder="请输入邮箱"></el-input>
  </el-form-item>
  <el-form-item label="电话" prop="Mobile">
    <el-input v-model="ruleForm.Mobile" placeholder="请输入联系方式" type =  'number'></el-input>
  </el-form-item>
  <el-form-item label="权限" prop="site">
    <el-input-number v-model="ruleForm.site" controls-position="right" placeholder="0 是普通 1 是超级管理员" :min="0" :max="1"></el-input-number>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" class="submit" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
    <el-button type = "danger" @click="Close('ruleForm');">Close</el-button>
  </el-form-item>
</el-form>

</template>
<script>
import $ from 'jquery/dist/jquery.min.js'
import muser from './m_user.vue'
  export default {
    name:'m_user_method',
    data() {
      var self = this;
      return {
        ruleForm: {
          // ID: '',
          name: '',
          pass: '',
          datetime: '',
          email:'',
          Mobile:'',
          site:''
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          pass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ],
          datetime: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          Mobile: [
            { min: 11, max: 11, message: '长度11位 ！请输入11位有效电话', trigger: 'blur' }
          ],
          site: [
            { type: 'number', required: true, message: '0 是普通 1 是超级管理员', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      InitListVal(row){
          this.ruleForm.Id = row.ID;
          this.ruleForm.datetime = row.datetime;
          this.ruleForm.name = row.username;
          this.ruleForm.pass = row.password;
          this.ruleForm.email = row.Email;
          this.ruleForm.Mobile = row.Mobile;
          this.ruleForm.site = row.site;
          $('.submit').text('立即修改');
      },
      submitForm(formName) {//提交
        var self = this;
        this.$refs[formName].model.Id ? self.updateUser(formName) : self.AddUser(formName);
      },
      AddUser(formName){
        var self = this;
        this.$refs[formName].validate((valid,object) => {
          if (valid) {
            this.$confirm('确认添加该用户 是否继续?', '温馨提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
              this.axios.get('/api/M_user/AddUser',{
               params:{model:this.$refs[formName].model}}).then(function(ret){
            if(ret.data.code == 0){
                console.log(ret.data.msg);
                // self.$router.go(0);
                // self.$router.push('/MIndex');
                // self.$router.replace('/MIndex');
                // self.$forceUpdate();
                // self.$router.push('/MIndex');
                //   self.$router.go(-1);
                    self.$message({
                      type: 'success',
                      message: ret.data.msg
                  });
                self.$emit('ChildCOM');
                self.$refs[formName].resetFields();//增加完成清空当前列表
              }
            }).catch(function(err){
                  console.log(err);
            });
          
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消添加'
          });          
        });
          } else {
            this.$message({type: 'danger',message: 'error submit!'});
            return false;
          }
        });
      },
      updateUser(formName){
        var self = this;
        this.$refs[formName].validate((valid,object) => {
          if (valid) {
            this.$confirm('确认修改该用户信息 是否继续?', '温馨提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
              this.axios.get('/api/M_user/UpdateUser',{
               params:{model:this.$refs[formName].model}}).then(function(ret){
            if(ret.data.code == 0){
                console.log(ret.data.msg);
                self.$emit('ChildCOM');
              }
            }).catch(function(err){
                  console.log(err);
            });
          this.$message({
            type: 'success',
            message: '修改成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消修改'
          });          
        });
          } else {
            this.$message({type: 'danger',message: 'error submit!'});
            return false;
          }
        });
      },
      resetForm(formName) {//重置
        this.$refs[formName].resetFields();
        this.$message({type: 'info',message: '已为你进行重置 ！请重新输入info'});
      },
      Close(formName){//关闭
        var self = this;
        $('.addnubModel').hide();
        self.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scope> 
     .addnubModel{position: absolute;
    z-index: 1;
    top: 5%;
    background: #000;
    left: 30%;
    width: 50%;
    padding: 10px;
    display: none;
    }
    .el-form-item__label {
    text-align: inherit;
}

</style>