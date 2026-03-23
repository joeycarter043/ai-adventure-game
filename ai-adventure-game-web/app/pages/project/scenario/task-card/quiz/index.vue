<template>
  <div class="quiz-page">
    <SubHeader>
      <template #left>
        <BaseBreadcrumb />
      </template>
      <template #right>
        <div class="btn-group">
          <BaseButtonMiniBtn ghost @click="saveProgress">保存进度</BaseButtonMiniBtn>
          <BaseButtonMiniBtn @click="submitQuiz">提交答卷</BaseButtonMiniBtn>
          <BaseButtonMiniBtn ghost @click="$router.back()">返回</BaseButtonMiniBtn>
        </div>
      </template>
    </SubHeader>

    <main class="quiz-container">
      <div class="quiz-content-wrapper">
        <QuizMain :quiz-config="mockQuizData" />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import QuizMain from '@/components/modules/project/scenario/task-card/quiz/QuizMain.vue'

const taskTitle = ref('海运提单之谜')
provide('dynamicBreadcrumbTitle', taskTitle)

const mockQuizData = {
  description: '这是一段说明答题任务规则的介绍，内容可以包含此任务所考核的范围、科目等，以及单选、多选、判断等各种类型题目的说明，以及得分规则、评分规则等。',
  groups: [
    {
      title: '一、选择题',
      scoreInfo: '单选题6分；多选题全部选对得8分，本大题共60分',
      questions: [
        {
          id: 'q1',
          type: 'single',
          title: '有的人会发生过敏反应，请问这类人的免疫系统出现了什么问题?',
          options: [
            { id: 'A', text: '免疫失调' },
            { id: 'B', text: '免疫能力正常，但免疫系统紊乱' },
            { id: 'C', text: '免疫力低下，极易被外界物质攻破' },
            { id: 'D', text: '缺失免疫力' }
          ]
        },
        {
          id: 'q3',
          type: 'multiple',
          title: '关于比特币，下列说法正确的是？',
          options: [
            { id: 'A', text: '与微信支付一样，比特币背后拥有中心网络记录交易' },
            { id: 'B', text: '比特币背后的技术是区块链' },
            { id: 'C', text: '挖矿就是在比特币中需要用到的手段' },
            { id: 'D', text: '比特币系统是一个完全匿名的庞大系统' }
          ]
        }
      ]
    },
    {
      title: '二、判断题',
      scoreInfo: '每题5分，本大题共40分',
      questions: [
        {
          id: 'q4',
          type: 'judgment',
          title: '有的人会发生过敏反应，这是因为免疫系统出现了免疫失调。'
        },
        {
          id: 'q5',
          type: 'judgment',
          title: '电水壶自动断电是因为内部有计时装置，到时间后自动断电。'
        }
      ]
    },
    {
      title: '三、填空题',
      scoreInfo: '每空5分，共20分',
      questions: [
        {
          id: 'q6',
          type: 'fillblank',
          title: '海运提单（B/L）具有三大功能：货物收据、[ ] 以及 [ ]。'
        },
        {
          id: 'q7',
          type: 'fillblank',
          title: '在CIF贸易术语下，买卖双方风险划分的界限是 [ ]。'
        }
      ]
    },
    {
      title: '四、简答题',
      scoreInfo: '每题15分，共30分',
      questions: [
        {
          id: 'q8',
          type: 'qa',
          title: '请简述“电放提单（Telex Release B/L）”的操作流程及其适用场景。',
          placeholder: '请从申请、背书、电放通知等关键步骤进行描述...'
        }
      ]
    }
  ]
}

const saveProgress = () => {
  console.log('进度已保存')
}

const submitQuiz = () => {
  console.log('提交答卷')
}
</script>

<style scoped lang="scss">
.quiz-page {
  min-height: 100vh;

  .quiz-container {
    padding: 20px 20px 40px;
    display: flex;
    justify-content: center;

    .quiz-content-wrapper {
      width: 100%;
    }
  }

  .btn-group {
    display: flex;
    gap: 12px;
  }
}
</style>