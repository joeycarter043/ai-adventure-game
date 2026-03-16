<template>
  <div class="bill-template-page">
    <BillTemplateSubHeader
      @save-draft="onSaveDraft"
      @submit="onSubmit"
      @export="onExport"
    />

    <div class="bill-template-scroll">
      <div class="bill-template-inner">
        <!-- 海运提单 form card -->
        <div class="bill-card">
          <BillHeader />
          <PartiesSection />
          <TransportSection />
          <CargoSection />
          <FreightSection />
          <IssueSection />
        </div>

        <!-- 操作提示：与 bill-card 等宽、等边距 -->
        <OperationTips class="op-tips-block" />

        <div class="bottom-spacer" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BillTemplateSubHeader from '@/components/modules/project/scenario/task-card/bill-template/BillTemplateSubHeader.vue'
import BillHeader from '@/components/modules/project/scenario/task-card/bill-template/BillHeader.vue'
import PartiesSection from '@/components/modules/project/scenario/task-card/bill-template/PartiesSection.vue'
import TransportSection from '@/components/modules/project/scenario/task-card/bill-template/TransportSection.vue'
import CargoSection from '@/components/modules/project/scenario/task-card/bill-template/CargoSection.vue'
import FreightSection from '@/components/modules/project/scenario/task-card/bill-template/FreightSection.vue'
import IssueSection from '@/components/modules/project/scenario/task-card/bill-template/IssueSection.vue'
import OperationTips from '@/components/modules/project/scenario/task-card/bill-template/OperationTips.vue'

const { t } = useI18n()

const breadcrumbTitle = ref(t('scenario_task.breadcrumb.bill_template'))
provide('dynamicBreadcrumbTitle', breadcrumbTitle)

function onSaveDraft() {
  console.log('save draft')
}

function onSubmit() {
  console.log('submit')
}

function onExport() {
  console.log('export')
}
</script>

<style scoped lang="scss">
.bill-template-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1920px;
  min-width: 1440px;
  margin: 0 auto;
  height: 100%;
  overflow: hidden;
  background-color: rgba(19, 34, 57, 1);
}

.bill-template-scroll {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-track { background: rgba(0, 0, 0, 0.2); }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 174, 255, 0.3);
    border-radius: 3px;
  }
}

/* 统一的水平 padding — bill-card 和 op-tips 都在这个容器内，边距自然对齐 */
.bill-template-inner {
  padding: 20px 68px 0;
}

.bill-card {
  background: linear-gradient(
    180deg,
    rgba(40, 72, 122, 0.22) 0%,
    rgba(22, 50, 84, 0.22) 100%
  );
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 1);
  padding-bottom: 28px;
}

/* 操作提示块：与 bill-card 同宽（由父级 padding 控制），上方留间距 */
.op-tips-block {
  margin-top: 24px;
}

.bottom-spacer {
  height: 40px;
}
</style>
