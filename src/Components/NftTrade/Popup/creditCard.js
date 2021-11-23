import styled from "styled-components";
import { React, useState } from 'react'

function CreditcardPopup({ setWalletPopup }) {
    return (
        <Container>
            <div className="background"
                onClick={() => {

                }}
            ></div>
            <div className="modal2">
                <Message1 className={"Text_Style_14"}>카드결제는 아직 준비중 입니다</Message1>
                <Button
                    className={"Text_Style_15"}
                    onClick={() => { setWalletPopup(false) }}
                >확인</Button>
            </div>
        </Container >
    )
}
const Container = styled.div`
.background{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 75%;
    z-index: 2;
    animation-duration:0.5s;
    animation-timing-function:ease-out;
}
.modal2{
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    width: 596px;
    height: 368px;
    background-color:white;
    border-radius: 10px ;
    opacity: 1.0;
    animation-duration:0.5s;
    animation-timing-function:ease-out;
    padding:40px 0px;
    box-sizing: border-box;
    align-items: center;
}
`
const Message1 = styled.div`
padding:40px 0px 126px 0px;
`
const Button = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 443px;
height: 68px;
cursor: pointer;
background: rgba(230, 71, 36, 0.8);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
border-radius: 10px;
`
export default CreditcardPopup;


