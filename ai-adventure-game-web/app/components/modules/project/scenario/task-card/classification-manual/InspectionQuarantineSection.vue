<template>
  <section class="inspection-section">
    <!-- 标题 -->
    <div class="section-title-wrapper">
      <h2 class="section-title">{{ $t('classification_manual.inspection.title') }}</h2>
    </div>

    <!-- 两列布局 -->
    <div class="inspection-layout">
      <!-- 左侧：检验检疫详情 -->
      <div class="inspection-left">
        <!-- 进口检验检疫标题 -->
        <div class="section-subtitle">
          <div class="subtitle-icon">
            <svg width="26" height="30" viewBox="0 0 26 30" fill="none">
              <path d="M13 0L26 7V23L13 30L0 23V7L13 0Z" stroke="currentColor" stroke-width="2" fill="none"/>
              <path d="M13 8L20 12V22L13 26L6 22V12L13 8Z" fill="currentColor"/>
            </svg>
          </div>
          <span class="subtitle-text">{{ $t('classification_manual.inspection.import_inspection') }}</span>
        </div>

        <!-- 检验检疫项目列表 -->
        <div class="inspection-items">
          <div class="inspection-item">
            <div class="item-icon">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="10" stroke="currentColor" stroke-width="2"/>
                <path d="M7 11L10 14L15 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="item-content">
              <div class="item-header">
                <span class="item-title">{{ $t('classification_manual.inspection.ccc_certification') }}</span>
              </div>
              <p class="item-description">{{ $t('classification_manual.inspection.ccc_description') }}</p>
            </div>
          </div>

          <div class="inspection-item">
            <div class="item-icon">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="2" y="4" width="18" height="14" rx="2" stroke="currentColor" stroke-width="2"/>
                <path d="M2 8H20" stroke="currentColor" stroke-width="2"/>
                <path d="M6 12H10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="item-content">
              <div class="item-header">
                <span class="item-title">{{ $t('classification_manual.inspection.import_inspection_cert') }}</span>
              </div>
              <p class="item-description">{{ $t('classification_manual.inspection.import_inspection_desc') }}</p>
            </div>
          </div>

          <div class="inspection-item">
            <div class="item-icon">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M11 2L3 6V12C3 16.5 6.5 20.5 11 22C15.5 20.5 19 16.5 19 12V6L11 2Z" stroke="currentColor" stroke-width="2"/>
                <path d="M8 11L10 13L14 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="item-content">
              <div class="item-header">
                <span class="item-title">{{ $t('classification_manual.inspection.plant_quarantine') }}</span>
              </div>
              <p class="item-description">{{ $t('classification_manual.inspection.plant_quarantine_desc') }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧：所需证件清单 -->
      <div class="inspection-right">
        <!-- 标题 -->
        <div class="section-subtitle">
          <div class="subtitle-icon">
            <svg width="29" height="34" viewBox="0 0 29 34" fill="none">
              <rect x="2" y="2" width="25" height="30" rx="3" stroke="currentColor" stroke-width="2"/>
              <path d="M8 10H21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <path d="M8 16H21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <path d="M8 22H15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <span class="subtitle-text">{{ $t('classification_manual.inspection.documents_list') }}</span>
        </div>

        <!-- 证件列表 -->
        <div class="documents-list">
          <div class="document-item">
            <span class="document-name">{{ $t('classification_manual.inspection.ccc_certificate') }}</span>
            <div class="document-icon"></div>
          </div>
          <div class="document-item">
            <span class="document-name">{{ $t('classification_manual.inspection.certificate_origin') }}</span>
            <div class="document-badge">
              <span class="badge-text">{{ $t('classification_manual.inspection.required') }}</span>
            </div>
          </div>
          <div class="document-item">
            <span class="document-name">{{ $t('classification_manual.inspection.commercial_invoice') }}</span>
            <div class="document-badge">
              <span class="badge-text">{{ $t('classification_manual.inspection.required') }}</span>
            </div>
          </div>
          <div class="document-item">
            <span class="document-name">{{ $t('classification_manual.inspection.packing_list') }}</span>
            <div class="document-badge">
              <span class="badge-text">{{ $t('classification_manual.inspection.required') }}</span>
            </div>
          </div>
          <div class="document-item">
            <span class="document-name">{{ $t('classification_manual.inspection.import_license') }}</span>
            <div class="document-icon"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// 组件逻辑
</script>

<style scoped lang="scss">
.inspection-section {
  width: 100%;
  min-height: 400px;
  margin-top: 36px;
  position: relative;
  padding-bottom: 47px;
  box-sizing: border-box;
}

.section-title-wrapper {
  display: flex;
  align-items: center;
}

.section-title {
  font-size: 30px;
  font-weight: 700;
  color: #fff;
  line-height: 24px;
  margin: 0 0 30px 3.5%;
}

// 两列布局容器
.inspection-layout {
  display: flex;
  gap: 32px;
  width: 93%;
  margin: 0 0 0 3.5%;
  flex-wrap: wrap;
}

// 左侧列
.inspection-left {
  flex: 1;
  min-width: 320px;
  max-width: 40%;
}

// 右侧列
.inspection-right {
  flex: 1.5;
  min-width: 400px;
  max-width: 60%;
}

// 小标题样式
.section-subtitle {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.subtitle-icon {
  width: 26px;
  height: 30px;
  color: rgba(0, 255, 252, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.subtitle-text {
  font-size: 24px;
  font-weight: 500;
  color: #fff;
  line-height: 24px;
  white-space: nowrap;
}

// 检验检疫项目列表
.inspection-items {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.inspection-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;
  background: linear-gradient(
    rgba(40, 72, 122, 0.4) 0%,
    rgba(40, 72, 122, 0.4) 0%,
    rgba(22, 50, 84, 0.4) 100%,
    rgba(22, 50, 84, 0.4) 100%
  );
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.item-icon {
  width: 22px;
  height: 22px;
  color: rgba(0, 255, 252, 0.8);
  flex-shrink: 0;
}

.item-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.item-header {
  display: flex;
  align-items: center;
  gap: 12px;
}

.item-title {
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  line-height: 24px;
}

.item-description {
  font-size: 16px;
  color: rgba(181, 181, 181, 1);
  line-height: 24px;
  margin: 0;
}

// 证件列表
.documents-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.document-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(
    rgba(40, 72, 122, 0.4) 0%,
    rgba(40, 72, 122, 0.4) 0%,
    rgba(22, 50, 84, 0.4) 100%,
    rgba(22, 50, 84, 0.4) 100%
  );
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 14px 16px;
  box-sizing: border-box;
  gap: 16px;
}

.document-name {
  font-size: 18px;
  color: #fff;
  line-height: 24px;
  flex: 1;
}

.document-icon {
  width: 55px;
  height: 28px;
  flex-shrink: 0;
}

.document-badge {
  border-radius: 13px;
  height: 28px;
  border: 1px solid rgba(0, 255, 30, 1);
  width: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.badge-text {
  font-size: 14px;
  color: rgba(0, 255, 24, 1);
  line-height: 20px;
}
</style>
