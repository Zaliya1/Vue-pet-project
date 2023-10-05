export interface Book {
    authors: string[];
    characters: string[];
    country: string;
    isbn: string;
    mediaType: string;
    name: string;
    numberOfPages: number
    povCharacters: string[];
    publisher: string;
    released: string;
    url: string;

}
export interface IBook extends Book {
    id: string;
}
export type QueryParamsType = {
    platform?: 'pc' | 'browser' | 'all';
    category?: string;
    'sort-by'?: 'release-date' | 'popularity' | 'alphabetical' | 'relevance';
}
