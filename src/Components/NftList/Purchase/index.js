import styled from "styled-components";
import React, { useState, useEffect } from "react";

import { RectButton } from "../../Common/button";

function Purchase(props) {
  const myData = {
    id: props.id,
    payType: 0,
    artist: "남관",
    title: "가을축제",
    thumbnail: "/sample.png",
    price: 100000,
    fees: 15000,
    amount: 3,
    total: 150000,
    name: "김철수",
    email: "123@naver.com",
    blockchain: "Etehreum ERC-1155 (OpenSea)",
    manageNo: "0x8998f4097170970bA9D5Ef07A0D703c37f2D5657",
    contract: "0x495f947276749ce646f68ac8c248420045cb7b5e",
    register: "0x8998f4097170970bA9D5Ef07A0D703c37f2D5657",
    phone: "01084841685",
    address: "서울시 무슨구 무슨동 152-54 번지",
    cardName: "신한",
    bank: "농협은행",
    regNo: "51388152",
    holder: "아트비글로벌(주)",
    progress: "결제 완료",
    accountNo: "301-0295-5774-33",
    ownCard: true,
    frame: false
  };
  const script = {
    title: "",
    subtitle: "",
    iconPath: "",
  }

  switch (props.type) {
    case 'wait':
      script.title = "현재 결제 대기중입니다.";
      script.subtile = "신청하신 수량에 맞는 원화를 입금하시면, NFT저작권이 24시간 이내로 구매자 지갑으로 전송됩니다.";
      script.iconPath = "/NFT_wait.svg";
      break;
    case 'own':
      script.title = "현재 보유중인 저작권입니다.";
      script.subtile = "결제 완료가 되어 NFT 지갑에 보유중인 저작권 작품입니다.";
      script.iconPath = "/NFT_own.svg";
      break;      
    case 'finish':
      script.title = "NFT 결제가 완료 되었습니다.";
      script.subtile = "NFT 저작권이 지갑에 전송될 때 까지 잠시만 기다려주세요.";
      script.iconPath = "/NFT_finish.svg";
      break;
    case 'confirm':
    default:
      script.title = myData.payType === 0 ? "구매 신청이 완료되었습니다." : "결제가 완료되었습니다.";
      script.subtile = myData.payType === 0 ? "신청하신 수량에 맞는 원화를 입금하시면, NFT저작권이 24시간 이내로  구매자 지갑으로 전송됩니다." : "NFT저작권이 24시간 이내로 구매자 지갑으로 전송됩니다.";
      script.iconPath = "/finish_icon.svg";
      break;
  }

  return (
    <BodyContainer>
      { props.showImage === true ? <HeaderImage/> : <></>}
      <FinishIcon src={script.iconPath} style={{margin: props.showImage === true ? "40px 0 0 0" : "152px 0 0 0"}} />
      <TitleText>{script.title}</TitleText>
      <SubtitleText>{script.subtile}</SubtitleText>
      <NFTOrder />
      <NFTInfo option={props.option} />
      <BuyerInfo />
      <PaymentDetail />
      { props.showPolicy !== true || myData.payType === 0 ? <EscrowInfo /> : <></> }
      { props.showPolicy === true ? <PolicyInfo /> : <></> }
      <ButtonBar txid={props.showPolicy} active={props.type === 'own'} />
    </BodyContainer>
  );

  function NFTOrder() {
    return (
      <CompleteTable>
        <TableTitle>NFT 주문내역</TableTitle>
        <TableRow style={{ height: "60px", borderTop: "1px solid #303030" }}>
          <TableHeader style={{ width: "660px" }}>NFT 정보</TableHeader>
          <TableHeader style={{ width: "160px" }}>NFT 금액</TableHeader>
          <TableHeader style={{ width: "160px" }}>이더리움 수수료</TableHeader>
          <TableHeader style={{ width: "160px" }}>구매수량</TableHeader>
          <TableHeader style={{ width: "160px" }}>총 결제 금액</TableHeader>
        </TableRow>
        <TableRow style={{ height: "100px", borderTop: "1px solid #EEEEEE" }}>
          <TableData style={{ justifyContent: "center", width: "100px" }}>
            <Thumbnail src={myData.thumbnail} />
          </TableData>
          <TableData style={{ justifyContent: "center", width: "560px" }}>
            <ArtsInfo>
              <ArtsSubtitle>{myData.artist}</ArtsSubtitle>
              <ArtsTitle>{myData.title}</ArtsTitle>
            </ArtsInfo>
          </TableData>
          <TableData style={{ justifyContent: "center", width: "160px" }}><PriceText>{Intl.NumberFormat().format(myData.price)}원</PriceText></TableData>
          <TableData style={{ justifyContent: "center", width: "160px" }}><FeesText>{Intl.NumberFormat().format(myData.fees)}원</FeesText></TableData>
          <TableData style={{ justifyContent: "center", width: "160px" }}><AmountText>{Intl.NumberFormat().format(myData.amount)}개</AmountText></TableData>
          <TableData style={{ justifyContent: "center", width: "160px" }}><TotalText>{Intl.NumberFormat().format(myData.total)}원</TotalText></TableData>
        </TableRow>
      </CompleteTable>
    )
  }

  function NFTInfo(props) {
    return (
      <CompleteTable>
        <TableTitle>NFT 정보</TableTitle>
        <TableRow style={{ height: "52px", borderTop: "1px solid #303030" }}>
          <TableHeader style={{ width: "240px" }}>
            <HeaderBox>Blockchain</HeaderBox>
          </TableHeader>
          <TableData style={{ width: "410px" }}>
            <DataBox>{myData.blockchain}</DataBox>
          </TableData>
          <TableHeader style={{ width: "240px" }}>
            <HeaderBox>작품 관리번호</HeaderBox>
          </TableHeader>
          <TableData style={{ width: "410px" }}>
            <DataBox>{myData.manageNo}</DataBox>
          </TableData>
        </TableRow>
        <TableRow style={{ height: "52px", borderTop: "1px solid #EEEEEE", borderBottom: "1px solid #EEEEEE" }}>
          <TableHeader style={{ width: "240px" }}>
            <HeaderBox>Contract</HeaderBox>
          </TableHeader>
          <TableData style={{ width: "410px" }}>
            <DataBox>{myData.contract}</DataBox>
          </TableData>
          <TableHeader style={{ width: "240px" }}>
            <HeaderBox>등록자</HeaderBox>
          </TableHeader>
          <TableData style={{ width: "410px" }}>
            <DataBox>{myData.register}</DataBox>
          </TableData>
        </TableRow>
        {
          props.option === true ?
            <TableRow style={{ height: "52px", borderTop: "1px solid #EEEEEE", borderBottom: "1px solid #EEEEEE" }}>
              <TableHeader style={{ width: "240px" }}>
                <HeaderBox>소유권 카드</HeaderBox>
              </TableHeader>
              <TableData style={{ width: "410px" }}>
                <DataBox>{myData.ownCard ? "포함" : "미포함"}</DataBox>
              </TableData>
              <TableHeader style={{ width: "240px" }}>
                <HeaderBox>작품 액자</HeaderBox>
              </TableHeader>
              <TableData style={{ width: "410px" }}>
                <DataBox>{myData.frame ? "포함" : "미포함"}</DataBox>
              </TableData>
            </TableRow>            
           : <></>
        }
      </CompleteTable>
    )
  }

  function BuyerInfo() {
    return (
      <CompleteTable>
        <TableTitle>구매자 정보</TableTitle>
        <TableRow style={{ height: "52px", borderTop: "1px solid #303030" }}>
          <TableHeader style={{ width: "240px" }}>
            <HeaderBox>성함</HeaderBox>
          </TableHeader>
          <TableData style={{ width: "410px" }}>
            <DataBox>{myData.name}</DataBox>
          </TableData>
          <TableHeader style={{ width: "240px" }}>
            <HeaderBox>이메일</HeaderBox>
          </TableHeader>
          <TableData style={{ width: "410px" }}>
            <DataBox>{myData.email}</DataBox>
          </TableData>
        </TableRow>
        <TableRow style={{ height: "52px", borderTop: "1px solid #EEEEEE", borderBottom: "1px solid #EEEEEE" }}>
          <TableHeader style={{ width: "240px" }}>
            <HeaderBox>전화번호</HeaderBox>
          </TableHeader>
          <TableData style={{ width: "410px" }}>
            <DataBox>{myData.phone}</DataBox>
          </TableData>
          <TableHeader style={{ width: "240px" }}>
            <HeaderBox>주소</HeaderBox>
          </TableHeader>
          <TableData style={{ width: "410px" }}>
            <DataBox>{myData.address}</DataBox>
          </TableData>
        </TableRow>
      </CompleteTable>
    )
  }

  function PaymentDetail() {
    return (
      <CompleteTable>
        <TableTitle>결제내역</TableTitle>
        <TableRow style={{ height: "52px", borderTop: "1px solid #303030" }}>
          <TableHeader style={{ width: "240px" }}>
            <HeaderBox>결제수단</HeaderBox>
          </TableHeader>
          <TableData style={{ width: "410px" }}>
            <DataBox>{myData.payType === 0 ? "무통장입금" : `신용카드 (${myData.cardName})`}</DataBox>
          </TableData>
          <TableHeader style={{ width: "240px" }}>
            <HeaderBox>{myData.payType === 0 ? "입금은행" : "접수번호"}</HeaderBox>
          </TableHeader>
          <TableData style={{ width: "410px" }}>
            <DataBox>{myData.payType === 0 ? myData.bank : myData.regNo}</DataBox>
          </TableData>
        </TableRow>
        <TableRow style={{ height: "52px", borderTop: "1px solid #EEEEEE", borderBottom: "1px solid #EEEEEE" }}>
          <TableHeader style={{ width: "240px" }}>
            <HeaderBox>{myData.payType === 0 ? "예금주" : "진행상태"}</HeaderBox>
          </TableHeader>
          <TableData style={{ width: "410px" }}>
            <DataBox>{myData.payType === 0 ? myData.holder : myData.progress}</DataBox>
          </TableData>
          <TableHeader style={{ width: "240px" }}>
            <HeaderBox>{myData.payType === 0 ? "입금 계좌번호" : "총 결제 금액"}</HeaderBox>
          </TableHeader>
          <TableData style={{ width: "410px" }}>
            <DataBox>
              {(myData.payType === 0 ? myData.accountNo : <TotalText>{Intl.NumberFormat().format(myData.total)}원</TotalText>)}
            </DataBox>
          </TableData>
        </TableRow>
        {myData.payType === 0 ?
          <TableRow style={{ height: "52px", borderTop: "1px solid #EEEEEE", borderBottom: "1px solid #EEEEEE" }}>
            <TableHeader style={{ width: "240px" }}>
              <HeaderBox>접수번호</HeaderBox>
            </TableHeader>
            <TableData style={{ width: "410px" }}>
              <DataBox>{myData.regNo}</DataBox>
            </TableData>
            <TableHeader style={{ width: "240px" }}>
              <HeaderBox>진행상태</HeaderBox>
            </TableHeader>
            <TableData style={{ width: "410px" }}>
              <DataBox>{myData.progress}</DataBox>
            </TableData>
          </TableRow>
          : <></>
        }
        {myData.payType === 0 ?
          <TableRow style={{ height: "52px", borderTop: "1px solid #EEEEEE", borderBottom: "1px solid #EEEEEE" }}>
            <TableHeader style={{ width: "240px" }}>
              <HeaderBox>총 입금 금액</HeaderBox>
            </TableHeader>
            <TableData style={{ width: "410px" }}>
              <DataBox><TotalText>{Intl.NumberFormat().format(myData.total)}원</TotalText></DataBox>
            </TableData>
          </TableRow>
          : <></>
        }

      </CompleteTable>
    )
  }

  function EscrowInfo() {
    return (
      <InfoContainer style={{ margin: props.showPolicy === true ? "0 0 20px 0" : "0 0 80px 0" }}>
        <InfoBox>
          <InfoTitle>무통장 결제 안내</InfoTitle>
          <InfoList><InfoLI />가입 시 입력하신 성함으로 입금해주시길 바랍니다.</InfoList>
          <InfoList><InfoLI />가입 시 입력한 성함과 입금자명이 다를 경우 입금확인이 어려우니 고객센터로 알려주시면 감사하겠습니다.</InfoList>
          <InfoList><InfoLI />무통장입금의 경우, 9시 15시 17시에 결제 확인을 진행하고 있습니다. 결제 확인 전에는 결제 대기로 표시되고 있는 점 양해 부탁드립니다.</InfoList>
        </InfoBox>
      </InfoContainer>
    )
  }

  function PolicyInfo() {
    return (
      <InfoContainer style={{ margin: "0 0 80px 0" }}>
        <InfoBox>
          <InfoTitle>절차안내 및 유의사항</InfoTitle>
          <InfoList><InfoLI />디지털 자산의 특성상 구매 후 취소할 수 없습니다. 보내기전 주소와 수량을 꼭 확인 하세요.</InfoList>
          <InfoList><InfoLI />아트비의 NFT는 이더리움 기반(ERC-1155)으로, 이더리움을 지원하는 지갑으로만 수령 가능합니다. 그렇지 않은 지갑으로 송금하는 경우 아트비에서 도와드릴 수 있는 부분이 없습니다.</InfoList>
          <InfoList><InfoLI />구매 후 NFT 송금 과정은 블록체인 네트워크에서 처리됩니다. 네트워크 상황에 따라 송금이 지연될수 있으며 통상 1~3일 정도 소요 됩니다.</InfoList>
        </InfoBox>
      </InfoContainer>      
    )
  }

  function ButtonBar(props) {
    return (
      <ButtonContainer>
        <RectButton src="/" width={160} height={60} bdColor="#C5C5C5"
          btnStyle={{
            borderRadius: "5px",
            fontFamily: "Spoqa Han Sans Neo",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "24px",
            letterSpacing: "-0.02em",
            color: "#303030"
          }}
        >
          홈으로
        </RectButton>
        <RectButton width={160} height={60} bdColor="#C5C5C5"
          btnStyle={{
            borderRadius: "5px",
            fontFamily: "Spoqa Han Sans Neo",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "24px",
            letterSpacing: "-0.02em",
            color: "#303030"
          }}
        >
          출력
        </RectButton>
        <RectButton width={160} height={60} bdColor="#C5C5C5"
          btnStyle={{
            borderRadius: "5px",
            fontFamily: "Spoqa Han Sans Neo",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "24px",
            letterSpacing: "-0.02em",
            color: "#303030"
          }}
        >
          이메일 전송
        </RectButton>
        <RectButton width={160} height={60} bgColor={props.txid !== true || props.active === true ? "#FF3D21" : "#EEEEEE"}
          btnStyle={{
            borderRadius: "5px",
            fontFamily: "Spoqa Han Sans Neo",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "24px",
            letterSpacing: "-0.02em",
            color: props.txid !== true || props.active === true ? "#FFFFFF" : "#A6A6A6"
          }}
        >
          { props.txid === true ? "TXID 링크" : "구매내역 확인" }
        </RectButton>
      </ButtonContainer>
    )
  }
}

const HeaderImage = styled.img`
  content: url(/complete_top.png);
  width: 300px;
  height: 300px;
  margin: 80px 0 0 0;
`

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #FFFFFF;
  align-items: center;
`

const FinishIcon = styled.img`
  width: 60px;
  height: 60px;
`

const TitleText = styled.span`
  color: #000000;
  font-family: Spoqa Han Sans Neo;
  font-size: 36px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -0.02em;
  margin: 20px 0 0 0;
`

const SubtitleText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #303030;
  margin: 4px 0 80px 0;
`

const CompleteTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 1300px;
  margin: 0 0 40px 0;
`

const TableTitle = styled.span`
  display: flex;
  height: 36px;
  color: #000000;
  font-family: Spoqa Han Sans Neo;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -0.04em;
  margin: 0 0 21px 0;
`

const TableRow = styled.div`
  display: flex;
  flex-direction: row;
`

const TableHeader = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #303030;
  background: #FAFAFA;
`

const TableData = styled.span`
  display: flex;
  align-items: center;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #303030;
`

const Thumbnail = styled.img`
  width: 60px;
  height: 60px;
`
const ArtsInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 520px;
`

const ArtsSubtitle = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: #656565;
  margin: 0 0 4px 0;
`

const ArtsTitle = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #303030;
`

const PriceText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #303030;
`

const FeesText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #FF3D21;
`

const AmountText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #000000;
`

const TotalText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  color: #303030;
`

const HeaderBox = styled.span`
  display: flex;
  width: 207px;
  Height: 20px;
`

const DataBox = styled.span`
  margin: 17px 0 17px 20px;
`

const InfoContainer = styled.div`
  display: flex;
  width: 1300px;
  height: 138px;
  background: #FAFAFA;
  border-radius: 5px;
  border: 1px solid #EEEEEE;
`

const InfoBox = styled.div`
  display: flex;
  margin: 20px 20px;
  flex-direction: column;
`

const InfoTitle = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  color: #303030;
  margin: 0 0 10px 0;
`

const InfoList = styled.span`
  display: flex;
  flex-direction: row;
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  color: #303030;
`

const InfoLI = styled.li`
  width: 16px;
  height: 16px;
  font-size: 10px;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 670px;
  height: 60px;
  margin: 0 0 80px 0;
`

export default Purchase;