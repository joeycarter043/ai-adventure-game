<template>
  <header class="top-header">
    <div class="header-left">
      <img src="../assets/img/logo.png" alt="Logo" class="logo-img" />
    </div>

    <nav class="header-center">
      <div class="menu-item active">
        <span>项目首页</span>
        <img src="../assets/img/btn_menu_selection.png" class="active-bar" />
      </div>
      <div class="menu-item">
        <span>知识学习</span>
      </div>
      <div class="menu-item">
        <span>项目管理</span>
      </div>
      <div class="menu-item">
        <span>剧本管理</span>
      </div>
    </nav>

    <div class="header-right">
      <div class="action-btn">
        <img src="../assets/img/search.png" alt="Search" />
      </div>
      <div class="user-info">
        <img src="../assets/img/user.png" alt="User" class="avatar" />
        <span class="username">周易</span>
      </div>
      <div class="action-btn exit">
        <img src="../assets/img/btn_exit.png" alt="Exit" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped>
.top-header {
  /* 应用你提供的顶部背景图 */
  background-image: url('../assets/img/top_background.png');
  background-size: 100% 100%;
  height: 80px; /* 根据设计稿高度调整 */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  position: relative;
  z-index: 100;
}

/* 左侧 Logo */
.logo-img {
  height: 40px;
}

/* 中间导航 */
.header-center {
  display: flex;
  gap: 30px;
  height: 100%;
}

.menu-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  position: relative;
  padding: 0 10px;
  opacity: 0.8;
}

.menu-item.active {
  opacity: 1;
  font-weight: bold;
}

/* 选中状态下方的那个装饰条 btn_menu selection@3x.png */
.active-bar {
  position: absolute;
  bottom: 10px;
  width: 60px;
}

/* 右侧功能区 */
.header-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.action-btn img {
  width: 24px;
  cursor: pointer;
  transition: transform 0.2s;
}

.action-btn:hover img {
  transform: scale(1.1);
}

.user-info {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #fff;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
</style>