<template>
  <div class="right-sidebar">
    <!-- Clues Section -->
    <div class="section-header">
      <div class="section-header-accent" />
      <div class="section-header-bg">
        <span class="section-header-text">{{ $t('scenario_task.clues_obtained') }}</span>
      </div>
    </div>

    <div class="clues-list">
      <ClueItem
        v-for="(clue, index) in clues"
        :key="index"
        :text="clue.text"
        :icon-type="clue.iconType"
      />
    </div>

    <!-- Toolbox Section -->
    <div class="section-header section-header--toolbox">
      <div class="section-header-accent" />
      <div class="section-header-bg">
        <span class="section-header-text">{{ $t('scenario_task.toolbox') }}</span>
      </div>
    </div>

    <div class="toolbox-list">
      <div
        v-for="(tool, index) in tools"
        :key="index"
        class="toolbox-item"
        :class="{ 'toolbox-item--active': tool.active }"
      >
        <img class="toolbox-icon" :src="tool.icon" :alt="tool.label" />
        <span class="toolbox-label" :class="{ 'toolbox-label--glow': tool.active }">{{ tool.label }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import ClueItem from './ClueItem.vue'

import iconBillTemplate from '../assets/img/icon_bill_template.png'
import iconTermDictionary from '../assets/img/icon_term_dictionary.png'
import iconClassificationManual from '../assets/img/icon_classification_manual.png'
import iconRouteMap from '../assets/img/icon_route_map.png'

const { t } = useI18n()

const clues = computed(() => [
  {
    text: t('scenario_task.clues[0].text'),
    iconType: 'primary' as const,
  },
  {
    text: t('scenario_task.clues[1].text'),
    iconType: 'blue' as const,
  },
  {
    text: t('scenario_task.clues[2].text'),
    iconType: 'teal' as const,
  },
  {
    text: t('scenario_task.clues[2].text'),
    iconType: 'purple' as const,
  },
])

const tools = computed(() => [
  { icon: iconBillTemplate, label: t('scenario_task.toolbox_items.bill_template'), active: true },
  { icon: iconTermDictionary, label: t('scenario_task.toolbox_items.term_dictionary'), active: false },
  { icon: iconClassificationManual, label: t('scenario_task.toolbox_items.classification_manual'), active: false },
  { icon: iconRouteMap, label: t('scenario_task.toolbox_items.route_map'), active: false },
])
</script>

<style scoped lang="scss">
.right-sidebar {
  width: 25.6%;
  min-width: 370px;
  max-width: 492px;
  height: 100%;
  background: url('../assets/img/bg_right_sidebar.png') 100% no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  flex-shrink: 0;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(23, 160, 252, 0.3);
    border-radius: 2px;
  }
}

// Section Header
.section-header {
  display: flex;
  width: calc(100% - 50px);
  height: 35px;
  margin: 22px 0 0 38px;
  flex-shrink: 0;

  &--toolbox {
    margin-top: 15px;
  }
}

.section-header-accent {
  background-color: rgba(23, 160, 252, 1);
  width: 9px;
  height: 35px;
  flex-shrink: 0;
}

.section-header-bg {
  background-color: rgba(23, 160, 252, 0.66);
  height: 35px;
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: 13px;
}

.section-header-text {
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

// Clues List
.clues-list {
  display: flex;
  flex-direction: column;
  gap: 17px;
  padding: 28px 25px 0 63px;
}

// Toolbox List
.toolbox-list {
  display: flex;
  flex-direction: column;
  gap: 19px;
  padding: 28px 25px 30px 64px;
}

.toolbox-item {
  background-color: rgba(4, 56, 113, 0.34);
  width: 100%;
  height: 60px;
  border: 1px solid rgba(4, 56, 113, 1);
  display: flex;
  align-items: center;
  gap: 23px;
  padding-left: 23px;
  cursor: pointer;
  transition: border-color 0.2s;

  &--active {
    border-color: rgba(0, 160, 233, 1);
  }

  &:hover {
    border-color: rgba(0, 160, 233, 0.6);
  }
}

.toolbox-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  object-fit: contain;
}

.toolbox-label {
  color: #fff;
  font-size: 18px;
  font-family: 'Source Han Sans CN', sans-serif;
  line-height: 59px;
  white-space: nowrap;

  &--glow {
    text-shadow: 0 0 8px rgba(0, 210, 255, 0.88);
  }
}
</style>
