import {TopFilm, ITopFilm} from "@/types";

export const topFilmToITopFilmAdapter = (films: TopFilm[]): ITopFilm[] => {
    return films.map(film => {
        return {
            countries: film.countries.map(i => i.country),
            filmId: film.filmId,
            filmLength: film.filmLength,
            genres: film.genres.map(i => i.genre),
            nameRu: film.nameRu || film.nameEn || "Не найдено",
            posterUrl: film.posterUrl,
            posterUrlPreview: film.posterUrlPreview,
            rating: film.rating,
            ratingVoteCount: film.ratingVoteCount,
            year: film.year,
        };
    })

}
