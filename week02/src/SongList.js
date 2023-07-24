import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './hw.css';

const SongList =()=> {
    const [songs, setSongs] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:8000/songs')
        .then(response=> {
            setSongs(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <div id="song">
            <h1>노래 리스트🎧</h1>
            <ul>
                {songs.map(song=> (
                    <li key={song.id}>
                        <iframe src={song.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>
                        <h3>{song.title}</h3>
                        <p>{song.artist}</p>
                        <p>{song.lyrics}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SongList;