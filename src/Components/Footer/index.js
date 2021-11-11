import styled from "styled-components";
import React, { useState, useEffect } from "react";

function Footer() {
    return (
        <Container>
            <div>
                <Logo src="Footer_logo.png" />
            </div>
            <InfoWrapper>
                <Info>주식회사 아트비</Info>
                <Info>서울시 강남구 삼성동 봉은사로410 라마다호텔 별관 1층</Info>
                <Info>전화번호 02-552-2038</Info>
                <Info>사업자등록번호 521-88-02293</Info>
            </InfoWrapper>
        </Container>
    )
}
const Container = styled.div`
width:100%;
height: 100px;
background-color:#111111;
z-index: 1;
display:flex;
justify-content: space-around;
align-items: center;
`
const InfoWrapper = styled.div`

`
const Info = styled.div`
color:#8C8C8C;
`
const Logo = styled.img`
width:150px;
`
export default Footer;