export default {
  getFilms() {
    return import("./get-films").then(async(m) => await m.default())
  },
  getFilm() {
    return import("./get-film").then(async(m) => await m.default())
  }
};
