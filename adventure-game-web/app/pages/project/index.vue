<template>
  <div class="page-container">
    <main class="content-area">
      <h2>{{ $t('scenario_task.breadcrumb.project_select') }}</h2>
      <div class="placeholder-card">
        <p>项目列表正在开发中...</p>
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
.content-area { padding: 40px; color: #fff; }
.placeholder-card {
  border: 1px dashed rgba(23, 160, 252, 0.4);
  padding: 100px;
  text-align: center;
  margin-top: 20px;
}
</style>