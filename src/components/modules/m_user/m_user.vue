<template>
     <div><el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="编号"
      width="80">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.ID }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="日期"
      width="250">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.datetime }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      width="80">
      <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.username }}</el-tag>
          </div>
      </template>
    </el-table-column>
    <el-table-column
      label="密码"
      width="80">
      <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.password }}</el-tag>
          </div>
      </template>
    </el-table-column>
    <el-table-column
      label="邮箱"
      width="200">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.Email }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="电话"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.Mobile }}</span>
      </template>
    </el-table-column>
    <el-table-column label="权限" width="50">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.site }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button type="success" plain  @click="handInsert(scope.$index, scope.row)">增加</el-button>
        <el-button type="danger" plain @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        <el-button type="warning" plain @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <!-- <el-button type="primary" plain @click="handlSelect(scope.$index, scope.row)">查看</el-button> -->
      </template>
    </el-table-column>
  </el-table>
  <AddUser v-bind:model="model" @ChildCOM="InitUser" ref = 'childCom'></AddUser>
  </div>
</template>

<script>
import AddUser from './m_user_method.vue'
import $ from 'jquery/dist/jquery.min.js'
  export default {
    data() {
      return {
        tableData: [],
        model: ''
        }
    },
    components: {"AddUser":AddUser},
    mounted:function(){//初始化
       this.InitUser();
    },
    methods: {
      InitUser(str){
        var self = this;
        this.axios.get('/api/M_user/SelectUser').then(function(ret){
          if(ret.data.code == 0){
              console.log(ret.data.msg);
               self.tableData = ret.data.data;
						}
        }).catch(function(err){
              console.log(ret.data.msg);
        });
      },
      handInsert(index, row) {
        $('.addnubModel').show();
        console.log(index, row);
      },
      handleDelete(index, row) {
        this.$confirm('此操作将永久删除, 是否继续?', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
           this.axios.get('/api/M_user/DeleteUser',{params:{ID:row.ID}}).then(function(ret){
            if(ret.data.code == 0){
                console.log(ret.data.msg);
                $('.el-table__row').eq(index).empty();
              }
        }).catch(function(err){
              console.log(ret.data.msg);
        });
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
       
      },
      handleEdit(index, rowval) {
        var self = this;
        self.$router.push('/MIndex');
        $('.addnubModel').show();
        // var list = {
        //   Id:row.ID,
        //   datetime:row.datetime,
        //   username:row.username,
        //   password:row.password,
        //   Email:row.Email,
        //   Mobile:row.Mobile,
        //   site:row.site
        // }
        // self.model = list;
        self.$refs.childCom.InitListVal(rowval);
      }
    }
  }
</script>
<style>
.el-table th {
    text-align: center !important;
}
.el-table td, .el-table th {
    text-align: center !important;
}
</style>
