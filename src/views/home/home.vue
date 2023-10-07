<template>
  <div class="home" v-loading="isLoading">
    <FilmsCarousel v-if="topFilms.length" :films="topFilms" class="home__carousel" />
    <el-pagination
        class="home__pagination"
        background
        layout="prev, pager, next"
        @current-change="changePage"
        :total="1000">
    </el-pagination>
    <div class="home__sotring">
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
    </div>
    <ul class="home__films film-list" v-if="films.length">
      <FilmItem
          v-for="film in films"
          :key="film.kinopoiskId"
          :film="film"
          @click="openFilm(film.kinopoiskId)"/>
    </ul>
    <el-alert
        v-if="error.length"
        title="Ошибка сервера"
        type="error"
        :description="error"
        show-icon>
    </el-alert>
  </div>
</template>

<script lang="ts" src="./home.ts"></script>
<style src="./home.css"></style>
