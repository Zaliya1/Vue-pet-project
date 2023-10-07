<template>
  <li class="film-item" @click="$emit('click')">
    <el-card class="film-item__card" shadow="hover">
      <img :src="film.posterUrlPreview" class="film-item__image">
      <div style="padding: 14px">
        <h3>{{ film.nameRu }}</h3>
        <div class="bottom clearfix">
          {{film.year}}
        </div>
      </div>
    </el-card>
  </li>

</template>

<script lang="ts" src="./film-item.ts"></script>
<style src="./film-item.css"></style>
