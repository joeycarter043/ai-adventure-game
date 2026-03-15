<template>
  <div class="sub-header">
    <div class="sub-header-left">
      <slot name="left" />
    </div>
    <div class="sub-header-right">
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.sub-header {
  width: 100%;
  height: 54px; /* 按照设计稿比例 */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  position: relative;
  z-index: 10;
}

.sub-header-left {
  display: flex;
  align-items: center;
}

.sub-header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>