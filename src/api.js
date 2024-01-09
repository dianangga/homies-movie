import axios from "axios";


export const getMovieTopRatedList = async () => {
    const movie = await axios.get(`${process.env.REACT_APP_BASE_URL}/movie/top_rated?page=1&api_key=${process.env.REACT_APP_API_KEY}`)
    return movie.data.results
}

export const getSearchMovieTopRatedList = async (target) => {
    const search = await axios.get(`${process.env.REACT_APP_BASE_URL}/search/movie?page=1&query=${target}&api_key=${process.env.REACT_APP_API_KEY}`)
    console.log(target)
    return search.data
}