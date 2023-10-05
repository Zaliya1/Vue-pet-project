import {Component, Vue} from "vue-property-decorator";
import {FilmInfo} from "@/types";

@Component
export default class Film extends Vue {
    film: FilmInfo | {} = {};
    isLoading: boolean = false;
    error: string;

    mounted() {
        this.isLoading = true
        this.$infra.getFilm(this.$route.params.id || "0").then((res) => {
            this.film = res;
            this.isLoading = false;
        }).catch((e) => {
            this.error = e
            this.isLoading = false;
        })
    }
}
