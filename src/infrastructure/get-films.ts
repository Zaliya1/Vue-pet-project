import {request} from "@/api";
import {QueryParamsType} from "@/types";
import {filmToIFilmAdapter} from "@/adapters/Film-to-IFilm-adapter";

export default async function getFilms(params?: QueryParamsType): Promise<any> {
    try {
        const response = await request.get('films', {
            params: params
        });
        return filmToIFilmAdapter(response.data.items);
    } catch (e) {
        return e
    }
}
