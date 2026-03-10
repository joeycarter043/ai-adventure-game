<template>
  <div class="top-header">
    <div class="header-bg">
      <img
        class="header-logo"
        :src="logoHeader"
        :alt="$t('scenario_task.breadcrumb.current')"
      />
    </div>
    <div class="breadcrumb-row">
      <div class="breadcrumb-text">
        <span class="breadcrumb-path">{{ $t('scenario_task.breadcrumb.project_select') }}&nbsp;/&nbsp;{{ $t('scenario_task.breadcrumb.scenario_select') }}&nbsp;/</span>
        <span class="breadcrumb-separator">&nbsp;</span>
        <span class="breadcrumb-current">{{ $t('scenario_task.breadcrumb.current') }}</span>
      </div>
      <div class="header-actions">
        <button class="action-btn action-btn--continue">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M8 5v14l11-7z" fill="currentColor" />
          </svg>
          <span>{{ $t('scenario_task.actions.continue') }}</span>
        </button>
        <button class="action-btn action-btn--exit">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="currentColor" />
            <path d="M12 6v12" stroke="currentColor" stroke-width="2" />
          </svg>
          <span>{{ $t('scenario_task.actions.exit') }}</span>
        </button>
        <button class="action-btn action-btn--back">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill="currentColor" />
          </svg>
          <span>{{ $t('scenario_task.actions.back') }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import logoHeader from '../assets/img/logo_header.png'
</script>

<style scoped lang="scss">
.top-header {
  flex-shrink: 0;
  width: 100%;
  padding: 0 18px;
}

.header-bg {
  width: 100%;
  height: auto;
}

.header-logo {
  width: 100%;
  height: auto;
  display: block;
}

.breadcrumb-row {
  display: flex;
  align-items: center;
  padding: 12px 18px 0;
  height: 38px;
}

.breadcrumb-text {
  white-space: nowrap;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Source Han Sans CN', sans-serif;
}

.breadcrumb-path {
  color: rgba(153, 153, 153, 1);
}

.breadcrumb-separator {
  color: rgba(232, 232, 232, 1);
}

.breadcrumb-current {
  color: rgba(255, 255, 255, 1);
}

.header-actions {
  display: flex;
  gap: 7px;
  margin-left: auto;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 85px;
  height: 38px;
  border-radius: 4px;
  border: 1px solid rgba(30, 80, 140, 0.8);
  background: linear-gradient(180deg, rgba(20, 50, 100, 0.9) 0%, rgba(10, 30, 60, 0.95) 100%);
  color: #fff;
  font-size: 14px;
  font-family: 'Source Han Sans CN', sans-serif;
  cursor: pointer;
  justify-content: center;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }

  svg {
    flex-shrink: 0;
  }
}
</style>
