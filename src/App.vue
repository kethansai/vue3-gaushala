<template>
  <div id="main-view">
    <NavBar />
    <el-scrollbar height="calc(100vh - 65px)">
      <RouterView />
      <FooterView />
    </el-scrollbar>
    <el-backtop :visibility-height="200" :right="100" :bottom="100" />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import FooterView from '@/components/FooterView.vue'
</script>
<style lang="scss">
#main-view {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;

  background-color: #f5f5f5;
}
</style>
