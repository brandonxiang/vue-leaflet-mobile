<template>
  <div style="">
    <blur :blur-amount=40 url="../assets/discovery.png">
      <p class="center"><img src="../assets/discovery.png"></p>
    </blur>
  </div>
</template>


<script>
 import { Blur } from 'vux'
 export default{
   components:{
     Blur
   },
   data (){
     return {
       url:require("../assets/vux_logo.png")
     }
   }
 }
</script>

<style scoped>
.center {
  text-align: center;
  padding-top: 20px;
  color: #fff;
  font-size: 18px;
}
.center img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #ececec;
}
</style>
