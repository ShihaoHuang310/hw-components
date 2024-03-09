<template>
  <el-aside width="auto">
    <el-menu class="hw-menu-vertical-demo" :collapse="collapse">
      <el-menu-item index="1">
        <hw-icon-menu />
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="2">
        <hw-icon-menu />
        <span>图标选择器</span>
      </el-menu-item>
      <el-menu-item index="3">
        <hw-icon-menu />
        <span>趋势标记</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script setup lang="ts">
const props = defineProps<{
  collapse: Boolean
}>()
</script>

<style scoped lang="scss">
.hw-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
