<template>
  <div class="project-filter">
    <div class="search-section">
      <div class="search-input-wrapper">
        <img :src="iconSearch" class="search-icon" alt="search" />
        <input 
          v-model="filterState.keyword" 
          type="text" 
          :placeholder="$t('project.search_placeholder')" 
          @input="handleFilterChange"
        />
      </div>
    </div>

    <div class="category-section">
      <div class="filter-group">
        <span class="group-label">{{ $t('project.difficulty') }}</span>
        <div class="filter-options">
          <button 
            v-for="opt in difficultyOptions" 
            :key="opt.value"
            class="option-btn"
            :class="{ 'is-active': filterState.difficulty === opt.value }"
            @click="selectDifficulty(opt.value)"
          >
            {{ opt.label() }}
          </button>
        </div>
      </div>

      <div class="filter-group">
        <span class="group-label">{{ $t('project.domain') }}</span>
        <div class="filter-options">
          <button 
            v-for="opt in domainOptions" 
            :key="opt.value"
            class="option-btn"
            :class="{ 'is-active': filterState.domain === opt.value }"
            @click="selectDomain(opt.value)"
          >
            {{ opt.label() }}
          </button>
        </div>
      </div>
    </div>

    <div class="sort-section">
      <span class="group-label">{{ $t('project.sort') }}</span>
      <div class="sort-dropdown" v-click-outside="closeSort">
        <div class="sort-trigger" @click="toggleSort">
          <span>{{ currentSortLabel() }}</span>
          <img :src="iconArrowDown" :class="{ 'is-reverse': isSortOpen }" alt="arrow" />
        </div>
        
        <Transition name="fade-slide">
          <div v-if="isSortOpen" class="sort-menu">
            <div 
              v-for="opt in sortOptions" 
              :key="opt.value"
              class="sort-item"
              :class="{ 'selected': filterState.sort === opt.value }"
              @click="selectSort(opt.value)"
            >
              {{ opt.label() }}
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import iconSearch from '@/assets/img/search.png'
import iconArrowDown from '@/assets/img/icon_arrow_down.png'

const emit = defineEmits(['change'])

// 筛选状态
const filterState = reactive({
  keyword: '',
  difficulty: 'all',
  domain: 'all',
  sort: 'latest'
})

// 下拉菜单控制
const isSortOpen = ref(false)
const toggleSort = () => isSortOpen.value = !isSortOpen.value
const closeSort = () => isSortOpen.value = false

const difficultyOptions = [
  { label: () => $t('project.difficulty_all'), value: 'all' },
  { label: () => $t('project.difficulty_junior'), value: 'junior' },
  { label: () => $t('project.difficulty_middle'), value: 'middle' },
  { label: () => $t('project.difficulty_senior'), value: 'senior' }
]

const domainOptions = [
  { label: () => $t('project.domain_all'), value: 'all' },
  { label: () => $t('project.domain_sea'), value: 'sea' },
  { label: () => $t('project.domain_air'), value: 'air' },
  { label: () => $t('project.domain_customs'), value: 'customs' },
  { label: () => $t('project.domain_comprehensive'), value: 'comprehensive' }
]

const sortOptions = [
  { label: () => $t('project.sort_latest'), value: 'latest' },
  { label: () => $t('project.sort_hot'), value: 'hot' },
  { label: () => $t('project.sort_difficulty'), value: 'difficulty' },
  { label: () => $t('project.sort_score'), value: 'score' }
]

const currentSortLabel = computed(() => {
  return sortOptions.find(o => o.value === filterState.sort)?.label
})

// 交互逻辑
const selectDifficulty = (val: string) => {
  filterState.difficulty = val
  handleFilterChange()
}

const selectDomain = (val: string) => {
  filterState.domain = val
  handleFilterChange()
}

const selectSort = (val: string) => {
  filterState.sort = val
  isSortOpen.value = false
  handleFilterChange()
}

const handleFilterChange = () => {
  emit('change', { ...filterState })
}

// 自定义指令 click-outside 用于点击外部关闭下拉菜单
const vClickOutside = {
  mounted(el: any, binding: any) {
    el.clickOutsideEvent = (event: Event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value()
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el: any) {
    document.removeEventListener('click', el.clickOutsideEvent)
  }
}
</script>

<style scoped lang="scss">
.project-filter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 30px;
  margin-bottom: 20px;
  box-sizing: border-box;
}

/* --- 搜索框样式 --- */
.search-section {
  flex: 0 0 80px;
  .search-input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    height: 40px;
    background: rgba(40, 72, 122, 0.22);
    border: 1px solid #16568b;
    border-radius: 8px;
    padding: 0 15px;

    .search-icon {
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }

    input {
      flex: 1;
      background: transparent;
      border: none;
      color: #fff;
      font-size: 14px;
      outline: none;
      &::placeholder { color: #999; }
    }
  }
}

/* --- 分类筛选组样式 --- */
.category-section {
  display: flex;
  gap: 60px;
}

.filter-group {
  display: flex;
  align-items: center;
  gap: 15px;

  .group-label {
    color: #c3c3c3;
    font-size: 16px;
    white-space: nowrap;
  }

  .filter-options {
    display: flex;
    gap: 8px;
  }

  .option-btn {
    min-width: 60px;
    height: 24px;
    background: rgba(40, 72, 122, 0.22);
    border: 1px solid #000;
    border-radius: 11px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s;

    &.is-active {
      background: #04a0c9;
      border-color: #00fffc;
    }

    &:hover:not(.is-active) {
      border-color: #17a0fc;
    }
  }
}

/* --- 排序下拉样式 --- */
.sort-section {
  display: flex;
  align-items: center;
  gap: 15px;

  .group-label {
    color: #c3c3c3;
    font-size: 16px;
  }
}

.sort-dropdown {
  position: relative;
  width: 130px;
  height: 40px;

  .sort-trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 0 15px;
    background: rgba(40, 72, 122, 0.22);
    border: 1px solid #000;
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;

    img {
      width: 15px;
      transition: transform 0.3s;
      &.is-reverse { transform: rotate(180deg); }
    }
  }

  .sort-menu {
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;
    background: rgba(7, 84, 140, 0.95);
    border: 1px solid #17a0fc;
    border-radius: 4px;
    z-index: 100;
    overflow: hidden;

    .sort-item {
      padding: 10px 15px;
      color: #fff;
      font-size: 14px;
      cursor: pointer;
      &:hover { background: rgba(23, 160, 252, 0.3); }
      &.selected { color: #00fffc; }
    }
  }
}

/* 动画 */
.fade-slide-enter-active, .fade-slide-leave-active { transition: all 0.3s ease; }
.fade-slide-enter-from, .fade-slide-leave-to { opacity: 0; transform: translateY(-10px); }
</style>