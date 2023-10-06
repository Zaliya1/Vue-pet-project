<template>
  <div id="app">
    <header class="header"/>
    <main>
      <div class="container">
        <router-view/>
      </div>
    </main>
    <footer class="footer"/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1140px;
  margin: 0 auto;
}

li {
  list-style: none;
}
.container {
  margin: 0 auto;
  max-width: 1280px;
  height: 100%;
  padding: 0 20px;
}
.header, .footer {
  min-height: 50px;
}
@media (max-width: 1200px) {
  .container {
    max-width: 1100px;
  }
}
@media (max-width: 992px) {
  .container {
    max-width: 930px;
    padding: 0 15px;
  }
}
@media (max-width: 768px) {
  .container {
    max-width: 690px;
  }
}
@media (max-width: 576px) {
  .container {
    max-width: 520px;
    padding: 0 10px;
  }
}
</style>
