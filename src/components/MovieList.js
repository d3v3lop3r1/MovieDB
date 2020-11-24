import React from 'react';




const MovieList = props =>{
        if (props.movies.status===200){
            if(props.movies.data.Response==="True"){
                return(
                    props.movies.data.Search.map((movie)=>{
                        return (
                            <div className="container" key={movie.imdbID}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="image">
                                            <img  className="ui tiny image" src={movie.Poster} alt={movie.Title} />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <button onClick={e=>props.onSelect(movie.imdbID)}><h4>{movie.Title}</h4></button>
                                        <div>
                                            Típus: {movie.Type}<br/>
                                            Év: {movie.Year}<br/>
                                            imdbID: {movie.imdbID}<br/>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )

                    })
            ) 
            }else {
            return <h4>Nem találom a keresett filmet!</h4>
            }
        } else{
            return <h4>Nincs még keresett elem!</h4>
        }
};

export default MovieList ;