<template>
  <div class="right-sidebar">
    <div class="clues-section">
      <SectionTitleBar 
        class="sidebar-custom-title" 
        :title="$t('scenario_task.clues_obtained')" 
      />
      
      <div class="scroll-container custom-scrollbar-auto-hide">
        <div class="clues-list">
          <ClueItem
            v-for="(clue, index) in clues"
            :key="index"
            :text="clue.text"
            :icon-type="clue.iconType"
          />
        </div>
      </div>
    </div>

    <div class="toolbox-section">
      <SectionTitleBar 
        class="sidebar-custom-title" 
        :title="$t('scenario_task.toolbox')" 
      />

      <div class="scroll-container custom-scrollbar-auto-hide">
        <div class="toolbox-list">
          <ToolboxItem
            v-for="(tool, index) in tools"
            :key="index"
            :icon="tool.icon"
            :label="tool.label"
            :active="tool.active"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import ClueItem from './subcomponents/ClueItem.vue'
import ToolboxItem from './subcomponents/ToolboxItem.vue'
import SectionTitleBar from '@/components/base/SectionTitleBar.vue'

import iconBillTemplate from '../assets/img/icon_bill_template.png'
import iconTermDictionary from '../assets/img/icon_term_dictionary.png'
import iconClassificationManual from '../assets/img/icon_classification_manual.png'
import iconRouteMap from '../assets/img/icon_route_map.png'

const { t } = useI18n()

const clues = computed(() => [
  { text: t('scenario_task.clues[0].text'), iconType: 'primary' as const },
  { text: t('scenario_task.clues[1].text'), iconType: 'blue' as const },
  { text: t('scenario_task.clues[2].text'), iconType: 'teal' as const },
  { text: t('scenario_task.clues[2].text'), iconType: 'purple' as const },
])

const tools = computed(() => [
  { icon: iconBillTemplate, label: t('scenario_task.toolbox_items.bill_template'), active: true },
  { icon: iconTermDictionary, label: t('scenario_task.toolbox_items.term_dictionary'), active: false },
  { icon: iconClassificationManual, label: t('scenario_task.toolbox_items.classification_manual'), active: false },
  { icon: iconRouteMap, label: t('scenario_task.toolbox_items.route_map'), active: false }
])
</script>

<style scoped lang="scss">
.right-sidebar {
  width: 320px !important;
  flex: 0 0 320px !important;
  min-width: 320px !important;
  max-width: 320px !important;

  height: 100%;
  background: url('../assets/img/bg_right_sidebar.png') no-repeat;
  background-position: center -12px;
  background-size: 105% 105%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: 0;
  overflow: hidden;
}

.sidebar-custom-title {
  margin: 0px 15px 0 18px; 
}

.clues-section, .toolbox-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.scroll-container {
  flex: 1;
  min-height: 0;
  margin: 10px 0;
}

/* 列表容器间距微调 */
.clues-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0px 25px 15px 32px; /* 调整左边距对齐背景 */
}

.toolbox-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 28px 20px 32px;
}

</style>