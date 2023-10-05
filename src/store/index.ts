import Vue from "vue";
import Vuex, {StoreOptions} from "vuex"
Vue.use(Vuex);

type PokemonType = []

export interface RootState {
    pokemons: PokemonType[] | [];
}

const store: StoreOptions<RootState> = {
    state: {
        pokemons: [],
    },
    actions: {
        actionPokemons(context: any, pokemons: PokemonType[]) {
            context.commit('mutatePokemons', pokemons)
        }
    },
    mutations: {
        mutatePokemons(state, pokemons: PokemonType[]) {
            state.pokemons = pokemons;
        },
    }
}

export default new Vuex.Store<RootState>(store);
