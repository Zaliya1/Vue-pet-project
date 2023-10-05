import {FilmInfo, IFilmInfo} from "@/types";

export const filmInfoToIFilmInfoAdapter = (film: FilmInfo): IFilmInfo => {
    return {
        completed: film.completed,
        countries: film.countries.map(i => i.country),
        coverUrl: film.coverUrl,
        description: film.description,
        editorAnnotation: film.editorAnnotation,
        endYear: film.endYear,
        filmLength: film.filmLength + " минут",
        genres: film.genres.map(i => i.genre),
        has3D: film.has3D,
        hasImax: film.hasImax,
        kinopoiskId: film.kinopoiskId,
        lastSync: film.lastSync,
        logoUrl: film.logoUrl,
        nameEn: film.nameEn,
        nameOriginal: film.nameOriginal,
        nameRu: film.nameRu,
        posterUrl: film.posterUrl,
        posterUrlPreview: film.posterUrlPreview,
        productionStatus: film.productionStatus,
        reviewsCount: film.reviewsCount,
        serial: film.serial,
        shortDescription: film.shortDescription,
        startYear: film.startYear,
        type: film.type,
        webUrl: film.webUrl,
        year: film.year,
    }
}
