export default {
  getFilms() {
    return import("./get-films").then(async(m) => await m.default())
  },
  getFilm(id: string) {
    return import("./get-film").then(async(m) => await m.default(id))
  }
};
