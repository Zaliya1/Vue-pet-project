<template>
  <div>
  <label>Сортировать по</label>
  <el-select :value="selectValue" @change="changeValue" placeholder="Select" class="select">
    <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </el-option>
  </el-select>
  </div>
</template>

<script lang="ts" src="./select.ts"></script>
<style src="./select.css"></style>
