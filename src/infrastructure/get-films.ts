import {request} from "@/api";
import {QueryParamsType} from "@/types";

export default async function getFilms(params?: QueryParamsType): Promise<any> {
    try {
        const response = await request.get('films', {
            params: params
        });
        return response.data.items
    } catch (e) {
        return e
    }
}
