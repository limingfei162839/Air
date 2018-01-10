<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body,h1,h2,h3,h4,h5,ul{margin: 0px;padding: 0px;color: #fff;font-size: 14px;font-family: "微软雅黑";}
li{list-style: none;}
.fl{float: left;}
.fr{float: right;}
.clear{clear: both;}
/*滚动条样式*/
::-webkit-scrollbar{width:5px;height: 20px;}
::-webkit-scrollbar-track{background-color:#ddd;}
::-webkit-scrollbar-thumb{background-color:#999;}
::-webkit-scrollbar-thumb:hover {background-color:#fff}
::-webkit-scrollbar-thumb:active {background-color:#edc}
a{color:#fff;}
</style>
