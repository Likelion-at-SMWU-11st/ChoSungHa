import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './hw.css';

const MovieList =()=> {
    const [movies, setMovies] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:8000/movies')
        .then(response=> {
            setMovies(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <div id="movie">
            <h1>영화 리스트🎬</h1>
            <ul>
                {movies.map(movie=> (
                    <li key={movie.id}>
                        <img width="180" height="240" src={movie.poster} />
                        <h3>{movie.title}</h3>
                        <p>{movie.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;