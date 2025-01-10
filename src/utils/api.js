import axios from "axios";

const options = {
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
    },
};

export const getMovieList = async () => {
    const movie = await axios.get(`${import.meta.env.VITE_APP_BASEURL}/movie/popular`, options);

    return movie.data.results;
};

export const searchMovies = async (keywords) => {
    const search = await axios.get(`${import.meta.env.VITE_APP_BASEURL}/search/movie?query=${keywords}`, options);

    return search.data.results;
};
