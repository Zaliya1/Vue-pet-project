import {Component, Vue, Prop, PropSync} from "vue-property-decorator";

export type SelectOption = {
    value: string | number;
    label: string;
}

@Component
export default class Select extends Vue {
    @Prop ({required: true, type: Array}) options: SelectOption[];
    @Prop ({required: false, type: String}) label?: string;
    @PropSync ("value") selectValue: string;

    changeValue(newValue: SelectOption["value"]) {
        this.$emit('change', newValue);
    }
}
