<template>
  <div class="task-detail-container">
    <ScenarioSectionLayout>
      <div class="interaction-area">
        <section class="task-board">
          <div class="task-screen-border">
            <div class="mission-overlay-bg">
              
              <header class="mission-header">
                <img src="./assets/icon_task_card.png" class="header-icon" />
                <h2 class="header-title">你获得了一张新的任务卡</h2>
              </header>
              
              <article class="mission-description-box">
                <p class="description-text">
                  仔细审核海运提单上的所有信息，确认货物描述、数量、重量、体积等数据是否准确无误，并检查提单上的条款是否符合国际贸易惯例
                </p>
              </article>

              <div class="action-guide">
                <img src="./assets/icon_next_step.png" class="guide-icon" />
                <span class="guide-text">请选择下一步操作</span>
              </div>

              <nav class="options-container">
                <div 
                  v-for="(opt, idx) in options" 
                  :key="idx" 
                  class="option-card"
                >
                  <h3 class="option-title">{{ opt.title }}</h3>
                  <p class="option-desc">{{ opt.desc }}</p>
                </div>
              </nav>

            </div>
          </div>
        </section>
      </div>

      <div class="timeline-wrapper">
        <ScenarioTimeline v-model:active-index="activeNodeIndex" />
      </div>
      
    </ScenarioSectionLayout>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ScenarioSectionLayout from '@/components/modules/project/scenario/SectionLayout.vue'
import ScenarioTimeline from '@/components/modules/project/scenario/Timeline.vue'

const activeNodeIndex = ref(1)
const options = [
  { title: '检查订单文件完整性', desc: '仔细核对客户提供的所有文件，确保信息准确无误。' },
  { title: '联系客户确认细节', desc: '与客户沟通，确认订单中的特殊要求和注意事项。' },
  { title: '开始准备海运提单', desc: '根据订单信息，填写海运提单的各项内容。' }
]
</script>

<style scoped lang="scss">
$primary-cyan: #00fff0;
$tech-blue: #60cdfc;
$text-white: #ffffff;

.task-detail-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: 100%;
}

.interaction-area {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;

  .task-board {
    width: 100%;
    max-width: 900px; /* 限制一个最大宽度，防止在超宽屏上拉伸变形 */
    
    .task-screen-border {
      background-color: rgba(5, 23, 48, 0.85);
      /* 移除固定高度，改用 padding 和内容撑起，或者设定一个最小高度 */
      min-height: 500px; 
      border: 1px solid $primary-cyan;
      box-shadow: inset 0 0 20px rgba(0, 255, 240, 0.2);
      width: 100%; /* 宽度跟随父元素 */
      overflow: hidden;
      display: flex;

      .mission-overlay-bg {
        flex: 1;
        padding: 40px; /* 使用内边距控制内部元素位置 */
        background: url('../assets/bg_story_overlay.png') no-repeat center;
        background-size: cover;
        display: flex;
        flex-direction: column;

        .mission-header {
          display: flex;
          align-items: center;
          margin-bottom: 16px;
          .header-icon {
            width: 24px;
            margin-right: 12px;
          }
          .header-title {
            color: $text-white;
            font-size: 22px;
            margin: 0;
            text-shadow: 0 0 10px rgba(0, 255, 240, 0.5);
          }
        }

        .mission-description-box {
          background-color: rgba(11, 44, 84, 0.8);
          border-radius: 12px;
          border: 1.5px solid $tech-blue;
          width: 100%; /* 自动填满 */
          padding: 24px;
          margin-bottom: 30px;
          box-sizing: border-box;

          .description-text {
            color: $text-white;
            font-size: 18px;
            line-height: 1.6;
            margin: 0;
          }
        }

        .action-guide {
          display: flex;
          align-items: center;
          margin-bottom: 16px;
          .guide-icon {
            width: 22px;
            margin-right: 10px;
          }
          .guide-text {
            color: $text-white;
            font-size: 18px;
            font-family: SimHei;
          }
        }

        .options-container {
          display: grid;
          /* 改用 Grid 布局，三列等宽，自适应间距 */
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;

          .option-card {
            background: linear-gradient(180deg, rgba(17, 78, 139, 0.95) 0%, rgba(10, 45, 82, 0.95) 100%);
            border-radius: 10px;
            border: 1px solid $tech-blue;
            padding: 20px 15px;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            display: flex;
            flex-direction: column;
            justify-content: center;

            &:hover {
              border-color: $primary-cyan;
              box-shadow: 0 0 15px rgba(0, 255, 240, 0.4);
              transform: translateY(-5px);
            }

            .option-title {
              color: $primary-cyan;
              font-size: 18px;
              font-family: SimHei;
              text-align: center;
              margin: 0 0 12px 0;
            }

            .option-desc {
              color: rgba(255, 255, 255, 0.9);
              font-size: 14px;
              line-height: 1.4;
              margin: 0;
              text-align: left;
            }
          }
        }
      }
    }
  }
}

.timeline-wrapper {
  margin-top: auto;
}
</style>