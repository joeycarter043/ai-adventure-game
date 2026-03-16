<template>
  <div class="cargo-section">
    <span class="section-label">{{ $t('bill_template.cargo_section') }}</span>

    <!-- Table: header + rows -->
    <div class="cargo-table">
      <!-- Table header -->
      <div class="table-header">
        <div class="col col-marks">
          <span>唛头和号码</span>
          <span class="en">MARKS &amp; NUMBERS</span>
        </div>
        <div class="col col-packages">
          <span>件数和包装类型</span>
          <span class="en">NUMBER &amp; KIND OF PACKAGES</span>
        </div>
        <div class="col col-desc">
          <span>货物描述</span>
          <span class="en">DESCRIPTION OF GOODS</span>
        </div>
        <div class="col col-weight">
          <span>毛重</span>
          <span class="en">GROSS WEIGHT</span>
        </div>
        <div class="col col-measure">
          <span>体积</span>
          <span class="en">MEASUREMENT</span>
        </div>
      </div>

      <!-- Table rows -->
      <div v-for="row in rows" :key="row.id" class="table-row">
        <div class="cell col-marks">
          <input v-model="row.marks" class="cell-input" :placeholder="$t('bill_template.cargo_marks_placeholder')" />
        </div>
        <div class="cell col-packages">
          <input v-model="row.packages" class="cell-input" :placeholder="$t('bill_template.cargo_packages_placeholder')" />
        </div>
        <div class="cell col-desc">
          <input v-model="row.description" class="cell-input" :placeholder="$t('bill_template.cargo_description_placeholder')" />
        </div>
        <div class="cell col-weight">
          <input v-model="row.weight" class="cell-input" :placeholder="$t('bill_template.cargo_weight_placeholder')" />
        </div>
        <div class="cell col-measure">
          <input v-model="row.measurement" class="cell-input" :placeholder="$t('bill_template.cargo_measurement_placeholder')" />
        </div>
      </div>
    </div>

    <!-- Add row button -->
    <button class="add-row-btn" @click="addRow">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 1v12M1 7h12" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
      <span>{{ $t('bill_template.add_row') }}</span>
    </button>

    <div class="divider" />
  </div>
</template>

<script setup lang="ts">
interface CargoRow {
  id: number
  marks: string
  packages: string
  description: string
  weight: string
  measurement: string
}

const rows = ref<CargoRow[]>([
  { id: 1, marks: '', packages: '', description: '', weight: '', measurement: '' },
  { id: 2, marks: '', packages: '', description: '', weight: '', measurement: '' },
  { id: 3, marks: '', packages: '', description: '', weight: '', measurement: '' },
])
let nextId = 4

function addRow() {
  rows.value.push({ id: nextId++, marks: '', packages: '', description: '', weight: '', measurement: '' })
}
</script>

<style scoped lang="scss">
.cargo-section {
  padding: 0 44px;
  margin-top: 28px;
}

.section-label {
  display: block;
  font-size: 24px;
  font-weight: 500;
  color: #d4d4d4;
  line-height: 24px;
  margin-bottom: 10px;
}

/* ─── Table ──────────────────────────────────────── */
.cargo-table {
  border: 1px solid rgba(0, 174, 255, 0.3);
  border-radius: 4px;
  overflow: hidden;
}

.table-header,
.table-row {
  display: flex;
  width: 100%;
}

/* Column proportions mapped from design:
   marks: 305px / total 1625px ≈ 18.77%
   packages: 305+26 gap → next 305px ≈ 18.77%
   desc: 305px ≈ 18.77%
   weight: 305px ≈ 18.77%
   measure: 305px ≈ 18.77%
   (5 equal-ish columns) */
.col, .cell {
  flex: 1;
  padding: 0 12px;
}

.table-header {
  background: linear-gradient(180deg, rgba(40, 72, 122, 0.5) 0%, rgba(22, 50, 84, 0.5) 100%);
  border-bottom: 1px solid rgba(0, 174, 255, 0.2);
  padding: 14px 0;
}

.col {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #b5b5b5;
  line-height: 18px;
  border-right: 1px solid rgba(0, 174, 255, 0.15);

  &:last-child {
    border-right: none;
  }

  .en {
    font-size: 12px;
    color: #888;
    margin-top: 2px;
  }
}

.table-row {
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
  background: linear-gradient(rgba(40, 72, 122, 0.15), rgba(22, 50, 84, 0.15));
  min-height: 40px;

  &:last-child {
    border-bottom: none;
  }
}

.cell {
  display: flex;
  align-items: center;
  min-height: 40px;
  border-right: 1px solid rgba(0, 174, 255, 0.1);

  &:last-child {
    border-right: none;
  }
}

.cell-input {
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-size: 14px;
  color: #fff;
  padding: 0 2px;

  &::placeholder { color: #999; }
  &:focus { background: rgba(0, 174, 255, 0.05); }
}

/* ─── Add Row Button ─────────────────────────────── */
.add-row-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 38px;
  padding: 0 15px;
  margin-top: 12px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 1);
  background: linear-gradient(rgba(40, 72, 122, 1), rgba(22, 50, 84, 1));
  cursor: pointer;

  span {
    font-size: 16px;
    color: #fff;
    line-height: 24px;
  }

  &:hover {
    background: linear-gradient(rgba(55, 95, 155, 1), rgba(32, 65, 105, 1));
  }
}

.divider {
  height: 2px;
  background: linear-gradient(90deg, rgba(0, 174, 255, 0.6) 0%, rgba(0, 174, 255, 0.1) 100%);
  margin-top: 18px;
}
</style>
