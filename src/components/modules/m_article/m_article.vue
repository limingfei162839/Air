<template>
  
  <div class="quill-editor-example">
    <el-input placeholder="请输入标题"></el-input>
    <el-select v-model="value" placeholder="请选择类型" style="margin-top: 10px;">
    <el-option v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
    <div class="box">
      <el-upload class="upload-demo" name="editorUpload" accept="image/*" action="/api/upload/singleFile" :show-file-list="false" :on-success="success">
      </el-upload>
    </div>
    <quill-editor v-model="content" ref="myQuillEditor" class="editer" :options="editorOption" @ready="onEditorReady($event)">
    </quill-editor>
    <el-button type="primary" @click="submit" style ="width: 100%;margin-top: 10px;">submit<i class="el-icon-upload el-icon--right"></i></el-button>
  </div>
</template>
<script>
import { quillEditor } from 'vue-quill-editor';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
// 工具栏配置
const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  [{ 'header': 1 }, { 'header': 2 }],
  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  [{ 'script': 'sub' }, { 'script': 'super' }],
  [{ 'indent': '-1' }, { 'indent': '+1' }],
  [{ 'direction': 'rtl' }],
  [{ 'size': ['small', false, 'large', 'huge'] }],
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  [{ 'color': [] }, { 'background': [] }],
  [{ 'font': [] }],
  [{ 'align': [] }],
  ['link', 'image'],
  ['clean']
];
export default {
  data() {
    let _this = this;
    return {
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }],
        value: '666',
      name: '02-example',
      content: "<p style='color:red;'>example content</p>",
      editorOption: {
        modules: {
          toolbar: {
            container: toolbarOptions, // 工具栏
            handlers: {
              'image': function(value) {
                if (value) {
                  document.querySelector(".box input[name='editorUpload']").click();
                } else {
                  this.quill.format('image', false);
                }
              }
            }
          }
        }
      }
    }
  },
  components: {
    quillEditor
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    }
  },
  mounted() {
    console.log('init editor', this.editor)
  },
  methods: {
    onEditorReady(editor) {
      console.log('editor ready!', editor)
    },
    submit() {
      this.$message.success('提交成功！');
    },
    success(res, file, fileList) {
      // res为图片服务器返回的数据
      // 获取富文本组件实例
      let quill = this.$refs.myQuillEditor.quill
      // 如果上传成功
      // if (res.code === '200' && res.info !== null) {
        // 获取光标所在位置
        let length = quill.getSelection().index;
        // 插入图片  res.info为服务器返回的图片地址
        quill.insertEmbed(length, 'image', res.msg)
        // 调整光标到最后
        quill.setSelection(length + 1)
      // } else {
      //   this.$message.error('图片插入失败')
      // }
      console.log(res)
    }
  },
}

</script>
<style>
  .ql-editor{min-height: 300px !important;}
</style>
