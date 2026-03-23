<template>
  <div class="op-tips">
    <div class="tips-title-row">
      <!-- 标题左侧的绿色勾图标 -->
      <img src="./assets/icon-check-green.png" alt="" class="title-icon" />
      <span class="tips-title">操作提示</span>
    </div>

    <ul class="tips-list">
      <!-- tip 1：红色叉 -->
      <li>
        <img src="./assets/icon-cross-red.png" alt="" class="tip-icon" />
        <span>请确保所有必填项都已填写完整，特别是货物描述和数量信息</span>
      </li>
      <!-- tip 2：青色勾 -->
      <li>
        <img src="./assets/icon-check-cyan-1.png" alt="" class="tip-icon" />
        <span>运费支付方式选择"预付"或"到付"将影响后续的结算流程</span>
      </li>
      <!-- tip 3：青色勾 -->
      <li>
        <img src="./assets/icon-check-cyan-2.png" alt="" class="tip-icon" />
        <span>提单一旦提交，将生成正式的运输合同，请仔细核对信息</span>
      </li>
      <!-- tip 4：青色勾 -->
      <li>
        <img src="./assets/icon-check-cyan-3.png" alt="" class="tip-icon" />
        <span>如有疑问，可以保存草稿后咨询老师或查看相关学习资料</span>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.op-tips {
  padding: 28px 32px;
  background: rgba(40, 72, 122, 0.2);
  border-radius: 8px;
  border: 1px solid #5A85BE;
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
