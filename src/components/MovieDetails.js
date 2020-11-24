import React from 'react';

const MovieDetails = movie =>{
        if (movie.selectedMovie.status===200){
            const m=movie.selectedMovie.data;
            console.log(m);
            if(m.Response==="True"){
                return(
                    <div className="container"   key={m.imdbID}>
                    <div className="row">
                            <div className="col-sm-12 col-md-4">
                                <div className="ui segment">
                                    <span className="ui orange left ribbon label">{m.Runtime}</span>
                                    <img  className="ui centered fluid image" src={m.Poster} alt={m.Title} />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-8">
                                <div className="description">
                                    <table className="ui selectable inverted table">
                                        <thead>
                                            <tr>
                                                <th colSpan="2">{m.Title}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Értékelés</td>
                                                <td>{m.imdbRating}</td>
                                            </tr>
                                            <tr>
                                                <td>Műfaj</td>
                                                <td>{m.Genre}</td>
                                            </tr>
                                            <tr>
                                                <td>Kiadás éve</td>
                                                <td>{m.Year}</td>
                                            </tr>
                                            <tr>
                                                <td>Rendező</td>
                                                <td>{m.Director}</td>
                                            </tr>
                                            <tr>
                                                <td>Szereplők</td>
                                                <td>{m.Actors}</td>
                                            </tr>
                                            <tr>
                                                <td>Díjak</td>
                                                <td>{m.Awards}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="ui message">
                                        <div className="header">
                                        Leírás
                                        </div>
                                        <p>{m.Plot}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        )

            }else {
                return (
                    <div className="ui negative message">
                        <div className="header">
                            Hiba a keresésben!
                        </div>
                        <p>Sajnos a kiválasztott film adatait nem tudjuk megjeleníteni!</p>
                    </div>
                )
            }
        } else{
            return (
                <div className="ui negative message">
                    <div className="header">
                        Nincs még kiválasztott film!
                    </div>
                    <p>Kérlek válassz ki egy filmet!</p>
                </div>
            )
    }
};

export default MovieDetails ;