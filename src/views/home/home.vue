<template>
  <div class="home" v-loading="isLoading">
    <FilmsCarousel :films="topFilms" />
    <el-pagination
        background
        layout="prev, pager, next"
        @current-change="changePage"
        :total="1000">
    </el-pagination>
    <Select
        :value="filmsParams.order"
        :options="sort"
        label="Сортировать по"
        @change="changeOrder"
    />
    <Select
        :value="filmsParams.type"
        :options="filter"
        label="Тип"
        @change="changeType"
    />
    <ul class="film-list">
      <FilmItem
          v-for="film in films"
          :key="film.kinopoiskId"
          :film="film"
          @click="openFilm(film.kinopoiskId)"/>
    </ul>

  </div>
</template>

<script lang="ts" src="./home.ts"></script>
<style src="./home.css"></style>
