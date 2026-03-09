<script setup lang="ts">
const { t } = useI18n()

const updates = ref([
  {
    id: 1,
    title: t('home_page.updates[0].title'),
    description: t('home_page.updates[0].description'),
    time: t('home_page.updates[0].time'),
    type: 'new'
  },
  {
    id: 2,
    title: t('home_page.updates[1].title'),
    description: t('home_page.updates[1].description'),
    time: t('home_page.updates[1].time'),
    type: 'optimization'
  },
  {
    id: 3,
    title: t('home_page.updates[2].title'),
    description: t('home_page.updates[2].description'),
    time: t('home_page.updates[2].time'),
    type: 'update'
  }
])

const getTypeColor = (type: string) => {
  switch (type) {
    case 'new':
      return '#ba00ff'
    case 'optimization':
      return '#00ff08'
    case 'update':
      return '#ffde00'
    default:
      return '#ba00ff'
  }
}
</script>

<template>
  <div class="latest-updates">
    <div class="section-header">
      <div class="title-bar"></div>
      <div class="title-wrapper">
        <span class="section-title">{{ t('home_page.latest_updates') }}</span>
      </div>
      <span class="view-all-link">{{ t('home_page.view_all') }} &nbsp;&nbsp;→</span>
    </div>

    <div class="updates-container">
      <div
        v-for="(update, index) in updates"
        :key="update.id"
        class="update-item"
      >
        <div class="update-content" :class="{ 'first-item': index === 0 }">
          <div class="update-info">
            <div class="update-header">
              <div
                class="type-indicator"
                :style="{ backgroundColor: getTypeColor(update.type) }"
              ></div>
              <div class="text-content">
                <span class="update-title">{{ update.title }}</span>
                <span class="update-description">{{ update.description }}</span>
              </div>
            </div>
            <span class="update-time">{{ update.time }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.latest-updates {
  margin: 28px 0 0 39px;
}

.section-header {
  display: flex;
  align-items: center;
  width: 1739px;
  height: 35px;

  .title-bar {
    background-color: #17a0fc;
    width: 9px;
    height: 35px;
    border-radius: 2px;
  }

  .title-wrapper {
    margin-left: 5px;

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
      margin: 7px 0 0 11px;
    }
  }

  .view-all-link {
    color: #ffffff;
    font-size: 18px;
    font-weight: 500;
    font-family: 'SourceHanSansCN-Medium', sans-serif;
    white-space: nowrap;
    line-height: 28px;
    margin: 9px 0 0 1221px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
}

.updates-container {
  width: 1681px;
  height: 491px;
  border: 1px solid #07548c;
  background-color: rgba(4, 56, 113, 0);
  margin: 37px 0 671px 104px;
  border-radius: 14px;
}

.update-item {
  .update-content {
    background-color: rgba(4, 56, 113, 0.34);
    border-radius: 14px;
    border: 1px solid #00a0e9;
    width: 1599px;
    height: 140px;
    margin: 43px 0 0 41px;
    transition: all 0.3s ease;

    &:hover {
      background-color: rgba(4, 56, 113, 0.5);
      border-color: #17a0fc;
    }

    &.first-item {
      margin-top: 43px;
    }

    &:not(:first-child) {
      margin-top: 31px;
    }

    .update-info {
      .update-header {
        display: flex;
        align-items: flex-start;
        width: 496px;
        height: 57px;
        margin: 25px 0 0 26px;

        .type-indicator {
          border-radius: 50%;
          width: 16px;
          height: 16px;
          margin-top: 5px;
          box-shadow: 0 0 8px currentColor;
        }

        .text-content {
          display: flex;
          flex-direction: column;
          width: 463px;
          height: 57px;
          margin-left: 16px;

          .update-title {
            color: #ffffff;
            font-size: 24px;
            font-weight: 500;
            font-family: 'SourceHanSansCN-Medium', sans-serif;
            white-space: nowrap;
            line-height: 24px;
          }

          .update-description {
            text-shadow: 0px 0px 8px rgba(0, 210, 255, 0.88);
            color: #dddddd;
            font-size: 18px;
            font-weight: 500;
            font-family: 'SourceHanSansCN-Medium', sans-serif;
            white-space: nowrap;
            line-height: 18px;
            margin-top: 15px;
          }
        }
      }

      .update-time {
        text-shadow: 0px 0px 8px rgba(0, 210, 255, 0.88);
        color: #999999;
        font-size: 16px;
        font-weight: 500;
        font-family: 'SourceHanSansCN-Medium', sans-serif;
        white-space: nowrap;
        line-height: 16px;
        margin: 19px 0 23px 59px;
      }
    }
  }
}
</style>
