<template>
  <div class="classification-manual">
    <ProductQuerySection 
      v-model:searchKeyword="searchKeyword"
      v-model:selectedCategory="selectedCategory"
      :category-options="categoryOptions"
      :product-data="currentBaseInfo"
    />

    <TariffRatesSection :product-id="currentBaseInfo.id" />

    <InspectionQuarantineSection :data="currentInspectionInfo" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ProductQuerySection from './ProductQuerySection.vue'
import TariffRatesSection from './TariffRatesSection.vue'
import InspectionQuarantineSection from './InspectionQuarantineSection.vue'

const { t } = useI18n()

// --- 1. 响应式状态 ---
const searchKeyword = ref('')
const selectedCategory = ref('all')

// --- 2. Mock 数据池：商品基础信息 ---
const productsBaseMock = [
  {
    id: '1',
    category: 'electronics',
    name: '智能手机',
    code: '8517.1300.00',
    description: '具有通话、短信、上网功能的便携式电子设备，配备触摸屏。',
    basis: '第八十五章，品目8517，子目1300。',
    notes: '需确认是否带卫星通话功能。'
  },
  {
    id: '2',
    category: 'clothing',
    name: '男式棉制衬衫',
    code: '6205.2000.00',
    description: '梭织经纬纱线织成的男式上衣，长袖，全棉材质。',
    basis: '第六十二章，品目6205，子目2000。',
    notes: '需区分针织还是梭织。'
  },
  {
    id: '3',
    category: 'food',
    name: '浓缩苹果汁',
    code: '2009.7100.00',
    description: '以苹果为原料经加工得到的液体饮料，未发酵。',
    basis: '第二十章，品目2009，子目7100。',
    notes: '需确认白利糖度值。'
  }
]

// --- 3. Mock 数据池：检验检疫详情 (模拟独立接口) ---
const getInspectionMockData = (id: string) => {
  const dataMap: Record<string, any> = {
    '1': {
      items: [
        { title: 'CCC认证', desc: '所有进口智能手机均需获得CCC认证', status: 'active' },
        { title: '进口商品检验', desc: '需提供商检部门出具的检验证明', status: 'active' },
        { title: '动植物检疫', desc: '无需动植物检疫', status: 'disabled' }
      ],
      documents: [
        { name: 'CCC认证证书', status: 'required', label: '必配' },
        { name: '原产地证书', status: 'required', label: '必配' },
        { name: '商业发票', status: 'required', label: '必配' },
        { name: '进口许可证', status: 'conditional', label: '视情况而定' }
      ]
    },
    '2': {
      items: [
        { title: '甲醛含量检测', desc: '需符合GB 18401-2010 B类标准', status: 'active' },
        { title: '成分含量分析', desc: '需核实纤维成分及含量标识', status: 'active' }
      ],
      documents: [
        { name: '原产地证书', status: 'required', label: '必配' },
        { name: '质量检测报告', status: 'required', label: '必配' },
        { name: '水洗标样张', status: 'conditional', label: '视情况而定' }
      ]
    },
    '3': {
      items: [
        { title: '食品安全准入', desc: '生产厂商需在海关总署注册备案', status: 'active' },
        { title: '植物检疫', desc: '需提供输出国官方植物检疫证书', status: 'active' }
      ],
      documents: [
        { name: '官方植物检疫证书', status: 'required', label: '必配' },
        { name: '食品卫生证书', status: 'required', label: '必配' },
        { name: '白利糖度检测报告', status: 'conditional', label: '视情况而定' }
      ]
    }
  }
  return dataMap[id] || dataMap['1']
}

// --- 4. 分类选项 ---
const categoryOptions = computed(() => [
  { value: 'all', label: '全部商品' },
  { value: 'electronics', label: '电子产品' },
  { value: 'clothing', label: '服装鞋帽' },
  { value: 'food', label: '食品饮料' }
])

// --- 5. 核心联动逻辑 ---

// A. 计算当前商品的基础信息
const currentBaseInfo = computed(() => {
  const filtered = productsBaseMock.filter(item => {
    const matchCategory = selectedCategory.value === 'all' || item.category === selectedCategory.value
    const matchKeyword = item.name.toLowerCase().includes(searchKeyword.value.toLowerCase())
    return matchCategory && matchKeyword
  })

  // 如果搜不到结果，返回一个兜底对象
  return filtered.length > 0 ? filtered[0] : {
    id: 'none',
    name: '未查找到相关商品',
    code: '----.----.--',
    description: '暂无匹配的商品信息。',
    basis: '请尝试修改搜索词。',
    notes: '无'
  }
})

// B. 计算当前商品的检验检疫信息 (依赖 currentBaseInfo.id)
const currentInspectionInfo = computed(() => {
  if (currentBaseInfo.value.id === 'none') {
    return { items: [], documents: [] }
  }
  return getInspectionMockData(currentBaseInfo.value.id)
})
</script>

<style scoped lang="scss">
.classification-manual {
  width: 100%;
  min-height: 100%;
  /* 增加组件间的间距 */
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;
}
</style>