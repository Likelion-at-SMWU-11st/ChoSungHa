import React from 'react';
import Hello from './Hello';
import Intro from './Intro';
import Emoji from './Emoji';
import Counter from './Counter';
import MovieList from './MovieList';
import SongList from './SongList';

const Home = () => {
    return (
    <>
    <Intro who="아기사자" emoji="✨"/>
    <Emoji/>
    <Counter/>
    <MovieList />
    <SongList />
    </>
    );
};

export default Home;