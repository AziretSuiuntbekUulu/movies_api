export default class MovieService {
    
    async getResource(url) {
        const res = await fetch(url);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
        }

        return await res.json();
    }

    async getMovie() {
        await fetch(`https://api.themoviedb.org/3/search/movie?api_key=05e95f40431909703294af8aa788da5d&query=return`)
        .then((res) => res.json())
        .then((date) => console.log(date.results));
    }
}