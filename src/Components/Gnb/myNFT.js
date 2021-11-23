import styled from "styled-components";
import React, { useState, useEffect } from "react";


function MyNFT() {

    return (
        <Container className="Container">
            <Contents>
                <div className="Text_Style_17">주문확인</div>
                <div className="top">
                    <img className="collectionImg" src="collection1.png" />
                    <div className="info">
                        <div className="Text_Style_18" style={{ marginBottom: "8px" }}>작가명</div>
                        <div className="Text_Style_19" style={{ marginBottom: "23px" }}>작품명 작품명 작품명</div>
                        <div style={{ display: "flex" }}>
                            <div className="Text_Style_20"> 구매 갯수 </div>
                            <div className="Text_Style_21">4</div>
                        </div>
                    </div>
                </div>

                <div style={{ borderBottom: "1px dashed #9E9E9E" }}></div>
                <div className="price">

                    <div className="Text_Style_22">총 결제 가격</div>
                    <div className="Text_Style_23">₩ 100,000</div>
                </div>
                <div className="Text_Style_24">
                    <br />NFT를 구매하신 모든분께 드리는
                    <br />사은품 수령을 위해 주소를 적어 주세요
                </div>

                <div className="recipient">
                    <div className="Text_Style_22">수령인*</div>
                    <input className="nameInput"></input>
                </div>
                <div className="address">
                    <div className="Text_Style_22">배송지명*</div>
                    <input className="addressInput"></input>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "220px",
                        height: "72px",
                        backgroundColor: "#E64724",
                        borderRadius: "4px"
                    }}>
                        <div className="Text_Style_25">우편번호 검색</div>
                    </div>
                </div>
                <div className="detail">

                    <input className="detailInput"></input>
                    <input className="detailInput"></input>
                </div>
                <div className="contact">

                    <div className="Text_Style_22">연락처 1*</div>
                    <input className="contactInput" />
                    <input className="contactInput"></input>
                    <input className="contactInput"></input>
                </div>

                <div className="button">
                    <div className="Text_Style_26">결제하기</div>
                </div>
            </Contents>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  width: 720px;
  height: 96%;
  gap: 20px 0;
  flex-direction: column;
  align-items: center;

`;
const Contents = styled.div`
  padding: 35px 59px;
  box-sizing: border-box;
  position: absolute;
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 672px;
  left: 26px;
  top: 30px;
  height: inherit;
  border-radius: 10px;

        .top{
            display:flex;
        }
        .info{
            flex-direction:column;
            justify-content: center;
            align-items: flex-start;
        }
        .collectionImg{
            width:150px;
            height:146px;
            padding:35px 30px 53px 0px;
        }
        .price{
            display:flex;
            justify-content: flex-end;
             align-items: flex-start;
             margin:14px 14px 76px 0px;
             gap:33px;
        }
    

         .recipient{
            display:flex;
            margin-top: 70px;
            justify-content: space-between;
            align-items: center;
            .nameInput{
                width:450px;
                height:72px;
 }}
        .address{
            display:flex;
            align-items: center;
            margin:15px 0px;
            gap:8px;
            .addressInput{
                width:220px;
                height:72px;
            }
            .searchCode{
                width:220px;
                height:72px;
                background-color: #E64724;
            }
        }
        .detail{
            display:flex;
            flex-direction:column;
            align-items: flex-end;
            gap:15px;
            .detailInput{
                width:450px;
                height:72px;
            }

        }
        .contact{
            display:flex;
            align-items: center;
            justify-content: space-between;
            margin: 15px 0px 60px 0px;
            .contactInput{
                width:135px;
                height:72px;
            }
        }
        .button{
            display:flex;
            width:100%;
            height:113px;
            background: #E64724;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
            align-items: center;
            justify-content: center;
        }
`;
const AgreeButtonWrapper = styled.div`
  padding-top: 31px;
  display: flex;
  justify-content: center;
`;
const AgreeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 443px;
  height: 68px;
  background:  #eb4632;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  color: #000000cc;
`;
export default MyNFT;
