<template>
  <div class="header">
    <el-header>
      <span @click="toggle">
        <hw-icon-expand v-if="collapse" />
        <hw-icon-fold v-else />
      </span>
    </el-header>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  collapse: Boolean
}>()

let emit = defineEmits(["update:collapse"])

// 切换菜单收缩状态
const toggle = () => {
  emit("update:collapse", !props.collapse)
}
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 60px;
  padding: 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  .el-header {
    display: flex;
    align-items: center;
  }
}
</style>
