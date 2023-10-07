<template>
  <div class="select">
    <label v-if="label" class="select__label">{{label}}</label>
    <el-select :value="selectValue" @change="changeValue" placeholder="Select">
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
