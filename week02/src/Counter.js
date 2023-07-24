import React, { useState, useEffect } from 'react';

const Counter =() => {
    const [state, setState] = useState('🍀');

    useEffect(() => {
        console.log('useEffect 실행!');
    }, [state]);

    return (
        <div id="counter">
            <h1>{state}</h1>
            {/* setState를 사용하여 state의 값을 1씩 증가시킴*/}
            <button id="btn2" onClick={() => setState(state+'🍀')}>행운 나눔</button>
        </div>
    );
};

export default Counter;