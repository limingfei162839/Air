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
  <el-form-item label="详细" prop="a_content">
      <div class="edit_container">
       <quill-editor v-model="ruleForm.a_content" placeholder="请选择类型"
              ref="myQuillEditor"
              class="editer" @ready="onEditorReady($event)">
       </quill-editor>
      </div>
     </el-form-item>

    <el-button class="btn" type="primary" @click="submitForm('ruleForm')">Commit</el-button>
    <el-button class="btn" @click="resetForm('ruleForm')">Submit</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'

export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          delivery: false,
          type: [],
          a_content:''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' }
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择类型', trigger: 'change' }
          ],
          a_content: [
            {required: true, message: '请输入详细内容', trigger: 'blur'}
          ]
        }
      };
    },
    computed: {
   editor() {
    return this.$refs.myQuillEditor.quill
   }
  },

    methods: {
      onEditorReady(editor) {
         alert('11');
      },
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
    },
    components: {
    quillEditor
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
 .ql-container.ql-snow {
    min-height: 300px;
}
.el-form-item__label {
    text-align: left !important;
}
.btn{ margin-left: 30%;width: 500px;}
</style>
