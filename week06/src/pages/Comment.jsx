import React from 'react';
import './Comment.css';

const Comment = () => {
    return (
        <div>
            <img id="img2" src="profile.jpg"/>
            <p id="c1">익명1</p>
            <img id="feedback" src="feedback.jpg"/>
            <p id="c2">정규세션은 매주 대면으로 진행되나요?</p>
            <p id="c3">07/30 23:41</p>
        </div>
    );
};

export default Comment;