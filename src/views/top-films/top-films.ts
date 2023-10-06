import {Component, Vue} from "vue-property-decorator";
import FilmItem from "@/components/film-item/film-item.vue";
import {ITopFilm} from "@/types";

@Component({
    components: {
        FilmItem,
    }
})
export default class TopFilms extends Vue {
    topFilms: [] = []
    error: string;
    isLoading: boolean = false;

    get films(): ITopFilm[] {
        console.log(this.$store.getters.topFilms)
        return this.$store.getters.topFilms;
    }

    mounted() {
        if (!this.films.length) {
            this.getTopFilms()
        }
    }
    getTopFilms() {
        this.$infra.getTopFilms().then((res) => {
            this.topFilms = res;
            this.$store.dispatch('actionFilms', this.topFilms);
        }).catch((e) => {
            this.isLoading = false;
            console.log(e)
            // TODO алерт ошибка загрузки списка топ фильмов
        })
    }
}
