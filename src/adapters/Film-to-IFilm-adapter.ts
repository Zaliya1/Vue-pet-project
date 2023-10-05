import {Film, IFilm} from "@/types";

export const filmToIFilmAdapter = (films: Film[]): IFilm[] => {
    return films.map(film => {
        return {
            countries: film.countries.map(i => i.country),
            genres: film.genres.map(i => i.genre),
            kinopoiskId: film.kinopoiskId,
            nameRu: film.nameRu,
            posterUrl: film.posterUrl,
            posterUrlPreview: film.posterUrlPreview,
            ratingKinopoisk: film.ratingKinopoisk,
            type: film.type,
            year: film.year,
        };
    })

}
