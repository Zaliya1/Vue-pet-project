import {request} from "@/api";
import {filmInfoToIFilmInfoAdapter} from "@/adapters/FilmInfo-to-IFilmInfo-adapter";

export default async function getFilms(id: string): Promise<any> {
    try {
        const response = await request.get(`films/${id}`);
        return filmInfoToIFilmInfoAdapter(response.data);
    } catch (e) {
        return e
    }
}
