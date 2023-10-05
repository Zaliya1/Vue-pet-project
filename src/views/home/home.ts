import {Component, Vue} from "vue-property-decorator";

@Component
export default class Home extends Vue {
    films: [] = []
    error: string;
    isLoading: boolean = true;

    mounted() {
        this.$infra.getFilms().then((res) => {
            this.films = res
        })
    }

}
