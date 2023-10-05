import {Component, Vue} from "vue-property-decorator";
import FilmItem from "@/components/film-item/film-item.vue";

@Component({
    components: {
        FilmItem,
    }
})
export default class Home extends Vue {
    films: [] = []
    error: string;
    isLoading: boolean = false;

    mounted() {
        this.getFilmsList();
    }

    getFilmsList() {
        this.isLoading = true;
        this.$infra.getFilms().then((res) => {
            this.films = res;
            this.isLoading = false;
        }).catch((e) => {
            this.isLoading = false;
            this.error = e
        })
    }

    openFilm(id) {
        console.log('click')
        console.log(id)
        if (id) this.$router.push(`/film/${id}`)
    }

}
