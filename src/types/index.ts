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
    imdbId: number | null;
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
