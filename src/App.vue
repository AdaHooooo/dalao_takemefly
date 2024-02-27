<template>
  <div class="container">
    <!-- 顶部全局组件 -->
    <DaLaoTop></DaLaoTop>
    <!-- 展示路由组件的区域 -->
    <div class="content">aaa</div>
    <div class="bottom">bbb</div>

  </div>

</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  .content{
      margin-top: 65px;
      min-width: 1500px;
      min-height: 820px;
      background-color: #b85ad4;
  }
  .bottom{
    width: 100%;
    height: 68px;
    background-color: #90679b;
  }
}


</style>