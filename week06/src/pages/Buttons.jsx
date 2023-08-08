import React from 'react';
import styled from "styled-components";

const LikeButton = styled.button `
padding : 10px 10px;
width : 70px;
height : 40px;
border-radius : 8px;
font-size : 1rem;
font-weight:bold;
margin : 5px;
border : white;
color : #6B6B6B;
background : #F20F20F20;
margin-left : 26%;
`;

const ScrapButton = styled.button `
padding : 10px 10px;
width : 70px;
height : 40px;
border-radius : 8px;
font-size : 1rem;
font-weight:bold;
margin : 5px;
border : white;
color : #6B6B6B;
background : #F20F20F20;

display : inline-block;
`;

const Buttons = () => {
    return (
        <div>
            <LikeButton>공감</LikeButton>
            <ScrapButton>스크랩</ScrapButton>
        </div>
    );
};

export default Buttons;