import styled from "styled-components";
import { React, useState } from 'react'

function WalletConnect({ setWalletPopup }) {
    return (
        <Container>
            <div className="background"
                onClick={() => {

                }}
            ></div>
            <div className="modal2">
                <div className={"Text_Style_14"} style={{ paddingBottom: "20px" }}>
                    <br />NFT 수령을 위해
                    <br />METAMASK 지갑 연결이 필요합니다
                </div>
                <div className={"Text_Style_16"} style={{ paddingBottom: "50px" }}>
                    <br />왜 메타마스크가 필요한가요?
                    <br />
                    <br />메타마스크란 개인지갑을 편리하고 안전하게 관리할수
                    <br />있는 암호화폐 지갑입니다. 프라이빗 키(private key)를
                    <br />생성해주기에 여러분의 NFT 보안을 위해 메타마스크
                    <br />지갑연결이 필요합니다.
                </div>
                <Button
                    className={"Text_Style_15"}
                    onClick={() => { setWalletPopup(false) }}
                >지갑 연결</Button>
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
    /* opacity: 75%; */
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
    height: 536px;
    background-color:white;
    border-radius: 10px ;
    opacity: 1.0;
    animation-duration:0.5s;
    animation-timing-function:ease-out;
    padding:30px 0px;
    box-sizing: border-box;
    align-items: center;
}
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
export default WalletConnect;


