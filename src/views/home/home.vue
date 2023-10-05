<template>
  <div class="home" v-loading="isLoading">home
    <ul class="film-list">
      <FilmItem v-for="film in films" :key="film.kinopoiskId" :film="film" @click="openFilm(film.kinopoiskId)"/>
    </ul>
  </div>
</template>

<script lang="ts" src="./home.ts"></script>
<style src="./home.css"></style>
