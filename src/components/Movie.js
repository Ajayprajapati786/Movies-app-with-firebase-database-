import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {



  const deleteMovies = async (movieId) => {
    try {
      const response = await fetch(`https://react-http-d8382-default-rtdb.firebaseio.com/movies/${movieId}.json`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      window.location.reload();

    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <>
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <p>{props.id}</p>
    </li>
      <button onClick={()=>deleteMovies(props.id)}>Delete</button>
      <hr/>
      </>

  );
};

export default Movie;
