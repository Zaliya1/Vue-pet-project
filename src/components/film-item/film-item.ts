import {Component, Vue, Prop} from "vue-property-decorator";
import {IFilm} from "@/types";

@Component
export default class FilmItem extends Vue {
    @Prop({ required: true, type: Object }) film: IFilm;
}
