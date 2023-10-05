import {request} from "@/api";
import {QueryParamsType} from "@/types";
import {filmToIFilmAdapter} from "@/adapters/Film-to-IFilm-adapter";
import {filmInfoToIFilmInfoAdapter} from "@/adapters/FilmInfo-to-IFilmInfo-adapter";

export default async function getFilms(params?: QueryParamsType): Promise<any> {
    try {
        const response = await request.get('films/952236', {
            params: params
        });
        console.log(response.data)
        return filmInfoToIFilmInfoAdapter(response.data);
    } catch (e) {
        return e
    }
}
