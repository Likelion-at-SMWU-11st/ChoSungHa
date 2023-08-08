import React from 'react';

function Intro({who, emoji}) {
    return <div id="intro"><h1>{emoji}{who}가 말아주는 리스트 맛집{emoji}</h1></div>
}

export default Intro;