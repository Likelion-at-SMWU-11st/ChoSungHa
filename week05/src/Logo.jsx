import React from 'react';
import styled from "styled-components";

const StyledLogo = styled.p `
padding-top : 10px;
padding-bottom : 0px;
font-size : 20px;
font-weight:bold;
text-align: center;
margin-top: 5px;
margin-bottom: 0px;
color : black;
background-color: white;
margin-left : 0px;
`;

const StyledSemi = styled.p `
font-size:18px;
text-align : center;
color : grey;
margin-top : 0px;
padding-top : 0px;
margin-left : 0px;
`;

const Logo = () => {
    return (
        <div>
            <StyledLogo>홍보게시판 </StyledLogo>
            <StyledSemi>숙명여대</StyledSemi>
        </div>

    );
};

export default Logo;
