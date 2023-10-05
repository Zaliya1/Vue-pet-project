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
    isLoading: boolean = true;

    mounted() {
        this.$infra.getFilms().then((res) => {
            console.log(res)
            this.films = res
        })
    }

    openFilm(id) {
        console.log('click')
        this.$router.push(`/film/${id}`)
    }

}
