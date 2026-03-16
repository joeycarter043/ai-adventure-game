<template>
  <div class="op-tips">
    <div class="tips-title-row">
      <!-- 标题左侧的绿色勾图标 -->
      <img src="./assets/icon-check-green.png" alt="" class="title-icon" />
      <span class="tips-title">{{ $t('bill_template.op_tips_title') }}</span>
    </div>

    <ul class="tips-list">
      <!-- tip 1：红色叉 -->
      <li>
        <img src="./assets/icon-cross-red.png" alt="" class="tip-icon" />
        <span>{{ $t('bill_template.op_tips_1') }}</span>
      </li>
      <!-- tip 2：青色勾 -->
      <li>
        <img src="./assets/icon-check-cyan-1.png" alt="" class="tip-icon" />
        <span>{{ $t('bill_template.op_tips_2') }}</span>
      </li>
      <!-- tip 3：青色勾 -->
      <li>
        <img src="./assets/icon-check-cyan-2.png" alt="" class="tip-icon" />
        <span>{{ $t('bill_template.op_tips_3') }}</span>
      </li>
      <!-- tip 4：青色勾 -->
      <li>
        <img src="./assets/icon-check-cyan-3.png" alt="" class="tip-icon" />
        <span>{{ $t('bill_template.op_tips_4') }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.op-tips {
  padding: 28px 32px;
  background: rgba(7, 84, 140, 0.41);
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 1);
}

.tips-title-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.title-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

.tips-title {
  font-size: 22px;
  font-weight: 500;
  color: #fefefe;
  line-height: 1.4;
}

.tips-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;

  li {
    display: flex;
    align-items: center;
    gap: 10px;
    line-height: 40px;
    min-height: 40px;
  }
}

.tip-icon {
  width: 17px;
  height: 17px;
  flex-shrink: 0;
}

li span {
  font-size: 20px;
  color: #c4c4c4;
  line-height: 40px;
}
</style>
