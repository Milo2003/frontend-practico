import { useEffect, useState } from "react"

const API_KEY = '5ffd7638'
export const useFetchMovies = (searchValue) => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const data = await fetch(`https://www.omdbapi.com/?apiKey=${API_KEY}&s=${searchValue}`)
            const response = await data.json()
            setMovies(response.Search)
        }
        fetchData()
    }, [searchValue])
    return {
        movies,
    }
}
