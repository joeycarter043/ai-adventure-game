<template>
  <div class="issue-section">
    <!-- ── 第一行标题：签发地点和日期（左） + 正本份数（右） ── -->
    <div class="header-row">
      <span class="section-label">{{ $t('bill_template.issue_section') }}</span>
      <span class="section-label originals-title">{{ $t('bill_template.originals_count') }}</span>
    </div>

    <!-- ── 第二行副标签：地点 / 时间（各占左半） | 提单（右半） ── -->
    <div class="form-row">
      <!-- 左侧：地点 + 时间 各占 ~50% -->
      <div class="left-group">
        <div class="field-col">
          <span class="sub-label">{{ $t('bill_template.issue_place_label') }}</span>
          <BaseInput 
            v-model="form.issuePlace" 
            :placeholder="$t('bill_template.issue_place_placeholder')" 
          />
        </div>
        <div class="field-col">
          <span class="sub-label">{{ $t('bill_template.issue_time_label') }}</span>
          <BaseDatePicker 
            v-model="form.issueDate" 
            :placeholder="$t('bill_template.issue_date_picker')" 
          />
        </div>
      </div>

      <!-- 右侧：提单输入框（短） -->
      <div class="right-group">
        <span class="sub-label">{{ $t('bill_template.originals_label') }}</span>
        <div class="originals-group">
          <BaseInput 
            v-model="form.originalsCount" 
            type="number" 
            min="1" 
            max="9" 
            class="originals-input-box"
          />
          <span class="originals-suffix">{{ $t('bill_template.originals_suffix') }}</span>
        </div>
      </div>
    </div>

    <!-- ── 承运人签字盖章：图片上传（文字在框内上层） ── -->
    <div class="signature-area">
      <div
        class="upload-box"
        :class="{ 'has-image': previewUrl, 'is-dragging': isDragging }"
        @click="triggerFileInput"
        @dragover.prevent="isDragging = true"
        @dragleave.prevent="isDragging = false"
        @drop.prevent="onDrop"
      >
        <!-- 文字叠层（始终在顶部，图片在底层） -->
        <div class="stamp-labels">
          <span class="auth-text">{{ $t('bill_template.authorized_signature') }}</span>
          <span class="carrier-text">{{ $t('bill_template.carrier_stamp') }}</span>
        </div>

        <!-- 背景预览图 -->
        <img v-if="previewUrl" :src="previewUrl" alt="signature" class="preview-img" />

        <!-- 无图时的上传提示 -->
        <div v-if="!previewUrl" class="upload-hint-area">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" class="upload-icon">
            <path d="M14 4v16M6 12l8-8 8 8" stroke="#555" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 22v1.5A1.5 1.5 0 004.5 25h19a1.5 1.5 0 001.5-1.5V22" stroke="#555" stroke-width="1.8" stroke-linecap="round"/>
          </svg>
          <span class="upload-hint-text">{{ $t('bill_template.upload_hint') }}</span>
        </div>

        <!-- 删除按钮 -->
        <button v-if="previewUrl" class="remove-btn" @click.stop="clearImage" :title="$t('bill_template.upload_remove')">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 1l10 10M11 1L1 11" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
      </div>

      <input
        ref="fileInputRef"
        type="file"
        accept="image/*"
        class="file-input"
        @change="onFileChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const form = reactive({
  issuePlace: '',
  issueDate: '',
  originalsCount: 3,
})

const previewUrl = ref<string | null>(null)
const isDragging = ref(false)
const fileInputRef = ref<HTMLInputElement | null>(null)

function triggerFileInput() {
  fileInputRef.value?.click()
}

function onFileChange(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (file) loadPreview(file)
}

function onDrop(e: DragEvent) {
  isDragging.value = false
  const file = e.dataTransfer?.files?.[0]
  if (file && file.type.startsWith('image/')) loadPreview(file)
}

function loadPreview(file: File) {
  const reader = new FileReader()
  reader.onload = (ev) => {
    previewUrl.value = ev.target?.result as string
  }
  reader.readAsDataURL(file)
}

function clearImage() {
  previewUrl.value = null
  if (fileInputRef.value) fileInputRef.value.value = ''
}
</script>

<style scoped lang="scss">
.issue-section {
  padding: 0 44px 40px;
  margin-top: 2px;
}

/* ─── 标题行 ─────────────────────────────────────── */
.header-row {
  display: flex;
  align-items: flex-end;
  padding-top: 28px;
  margin-bottom: 16px;
}

.section-label {
  flex: 1;
  font-size: 24px;
  font-weight: 500;
  color: #d4d4d4;
  line-height: 24px;
}

/* "正本份数"标题右对齐到右半列 */
.originals-title {
  margin-left: auto;
}

/* ─── 表单行：左(地点+时间) | 右(提单) ───────────── */
.form-row {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

/* 左半：地点 + 时间，各占一半 */
.left-group {
  flex: 1;
  display: flex;
  gap: 20px;
  > .field-col { flex: 1; }
}

/* 右半：提单 */
.right-group {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.field-col {
  display: flex;
  flex-direction: column;
}

.sub-label {
  font-size: 16px;
  color: #b5b5b5;
  line-height: 24px;
  margin-bottom: 10px;
}

/* 正本份数：短输入框 + 后缀文字 */
.originals-group {
  display: flex;
  align-items: center;
  gap: 12px;
}

.originals-input {
  width: 90px;
  text-align: center;
  flex-shrink: 0;
}

.originals-suffix {
  font-size: 18px;
  color: #999;
  line-height: 24px;
  white-space: nowrap;
}

/* ─── 上传区域 ───────────────────────────────────── */
.signature-area {
  margin-top: 28px;
  display: flex;
  justify-content: flex-end;
}

.upload-box {
  position: relative;
  width: 460px;
  height: 200px;
  border-radius: 8px;
  border: 1px dashed rgba(153, 153, 153, 0.7);
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
  overflow: hidden;

  &:hover {
    border-color: rgba(0, 174, 255, 0.5);
    background: rgba(40, 72, 122, 0.1);
  }

  &.is-dragging {
    border-color: rgba(0, 255, 252, 0.7);
    background: rgba(0, 174, 255, 0.08);
  }

  &.has-image {
    border-style: solid;
    border-color: rgba(0, 174, 255, 0.3);
  }
}

/* 文字叠层：始终浮在图片上方 */
.stamp-labels {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  pointer-events: none;
}

.auth-text {
  font-size: 18px;
  font-weight: 500;
  color: rgba(153, 153, 153, 0.9);
  line-height: 1.3;
  text-align: center;
  letter-spacing: 0.5px;
}

.carrier-text {
  font-size: 16px;
  font-weight: 500;
  color: rgba(153, 153, 153, 0.8);
  line-height: 1.3;
  text-align: center;
}

/* 底层预览图 */
.preview-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 1;
}

/* 无图时的上传提示（图标+文字）*/
.upload-hint-area {
  position: absolute;
  bottom: 16px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  z-index: 2;
  pointer-events: none;
}

.upload-icon { opacity: 0.4; }

.upload-hint-text {
  font-size: 12px;
  color: #555;
  text-align: center;
  white-space: pre-line; /* 支持 \n 换行 */
}

/* 删除按钮 */
.remove-btn {
  position: absolute;
  top: 6px;
  right: 6px;
  z-index: 3;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.55);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover { background: rgba(180, 40, 40, 0.8); }
}

.file-input { display: none; }
</style>
