<template>
  <div class="recommended-scenarios">
    <SectionTitleBar 
      :style="{ '--title-bg-size': 'auto 100%' }"
      :title="t('home_page.recommended_scenarios')">
      <template #right>
        <span class="view-all-link" @click="handleViewAll">
          {{ t('home_page.view_all') }}&nbsp;&nbsp;→
        </span>
      </template>
    </SectionTitleBar>

    <div class="scenarios-container">
      <ScenarioCard
        v-for="scenario in scenarios"
        :key="scenario.id"
        :id="scenario.id"
        :title="scenario.title"
        :description="scenario.description"
        :duration="scenario.duration"
        :score="scenario.score"
        :cover="scenario.cover"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionTitleBar from '@/components/base/SectionTitleBar.vue'
import ScenarioCard from '@/components/modules/project/scenario/ScenarioCard.vue'

import testImg from '@/assets/img/test/test.png'

const { t } = useI18n()
const router = useRouter()
const localePath = useLocalePath()

const scenarios = [
  {
    id: 1,
    title: t('home_page.scenarios.customs_declaration'),
    description: t('home_page.scenario_descriptions.customs_declaration'),
    duration: '45',
    score: '4.2',
    cover: testImg
  },
  {
    id: 2,
    title: t('home_page.scenarios.sea_waybill'),
    description: t('home_page.scenario_descriptions.sea_waybill'),
    duration: '45',
    score: '2.6',
    cover: testImg
  },
  {
    id: 3,
    title: t('home_page.scenarios.air_urgent'),
    description: t('home_page.scenario_descriptions.air_urgent'),
    duration: '45',
    score: '4.9',
    cover: testImg
  }
]

const handleViewAll = () => {
  // 使用 localePath 确保跳转到正确语言版本的 /project/scenario
  router.push(localePath('/project/scenario'))
}

</script>

<style scoped lang="scss">
.recommended-scenarios {
  /* 移除固定宽度，使用外边距控制间距 */
  width: auto; 
}

/* ─── 标题右侧链接样式 ────────────────────────────────── */
.view-all-link {
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  margin-right: 20px;
  font-family: 'SourceHanSansCN-Medium', sans-serif;
  white-space: nowrap;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover { 
    opacity: 0.75; 
  }
}

/* ─── 卡片容器优化 ─────────────────────────────────── */
.scenarios-container {
  display: flex;
  gap: 24px; 
  width: 100%;
  padding: 20px 20px 0 20px;
  box-sizing: border-box;

  /* 让子卡片能自适应伸缩 */
  :deep(.home-scenario-card) {
    flex: 1;
    min-width: 0; /* 关键：允许 flex 项目收缩到比内容更小 */
  }
}

/* 针对更小屏幕的微调 */
@media (max-width: 1400px) {
  .scenarios-container {
    gap: 15px;
    padding-left: 10px;
  }
  .view-all-link {
    font-size: 14px;
  }
}
</style>