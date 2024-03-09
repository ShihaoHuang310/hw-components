<template>
  <el-container>
    <nav-side :collapse="isCollapse" />
    <el-container>
      <div class="main">
        <nav-header v-model:collapse="isCollapse" />
        <el-main>
          <router-view />
        </el-main>
      </div>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import NavSide from "./navSide/index.vue"
import NavHeader from "./navHeader/index.vue"
import { ref } from "vue"
const isCollapse = ref(false)
</script>

<style scoped lang="scss">
.main {
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
