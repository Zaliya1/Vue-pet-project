export default {
  getFilms(params) {
    return import("./get-films").then(async(m) => await m.default(params))
  },
  getFilm(id: string) {
    return import("./get-film").then(async(m) => await m.default(id))
  },
  getTopFilms() {
    return import("./get-top-films").then(async(m) => await m.default())
  },
};
