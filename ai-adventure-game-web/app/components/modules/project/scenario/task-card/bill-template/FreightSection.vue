<template>
  <div class="freight-section">
    <div class="section-header">
      <span class="section-label">运费和费用 / FREIGHT & CHARGES</span>
    </div>

    <!-- 运费支付方式 + 货币 labels -->
    <div class="two-col-labels">
      <span class="sub-label">运费支付方式</span>
      <span class="sub-label">货币</span>
    </div>

    <!-- 运费支付方式 Select + 货币 Select -->
    <div class="two-col mt-10">
      <!-- 运费支付方式 -->
      <SelectRoot v-model="form.paymentMethod">
        <SelectTrigger class="select-trigger">
          <SelectValue placeholder="请选择" />
          <SelectIcon class="chevron-icon">
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
              <path d="M1 1l5 5 5-5" stroke="#aaa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectContent class="select-content" position="popper" :side-offset="6" :collision-padding="20">
            <SelectViewport class="select-viewport">
              <SelectItem v-for="opt in paymentOptions" :key="opt.value" :value="opt.value" class="select-item">
                <SelectItemText>{{ opt.label }}</SelectItemText>
                <SelectItemIndicator class="select-indicator">
                  <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                    <path d="M1 4l3.5 3.5L11 1" stroke="#00fffe" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </SelectItemIndicator>
              </SelectItem>
            </SelectViewport>
          </SelectContent>
        </SelectPortal>
      </SelectRoot>

      <!-- 货币 Select：美元/USD → 人民币/CNY → 欧元/EUR → 英镑/GBP，默认选中欧元/EUR -->
      <SelectRoot v-model="form.currency">
        <SelectTrigger class="select-trigger">
          <SelectValue />
          <SelectIcon class="chevron-icon">
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
              <path d="M1 1l5 5 5-5" stroke="#aaa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectContent class="select-content" position="popper" :side-offset="6" :collision-padding="20">
            <SelectViewport class="select-viewport">
              <SelectItem v-for="opt in currencyOptions" :key="opt.value" :value="opt.value" class="select-item">
                <SelectItemText>{{ opt.label }}</SelectItemText>
                <SelectItemIndicator class="select-indicator">
                  <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                    <path d="M1 4l3.5 3.5L11 1" stroke="#00fffe" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </SelectItemIndicator>
              </SelectItem>
            </SelectViewport>
          </SelectContent>
        </SelectPortal>
      </SelectRoot>
    </div>

    <!-- 运费金额 label -->
    <span class="sub-label mt-20">运费金额</span>

    <!-- 运费金额 input，宽度与左侧 select 对齐（约 50% - gap/2） -->
    <div class="mt-10">
      <input
        v-model="form.freightAmount"
        class="input-field half-width"
        placeholder="请输入运费金额"
        type="number"
        min="0"
      />
    </div>

    <div class="divider" />
  </div>
</template>

<script setup lang="ts">
import {
  SelectRoot, SelectTrigger, SelectValue, SelectIcon,
  SelectPortal, SelectContent, SelectViewport,
  SelectItem, SelectItemText, SelectItemIndicator,
} from 'radix-vue'

const paymentOptions = computed(() => [
  { value: 'prepaid', label: '预付（Prepaid）' },
  { value: 'collect', label: '到付（Collect）' },
])

const currencyOptions = computed(() => [
  { value: 'USD', label: '美元/USD' },
  { value: 'CNY', label: '人民币/CNY' },
  { value: 'EUR', label: '欧元/EUR' },
  { value: 'GBP', label: '英镑/GBP' },
])

const form = reactive({
  paymentMethod: '',
  currency: 'EUR',
  freightAmount: '',
})
</script>

<style scoped lang="scss">
.freight-section {
  padding: 0 44px;
  margin-top: 28px;
}

.section-label {
  font-size: 24px;
  font-weight: 500;
  color: #d4d4d4;
  line-height: 24px;
}

.two-col-labels {
  display: flex;
  gap: 20px;
  margin-top: 16px;
  > * { flex: 1; }
}

.two-col {
  display: flex;
  gap: 20px;
  > * { flex: 1; }
}

.mt-10 { margin-top: 10px; }
.mt-20 { margin-top: 20px; display: block; }

.sub-label {
  display: block;
  font-size: 16px;
  color: #b5b5b5;
  line-height: 24px;
}

/* ─── Radix Select trigger ────────────────────────── */
.select-trigger {
  width: 100%;
  height: 48px;
  border-radius: 8px;
  border: 1px solid #5A85BE;
  background: linear-gradient(rgba(40, 72, 122, 0.22), rgba(22, 50, 84, 0.22));
  color: #fff;
  font-size: 14px;
  padding: 0 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  outline: none;
  transition: border-color 0.15s;
  user-select: none;

  &:hover {
    border-color: rgba(0, 174, 255, 0.4);
  }

  &[data-state="open"] {
    border-color: rgba(0, 174, 255, 0.6);
  }

  :deep([data-placeholder]) {
    color: #999;
  }
}

.chevron-icon {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-left: 8px;
  transition: transform 0.2s;

  [data-state="open"] & {
    transform: rotate(180deg);
  }
}

/* ─── Radix Select dropdown ───────────────────────── */
/* SelectPortal renders outside the DOM tree, so we use :global */
:global(.select-content) {
  background: rgba(10, 25, 55, 0.98) !important;
  border: 1px solid rgba(0, 174, 255, 0.35) !important;
  border-radius: 8px !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.7) !important;
  overflow: hidden !important;
  /* 宽度跟随 trigger */
  width: var(--radix-select-trigger-width) !important;
  z-index: 9999 !important;
}

:global(.select-viewport) {
  padding: 4px 0 !important;
}

:global(.select-item) {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  height: 42px !important;
  padding: 0 14px !important;
  font-size: 14px !important;
  color: #ccc !important;
  cursor: pointer !important;
  outline: none !important;
  transition: background 0.1s, color 0.1s !important;
  user-select: none !important;
}

:global(.select-item:hover),
:global(.select-item[data-highlighted]) {
  background: rgba(40, 72, 122, 0.7) !important;
  color: #fff !important;
}

:global(.select-item[data-state="checked"]) {
  background: rgba(7, 44, 91, 1) !important;
  color: rgba(0, 255, 252, 1) !important;
}

:global(.select-indicator) {
  display: flex !important;
  align-items: center !important;
}

/* ─── Freight amount input ────────────────────────── */
.input-field {
  height: 48px;
  border-radius: 8px;
  border: 1px solid #5A85BE;
  background: linear-gradient(rgba(40, 72, 122, 0.22), rgba(22, 50, 84, 0.22));
  color: #fff;
  font-size: 14px;
  padding: 0 13px;
  outline: none;
  transition: border-color 0.15s;

  &::placeholder { color: #999; }
  &:focus { border-color: rgba(0, 174, 255, 0.5); }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
  &[type=number] { -moz-appearance: textfield; }
}

.half-width {
  width: calc(50% - 10px);
}

.divider {
  height: 2px;
  background: linear-gradient(90deg, rgba(0, 174, 255, 0.6) 0%, rgba(0, 174, 255, 0.1) 100%);
  margin-top: 18px;
}
</style>
