import {request} from "@/api";
import {QueryParamsType} from "@/types";
import {topFilmToITopFilmAdapter} from "@/adapters/TopFilm-to-ITopFilm-adapter";

export default async function geTopFilms(params?: QueryParamsType): Promise<any> {
    try {
        const response = await request.get('films/top', {
            params: params
        });
        return topFilmToITopFilmAdapter(response.data.films);
    } catch (e) {
        return e
    }
}
