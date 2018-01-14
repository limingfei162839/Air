<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="编号"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.num }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="日期"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      width="180">
      <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
      </template>
    </el-table-column>
    <el-table-column
      label="性别"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.sex }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="邮箱"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.email }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="权限"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.authority }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button type="success" plain @click="handleEdit(scope.$index, scope.row)">增加</el-button>
        <el-button type="danger" plain @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        <el-button type="warning" plain @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button type="primary" plain @click="handleDelete(scope.$index, scope.row)">查看</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          num:1,
          date: '2016-05-02',
          name: '王小虎',
          sex:'男',
          email:'742049404@qq.com',
          authority:'1'
        }, {
          num:2,
          date: '2016-05-04',
          name: '王小虎',
          sex:'男',
          email:'742049404@qq.com',
          authority:'1'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
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
