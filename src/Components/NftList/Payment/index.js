import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Line from "../../Common/line";
import { RectButton, UpDownButton } from "../../Common/button";
import { ABLabel, ABInput, ABCheckBox, ABRadio } from "../../Common/form";
import { Popup } from "../../Common/popup";

function Payment(props) {
  const history = useHistory();
  const [amount, setAmount] = useState(1);
  const [fees, setFees] = useState(15000);
  const [agree, setAgree] = useState(false);
  const [deliverySw, setDeliverySw] = useState(0);
  const [popup, setPopup] = useState({
    flag: false,
    warn: false,
    title: '',
    subtitle: ''
  });
  const myData = {
    address: '',
    autoSave: false,
    agree: false,
    delivery: {
      name: "김성함",
      phone: "01012345678",
      post: "19982",
      addr1: "서울시 무슨구 무슨동 125-54번지",
      addr2: "무슨오피스텔 204호"
    }
  }
  const [deliveryInfo, setDeliveryInfo] = useState(myData.delivery);  

  const closeCallback = () => {
    setPopup({
      flag: false,
      warn: false,
      title: "",
      subtitle: ""
    });
  }

  const validForm = () => {
    if (0 < deliveryInfo.name.length &&
      0 < deliveryInfo.phone.length &&
      0 < deliveryInfo.post.length &&
      0 < deliveryInfo.addr1.length &&
      0 < deliveryInfo.addr2.length)
      return true;
    else
      return false;
  }

  const toPay = (e) => {
    if (agree !== true) {
      setPopup({
        flag: true,
        warn: true,
        title: "유의사항 동의 필요",
        subtitle: "유의사항에 동의해주시기 바랍니다."
      });      
    }
    else if( validForm() === false ) {
      setPopup({
        flag: true,
        warn: true,
        title: "입력사항 확인 필요",
        subtitle: "입력사항을 확인해주시기 바랍니다."
      });            
    }
    else
      history.push("/complete/1");
  }

  const setWalletAddress = (value) => {
    myData.address = value;
  }

  const setAutoSave = (value) => {
    myData.autoSave = value;
  }

  const setRadio = (value) => {
    setDeliverySw(value);

    if (value === 0) {
      setDeliveryInfo(myData.delivery);
    }
    else {
      setDeliveryInfo({
        name: "",
        phone: "",
        post: "",
        addr1: "",
        addr2: ""
      })
    }
  }

  const setDeliveryName = (value) => {
    deliveryInfo.name = value;
  }

  const setDeliveryPhone = (value) => {
    deliveryInfo.phone = value;
  }

  const setDeliveryPost = (value) => {
    deliveryInfo.post = value;
  }

  const setDeliveryAddr1 = (value) => {
    deliveryInfo.addr1 = value;
  }

  const setDeliveryAddr2 = (value) => {
    deliveryInfo.addr2 = value;
  }  

  const setAgreeCallback = (value) => {
    myData.agree = value;
    setAgree(value);
  }

  const datas = {
    id: props.id,
    artist: "남관",
    title: "가을축제",
    thumbnail: "/sample.png",
    price: 100000,
    fees: 15000,
  }

  return (
    <Container>
      {popup.flag ? <Popup onClose={closeCallback} warn={popup.warn} title={popup.title} subtitle={popup.subtitle}/> : <></> }
      <PaymentArea>
        <LocationBar />
        <OrderInfo />
        <MidArea>
          <PaymentDetail />
          <PaymentInfo />
        </MidArea>
      </PaymentArea>
    </Container>
  );

  function LocationBar() {
    return (
      <LocationArea>
        홈
        <CaretRight />
        NFT 리스트
        <CaretRight />
        결제
      </LocationArea>
    );
  }

  function changeAmount(amount) {
    if (datas.price * amount >= 150000)
      setFees(0);
    else
      setFees(datas.fees);
    
    setAmount(amount);
  }

  function OrderInfo() {
    return (
      <OrderArea>
        <TitleBox>주문정보</TitleBox>
        <OrderTable>
          <OrderRow style={{ height: "60px", borderTop: "1px solid #303030", background: "#FAFAFA" }}>
            <OrderHeader style={{ width: "660px" }}>NFT 정보</OrderHeader>
            <OrderHeader style={{ width: "160px" }}>NFT 금액</OrderHeader>
            <OrderHeader style={{ width: "160px" }}>이더리움 수수료</OrderHeader>
            <OrderHeader style={{ width: "160px" }}>총 결제 금액</OrderHeader>
            <OrderHeader style={{ width: "160px" }}>구매 수량</OrderHeader>
          </OrderRow>
          <OrderRow style={{ height: "100px", background: "#FFFFFF" }}>
            <ThumbnailData>
              <Thumbnail src="/thumb_sample.png" />
            </ThumbnailData>
            <InfoData>
              <TableSubtitleText>{datas.artist}</TableSubtitleText>
              <TableTitleText>{datas.title}</TableTitleText>
            </InfoData>
            <PriceData>
              <PriceText style={{color: "#303030"}}>{Intl.NumberFormat().format(datas.price*amount)}원</PriceText>
            </PriceData>
            <PriceData>
              <PriceText style={{color: "#656565"}}>{Intl.NumberFormat().format(fees*amount)}원</PriceText>
            </PriceData>            
            <PriceData>
              <PriceBoldText style={{color: "#303030"}}>{Intl.NumberFormat().format((datas.price+fees)*amount)}원</PriceBoldText>
            </PriceData>            
            <PriceData>
              <UpDownButton
                amount={amount}
                setAmount={changeAmount}
                width={120}
                height={40}
                minusSrc="/minus_btn.svg"
                plusSrc="/plus_btn.svg"
                textStyle={{
                  display: "flex",
                  width: "40px",
                  height: "40px",
                  fontFamily: "Spoqa Han Sans Neo",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "20px",
                  letterSpacing: "-0.02em",
                  background: "#FFFFFF",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #C5C5C5"
                }}
                btnBoxStyle={{ width: 40, height: 40, bgColor: "#FFFFFF", bdColor: "#C5C5C5" }}
                btnStyle={{ width: 16, height: 16 }}
              />    
            </PriceData>
          </OrderRow>
          <OrderRow style={{ height: "44px", background: "#FAFAFA", justifyContent: "center" }}>
            <OrderTail>NFT 금액이 15만원 이상일 경우 수수료 무료</OrderTail>
          </OrderRow>          
        </OrderTable>
      </OrderArea>
    );
  }

  function PaymentDetail() {
    return (
      <DetailArea>
        <Wallet />
        <Delivery />
        <Method />
      </DetailArea>
    )
  }

  function Wallet() {
    return (
      <WalletArea>
        <TitleBox>NFT 지갑 주소</TitleBox>
        <ABLabel require={true} style={{ margin: "0 0 4px 0" }}>NFT 지갑 주소</ABLabel>
        <ABInput require={false} wallet={true} pass={false} width={720} height={52} placeholder="NFT 수령을 받기 위한 지갑 주소를 입력해주세요." onChangeCallback={setWalletAddress} />
        <AutoSaveBox>
          <ABCheckBox checked={false} onChangeCallback={setAutoSave} />
          <TextField style={{margin: "0 0 0 10px"}}>자동저장</TextField>
        </AutoSaveBox>
        <AgreeBox onClick={() => setAgree(!agree)}>
          <AgreeContainer>
            <AgreeHeader>
              <AgreeHeaderText>아래의 유의사항에 동의합니다.</AgreeHeaderText>
              <ABCheckBox checked={agree} onChangeCallback={setAgreeCallback} />
            </AgreeHeader>
            <AgreeDescBox>
              <AgreeDesc>
                <AgreeRow>
                  <AgreeLI />
                  <AgreeText>디지털 자산의 특성상 구매 후 취소할 수 없습니다. 보내기전 주소와 수량을 꼭 확인 하세요.</AgreeText>
                </AgreeRow>
                <AgreeRow>
                  <AgreeLI />
                  <AgreeText>아트비의 NFT는 이더리움 기반(ERC-1155)으로, 이더리움을 지원하는 지갑으로만 수령 가능합니다. 그렇지 않은 지</AgreeText>
              </AgreeRow>
              <AgreeRow>
                  <AgreeLI style={{visibility: "hidden"}}/>
                  <AgreeText>갑으로 송금하는 경우 아트비에서 도와드릴 수 있는 부분이 없습니다.</AgreeText>
              </AgreeRow>
                <AgreeRow>
                  <AgreeLI />
                  <AgreeText>구매 후 NFT 송금 과정은 블록체인 네트워크에서 처리됩니다. 네트워크 상황에 따라 송금이 지연될수 있으며 통상</AgreeText>
                </AgreeRow>
                <AgreeRow>
                  <AgreeLI style={{visibility: "hidden"}}/>
                  <AgreeText>1~3일 정도 소요 됩니다.</AgreeText>
                </AgreeRow>
              </AgreeDesc>
            </AgreeDescBox>
          </AgreeContainer>
        </AgreeBox>
      </WalletArea>
    );
  }

  function TitleBox(props) {
    return (
      <TitleArea>
        <Line color="#FF3D21" align="left" height={4} width={40} lineStyle={{ margin: "0 0 20px 0", borderRadius: "5px" }} />
        <TitleText>{props.children}</TitleText>
      </TitleArea>
    )
  }

  function PaymentInfo() {
    return (
      <CardBox>
        <PaymentInfoArea>
          <TitleBox>결제정보</TitleBox>
          <PaymentInfoBox>
            <PaymentInfoTable>
              <PaymentInfoRow style={{margin: "0 0 10px 0"}}>
                <PaymentInfoHeader>NFT 금액</PaymentInfoHeader>
                <PaymentInfoData>{Intl.NumberFormat().format(datas.price * amount)}원</PaymentInfoData>
              </PaymentInfoRow>
              <PaymentInfoRow style={{margin: "0 0 10px 0"}}>
                <PaymentInfoHeader>이더리움 네트워크 수수료</PaymentInfoHeader>
                <PaymentInfoBold>{Intl.NumberFormat().format((fees) * amount)}원</PaymentInfoBold>
              </PaymentInfoRow>
              <PaymentInfoRow style={{margin: "0 0 10px 0"}}>
                <PaymentInfoHeader>구매 수량</PaymentInfoHeader>
                <PaymentInfoData>{Intl.NumberFormat().format(amount)}</PaymentInfoData>
              </PaymentInfoRow>
              <PaymentInfoRow>
                <PaymentInfoTail>총 결제 금액</PaymentInfoTail>
                <PaymentInfoTail>{Intl.NumberFormat().format((datas.price+fees) * amount)}원</PaymentInfoTail>
              </PaymentInfoRow>
            </PaymentInfoTable>
          </PaymentInfoBox>
          <RectButton onClick={toPay}
            width={460}
            height={60}
            bgColor="#FF3D21"
            btnStyle={{
              fontFamily: "Spoqa Han Sans Neo",
              fontSize: "16px",
              fontWeight: "700",
              lineHeight: "24px",
              letterSpacing: "-0.02em",
              color: "#FFFFFF"
            }} >결제하기</RectButton>
        </PaymentInfoArea>
      </CardBox>      
    );
  }  

  function Method() {
    return (
      <MethodArea>
        <TitleBox>결제수단</TitleBox>
        <ButtonBar>
          <RectButton onClick={() => alert("계좌이체")}
            width={160} height={40} bgColor="#FF3D21" btnStyle={{
            borderRadius: "2px",
            fontFamily: "Spoqa Han Sans Neo",
            fontSize: "14px",
            fontWeight: "700",
            lineHeight: "20px",
            letterSpacing: "0em",
            color: "#FFFFFF",
            margin: "0 10px 0 0"
          }}>계좌이체</RectButton>
          <RectButton onClick={() => { }}
            width={160} height={40} bgColor="#EEEEEE" btnStyle={{
            borderRadius: "2px",
            fontFamily: "Spoqa Han Sans Neo",
            fontSize: "14px",
            fontWeight: "700",
            lineHeight: "20px",
            letterSpacing: "0em",
            color: "#A6A6A6"
          }}>신용카드(준비중)</RectButton>
        </ButtonBar>
      </MethodArea>
    );
  }  

  function Delivery() {
    return (
      <DeliveryArea>
        <TitleBox>
          배송정보
          <DeliverySubtitleText>NFT를 구매하신 모든분께 드리는 사은품 수령을 위해 주소를 적어 주세요</DeliverySubtitleText>
        </TitleBox>
        <ABLabel style={{margin: "20px 0"}}>배송지 선택</ABLabel>
        <ABRadio value={deliverySw} onChangeCallback={setRadio} tags={["회원 정보와 동일", "새로입력"]} />
        <ABLabel require={true} style={{ margin: "34px 0 4px 0" }}>성함</ABLabel>
        <ABInput require={true} charOnly={true} width={720} height={52} placeholder="성함을 입력해 주세요." value={deliveryInfo.name} onChangeCallback={setDeliveryName} />
        <ABLabel require={true} style={{ margin: "20px 0 4px 0" }}>전화번호</ABLabel>
        <ABInput number={true} size={11} require={true} width={720} height={52} placeholder="전화번호를 입력해 주세요." value={deliveryInfo.phone} onChangeCallback={setDeliveryPhone} />
        <ABLabel require={true} style={{ margin: "20px 0 4px 0" }}>주소</ABLabel>
        <PostContainer>
          <ABInput readOnly={true} number={true} require={true} width={636} height={52} placeholder="우편 번호" value={deliveryInfo.post} onChangeCallback={setDeliveryPost} />
          <RectButton width={80} height={52} bgColor="#FF3D21" btnStyle={{
            fontFamily: "Spoqa Han Sans Neo",
            fontSize: "16px",
            fontWeight: "700",
            lineHeight: "24px",
            letterSpacing: "-0.02em",
            color: "#FFFFFF",
            borderRadius: "5px",
            margin: "0 0 0 4px"
          }}>우편번호</RectButton>
        </PostContainer>
        <ABInput require={true} width={720} height={52} placeholder="기본 주소" style={{margin: "10px 0"}} value={deliveryInfo.addr1} onChangeCallback={setDeliveryAddr1} />
        <ABInput require={true} width={720} height={52} placeholder="상세 주소" value={deliveryInfo.addr2} onChangeCallback={setDeliveryAddr2} />
      </DeliveryArea>
    );
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const PaymentArea = styled.div`
  display: flex;
  width: 1300px;
  flex-direction: column;
`

const LocationArea = styled.div`
  display: flex;
  flex-direction: row;
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.02em;
  align-items: center;
  height: 32px;
  margin: 30px 0 40px 0;
  color: #A6A6A6;
`

const CaretRight = styled.img`
  width: 24px;
  height: 24px;
  content:url("/caret_right_gray.svg");
`

const OrderArea = styled.div`
  flex-direction: column;
  margin: 0 0 40px 0;
`

const TitleArea = styled.div`
  display: flex;
  height: 60px;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin: 0 0 20px 0;
`

const TitleText = styled.span`
  display: flex;
  font-family: Spoqa Han Sans Neo;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.04em;
  color: #000000;
  flex-direction: column;
`

const OrderTable = styled.div`
  display: flex;
  flex-direction: column;
`

const OrderRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const OrderHeader = styled.span`
  display: flex;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.0015em;
  justify-content: center;
`

const OrderTail = styled.span`
  display: flex;
  justify-content: center;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #E6381F;
`

const ThumbnailData = styled.span`
  display: flex;
  width: 100px;
  justify-content: center;
`
const Thumbnail = styled.img`
  width: 60px;
  height: 60px;
`

const InfoData = styled.div`
  display: flex;
  width: 560px;
  height: 44px;
  flex-direction: column;
  justify-content: center;
`

const TableSubtitleText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: #656565;
  margin: 0 0 4px 20px;
`

const TableTitleText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #303030;
  margin: 0 0 0 20px;
`

const PriceData = styled.div`
  display: flex;
  width: 160px;
  justify-content: center;
`

const PriceText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.02em;
`

const PriceBoldText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
`

const MidArea = styled.div`
  display: flex;
  flex-direction : row;
`

const DetailArea = styled.div`
  display: flex;
  width: 1226px;
  margin: 0 40px 0 0;
  flex-direction: column;
`

const WalletArea = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 40px 0;
`

const PaymentInfoArea = styled.div`
  display: flex;
  margin: 40px 40px;
  flex-direction: column;
`

const CardBox = styled.div`
  width: 540px;
  height: 410px;
  background: #FFFFFF;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;  
`

const PaymentInfoBox = styled.div`
  display: flex;
  width: 460px;
  height: 170px;
  background: #FAFAFA;
  border-radius: 5px;  
  margin: 0 0 20px 0;
`

const PaymentInfoTable = styled.div`
  display: flex;
  margin: 20px 20px;
  flex-direction: column;
`

const PaymentInfoRow = styled.div`
  display: flex;
  width: 420px;
  flex-direction: row;
  justify-content: space-between;
`

const PaymentInfoHeader = styled.span`
  color: #656565;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.02em;
`

const PaymentInfoData = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #656565;
`

const PaymentInfoBold = styled.span`
  color: #FF3D21;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.02em;
`

const PaymentInfoTail = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.04em;
  color: #000000;
`

const DeliveryArea = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 40px 0;
`

const MethodArea = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 80px 0;
`

const ButtonBar = styled.div`
  display: flex;
  flex-direction: row;
`

const AutoSaveBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0 20px 0;
`

const TextField = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.02em;
`

const AgreeBox = styled.div`
  height: 204px;
  width: 720px;
  border-radius: 5px;
  border: 1px solid #C5C5C5;
  background: #FFFFFF;
`
const AgreeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 20px;
  align-items: center;
`

const AgreeHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 680px;
  margin: 0 0 20px 0;
`

const AgreeHeaderText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #303030;
`

const AgreeDescBox = styled.div`
  display: flex;
  height: 120px;
  width: 680px;
  background: #FAFAFA;
`

const AgreeDesc = styled.div`
  flex-direction : column;
  margin: 10px 10px;
`
const AgreeRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const AgreeLI = styled.li`
  width: 16px;
  height: 16px;
  font-size:10px;
`

const AgreeText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #424242;
`

const DeliverySubtitleText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  color: #656565;
  margin: 4px 0 0 0;
`

const PostContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export default Payment;