export default {
  // getPokemon(id: string | number) {
  //   return import("./get-pokemon").then(async(m) => await m.default(id))
  // },
  // getPokemonList(page: string) {
  //   return import("./get-pokemon-list").then(async(m) => await m.default(page))
  // },
  getFilms() {
    return import("./get-films").then(async(m) => await m.default())
  }
};
