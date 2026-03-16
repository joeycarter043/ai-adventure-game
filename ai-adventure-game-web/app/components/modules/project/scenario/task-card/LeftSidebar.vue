<template>
  <div class="left-sidebar">
    <div class="sidebar-header">
      <SectionTitleBar :title="$t('scenario_task.important_tips')" />
    </div>

    <div class="sidebar-scroll-content custom-scrollbar-auto-hide">
      <h3 class="section-heading">{{ $t('scenario_task.my_role') }}</h3>
      <div class="role-list">
        <RoleCard
          v-for="(role, index) in roleData"
          :key="index"
          :avatar="role.avatar"
          :title="role.title"
          :desc="role.desc"
          :indicator="role.indicator"
          :active="activeRoleIndex === index"
          @select="activeRoleIndex = index"
        />
      </div>

      <h3 class="section-heading">{{ $t('scenario_task.script_progress') }}</h3>
      <StatusProgressBar 
        value="75%" 
        label="已完成 1 个任务" 
      />

      <h3 class="section-heading">{{ $t('scenario_task.remaining_time') }}</h3>
      <StatusProgressBar 
        type="timer"
        value="29分" 
        label="已用时 51 分" 
      />
    </div>

    <div class="sidebar-footer">
      <div class="action-buttons">
        <button class="sidebar-action-btn">
          <img class="sidebar-action-icon" :src="iconAiAssistant" />
          <span>{{ $t('scenario_task.actions.ai_assistant') }}</span>
        </button>
        <button class="sidebar-action-btn">
          <img class="sidebar-action-icon" :src="iconTeamChat" />
          <span>{{ $t('scenario_task.actions.team_chat') }}</span>
        </button>
        <button class="sidebar-action-btn">
          <img class="sidebar-action-icon" :src="iconUseItem" />
          <span>{{ $t('scenario_task.actions.use_item') }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import RoleCard from './subcomponents/RoleCard.vue'
import SectionTitleBar from '@/components/base/SectionTitleBar.vue'
import StatusProgressBar from './subcomponents/StatusProgressBar.vue'

import iconFreightManager from './assets/icon_role_freight_manager.png'
import iconOperator from './assets/icon_role_operator.png'
import iconCustomerService from './assets/icon_role_customer_service.png'
import iconRoleIndicator from './assets/icon_role_indicator.png'
import iconRoleIndicatorBlue from './assets/icon_role_indicator_blue.png'
import iconRoleIndicatorCyan from './assets/icon_role_indicator_cyan.png'
import iconAiAssistant from './assets/icon_ai_assistant.png'
import iconTeamChat from './assets/icon_team_chat.png'
import iconUseItem from './assets/icon_use_item.png'

const { t } = useI18n()

// 当前选中的角色索引，默认第一个
const activeRoleIndex = ref(0)

// 组装角色数据
const roleData = computed(() => [
  {
    avatar: iconFreightManager,
    title: t('scenario_task.roles.freight_manager.title'),
    desc: t('scenario_task.roles.freight_manager.desc'),
    indicator: iconRoleIndicator
  },
  {
    avatar: iconOperator,
    title: t('scenario_task.roles.operator.title'),
    desc: t('scenario_task.roles.operator.desc'),
    indicator: iconRoleIndicatorBlue
  },
  {
    avatar: iconCustomerService,
    title: t('scenario_task.roles.customer_service.title'),
    desc: t('scenario_task.roles.customer_service.desc'),
    indicator: iconRoleIndicatorCyan
  }
])
</script>

<style scoped lang="scss">
.left-sidebar {
  width: 300px !important;
  flex: 0 0 300px !important;
  min-width: 300px !important;
  max-width: 300px !important;

  height: 100%;
  background: url('./assets/bg_sidebar.png') no-repeat;
  background-position: center -12px;
  background-size: 108% 105%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  overflow: hidden;
  box-sizing: border-box;
}

.sidebar-header {
  flex-shrink: 0;
}

/* 核心滚动区域 */
.sidebar-scroll-content {
  flex: 1;
  overflow-y: auto;
  min-height: 0;
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(23, 160, 252, 0.3);
    border-radius: 2px;
  }
}

.section-heading {
  background: linear-gradient(180deg, #fff 0%, #acdbff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 16px;
  font-weight: bold;
  margin: 12px 0 12px 15px;
}

.role-list {
  padding: 0 20px 0 15px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.sidebar-footer {
  flex-shrink: 0;
  padding: 0px 25px 10px 10px;
}

.action-buttons {
  display: flex;
  gap: 4px;
}

.sidebar-action-btn {
  flex: 1;
  height: 30px;
  background: linear-gradient(180deg, #28487a 0%, #163254 100%);
  border: 1px solid #000;
  border-radius: 6px;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  transition: filter 0.2s;
  white-space: nowrap;

  &:hover { filter: brightness(1.2); }
}

.sidebar-action-icon { width: 16px; height: 16px; }
</style>