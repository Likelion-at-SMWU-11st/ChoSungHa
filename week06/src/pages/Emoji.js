import React, { useState, useEffect } from 'react';

const Emoji =() => {
    const [state, setState] = useState('아기사자 성하🙀');

    useEffect(() => {
        console.log('useEffect를 이용하여 Emoji 바꾸기!');
    }, [state]);

    return (
        <div id="emoji">
            <h1>{state}</h1>
            {/* setState를 사용하여 state의 값 변경*/}
            <button id="btn1" onClick={() => setState('어른사자 성하🦁')}>성장하기</button>
        </div>
    );
};

export default Emoji;