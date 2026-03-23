<template>
  <section class="product-query-section">
    <h2 class="section-title">商品编码查询</h2>

    <div class="search-area">
      <div class="search-box-wrapper">
        <div class="search-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="rgba(255,255,255,0.5)" stroke-width="2"/>
            <path d="M16 16L20 20" stroke="rgba(255,255,255,0.5)" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        
        <BaseInput
          :model-value="searchKeyword"
          class="custom-base-input"
          placeholder="请输入商品名称或关键词进行搜索"
          @update:model-value="$emit('update:searchKeyword', $event)"
        />
      </div>
      
      <div class="category-dropdown">
        <BaseSelectDropdown
          :model-value="selectedCategory"
          :options="categoryOptions"
          placeholder="全部商品"
          @update:model-value="$emit('update:selectedCategory', $event)"
        />
      </div>
    </div>

    <div class="product-header">
      <h3 class="main-product-title">{{ productData.name }}</h3>
      <div class="info-row">
        <span class="product-hint">用于查询的商品名称</span>
        <span class="product-code-label">
          10位商品编码：{{ productData.code }}
        </span>
      </div>
    </div>

    <div class="detail-cards-container">
      <div class="detail-card">
        <h4 class="card-label">商品描述</h4>
        <p class="card-text">{{ productData.description }}</p>
      </div>
      <div class="detail-card">
        <h4 class="card-label">归类依据</h4>
        <p class="card-text">{{ productData.basis }}</p>
      </div>
      <div class="detail-card">
        <h4 class="card-label">注意事项</h4>
        <p class="card-text">{{ productData.notes }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

interface ProductData {
  name: string
  code: string
  description: string
  basis: string
  notes: string
}

defineProps<{
  searchKeyword: string
  selectedCategory: string | number | null
  categoryOptions: Array<{ value: any; label: string }>
  productData: ProductData
}>()

defineEmits(['update:searchKeyword', 'update:selectedCategory'])
</script>

<style scoped lang="scss">
$unified-height: 48px;

.product-query-section {
  background: rgba(40, 72, 122, 0.2);
  border: 1px solid #5A85BE;
  border-radius: 8px;
  padding: 32px 40px 45px 40px;
  color: #fff;
}

.section-title {
  font-size: 30px;
  font-weight: 700;
  margin: 0 0 25px 0;
}

.search-area {
  display: flex;
  gap: 15px;
  margin-bottom: 32px;
  align-items: flex-start; 
}

.search-box-wrapper {
  flex: 1;
  position: relative;
  height: $unified-height; /* 统一外层容器高度 */

  .search-icon {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    pointer-events: none;
    display: flex;
    align-items: center;
  }

  .custom-base-input {
    height: 100%;
    
    :deep(.base-input-wrapper) {
      height: $unified-height !important; /* 强行覆盖公共组件的 48px */
      border: 1px solid rgba(255, 255, 255, 0.15);
      background: rgba(40, 72, 122, 0.22);
      box-sizing: border-box; 
      display: flex;
      align-items: center;
    }

    :deep(.base-input-inner) {
      padding-left: 45px;
      font-size: 16px;
      height: 100%; /* 确保输入框填满 wrapper */
    }
  }
}

.category-dropdown {
  width: 200px;
  height: $unified-height;

  /* 核心：穿透到下拉组件的触发器 */
  :deep(.dropdown-trigger) {
    height: $unified-height !important; /* 强行覆盖公共组件的 54px */
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }

  :deep(.trigger-text) {
    line-height: normal; /* 防止行高撑开高度 */
  }
}

.product-header {
  margin-top: 32px;
  margin-bottom: 20px;

  .main-product-title {
    font-size: 30px;
    font-weight: 700;
    margin: 0 0 15px 0;
  }

  .info-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end; 
    padding-bottom: 8px;
  }

  .product-hint {
    font-size: 22px;
    color: rgba(212, 212, 212, 1);
  }

  .product-code-label {
    font-size: 18px;
    color: rgba(212, 212, 212, 1);
    
    .code-number {
      color: #00fffc;
      font-weight: bold;
    }
  }
}

.detail-cards-container {
  display: flex;
  gap: 14px;
  align-items: stretch;
}

.detail-card {
  flex: 1;
  background: linear-gradient(180deg, rgba(40, 72, 122, 0.4) 0%, rgba(22, 50, 84, 0.4) 100%);
  border: 1px solid #5A85BE;
  border-radius: 24px;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;

  .card-label {
    font-size: 16px;
    color: rgba(153, 153, 153, 1);
    margin: 0 0 15px 0;
  }

  .card-text {
    font-size: 18px;
    line-height: 28px;
    color: #fff;
    margin: 0;
  }
}
</style>