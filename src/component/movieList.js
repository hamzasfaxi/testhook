import React from "react";
import Card from 'react-bootstrap/Card'
import StarRatingComponent from "react-star-rating-component";

const MovieList = (props) => {
    return(
      <div className="movielist">
         {props.movies.map(el => (
        <div className="movie">
          <Card style={{ width: '18rem' }}>
  <Card.Img className="cardimg" variant="top" src={el.image} />
  <Card.Body>
    <Card.Title>{el.name}</Card.Title>
    <Card.Text>{el.year}</Card.Text> 
    <StarRatingComponent value={el.rating} starCount ={5} />
    
  </Card.Body>
</Card>
             
             
          </div>))}
        </div>

    )
}


export default MovieList ;