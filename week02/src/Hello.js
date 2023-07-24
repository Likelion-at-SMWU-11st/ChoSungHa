import React from 'react';

function Hello({color, name}) {
    return <div id="hello" style={{color}}><h1>안녕하세요 {name}</h1></div>
}

export default Hello;