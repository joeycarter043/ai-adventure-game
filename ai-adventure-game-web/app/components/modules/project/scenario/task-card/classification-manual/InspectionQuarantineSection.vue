<template>
  <section class="inspection-section">
    <div class="section-container">
      <div class="section-title-wrapper">
        <h2 class="section-title">{{ $t('classification_manual.inspection.title') }}</h2>
      </div>

      <div class="inspection-layout">
        <div class="inspection-left">
          <div class="section-subtitle">
            <div class="subtitle-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#00FFFC" stroke-width="2"/>
                <path d="M8 12L11 15L16 9" stroke="#00FFFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <span class="subtitle-text">{{ $t('classification_manual.inspection.import_inspection') }}</span>
          </div>

          <div class="inspection-items" v-if="data?.items?.length">
            <div 
              v-for="(item, index) in data.items" 
              :key="index" 
              class="inspection-item"
              :class="item.status"
            >
              <div class="status-indicator">
                <div v-if="item.status === 'active'" class="dot"></div>
                <div v-else class="circle-x"></div>
              </div>
              <div class="item-content">
                <span class="item-title">{{ item.title }}</span>
                <p class="item-description">{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="inspection-right">
          <div class="section-subtitle">
            <div class="subtitle-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="#00FFFC" stroke-width="2"/>
                <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#00FFFC" stroke-width="2"/>
                <path d="M9 12H15" stroke="#00FFFC" stroke-width="2" stroke-linecap="round"/>
                <path d="M9 16H13" stroke="#00FFFC" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <span class="subtitle-text">{{ $t('classification_manual.inspection.documents_list') }}</span>
          </div>

          <div class="documents-list" v-if="data?.documents?.length">
            <div 
              v-for="(doc, i) in data.documents" 
              :key="i" 
              class="document-row"
              :class="{ 'is-conditional': doc.status === 'conditional' }"
            >
              <span class="doc-name">{{ doc.name }}</span>
              <div class="doc-status-tag" :class="doc.status">
                {{ doc.label }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// 定义内部接口
interface InspectionItem {
  title: string
  desc: string
  status: 'active' | 'disabled'
}

interface DocumentItem {
  name: string
  status: 'required' | 'conditional'
  label: string
}

interface InspectionData {
  items: InspectionItem[]
  documents: DocumentItem[]
}

// 接收外部传入的数据
defineProps<{
  data: InspectionData
}>()
</script>

<style scoped lang="scss">
.inspection-section {
  width: 100%;
  margin-top: 40px;
}

/* 外层边框容器 - 统一设计稿风格 */
.section-container {
  background: rgba(40, 72, 122, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  padding: 32px 3.5% 45px 3.5%;
}

.section-title {
  font-size: 30px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 32px 0;
}

.inspection-layout {
  display: flex;
  gap: 60px; 
  align-items: flex-start;
}

.inspection-left {
  flex: 30%;
}

.inspection-right {
  flex: 70%;
}

.section-subtitle {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;

  .subtitle-text {
    font-size: 24px;
    color: #fff;
    font-weight: 500;
  }
}

/* 左侧列表项样式 */
.inspection-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.inspection-item {
  display: flex;
  gap: 15px;
  align-items: flex-start;

  &.disabled {
    opacity: 0.4;
    .item-title { color: #aaa; }
  }

  .status-indicator {
    padding-top: 6px;
    flex-shrink: 0;
    
    .dot {
      width: 12px;
      height: 12px;
      background: #00FFFC;
      border-radius: 50%;
      box-shadow: 0 0 10px rgba(0, 255, 252, 0.8);
    }
    
    .circle-x {
      width: 14px;
      height: 14px;
      border: 2px solid #ff4d4f;
      border-radius: 50%;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        width: 8px;
        height: 2px;
        background: #ff4d4f;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
      }
      &::before {
        content: '';
        position: absolute;
        width: 8px;
        height: 2px;
        background: #ff4d4f;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
  }

  .item-title {
    font-size: 18px;
    color: #fff;
    font-weight: 500;
    margin-bottom: 4px;
    display: block;
  }

  .item-description {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.5;
    margin: 0;
  }
}

/* 右侧证件清单行样式 */
.documents-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.document-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;

  .doc-name {
    font-size: 16px;
    color: #fff;
  }

  .doc-status-tag {
    font-size: 12px;
    padding: 2px 14px;
    border-radius: 20px;
    
    &.required {
      color: #00ff1e;
      border: 1px solid #00ff1e;
      background: rgba(0, 255, 30, 0.1);
    }
    
    &.conditional {
      color: #ffcc00;
      border: 1px solid #ffcc00;
      background: rgba(255, 204, 0, 0.1);
    }
  }

  &.is-conditional {
    background: transparent;
    border-style: dashed;
  }
}
</style>