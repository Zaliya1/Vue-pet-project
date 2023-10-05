import infrastructure from "@/infrastructure";

declare module "vue/types/vue" {
  interface Vue {
    $infra: typeof infrastructure;
  }
}
