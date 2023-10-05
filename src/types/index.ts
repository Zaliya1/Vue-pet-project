export type QueryParamsType = {
    platform?: 'pc' | 'browser' | 'all';
    category?: string;
    'sort-by'?: 'release-date' | 'popularity' | 'alphabetical' | 'relevance';
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
