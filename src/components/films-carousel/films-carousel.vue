<template>
  <el-carousel height="500px" class="films-carousel">
    <el-carousel-item v-for="film in films" :key="film.filmId" :autoplay="false">
      <img :src="film.posterUrl" :alt="film.nameRu" height="500px">
    </el-carousel-item>
  </el-carousel>
</template>

<script lang="ts" src="./films-carousel.ts"></script>
<style src="./films-carousel.css"></style>
