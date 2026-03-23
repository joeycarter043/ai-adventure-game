<template>
  <div class="flow-display">
    <div class="flow-node">
      <div class="node-icon origin">
        <img :src="portIcon" alt="origin-port" />
      </div>
      <div class="node-info">
        <div class="port-name">{{ originPort.name }} ({{ originPort.code }})</div>
        <div class="port-date">预计出发时间: {{ originPort.date }}</div>
      </div>
    </div>

    <div class="flow-arrow">
      <svg width="45" height="14" viewBox="0 0 45 14" fill="none">
        <path d="M1 7H43M43 7L37 1M43 7L37 13" stroke="#5A85BE" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
    </div>

    <div class="flow-node">
      <div class="node-icon destination">
        <img :src="portIcon" alt="destination-port" />
      </div>
      <div class="node-info">
        <div class="port-name">{{ destinationPort.name }} ({{ destinationPort.code }})</div>
        <div class="port-date">预计到达时间: {{ destinationPort.date }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface PortInfo {
  name: string
  code: string
  date: string
}

interface Props {
  originPort: PortInfo
  destinationPort: PortInfo
  portIcon: string
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.flow-display {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;

  .flow-node {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 15px;
    border: 1px solid #5A85BE;
    border-radius: 8px;
    padding: 15px;

    .node-icon {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;

      &.origin {
        background: #D4E7FF;
      }

      &.destination {
        background: #D4E7FF;
      }

      img {
        width: 32px;
        height: 32px;
        object-fit: contain;
      }
    }

    .node-info {
      .port-name {
        color: #FFFFFF;
        font-size: 20px;
        font-family: SourceHanSansCN-Regular;
        margin-bottom: 4px;
      }

      .port-date {
        color: #D5D5D5;
        font-size: 16px;
        font-family: SourceHanSansCN-Regular;
      }
    }
  }

  .flow-arrow {
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }
}
</style>