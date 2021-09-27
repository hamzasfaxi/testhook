import React from 'react';
import './App.css';
import { v4 as uuidv4} from "uuid";
import MovieList from './component/movieList';
import { Modal } from 'reactstrap';



class App extends React.Component {
  state = {
    movies : [
       {
        id: uuidv4(),
        name: "Justice League: Snyder Cut",
        image: " https://fr.web.img6.acsta.net/pictures/21/04/07/10/59/5550346.jpg",
        rating : 4,
        year : 2021,
        
        },

        {
             id: uuidv4(),
        name: "joker",
        image: "https://fr.web.img6.acsta.net/pictures/19/09/03/12/02/4765874.jpg",
        rating : 5,
        year : 2019,
        
        },

  {
             id: uuidv4(),
        name: "Star wars : the rise of SKYWALKER",
        image: "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_.jpg",
        rating : 7,
        year : 2019,
        
        },

  {
             id: uuidv4(),
        name: " Avengers : Endgame",
        image: "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
        rating : 7,
        year : 2019,
        
        
        }
    ]
  };
  add = (newMovie) => {
    this.setState({
      movies : this.state.movies.concat(newMovie),
    });
  };

  render(){
    return (
    <div className="App">
      <header className="App-header">
        <h1>Movie App</h1>
        <MovieList movies={this.state.movies} />
        <button onClick="">+</button>
        <Modal/>
      </header>
    </div>
  );

  }
}
  


export default App;
