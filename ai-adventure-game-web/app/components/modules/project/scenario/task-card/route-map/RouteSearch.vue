<template>
  <section class="route-search-container">
    <div class="search-header">
      <h2 class="search-title">航线查询</h2>
      <div class="search-action">
        <MiniBtn :icon="searchIcon" @click="handleSearch">
          查询航线
        </MiniBtn>
      </div>
    </div>

    <div class="search-form">
      <div class="form-item">
        <label class="form-label">运输方式</label>
        <SelectDropdown v-model="formData.type" :options="transportOptions" placeholder="请选择" />
      </div>

      <div class="form-item">
        <label class="form-label">起运国</label>
        <SelectDropdown v-model="formData.origin" :options="countryOptions" placeholder="请选择" />
      </div>

      <div class="form-item">
        <label class="form-label">目的国</label>
        <SelectDropdown v-model="formData.destination" :options="countryOptions" placeholder="请选择" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import MiniBtn from '@/components/base/button/MiniBtn.vue'
import SelectDropdown from '@/components/base/SelectDropdown.vue'

const searchIcon = '/images/icons/search.svg'

// 响应式表单数据
const formData = reactive({
  type: 'sea',
  origin: 'china',
  destination: 'korea'
})

// 下拉菜单选项配置
const transportOptions = [
  { label: '海运', value: 'sea' },
  { label: '空运', value: 'air' }
]

const countryOptions = [
  { label: '中国', value: 'china' },
  { label: '美国', value: 'usa' },
  { label: '韩国', value: 'korea' },
  { label: '日本', value: 'japan' }
]

const emit = defineEmits(['search'])

const handleSearch = () => {
  emit('search', { ...formData })
}
</script>

<style scoped lang="scss">
.route-search-container {
  width: 100%;
  padding: 32px 40px 45px 40px;
  border: 1px solid #5A85BE;
  border-radius: 8px;
  box-sizing: border-box;
}

.search-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;

  .search-title {
    margin: 0;
    font-size: 30px;
    font-weight: 700;
    color: #ffffff;
    line-height: 1;
  }
}

.search-form {
  display: flex;
  gap: 26px;
  width: 100%;

  .form-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;

    .form-label {
      font-size: 16px;
      color: rgba(181, 181, 181, 1);
      padding-left: 2px;
    }
  }
}

@media screen and (max-width: 1440px) {
  .route-search-container {
    padding: 24px 40px;
  }

  .search-header .search-title {
    font-size: 24px;
  }
}
</style>