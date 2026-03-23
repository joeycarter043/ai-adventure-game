<template>
  <div class="quiz-main-card">
    <div class="quiz-requirement">
      <h3 class="req-title">闯关要求</h3>
      <p class="req-desc">{{ quizConfig.description }}</p>
    </div>

    <div v-for="(group, gIndex) in quizConfig.groups" :key="gIndex" class="quiz-group">
      <h4 class="group-title">{{ group.title }}（{{ group.scoreInfo }}）</h4>

      <div v-for="(q, qIndex) in group.questions" :key="q.id" class="question-wrapper">
        <component :is="getComponent(q.type)" v-model="userAnswers[q.id]" :index="qIndex + 1" :question="q" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChoiceItem from './items/ChoiceItem.vue'
import JudgmentItem from './items/JudgmentItem.vue'
import FillBlankItem from './items/FillBlankItem.vue'
import QAItem from './items/QAItem.vue'

const props = defineProps<{
  quizConfig: any
}>()

const userAnswers = ref<Record<string, any>>({})

const getComponent = (type: string) => {
  const map: any = {
    'single': ChoiceItem,
    'multiple': ChoiceItem,
    'judgment': JudgmentItem,
    'fillblank': FillBlankItem,
    'qa': QAItem
  }
  return map[type]
}
</script>

<style scoped lang="scss">
.quiz-main-card {
  border: 1px solid #5A85BE;
  padding: 32px 40px 45px 40px;
  border-radius: 8px;

  .quiz-requirement {
    .req-title {
      font-size: 24px;
      color: #fff;
      margin-bottom: 15px;
    }

    .req-desc {
      color: #D5D5D5;
      line-height: 1.8;
      font-size: 18px;
    }
  }

  .quiz-group {
    margin-top: 30px;

    .group-title {
      font-size: 20px;
      color: #fff;
      margin-bottom: 20px;
    }
  }
}
</style>