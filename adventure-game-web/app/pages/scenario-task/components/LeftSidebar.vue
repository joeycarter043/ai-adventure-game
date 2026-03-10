<template>
  <div class="left-sidebar">
    <!-- Important Tips Title -->
    <div class="section-title-bar">
      <span class="section-title-text">{{ $t('scenario_task.important_tips') }}</span>
    </div>

    <!-- My Role Section -->
    <h3 class="section-heading">{{ $t('scenario_task.my_role') }}</h3>

    <!-- Role Cards -->
    <div class="role-card role-card--active">
      <img class="role-avatar" :src="iconFreightManager" :alt="$t('scenario_task.roles.freight_manager.title')" />
      <div class="role-info">
        <span class="role-name">{{ $t('scenario_task.roles.freight_manager.title') }}</span>
        <span class="role-desc">{{ $t('scenario_task.roles.freight_manager.desc') }}</span>
      </div>
      <img class="role-indicator" :src="iconRoleIndicator" alt="" />
    </div>

    <div class="role-card role-card--inactive">
      <img class="role-avatar" :src="iconOperator" :alt="$t('scenario_task.roles.operator.title')" />
      <div class="role-info">
        <span class="role-name role-name--muted">{{ $t('scenario_task.roles.operator.title') }}</span>
        <span class="role-desc role-desc--muted">{{ $t('scenario_task.roles.operator.desc') }}</span>
      </div>
      <img class="role-indicator" :src="iconRoleIndicatorBlue" alt="" />
    </div>

    <div class="role-card role-card--inactive">
      <img class="role-avatar" :src="iconCustomerService" :alt="$t('scenario_task.roles.customer_service.title')" />
      <div class="role-info">
        <span class="role-name role-name--muted">{{ $t('scenario_task.roles.customer_service.title') }}</span>
        <span class="role-desc role-desc--muted">{{ $t('scenario_task.roles.customer_service.desc') }}</span>
      </div>
      <img class="role-indicator" :src="iconRoleIndicatorCyan" alt="" />
    </div>

    <!-- Script Progress Section -->
    <h3 class="section-heading">{{ $t('scenario_task.script_progress') }}</h3>
    <div class="progress-bar">
      <div class="progress-info">
        <span class="progress-text">{{ $t('scenario_task.completed_tasks', { count: 1 }) }}</span>
      </div>
      <span class="progress-percent">75%</span>
    </div>

    <!-- Remaining Time Section -->
    <h3 class="section-heading">{{ $t('scenario_task.remaining_time') }}</h3>
    <div class="timer-bar">
      <div class="timer-info">
        <span class="timer-text">{{ $t('scenario_task.elapsed_time', { minutes: 51 }) }}</span>
      </div>
      <span class="timer-remaining">29{{ $t('scenario_task.minutes_unit') }}</span>
    </div>

    <!-- Spacer -->
    <div class="sidebar-spacer" />

    <!-- Bottom Action Buttons -->
    <div class="action-buttons">
      <button class="sidebar-action-btn">
        <img class="sidebar-action-icon" :src="iconAiAssistant" alt="" />
        <span>{{ $t('scenario_task.actions.ai_assistant') }}</span>
      </button>
      <button class="sidebar-action-btn">
        <img class="sidebar-action-icon" :src="iconTeamChat" alt="" />
        <span>{{ $t('scenario_task.actions.team_chat') }}</span>
      </button>
      <button class="sidebar-action-btn">
        <img class="sidebar-action-icon" :src="iconUseItem" alt="" />
        <span>{{ $t('scenario_task.actions.use_item') }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import iconFreightManager from '../assets/img/icon_role_freight_manager.png'
import iconOperator from '../assets/img/icon_role_operator.png'
import iconCustomerService from '../assets/img/icon_role_customer_service.png'
import iconRoleIndicator from '../assets/img/icon_role_indicator.png'
import iconRoleIndicatorBlue from '../assets/img/icon_role_indicator_blue.png'
import iconRoleIndicatorCyan from '../assets/img/icon_role_indicator_cyan.png'
import iconAiAssistant from '../assets/img/icon_ai_assistant.png'
import iconTeamChat from '../assets/img/icon_team_chat.png'
import iconUseItem from '../assets/img/icon_use_item.png'
</script>

<style scoped lang="scss">
.left-sidebar {
  width: 25%;
  min-width: 360px;
  max-width: 479px;
  height: 100%;
  background: url('../assets/img/bg_sidebar.png') 100% no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  flex-shrink: 0;
}

.section-title-bar {
  height: 35px;
  background: url('../assets/img/bg_title_important_tips.png') 100% no-repeat;
  background-size: 100% 100%;
  width: calc(100% - 30px);
  margin: 22px 0 0 15px;
  display: flex;
  align-items: center;
  padding-left: 25px;
}

.section-title-text {
  background-image: linear-gradient(180deg, #fff 0%, #fff 0%, #acdbff 98.5%, #acdbff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 22px;
  font-family: 'ADZYJT--GB1-0', 'Source Han Sans CN', sans-serif;
  font-weight: bold;
  line-height: 25px;
  white-space: nowrap;
}

.section-heading {
  background-image: linear-gradient(180deg, #fff 0%, #fff 0%, #acdbff 98.5%, #acdbff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 21px;
  font-family: 'BDZYJT--GB1-0', 'Source Han Sans CN', sans-serif;
  line-height: 25px;
  white-space: nowrap;
  margin: 29px 0 0 34px;
}

// Role Cards
.role-card {
  display: flex;
  align-items: center;
  width: calc(100% - 62px);
  height: 51px;
  margin: 22px 0 0 35px;
  padding: 0 4px;

  &--active {
    background-color: rgba(251, 115, 25, 0.38);
    border: 1px solid rgba(251, 115, 25, 1);
  }

  &--inactive {
    background-color: rgba(25, 158, 251, 0.38);
    border: 1px solid rgba(0, 127, 239, 1);
  }
}

.role-avatar {
  width: 43px;
  height: 42px;
  flex-shrink: 0;
}

.role-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  margin-left: 11px;
  flex: 1;
  min-width: 0;
}

.role-name {
  color: #fff;
  font-size: 20px;
  font-family: 'Source Han Sans CN', sans-serif;
  font-weight: 500;
  line-height: 1.2;
  white-space: nowrap;

  &--muted {
    color: rgba(153, 153, 153, 1);
  }
}

.role-desc {
  color: #fff;
  font-size: 14px;
  font-family: 'Adobe Heiti Std', 'Source Han Sans CN', sans-serif;
  line-height: 1.2;
  white-space: nowrap;

  &--muted {
    color: rgba(153, 153, 153, 1);
  }
}

.role-indicator {
  width: 21px;
  height: 26px;
  flex-shrink: 0;
  margin-left: auto;
  margin-right: 12px;
}

// Progress Bar
.progress-bar {
  height: 45px;
  background: url('../assets/img/bg_progress_bar.png') 100% no-repeat;
  background-size: 100% 100%;
  width: calc(100% - 72px);
  margin: 20px 0 0 37px;
  display: flex;
  align-items: flex-start;
}

.progress-info {
  margin: 4px 0 0 56px;
}

.progress-text {
  color: rgba(150, 224, 255, 1);
  font-size: 12px;
  font-family: 'SimHei', sans-serif;
  line-height: 25px;
  white-space: nowrap;
}

.progress-percent {
  color: rgba(150, 224, 255, 1);
  font-size: 10px;
  font-family: 'Source Han Sans CN', sans-serif;
  line-height: 25px;
  margin-left: 9px;
  margin-top: 0;
}

// Timer Bar
.timer-bar {
  height: 45px;
  background: url('../assets/img/bg_timer_bar.png') 100% no-repeat;
  background-size: 100% 100%;
  width: calc(100% - 72px);
  margin: 20px 0 0 37px;
  display: flex;
  align-items: flex-start;
}

.timer-info {
  margin: 4px 0 0 56px;
}

.timer-text {
  color: rgba(150, 224, 255, 1);
  font-size: 12px;
  font-family: 'Source Han Sans CN', sans-serif;
  line-height: 25px;
  white-space: nowrap;
}

.timer-remaining {
  color: rgba(150, 224, 255, 1);
  font-size: 10px;
  font-family: 'Source Han Sans CN', sans-serif;
  line-height: 25px;
  margin-left: 9px;
}

.sidebar-spacer {
  flex: 1;
}

// Action Buttons
.action-buttons {
  display: flex;
  gap: 7px;
  padding: 0 31px;
  margin-bottom: 44px;
}

.sidebar-action-btn {
  background: linear-gradient(180deg, rgba(40, 72, 122, 1) 0%, rgba(22, 50, 84, 1) 100%);
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  height: 41px;
  flex: 1;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  font-family: 'Adobe Heiti Std', 'Source Han Sans CN', sans-serif;
  line-height: 24px;
  white-space: nowrap;
  transition: opacity 0.2s;
  padding: 0 8px;

  &:hover {
    opacity: 0.85;
  }
}

.sidebar-action-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}
</style>
