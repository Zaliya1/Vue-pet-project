import {Book, IBook} from "@/types";

const adapterPokemon = (pokemon: any) => {
    return {
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        img: pokemon.sprites.front_default
    };
}
const adapterPokemonList = (pokemons: Book[]): IBook[] => {
    return pokemons.map((i: Book) => {
        // @ts-ignore
        return { ...i, id: i.url.match(/\d+/)[0] }
    })
}
export { adapterPokemon, adapterPokemonList }
