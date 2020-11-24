import React from 'react';
import omdb from '../apis/omdb';
import Searchbar from './searchBar';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';

class App extends React.Component{
    state = { movies: {status:null},selectedMovie: {status:null} };

    onSearchSubmit = async term => {
        const response = await omdb.get('/',{
            params: {s: term}
        });
        this.setState({movies:response});
    };

    onMovieSelect = async selected =>{
        const selectedMovie = await omdb.get('/',{
            params: {i: selected, plot: 'full'}
        }); 
        this.setState({selectedMovie:selectedMovie});
   };
    
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Searchbar onSubmit={this.onSearchSubmit} />
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="sticky-top">
                            <MovieDetails selectedMovie={this.state.selectedMovie} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="ui inverted segment">
                            <div className="ui inverted relaxed divided list">
                                <MovieList movies={this.state.movies} onSelect={this.onMovieSelect} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        ) 
    }
}

export default App;