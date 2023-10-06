import {Component, Vue, Prop} from "vue-property-decorator";

@Component
export default class FilmsCarousel extends Vue {
    @Prop ({required: true}) films: [];
}
