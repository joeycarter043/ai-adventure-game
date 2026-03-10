<script setup lang="ts">
const { t } = useI18n()

const categories = ref([
  {
    id: 1,
    title: t('home_page.learning_categories.sea_knowledge'),
    count: 12,
    icon: '@/app/pages/home/assets/slices/icon_shipping_by_sea.png'
  },
  {
    id: 2,
    title: t('home_page.learning_categories.air_process'),
    count: 8,
    icon: '@/app/pages/home/assets/slices/icon_air_freight.png'
  },
  {
    id: 3,
    title: t('home_page.learning_categories.customs_procedures'),
    count: 8,
    icon: '@/app/pages/home/assets/slices/icon_customs_declaration.png'
  },
  {
    id: 4,
    title: t('home_page.learning_categories.warehouse_management'),
    count: 10,
    icon: '@/app/pages/home/assets/slices/icon_time.png'
  }
])
</script>

<template>
  <div class="knowledge-learning">
    <div class="section-header">
      <div class="title-wrapper">
        <div class="title-bar"></div>
        <span class="section-title">{{ t('home_page.knowledge_learning') }}</span>
      </div>
      <span class="view-all-link">{{ t('home_page.view_all') }} &nbsp;&nbsp;→</span>
    </div>

    <div class="categories-container">
      <div
        v-for="category in categories"
        :key="category.id"
        class="category-card"
        :class="{ 'first-card': category.id === 1 }"
      >
        <div class="category-content">
          <div class="category-icon">
            <img :src="category.icon" alt="" />
          </div>
          <div class="category-info">
            <span class="category-title">{{ category.title }}</span>
            <span class="category-count">{{ category.count }} {{ $t('home_page.knowledge_points') }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.knowledge-learning {
  margin: 29px 0 0 39px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1739px;
  height: 35px;

  .title-wrapper {
    display: flex;
    align-items: center;

    .title-bar {
      background-color: #17a0fc;
      width: 9px;
      height: 35px;
      border-radius: 2px;
    }

    .section-title {
      background: linear-gradient(180deg, #ffffff 0%, #ffffff 0%, #acdbff 98.535156%, #acdbff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      width: 92px;
      height: 21px;
      color: #000000;
      font-size: 22px;
      white-space: nowrap;
      line-height: 25px;
      margin: 8px 0 0 25px;
    }
  }

  .view-all-link {
    color: #ffffff;
    font-size: 18px;
    font-weight: 500;
    font-family: 'SourceHanSansCN-Medium', sans-serif;
    white-space: nowrap;
    line-height: 28px;
    margin-top: 9px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
}

.categories-container {
  display: flex;
  justify-content: space-between;
  width: 1681px;
  height: 156px;
  margin: 26px 0 0 105px;
}

.category-card {
  width: 364px;
  height: 156px;
  border-radius: 14px;
  border: 1px solid #07548c;
  background-color: rgba(4, 56, 113, 0.34);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 160, 233, 0.3);
  }

  &.first-card {
    border-color: #00a0e9;
  }

  .category-content {
    display: flex;
    align-items: center;
    width: 171px;
    height: 59px;
    margin: 49px 0 0 32px;

    .category-icon {
      width: 56px;
      height: 56px;
      border-radius: 12px;
      background-color: rgba(4, 56, 113, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;

      img {
        width: 28px;
        height: 28px;
        object-fit: contain;
      }
    }

    .category-info {
      display: flex;
      flex-direction: column;
      width: 96px;
      height: 59px;
      margin-left: 16px;

      .category-title {
        text-shadow: 0px 0px 8px rgba(0, 210, 255, 0.88);
        color: #ffffff;
        font-size: 24px;
        font-weight: 500;
        font-family: 'SourceHanSansCN-Medium', sans-serif;
        white-space: nowrap;
        line-height: 24px;
      }

      .category-count {
        text-shadow: 0px 0px 8px rgba(0, 210, 255, 0.88);
        color: #ffffff;
        font-size: 16px;
        font-weight: 500;
        font-family: 'SourceHanSansCN-Medium', sans-serif;
        white-space: nowrap;
        line-height: 16px;
        margin-top: 20px;
      }
    }
  }
}
</style>
