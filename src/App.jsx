import { useEffect, useState } from "react";
import "./App.css";
import { getMovieList } from "./utils/api";

function App() {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const movies = await getMovieList();
            setPopularMovies(movies);
        };
        fetchMovies();
    }, []);

    const PopularMovieList = () => {
        return popularMovies.map((movie, i) => {
            return (
                <div className="movie-wrapper" key={i}>
                    <div className="movie-content">
                        <div className="movie-image">
                            <img src={`${import.meta.env.VITE_APP_BASEIMGURL}/${movie.poster_path}`} alt="" />
                        </div>
                        <div className="movie-title">
                            <p>{movie.title}</p>
                        </div>
                        <div className="movie-date">
                            <p>{movie.release_date}</p>
                        </div>
                    </div>
                </div>
            );
        });
    };

    const search = (keyword) => {
        console.log(keyword);
    };

    // console.log(popularMovies[0]);

    return (
        <>
            <div className="movie-container">
                <h1>React Movie App</h1>
                <div className="movie-search">
                    <input
                        type="text"
                        placeholder="Search movie..."
                        onChange={({ target }) => {
                            search(target.value);
                        }}
                    />
                </div>
                <PopularMovieList />
            </div>
        </>
    );
}

export default App;
