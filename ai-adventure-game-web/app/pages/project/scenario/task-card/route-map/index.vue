<template>
  <div class="route-map-page">
    <SubHeader>
      <template #left>
        <BaseBreadcrumb />
      </template>
      <template #right>
        <div class="header-action-group">
          <BaseButtonMiniBtn :icon="iconBack" ghost @click="handleBack">
            {{ $t('scenario_task.actions.back') }}
          </BaseButtonMiniBtn>
        </div>
      </template>
    </SubHeader>

    <main class="page-content">
      <div class="content-container">
        <RouteSearch @search="onRouteSearch" />

        <RouteInfo v-if="currentRouteData" :data="currentRouteData" />

        <RouteMap v-if="currentRouteData" :tags="currentRouteData.mapTags" />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import { useRouter } from 'vue-router'
import RouteSearch from '@/components/modules/project/scenario/task-card/route-map/RouteSearch.vue'
import RouteInfo from '@/components/modules/project/scenario/task-card/route-map/RouteInfo.vue'
import RouteMap from '@/components/modules/project/scenario/task-card/route-map/RouteMap.vue'
import iconBack from '@/assets/img/icon_clock.png'

const router = useRouter()
const taskTitle = ref('海运提单之谜')
provide('dynamicBreadcrumbTitle', taskTitle)

// 1. 模拟两条航线数据
const mockRoutes: Record<string, any> = {
  'china-korea': {
    metrics: [
      { label: '预计运输时间', value: '2-3天' },
      { label: '是否需要转运', value: '否' },
      { label: '港口费用', value: '¥1,200' },
      { label: '运输费用', value: '¥5,800' }
    ],
    costItems: [
      { name: '港杂费', description: '近海港口基础设施费', amount: '¥400' },
      { name: '操作费', description: '快速装卸费用', amount: '¥300' },
      { name: '报关费', description: '出口报关代理', amount: '¥300' },
      { name: '文件费', description: '单证处理', amount: '¥200' }
    ],
    totalAmount: '¥1,200',
    originPort: { name: '上海港', code: 'CNSHA', date: '2024-06-15' },
    destinationPort: { name: '釜山港', code: 'KRPUS', date: '2024-06-17' },
    mapTags: [
      { type: 'route', text: '传统东海航线', x: '15%', y: '45%' },
      { type: 'geo', text: '对马海峡', x: '18%', y: '48%' }
    ]
  },
  'china-usa': {
    metrics: [
      { label: '预计运输时间', value: '12-14天' },
      { label: '是否需要转运', value: '否' },
      { label: '港口费用', value: '¥2,300' },
      { label: '运输费用', value: '¥12,800' }
    ],
    costItems: [
      { name: '港杂费', description: '港口基础设施使用费', amount: '¥800' },
      { name: '操作费', description: '货物装卸及搬运费用', amount: '¥600' },
      { name: '报关费', description: '出口报关代理服务费用', amount: '¥400' },
      { name: '文件费', description: '提单及相关文件处理费', amount: '¥300' },
      { name: '安保费', description: '港口安全检查及保障费', amount: '¥200' }
    ],
    totalAmount: '¥2,300',
    originPort: { name: '上海港', code: 'CNSHA', date: '2024-06-15' },
    destinationPort: { name: '洛杉矶港', code: 'USLAX', date: '2024-06-28' },
    mapTags: [
      { type: 'route', text: '取道北极东北航道', x: '16%', y: '15%' },
      { type: 'geo', text: '白令海峡', x: '56%', y: '52%' },
      { type: 'legacy', text: '传统巴拿马运河航线', x: '63%', y: '82%' }
    ]
  }
}

// 2. 当前显示的航线数据 (默认加载中国到美国)
const currentRouteData = ref(mockRoutes['china-usa'])

const onRouteSearch = (params: any) => {
  const key = `${params.origin}-${params.destination}`
  console.log('搜索 Key:', key)
  // 匹配模拟数据，若匹配不到则重置或提示
  currentRouteData.value = mockRoutes[key] || null
}

const handleBack = () => router.back()
</script>

<style scoped lang="scss">
.route-map-page {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  overflow-x: auto;
  overflow-y: overlay;
}

.header-action-group {
  display: flex;
  gap: 10px;
}

.page-content {
  padding: 20px 20px 40px;
  display: flex;
  justify-content: center;

  .content-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}

/* 自定义滚动条样式 */
.route-map-page::-webkit-scrollbar {
  width: 6px;
}

.route-map-page::-webkit-scrollbar-thumb {
  background: rgba(90, 133, 190, 0.4);
  border-radius: 3px;
}

.route-map-page::-webkit-scrollbar-track {
  background: transparent;
}
</style>