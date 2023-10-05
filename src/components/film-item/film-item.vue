<template>
  <li class="film-item" @click="$emit('click')">
    <el-card class="box-card">
      {{ film.nameRu }}
    </el-card>
  </li>

</template>

<script lang="ts" src="./film-item.ts"></script>
<style src="./film-item.css"></style>
