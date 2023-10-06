import Vue from "vue";
import Vuex, { StoreOptions } from "vuex"
import { ITopFilm } from "@/types";
Vue.use(Vuex);

export interface RootState {
    topFilms: ITopFilm[];
}

const store: StoreOptions<RootState> = {
    state: {
        topFilms: [],
    },
    getters: {
        topFilms: state => {
            return state.topFilms;
        }
    },
    actions: {
        actionFilms(context: any, films: ITopFilm[]) {
            context.commit('mutateFilms', films)
        }
    },
    mutations: {
        mutateFilms(state, films: ITopFilm[]) {
            state.topFilms = films;
        },
    }
}

export default new Vuex.Store<RootState>(store);
