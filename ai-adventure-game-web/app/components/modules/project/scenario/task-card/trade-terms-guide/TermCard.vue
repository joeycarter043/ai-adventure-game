<template>
  <div 
    :class="['term-card', { expanded: isExpanded }]"
    @click="$emit('toggle')"
  >
    <div class="term-card-header">
      <!-- 术语代码圆形标签 -->
      <div class="term-code-circle">
        <span class="term-code">{{ term.code }}</span>
      </div>
      
      <!-- 术语名称和运输方式 -->
      <div class="term-info">
        <h3 class="term-name">{{ $t(`trade_terms.terms.${term.code}.name`) }}</h3>
        <p class="term-transport">{{ $t(`trade_terms.transport.${term.transport}`) }}</p>
      </div>
      
      <!-- 展开/收起图标 -->
      <div class="expand-icon">
        <svg 
          width="19" 
          height="10" 
          viewBox="0 0 19 10" 
          fill="none"
          :class="{ rotated: isExpanded }"
        >
          <path 
            d="M1 1L9.5 9L18 1" 
            stroke="white" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 术语数据接口
interface TradeTerm {
  code: string
  name: string
  nameEn: string
  transport: string
  category: string
}

defineProps<{
  term: TradeTerm
  isExpanded: boolean
}>()

defineEmits<{
  toggle: []
}>()
</script>

<style scoped lang="scss">
.term-card {
  width: 100%;
  background-color: rgba(196, 196, 196, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 16px 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(196, 196, 196, 0.15);
  }

  &.expanded {
    border-radius: 8px 8px 0 0;
  }
}

.term-card-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.term-code-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(212, 231, 255, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.term-code {
  font-size: 18px;
  font-weight: 700;
  color: rgba(17, 45, 100, 1);
}

.term-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.term-name {
  font-size: 20px;
  color: #fff;
  margin: 0;
  line-height: 24px;
}

.term-transport {
  font-size: 16px;
  color: rgba(213, 213, 213, 1);
  margin: 0;
  line-height: 24px;
}

.expand-icon {
  width: 19px;
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    transition: transform 0.3s ease;

    &.rotated {
      transform: rotate(180deg);
    }
  }
}
</style>
