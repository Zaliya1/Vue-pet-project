<template>
  <div class="home">home
    <ul class="film-list" v-for="film in films" :key="film.kinopoiskId">
      <FilmItem :film="film" @click="openFilm(film.kinopoiskId)"/>
    </ul>
  </div>
</template>

<script lang="ts" src="./home.ts"></script>
<style src="./home.css"></style>
