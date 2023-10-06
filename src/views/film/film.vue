<template>
  <div class="film" v-loading="isLoading">
    <router-link to="/" class="film__link">
      <el-button type="primary" class="film__button">Назад</el-button>
    </router-link>
    <div class="film__info">
      <el-image
          class="film__image"
          v-loading="isLoading"
          style="width: 150px; height: 200px"
          :src="film.posterUrl"
          :preview-src-list="[film.posterUrl]">
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
  </div>
</template>

<script lang="ts" src="./film.ts"></script>
<style src="./film.css"></style>
