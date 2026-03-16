<template>
  <SubHeader>
    <template #left>
      <nav class="breadcrumb">
        <span class="crumb muted">{{ $t('scenario_task.breadcrumb.project_select') }}&nbsp;/&nbsp;</span>
        <span class="crumb muted">{{ $t('scenario_task.breadcrumb.scenario_select') }}&nbsp;/&nbsp;</span>
        <span class="crumb muted">{{ $t('scenario_task.breadcrumb.current') }}&nbsp;/&nbsp;</span>
        <span class="crumb active">{{ $t('scenario_task.breadcrumb.bill_template') }}</span>
      </nav>
    </template>
    <template #right>
      <button class="action-btn btn-draft" @click="$emit('save-draft')">
        {{ $t('bill_template.btn_save_draft') }}
      </button>
      <button class="action-btn btn-submit" @click="$emit('submit')">
        {{ $t('bill_template.btn_submit') }}
      </button>
      <button class="action-btn btn-export" @click="$emit('export')">
        {{ $t('bill_template.btn_export') }}
      </button>
    </template>
  </SubHeader>
</template>

<script setup lang="ts">
defineEmits<{
  'save-draft': []
  'submit': []
  'export': []
}>()
</script>

<style scoped lang="scss">
.breadcrumb {
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 24px;
}

.crumb {
  &.muted {
    color: #999;
  }
  &.active {
    color: #fff;
  }
}

.action-btn {
  height: 38px;
  padding: 0 20px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  transition: opacity 0.15s;

  &:hover {
    opacity: 0.85;
  }
}

.btn-draft {
  background: linear-gradient(135deg, rgba(40, 72, 122, 0.8), rgba(22, 50, 84, 0.8));
  border: 1px solid rgba(0, 174, 255, 0.4);
  color: #e8e8e8;
}

.btn-submit {
  background: linear-gradient(135deg, rgba(0, 120, 200, 0.9), rgba(0, 80, 160, 0.9));
  border: 1px solid rgba(0, 174, 255, 0.6);
  color: #fff;
}

.btn-export {
  background: linear-gradient(135deg, rgba(22, 50, 84, 0.9), rgba(13, 35, 60, 0.9));
  border: 1px solid rgba(0, 174, 255, 0.3);
  color: #d4d4d4;
}
</style>
