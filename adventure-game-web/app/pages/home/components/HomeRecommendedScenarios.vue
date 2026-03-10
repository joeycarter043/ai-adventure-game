<script setup lang="ts">
const { t } = useI18n()

const scenarios = ref([
  {
    id: 1,
    title: t('home_page.scenarios.customs_declaration'),
    description: t('home_page.scenario_descriptions.customs_declaration'),
    duration: '45',
    score: '4.9'
  },
  {
    id: 2,
    title: t('home_page.scenarios.sea_waybill'),
    description: t('home_page.scenario_descriptions.sea_waybill'),
    duration: '45',
    score: '4.9'
  },
  {
    id: 3,
    title: t('home_page.scenarios.air_urgent'),
    description: t('home_page.scenario_descriptions.air_urgent'),
    duration: '45',
    score: '4.9'
  }
])
</script>

<template>
  <div class="recommended-scenarios">
    <div class="section-header">
      <span class="section-title">{{ t('home_page.recommended_scenarios') }}</span>
      <span class="view-all-link">{{ t('home_page.view_all') }} &nbsp;&nbsp;→</span>
    </div>

    <div class="scenarios-container">
      <div
        v-for="scenario in scenarios"
        :key="scenario.id"
        class="scenario-card"
      >
        <HomeScenarioCard
          :title="scenario.title"
          :description="scenario.description"
          :duration="scenario.duration"
          :score="scenario.score"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.recommended-scenarios {
  margin: 33px 0 0 40px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1735px;
  height: 33px;

  .section-title {
    background: linear-gradient(180deg, #ffffff 0%, #ffffff 0%, #acdbff 98.535156%, #acdbff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    width: 91px;
    height: 21px;
    color: #000000;
    font-size: 22px;
    white-space: nowrap;
    line-height: 25px;
    margin: 7px 0 0 25px;
  }

  .view-all-link {
    color: #ffffff;
    font-size: 18px;
    font-weight: 500;
    font-family: 'SourceHanSansCN-Medium', sans-serif;
    white-space: nowrap;
    line-height: 28px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
}

.scenarios-container {
  display: flex;
  justify-content: space-between;
  width: 1680px;
  height: 399px;
  margin: 28px 0 0 106px;
}
</style>
