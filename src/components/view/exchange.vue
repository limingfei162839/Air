<template>
  <div class="exchange">
        <el-button type="danger" plain>NODE.JS</el-button>
        <el-button type="danger" plain>HTML</el-button>
        <el-button type="danger" plain>JAVASCRIPT</el-button>
        <el-button type="danger" plain>VUE</el-button>
        <el-button type="danger" plain>MYSQL</el-button>
        <div class="exchange_con">
             <div style="height:200px;">
               <img class = "img" src = "../../assets/new1.jpg"/>
               </div>
             <div class = "exchange_con_list">
                <div>2017</div>
                <div style="font-size: 24px;">12.10</div>
             </div>
             <div class = "exchange_con_list">
                 2008年7月10日以16岁之龄出道。同年10月16日发行终站，年10月16日发行终站，年10月1
                 6日发行终站，年10月16日发行终站，年10月16日发行终站，年10月16日发行终
                 站，年10月16日发行终站，满24岁便完成80场个人演唱会 截至北
                 京时间2015年11月22日伦敦温布利
             </div>
             <div class = "exchange_con_list">
                <i class="fa fa-angle-right" style="font-size: 40px;"></i>
             </div>
        </div>
        <div class="exchange_con">
             <div style="height:200px;">
               <img class = "img" src = "../../assets/new1.jpg"/>
               </div>
             <div class = "exchange_con_list">
                <div>2017</div>
                <div style="font-size: 24px;">12.10</div>
             </div>
             <div class = "exchange_con_list">
                 2008年7月10日以16岁之龄出道。同年10月16日发行终站，年10月16日发行终站，年10月1
                 6日发行终站，年10月16日发行终站，年10月16日发行终站，年10月16日发行终
                 站，年10月16日发行终站，满24岁便完成80场个人演唱会 截至北
                 京时间2015年11月22日伦敦温布利
             </div>
             <div class = "exchange_con_list">
                <i class="fa fa-angle-right" style="font-size: 40px;"></i>
             </div>
        </div>
        <div class="exchange_con">
             <div style="height:200px;">
               <img class = "img" src = "../../assets/new1.jpg"/>
               </div>
             <div class = "exchange_con_list">
                <div>2017</div>
                <div style="font-size: 24px;">12.10</div>
             </div>
             <div class = "exchange_con_list">
                 2008年7月10日以16岁之龄出道。同年10月16日发行终站，年10月16日发行终站，年10月1
                 6日发行终站，年10月16日发行终站，年10月16日发行终站，年10月16日发行终
                 站，年10月16日发行终站，满24岁便完成80场个人演唱会 截至北
                 京时间2015年11月22日伦敦温布利
             </div>
             <div class = "exchange_con_list">
                <i class="fa fa-angle-right" style="font-size: 40px;"></i>
             </div>
        </div>
        <div class="exchange_con">
             <div style="height:200px;">
               <img class = "img" src = "../../assets/new1.jpg"/>
               </div>
             <div class = "exchange_con_list">
                <div>2017</div>
                <div style="font-size: 24px;">12.10</div>
             </div>
             <div class = "exchange_con_list">
                 2008年7月10日以16岁之龄出道。同年10月16日发行终站，年10月16日发行终站，年10月1
                 6日发行终站，年10月16日发行终站，年10月16日发行终站，年10月16日发行终
                 站，年10月16日发行终站，满24岁便完成80场个人演唱会 截至北
                 京时间2015年11月22日伦敦温布利
             </div>
             <div class = "exchange_con_list">
                <i class="fa fa-angle-right" style="font-size: 40px;"></i>
             </div>
        </div>
  </div>
  
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.exchange{text-align: center;margin: 20px 0}
.exchange .exchange_con{display: -webkit-box; margin: 20px 0px;border-color:#373d57 !important;padding: 1px;cursor: pointer;text-align: center;border:1px solid rgba(255, 255, 255, 0.43);border-radius: 3px;width: 100%;}
.exchange .exchange_con .exchange_con_list{margin-top: 80px;}
.exchange .exchange_con :nth-child(1){width: 20%;}

.exchange .exchange_con div :nth-child(1).img{width:100%;height: 100%;}

.exchange .exchange_con :nth-child(2){width: 10%;}
.exchange .exchange_con :nth-child(2) div{padding-left:20px;}

.exchange .exchange_con :nth-child(3){width: 65%;height: 40px;text-align: justify;display: -webkit-box;-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
overflow: hidden;}
.exchange .exchange_con :nth-child(4){width: 5%;}


</style>
