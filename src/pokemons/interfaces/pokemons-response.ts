export interface Result {
    name: string;
    url: string;
}

export interface PokemonsResponse {
    count: number;
    next: string;
    previous: null;
    results: Result[];
}
