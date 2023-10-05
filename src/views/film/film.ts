import {Component, Vue} from "vue-property-decorator";
import {FilmInfo} from "@/types";

@Component
export default class Film extends Vue {
    film: FilmInfo | {} = {};

    mounted() {
        this.$infra.getFilm().then((res) => {
            console.log(res)
            this.film = res
        })
    }
}
