import styled from "styled-components";
import React, { useState, useEffect } from "react";

import { UpDownButton, RectButton } from "../../Common/button";
import Line from "../../Common/line";

function NftDetail(props) {
  const datas = {
    id: props.match.params.id,
    src: "/desc_sample.png",
    title: "가을축제",
    artist: "남관",
    year: 1984,
    width: 200,
    height: 300,
    tech: "Oil painting",
    blockChain: "Etehreum ERC-1155 (OpenSea)",
    contract: "0x495f947276749ce646f68ac8c248420045cb7b5e",
    manageNo: "0x8998f4097170970bA9D5Ef07A0D703c37f2D5657",
    register: "0x8998f4097170970bA9D5Ef07A0D703c37f2D5657",
    remain: 39123,
    total: 100000,
    price: 100000,
    fees: 15000
  };
  const [amount, setAmount] = useState(0);

  return (
    <Container>
      <TopArea>
        <TopContainer>
          <ArtsImg src={datas.src} />
          <DescCard />
        </TopContainer>
      </TopArea>
      <BottomArea>
        <BottomGray />
      </BottomArea>
    </Container>
  );

  function DescCard(props) {
    const tableBody = [];
    const tableHeaders = [
      "아티스트", "작품년도", "작품크기", "작품기법", "Blockchain", "Contract", "작품 관리번호", "등록자"
    ];
    const tableDatas = [
      datas.artist, `${datas.year} 년도`, `${datas.width}x${datas.height}(cm)`, datas.tech, datas.blockChain, datas.contract, datas.manageNo, datas.register
    ];

    for (let i = 0; i < tableHeaders.length; i++) {
      tableBody.push(
        <TableRow style={{ margin: (i !== tableHeaders.length - 1 ? "0 0 8px 0" : "") }} >
          <TableHeader>{tableHeaders[i]}</TableHeader>
          <TableData>{tableDatas[i]}</TableData>
        </TableRow>
      );
    }    

    return (
      <Card>
        <CardBox>
          <CardTitle>{datas.title}</CardTitle>
          <Desc />
          <Quantity />
          <Line color="#EEEEEE" />
          <Price />
          <ButtonBar />
        </CardBox>
      </Card>
    );

    function Desc() {
      return (
        <DescBox>
          <DescTable>
            {tableBody}
            <StatusBox>
              <StatusData>
                <Gem src="/gem_black.svg" />
                <StatusHeader>잔여수량 / 총 발행량</StatusHeader>
              </StatusData>
              <StatusData>
                <RemainText>{Intl.NumberFormat().format(datas.remain)}</RemainText>
                <DivideText>/</DivideText>
                <TotalText>{Intl.NumberFormat().format(datas.total)} (NFT)</TotalText>
              </StatusData>
            </StatusBox>
          </DescTable>
        </DescBox>
      );
    }

    function Quantity() {
      return (
        <QuantityBar>
          <QuantityText>구매 수량</QuantityText>
          <UpDownButton
            width={360}
            height={40}
            amount={amount}
            setAmount={setAmount}
            minusSrc="/minus_btn.svg"
            plusSrc="/plus_btn.svg"
            textStyle={{
              display: "flex",
              width: "280px",
              height: "40px",
              fontFamily: "Spoqa Han Sans Neo",
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "20px",
              letterSpacing: "-0.02em",
              background: "#FFFFFF",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #CBCBCB",
              boxSizing: "border-box"
            }}
            btnBoxStyle={{ width: 40, height: 40, bdColor: "#CBCBCB", bgColor: "#FFFFFF" }}
            btnStyle={{ width: 16, height: 16 }} />
        </QuantityBar>
      );
    }

    function Price() {
      return (
        <PriceBox>
          <PriceDesc>NFT 작품 3개 이상 구매할 경우 수수료 무료</PriceDesc>
          <PriceRow style={{ margin: "0 0 8px 0" }}>
            <PriceHeader>NFT 금액</PriceHeader>
            <PriceData>{Intl.NumberFormat().format(datas.price)}원</PriceData>
          </PriceRow>
          <PriceRow style={{ margin: "0 0 8px 0" }}>
            <PriceHeader>이더리움 네트워크 수수료</PriceHeader>
            <PriceData>{Intl.NumberFormat().format(datas.fees)}원</PriceData>            
          </PriceRow>
          <PriceRow>
            <PriceTitle>총 결제 금액</PriceTitle>
            <PriceTitle>{Intl.NumberFormat().format(datas.price + datas.fees)}원</PriceTitle>            
          </PriceRow>          
        </PriceBox>
      );
    }

    function ButtonBar() {
      return (
        <ButtonBox>
          <RectButton width="60" height="60" onClick={() => alert("favorite")} bdColor="#CBCBCB" bgColor="#FFFFFF" btnStyle={{ borderRadius: "5px" }} >
            <Favorite src="/favorite.svg" />
          </RectButton>
          <RectButton width={430} height={60} bgColor="#FF3D21" src={`/payment/${datas.id}`}
            btnStyle={{
              fontFamily: "Spoqa Han Sans Neo", fontSize: "16px", fontWeight: "700", lineHeight: "24px", letterSpacing: "-0.02em", borderRadius: "5px", color: "#FFFFFF"
            }} >NFT 구매</RectButton>
        </ButtonBox>
      );
    }
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1978px;
`

const TopArea = styled.div`
  display: flex;
  height: 954px;
  background-image : url(/detail_bg.png);
`

const TopContainer = styled.div`
  display: flex;
  width: 100%;
  height: 954px;
  flex-direction: row;
  background: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
`

const BottomArea = styled.div`
  display: flex;
  height: 1024px;
`

const ArtsImg = styled.img`
  width: 680px;
  height: 680px;
  filter: drop-shadow(0px 40px 40px rgba(0, 0, 0, 0.07)) drop-shadow(0px 40px 30px rgba(0, 0, 0, 0.0503198)) drop-shadow(0px 20px 20px rgba(0, 0, 0, 0.04)) drop-shadow(0px 12px 10px rgba(0, 0, 0, 0.03)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.04)) drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.0196802));
  margin: 0 40px 0 0;
`

const Card = styled.div`
  display: flex;
  width: 580px;
  height: 808px;  
  background: #FFFFFF;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`

const CardBox = styled.div`
  display: flex;
  margin: 40px 40px;
  flex-direction: column;
`

const CardTitle = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 36px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -0.02em;
  color: #000000;
  margin: 0 0 20px 0;
`

const DescBox = styled.div`
  display: flex;
  width: 500px;
  height: 336px;  
  background: #FAFAFA;
  border-radius: 10px;
  flex-direction: column;
`

const DescTable = styled.div`
  display: flex;
  margin: 20px 20px;
  flex-direction: column;
`

const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const TableHeader = styled.div`
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.02em;
`

const TableData = styled.div`
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
`

const StatusBox = styled.div`
  display: flex;
  width: 460px;
  height: 60px;
  background: #FFFFFF;
  border-radius: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0;
`

const StatusData = styled.div`
  display: flex;
  margin: 20px 20px;
  flex-direction: row;
  align-items: center;
`

const Gem = styled.img`
  display: flex;
  width: 14px;
  height: 14px;
  margin: 0 11px 0 0;
`

const StatusHeader = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  color: #303030;
`

const RemainText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  color: #303030;
`

const DivideText = styled.span`
  display: flex;
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  margin: 0 4px;
`

const TotalText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  color: #656565;
`

const QuantityBar = styled.div`
  display: flex;
  margin: 20px 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const QuantityText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.02em;
`

const PriceBox = styled.div`
  display: flex;
  width: 500px;
  height: 144px;
  flex-direction: column;
  margin: 0 0 20px 0;
`

const PriceRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const PriceDesc = styled.span`
  display: flex;
  height: 44px;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #E6381F;
  background: #FBF6F5;
  border-radius: 5px;  
  justify-content: center;
  align-items: center;
  margin: 0 0 8px 0;
`

const PriceHeader = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #656565;
`

const PriceData = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.02em;
`

const PriceTitle = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.04em;
  color: #000000;
`

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Favorite = styled.img`
  display: flex;
  width: 40px;
  height: 40px;
`

const BottomGray = styled.div`
  position: relative;
  width: 680px;
  height: 865px;
  left: 310px;
  top: 79px;    
  background: #E6E6E6;
`

export default NftDetail;