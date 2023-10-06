import {Component, Vue, Watch} from "vue-property-decorator";
import FilmItem from "@/components/film-item/film-item.vue";
import FilmsCarousel from "@/components/films-carousel/films-carousel.vue"
import {FilmType, IFilm, ITopFilm, OrderType, QueryParamsType} from "@/types";
import Select from "@/components/select/select.vue";
import {SelectOption} from "@/components/select/select";

@Component({
    components: {
        FilmItem,
        FilmsCarousel,
        Select,
    }
})
export default class Home extends Vue {
    films: IFilm[] = [];
    topFilms: ITopFilm[] = [];
    filmsParams: QueryParamsType = {
        order: "RATING",
        page: 1,
        type: "ALL"
    };

    sort: SelectOption[] = [
        {value: "RATING", label: "рейтингу"},
        {value: "NUM_VOTE", label: "количеству голосов"},
        {value: "YEAR", label: "году"},
    ];
    filter: SelectOption[] = [
        {value: "ALL", label: "все"},
        {value: "FILM", label: "фильмы"},
        {value: "TV_SHOW", label: "тв шоу"},
        {value: "TV_SERIES", label: "тв сериалы"},
        {value: "MINI_SERIES", label: "мини сериалы"},
    ];

    error: string;
    isLoading: boolean = false;

    mounted() {
        this.getTopFilms();
        this.getFilmsList();
    }

    getFilmsList() {
        this.isLoading = true;
        this.$infra.getFilms(this.filmsParams).then((res) => {
            this.films = res;
            this.isLoading = false;
        }).catch((e) => {
            this.isLoading = false;
            this.error = e
        })
    }

    getTopFilms() {
        if (this.$store.getters.topFilms)
        this.$infra.getTopFilms().then((res) => {
            this.topFilms = res;
            this.$store.dispatch('actionFilms', this.topFilms);
        }).catch((e) => {
            this.isLoading = false;
            console.log(e)
            // TODO алерт ошибка загрузки списка топ фильмов
        })
    }

    openFilm(id) {
        this.$router.push(`/film/${id}`)
    }

    changePage(page: number) {
        this.filmsParams.page = page;

    }

    changeOrder(str: OrderType) {
        this.filmsParams.order = str
    }

    changeType(str: FilmType) {
        this.filmsParams.type = str
    }

    @Watch('filmsParams', { immediate: true, deep: true })
    changeParams() {
        this.getFilmsList();
    }
}
