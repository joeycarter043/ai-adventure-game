<template>
  <div class="knowledge-learning">
    <SectionTitleBar 
      :style="{ '--title-bg-size': 'auto 100%' }"
      :title="t('home_page.knowledge_learning')">
      <template #right>
        <span class="view-all-link">{{ t('home_page.view_all') }}&nbsp;&nbsp;→</span>
      </template>
    </SectionTitleBar>

    <div class="categories-container">
      <div
        v-for="category in categories"
        :key="category.id"
        class="category-card"
        :class="{ highlighted: category.highlighted }"
      >
        <div class="category-content">
          <div class="icon-wrapper">
            <img :src="category.icon" alt="" class="category-icon" />
          </div>
          <div class="category-info">
            <span class="category-title">{{ category.title }}</span>
            <span class="category-count">
              {{ category.count }}{{ $t('home_page.knowledge_points') }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionTitleBar from '@/components/base/SectionTitleBar.vue'

const { t } = useI18n()

import iconSea from './assets/icon_shipping_by_sea.png'
import iconAir from './assets/icon_air_freight.png'
import iconCustoms from './assets//icon_customs_declaration.png'
import iconWarehouse from './assets//icon_time.png'

const categories = [
  {
    id: 1,
    title: t('home_page.learning_categories.sea_knowledge'),
    count: 12,
    icon: iconSea,
    highlighted: true
  },
  {
    id: 2,
    title: t('home_page.learning_categories.air_process'),
    count: 8,
    icon: iconAir,
    highlighted: false
  },
  {
    id: 3,
    title: t('home_page.learning_categories.customs_procedures'),
    count: 8,
    icon: iconCustoms,
    highlighted: false
  },
  {
    id: 4,
    title: t('home_page.learning_categories.warehouse_management'),
    count: 10,
    icon: iconWarehouse,
    highlighted: false
  }
]
</script>

<style scoped lang="scss">
.knowledge-learning {
  width: auto;
}

.view-all-link {
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  margin-right: 20px;
  font-family: 'SourceHanSansCN-Medium', sans-serif;
  white-space: nowrap;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover { opacity: 0.75; }
}

/* ─── 卡片容器优化 ─────────────────────────────────────── */
.categories-container {
  display: flex;
  gap: 20px;
  width: 100%;
  height: auto;
  padding: 20px 20px 0 20px;
  box-sizing: border-box;
}

.category-card {
  flex: 1;
  min-width: 0;
  height: 156px;
  border-radius: 14px;
  border: 1px solid #07548c;
  background-color: rgba(4, 56, 113, 0.34);
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  display: flex;
  align-items: center; /* 垂直居中内容 */

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 160, 233, 0.3);
  }

  &.highlighted {
    border-color: #00a0e9;
  }

  .category-content {
    display: flex;
    align-items: center;
    padding-left: 32px; /* 改用 padding 替代 margin-left */
    width: 100%;

    .icon-wrapper {
      width: 56px;
      height: 56px;
      border-radius: 12px;
      background: rgba(0, 100, 180, 0.35);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;

      .category-icon {
        width: 36px;
        height: 36px;
        object-fit: contain;
      }
    }

    .category-info {
      display: flex;
      flex-direction: column;
      margin-left: 19px;
      overflow: hidden; /* 防止文字溢出 */

      .category-title {
        text-shadow: 0px 0px 8px rgba(0, 210, 255, 0.88);
        color: #ffffff;
        font-size: 22px; /* 稍微缩小以适应更小的卡片 */
        font-weight: 500;
        font-family: 'SourceHanSansCN-Medium', sans-serif;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .category-count {
        text-shadow: 0px 0px 8px rgba(0, 210, 255, 0.88);
        color: #ffffff;
        font-size: 16px;
        font-weight: 500;
        font-family: 'SourceHanSansCN-Medium', sans-serif;
        white-space: nowrap;
      }
    }
  }
}

/* 窄屏适配 */
@media (max-width: 1440px) {
  .category-card .category-info .category-title {
    font-size: 18px;
  }
  .categories-container {
    gap: 12px;
  }
}
</style>