export type OrderType = "RATING" | "NUM_VOTE" | "YEAR"

export type QueryParamsType = {
    countries?: string;
    genres?: string;
    order?: OrderType;
    type?: "FILM" | "TV_SHOW" | "TV_SERIES" | "MINI_SERIES" | "ALL";
    ratingFrom?: number;
    ratingTo?: number;
    page?: number;
}
type Country = {
    country: string
}
type Genre = {
    genre: string
}

export type Film = {
    countries: Country[];
    genres: Genre[];
    imdbId: string | null;
    kinopoiskId: number;
    nameEn: string | null;
    nameOriginal: string | null;
    nameRu: string;
    posterUrl: string;
    posterUrlPreview: string;
    ratingImdb: number | null;
    ratingKinopoisk: number;
    type: string;
    year: number;
}
export type IFilm = {
    countries: string[];
    genres: string[];
    kinopoiskId: number;
    nameRu: string;
    posterUrl: string;
    posterUrlPreview: string;
    ratingKinopoisk: number;
    type: string;
    year: number;
}

export type FilmInfo = {
    completed: boolean;
    countries: Country[];
    coverUrl: string;
    description: string;
    editorAnnotation: string | null
    endYear: number | null;
    filmLength: number;
    genres: Genre[];
    has3D: boolean;
    hasImax: boolean;
    imdbId: string | null;
    isTicketsAvailable: boolean;
    kinopoiskHDId: string;
    kinopoiskId: number;
    lastSync: string;
    logoUrl: string;
    nameEn: string | null;
    nameOriginal: string | null;
    nameRu: string;
    posterUrl: string;
    posterUrlPreview: string;
    productionStatus: string | null;
    ratingAgeLimits: string;
    ratingAwait: string | null;
    ratingAwaitCount: number;
    ratingFilmCritics: number | null;
    ratingFilmCriticsVoteCount: number | null;
    ratingGoodReview: number | null;
    ratingGoodReviewVoteCount: number | null;
    ratingImdb: number | null;
    ratingImdbVoteCount: number | null;
    ratingKinopoisk: number;
    ratingKinopoiskVoteCount: number | null;
    ratingMpaa: number | null;
    ratingRfCritics: number | null;
    ratingRfCriticsVoteCount: number | null;
    reviewsCount: number;
    serial: boolean;
    shortDescription: string;
    shortFilm: boolean;
    slogan: string | null;
    startYear: number | null;
    type: string;
    webUrl: string;
    year: number;
}
export type IFilmInfo = {
    completed: boolean;
    countries: string[];
    coverUrl: string;
    description: string;
    editorAnnotation: string | null
    endYear: number | null;
    filmLength: string;
    genres: string[];
    has3D: boolean;
    hasImax: boolean;
    kinopoiskId: number;
    lastSync: string;
    logoUrl: string;
    nameEn: string | null;
    nameOriginal: string | null;
    nameRu: string;
    posterUrl: string;
    posterUrlPreview: string;
    productionStatus: string | null;
    reviewsCount: number;
    serial: boolean;
    shortDescription: string;
    startYear: number | null;
    type: string;
    webUrl: string;
    year: number;
}

export type TopFilm = {
    countries: Country[];
    filmId: number;
    filmLength: string;
    genres: Genre[];
    isAfisha: number;
    isRatingUp: boolean | null;
    nameEn: string;
    nameRu: string
    posterUrl: string
    posterUrlPreview: string
    rating: string;
    ratingChange: string | null;
    ratingVoteCount: number;
    year: string;
}
export type ITopFilm = {
    countries: string[];
    filmId: number;
    filmLength: string;
    genres: string[];
    nameRu: string
    posterUrl: string
    posterUrlPreview: string
    rating: string;
    ratingVoteCount: number;
    year: string;
}
