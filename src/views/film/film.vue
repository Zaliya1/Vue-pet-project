<template>
  <div class="film" v-loading="isLoading">
<!--    <Loader v-if="isLoading"/>-->
    <el-image
        v-loading="isLoading"
        style="width: 100px; height: 100px"
        :src="film.posterUrl"
        :preview-src-list="[film.coverUrl]">
    </el-image>
    <el-descriptions title="Vertical list with border" direction="vertical" :column="1" border>
      <el-descriptions-item label="Название">{{ film.nameRu }}</el-descriptions-item>
      <el-descriptions-item label="Год выпуска">{{ film.year }}</el-descriptions-item>
      <el-descriptions-item label="Жанры">{{ film.genres?.join(", ") }}</el-descriptions-item>
      <el-descriptions-item label="Длительность">{{film.filmLength}}</el-descriptions-item>
      <el-descriptions-item label="Описание">{{film.shortDescription}}</el-descriptions-item>
      <el-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script lang="ts" src="./film.ts"></script>
<style src="./film.css"></style>
