<template>
  <section class="product-query-section">
    <!-- 标题 -->
    <h2 class="section-title">{{ $t('classification_manual.product_query.title') }}</h2>

    <!-- 搜索区域 -->
    <div class="search-area">
      <div class="search-box">
        <div class="search-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="#999" stroke-width="2"/>
            <path d="M16 16L20 20" stroke="#999" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <span class="search-placeholder">{{ $t('classification_manual.product_query.search_placeholder') }}</span>
      </div>
      
      <!-- 分类下拉菜单 -->
      <div class="category-dropdown">
        <BaseSelectDropdown
          v-model="selectedCategory"
          :options="categoryOptions"
          :placeholder="$t('classification_manual.product_query.all_categories')"
          @change="onCategoryChange"
        />
      </div>
    </div>

    <!-- 商品信息区域 -->
    <div class="product-info">
      <div class="product-name-section">
        <h3 class="product-name">{{ $t('classification_manual.product_query.product_name') }}</h3>
        <p class="product-name-hint">{{ $t('classification_manual.product_query.product_name_hint') }}</p>
      </div>
      <div class="product-code-section">
        <p class="product-code">{{ $t('classification_manual.product_query.product_code') }}</p>
      </div>
    </div>

    <!-- 详情卡片区域 -->
    <div class="detail-cards">
      <!-- 商品描述卡片 -->
      <div class="detail-card">
        <h4 class="detail-card-title">{{ $t('classification_manual.product_query.description_title') }}</h4>
        <p class="detail-card-content">{{ $t('classification_manual.product_query.description_content') }}</p>
      </div>

      <!-- 归类依据卡片 -->
      <div class="detail-card">
        <h4 class="detail-card-title">{{ $t('classification_manual.product_query.classification_basis') }}</h4>
        <p class="detail-card-content">{{ $t('classification_manual.product_query.classification_basis_content') }}</p>
      </div>

      <!-- 注意事项卡片 -->
      <div class="detail-card note-card">
        <div class="note-header">
          <span class="detail-card-title">{{ $t('classification_manual.product_query.notes_title') }}</span>
        </div>
        <div class="note-content">
          <p class="detail-card-content">{{ $t('classification_manual.product_query.notes_content') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseSelectDropdown from '@/components/base/BaseSelectDropdown.vue'
const { t } = useI18n()

// 分类选项
const categoryOptions = computed(() => [
  { value: 'all', label: t('classification_manual.product_query.all_categories') },
  { value: 'electronics', label: t('classification_manual.categories.electronics') },
  { value: 'clothing', label: t('classification_manual.categories.clothing') },
  { value: 'food', label: t('classification_manual.categories.food') },
  { value: 'machinery', label: t('classification_manual.categories.machinery') },
  { value: 'chemicals', label: t('classification_manual.categories.chemicals') }
])

// 选中的分类
const selectedCategory = ref<string | number | null>('all')

// 分类变更处理
const onCategoryChange = (value: any) => {
  console.log('Selected category:', value)
}
</script>

<style scoped lang="scss">
.product-query-section {
  background: linear-gradient(
    rgba(40, 72, 122, 0.4) 0%,
    rgba(40, 72, 122, 0.4) 0%,
    rgba(22, 50, 84, 0.4) 100%,
    rgba(22, 50, 84, 0.4) 100%
  );
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding-bottom: 45px;
  position: relative;
}

.section-title {
  font-size: 30px;
  font-weight: 700;
  color: #fff;
  line-height: 24px;
  margin: 32px 0 0 3.5%;
}

.search-area {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 89%;
  min-height: 54px;
  margin: 25px 0 0 3.5%;
  gap: 15px;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 13px;
  background: linear-gradient(
    rgba(40, 72, 122, 0.4) 0%,
    rgba(40, 72, 122, 0.4) 0%,
    rgba(22, 50, 84, 0.4) 100%,
    rgba(22, 50, 84, 0.4) 100%
  );
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  flex: 1;
  min-height: 53px;
  padding: 0 10px;
  box-sizing: border-box;
}

.search-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.search-placeholder {
  font-size: 16px;
  color: rgba(153, 153, 153, 1);
  line-height: 24px;
}

.category-dropdown {
  width: 200px;
  flex-shrink: 0;
}

.product-info {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 89%;
  min-height: 97px;
  margin: 1px 0 0 3.4%;
}

.product-name-section {
  display: flex;
  flex-direction: column;
  margin-top: 32px;
}

.product-name {
  font-size: 30px;
  font-weight: 700;
  color: #fff;
  line-height: 24px;
  margin: 0;
}

.product-name-hint {
  font-size: 22px;
  font-weight: 500;
  color: rgba(212, 212, 212, 1);
  line-height: 22px;
  margin: 15px 0 0 0;
}

.product-code-section {
  position: relative;
  width: 243px;
  min-height: 97px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
}

.code-label {
  background-color: rgba(7, 84, 140, 0.66);
  width: 160px;
  height: 44px;
  border: 1px solid rgba(7, 84, 140, 1);
}

.product-code {
  font-size: 18px;
  font-weight: 500;
  color: rgba(212, 212, 212, 1);
  line-height: 18px;
  margin: 35px 0 0 0;
  white-space: nowrap;
}

.code-value {
  position: absolute;
  left: 83px;
  top: 44px;
  width: 160px;
  height: 44px;
  background-color: rgba(7, 84, 140, 0.66);
  border: 1px solid rgba(0, 255, 252, 1);
}

.detail-cards {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  width: 89%;
  margin: 19px 0 0 3.4%;
  flex-wrap: wrap;
}

.detail-card {
  background: linear-gradient(
    rgba(40, 72, 122, 0.4) 0%,
    rgba(40, 72, 122, 0.4) 0%,
    rgba(22, 50, 84, 0.4) 100%,
    rgba(22, 50, 84, 0.4) 100%
  );
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  flex: 1;
  min-width: 280px;
  max-width: 528px;
  min-height: 136px;
  padding: 26px 13px 33px 13px;
  box-sizing: border-box;
}

.note-card {
  position: relative;
}

.note-header {
  margin-bottom: 15px;
}

.note-content {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.note-content .detail-card-content {
  flex: 1;
}

.note-badge {
  width: 160px;
  height: 44px;
  background-color: rgba(7, 84, 140, 0.66);
  border: 1px solid rgba(7, 84, 140, 1);
  flex-shrink: 0;
}

.detail-card-title {
  font-size: 16px;
  color: rgba(153, 153, 153, 1);
  line-height: 24px;
  margin: 0;
}

.detail-card-content {
  font-size: 18px;
  color: #fff;
  line-height: 28px;
  margin: 0;
}
</style>
