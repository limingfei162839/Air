<template>
  <div class="m_exchange">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="标题名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="请选择类型" prop="region">
    <el-select v-model="ruleForm.region" placeholder="请选择类型">
      <el-option label="JAVASCRIPT" value="shanghai"></el-option>
      <el-option label="HTML" value="beijing"></el-option>
      <el-option label="VUE" value="beijing"></el-option>
      <el-option label="JQUERY" value="beijing"></el-option>
    </el-select>
  </el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">Commit</el-button>
    <el-button @click="resetForm('ruleForm')">Submit</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          delivery: false,
          type: [],
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' }
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择类型', trigger: 'change' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
