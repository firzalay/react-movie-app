import "./App.css";

function App() {
    return (
        <>
            <div className="movie-container">
                <h1>React Movie App</h1>
                <div className="movie-search">
                    <input type="text" placeholder="Search movie..." />
                </div>
                <div className="movie-wrapper">
                    <div className="movie-content">
                        <div className="movie-image">
                            <img src="https://picsum.photos/720/1280" alt="" />
                        </div>
                        <div className="movie-title">
                            <p>Helldrivers 2</p>
                        </div>
                        <div className="movie-date">
                            <p>05 May 2017</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
