import styled from "styled-components";
import React, { useState, useEffect } from "react";

function Footer() {
    return (
        <Container>
            <div>
                <Logo src="Footer_logo.png" />
            </div>
            <InfoWrapper>
                <Info>{"법인명 : 아트비글로벌(주)"}</Info>
                <Info>{"사업자 등록 번호 : 521-88-02293"}</Info>
                <Info>{"주소 : 서울특별시 송파구 백제고분로24길 16, 101호"}</Info>
                <Info>{"대표자 : 이건용"}</Info>
                <Info>{" 대표번호 : 02-552-2038"}</Info>

            </InfoWrapper>
        </Container>
    )
}
const Container = styled.div`
width:100%;
height: 120px;
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