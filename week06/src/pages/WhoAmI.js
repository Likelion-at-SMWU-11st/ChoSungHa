import React from 'react';
import Logo from './Logo';
import Posting from './Posting';
import Contents from './Contents';
import Buttons from './Buttons';
import Comment from './Comment';
import Reply from './Reply';

const WhoAmI = () => {
    return (
        <>
    <img src="back.jpg" id="back"/>
    <img src="settings.jpg" id="settings"/>
    <Logo/>
    <Posting/>
    <Contents/>

    <Buttons/>
    <hr/>
    <Comment/>
    <Reply/>
    </>
    );
};

export default WhoAmI;