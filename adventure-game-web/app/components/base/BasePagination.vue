<template>
  <div class="base-pagination">
    <div class="pagination-info">
      {{ $t('common.pagination_info', { start: startRange, end: endRange, total: props.total }) }}
    </div>

    <div class="pagination-controls">
      <button 
        class="nav-btn prev" 
        :disabled="props.currentPage === 1"
        @click="handlePageChange(props.currentPage - 1)"
      >
        <img :src="iconArrowLeft" alt="prev" />
      </button>

      <div class="page-numbers">
        <button
          v-for="page in displayedPages"
          :key="page"
          class="page-item"
          :class="{ 
            'is-active': page === props.currentPage,
            'is-ellipsis': page === '...'
          }"
          :disabled="page === '...'"
          @click="handlePageChange(page as number)"
        >
          {{ page }}
        </button>
      </div>

      <button 
        class="nav-btn next" 
        :disabled="props.currentPage === totalPages"
        @click="handlePageChange(props.currentPage + 1)"
      >
        <img :src="iconArrowRight" alt="next" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import iconArrowLeft from '@/assets/img/icon_arrow_left.png'
import iconArrowRight from '@/assets/img/icon_arrow_right.png'

interface Props {
  total: number       // 总条数
  pageSize: number    // 每页条数
  currentPage: number // 当前页码
}

const props = withDefaults(defineProps<Props>(), {
  total: 0,
  pageSize: 10,
  currentPage: 1
})

const emit = defineEmits<{
  (e: 'update:currentPage', page: number): void
  (e: 'change', page: number): void
}>()

// 计算总页数
const totalPages = computed(() => Math.ceil(props.total / props.pageSize))

// 计算当前显示的统计范围
const startRange = computed(() => (props.currentPage - 1) * props.pageSize + 1)
const endRange = computed(() => Math.min(props.currentPage * props.pageSize, props.total))

// 核心分页算法：处理省略号
const displayedPages = computed(() => {
  const total = totalPages.value
  const current = props.currentPage
  const pages: (number | string)[] = []

  if (total <= 7) {
    for (let i = 1; i <= total; i++) pages.push(i)
  } else {
    pages.push(1)
    if (current > 4) pages.push('...')
    
    let start = Math.max(2, current - 1)
    let end = Math.min(total - 1, current + 1)

    if (current <= 4) end = 5
    if (current > total - 4) start = total - 4

    for (let i = start; i <= end; i++) pages.push(i)

    if (current < total - 3) pages.push('...')
    pages.push(total)
  }
  return pages
})

const handlePageChange = (page: number) => {
  if (page < 1 || page > totalPages.value) return
  emit('update:currentPage', page)
  emit('change', page)
}
</script>

<style scoped lang="scss">
.base-pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 66px;
  padding: 0 24px;
  background: linear-gradient(180deg, rgba(40, 72, 122, 0.22) 0%, rgba(22, 50, 84, 0.22) 100%);
  border: 1px solid rgba(0, 0, 0, 1);
  border-radius: 8px;
  box-sizing: border-box;
}

.pagination-info {
  color: #999999;
  font-size: 16px;
}

.pagination-controls {
  display: flex;
  align-items: center;
  gap: 12px;
}

.nav-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  transition: opacity 0.2s;

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  img {
    width: 10px;
    height: 19px;
  }
}

.page-numbers {
  display: flex;
  align-items: center;
  gap: 8px;
}

.page-item {
  min-width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 11px;
  border: 1px solid #000;
  background: linear-gradient(180deg, rgba(40, 72, 122, 0.22) 0%, rgba(22, 50, 84, 0.22) 100%);
  color: #ffffff;
  font-size: 17px;
  cursor: pointer;
  transition: all 0.3s;

  &.is-active {
    background: #04a0c9;
    border: 1px solid #00fffc;
    box-shadow: 0 0 8px rgba(0, 255, 252, 0.4);
  }

  &.is-ellipsis {
    border: none;
    background: transparent;
    cursor: default;
  }

  &:hover:not(:disabled):not(.is-active) {
    border-color: #17a0fc;
    filter: brightness(1.2);
  }
}
</style>