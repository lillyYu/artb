import styled from "styled-components";
import React, { useState, useEffect } from "react";

import Popup from "../../Common/popup";
import { RectButton } from "../../Common/button";

function Complete(props) {
  const [popup, setPopup] = useState(false);
  const [popupData, setPopupData] = useState({
    warn: false,
    title: '',
    subtitle: ''
  });
  const myData = {
    id: props.match.params.id,
    type: 1,
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
    accountNo: "301-0295-5774-33"

  };

  useEffect(() => {
    setPopupData({
      warn: false,
      title: "이메일 전송완료",
      subtitle: "회원가입 이메일로 전송되었습니다."
    });
    setPopup(true);
  }, []);  

  const closeCallback = () => {
    setPopup(false);
  }

  return (
    <Container>
      {popup ? <Popup onClose={closeCallback} warn={popupData.warn} title={popupData.title} subtitle={popupData.subtitle} /> : <></>}
      <CompleteHeader/>
      <CompleteBody />
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
        <CaretRight />
        결제완료
      </LocationArea>
    );
  }  

  function CompleteHeader() {
    return (
      <HeaderContainer>
        <LocationContainer>
          <LocationBar />
        </LocationContainer>
        <HeaderImage/>
      </HeaderContainer>
    );
  }

  function CompleteBody(props) {
    return (
      <BodyContainer>
        <FinishIcon />
        <TitleText>{myData.type === 0 ? "구매 신청이 완료되었습니다." : "결제가 완료되었습니다."}</TitleText>
        <SubtitleText>{myData.type === 0 ? "신청하신 수량에 맞는 원화를 입금하시면, NFT저작권이 24시간 이내로  구매자 지갑으로 전송됩니다." : "NFT저작권이 24시간 이내로 구매자 지갑으로 전송됩니다."}</SubtitleText>
        <NFTOrder />
        <NFTInfo />
        <BuyerInfo />
        <PaymentDetail />
        <EscrowInfo />
        <ButtonBar />
      </BodyContainer>
    );
  }

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

  function NFTInfo() {
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
            <DataBox>{myData.type === 0 ? "무통장입금" : `신용카드 (${myData.cardName})`}</DataBox>
          </TableData>
          <TableHeader style={{ width: "240px" }}>
            <HeaderBox>{myData.type === 0 ? "입금은행" : "접수번호"}</HeaderBox>
          </TableHeader>
          <TableData style={{ width: "410px" }}>
            <DataBox>{myData.type === 0 ? myData.bank : myData.regNo}</DataBox>
          </TableData>          
        </TableRow>
        <TableRow style={{ height: "52px", borderTop: "1px solid #EEEEEE", borderBottom: "1px solid #EEEEEE" }}>
          <TableHeader style={{ width: "240px" }}>
            <HeaderBox>{myData.type === 0 ? "예금주" : "진행상태"}</HeaderBox>
          </TableHeader>
          <TableData style={{ width: "410px" }}>
            <DataBox>{myData.type === 0 ? myData.holder : myData.progress}</DataBox>
          </TableData>
          <TableHeader style={{ width: "240px" }}>
            <HeaderBox>{myData.type === 0 ? "입금 계좌번호" : "총 결제 금액"}</HeaderBox>
          </TableHeader>
          <TableData style={{ width: "410px" }}>
            <DataBox>
              { (myData.type === 0 ? myData.accountNo : <TotalText>{Intl.NumberFormat().format(myData.total)}원</TotalText>) }
            </DataBox>
          </TableData>
        </TableRow>
        { myData.type === 0 ? 
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
        { myData.type === 0 ?
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
      <EscrowContainer>
        <EscrowBox>
          <EscrowTitle>무통장 결제 안내</EscrowTitle>
          <EscrowList><EscrowLI/>가입 시 입력하신 성함으로 입금해주시길 바랍니다.</EscrowList>
          <EscrowList><EscrowLI/>가입 시 입력한 성함과 입금자명이 다를 경우 입금확인이 어려우니 고객센터로 알려주시면 감사하겠습니다.</EscrowList>
          <EscrowList><EscrowLI/>무통장입금의 경우, 9시 15시 17시에 결제 확인을 진행하고 있습니다. 결제 확인 전에는 결제 대기로 표시되고 있는 점 양해 부탁드립니다.</EscrowList>
        </EscrowBox>
      </EscrowContainer>
    )
  }

  function ButtonBar() {
    return (
      <ButtonContainer>
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
        <RectButton width={160} height={60} bgColor="#FF3D21"
          btnStyle={{
            borderRadius: "5px",
            fontFamily: "Spoqa Han Sans Neo",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "24px",
            letterSpacing: "-0.02em",
            color: "#FFFFFF"
          }}                   
        >
          구매내역 확인
        </RectButton>        
      </ButtonContainer>
    )
  }
}

const Container = styled.div`
  display: flex;
  width: 1920px;
  flex-direction: column;
`

const HeaderContainer = styled.div`
  display: flex;
  height: 300px;
  background-image: url(/complete_background.png);
  background-repeat: no-repeat;
  flex-direction: column;
  align-items: center;
`

const LocationContainer = styled.div`
  display: flex;
  width: 1300px;
  height: 32px;
  margin: 40px 0 40px 0;
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
  color: #A6A6A6;
`

const CaretRight = styled.img`
  width: 24px;
  height: 24px;
  content: url(/caret_right_gray.svg);
`

const HeaderImage = styled.img`
  content: url(/complete_top.png);
  width: 300px;
  height: 300px;
`

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #FFFFFF;
  align-items: center;
`

const FinishIcon = styled.img`
  content: url(/finish_icon.svg);
  width: 60px;
  height: 60px;
  margin: 152px 0 0 0;
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

const EscrowContainer = styled.div`
  display: flex;
  width: 1300px;
  height: 138px;
  background: #FAFAFA;
  border-radius: 5px;
  border: 1px solid #EEEEEE;
  margin: 0 0 80px 0;
`

const EscrowBox = styled.div`
  display: flex;
  margin: 20px 20px;
  flex-direction: column;
`

const EscrowTitle = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  color: #303030;
  margin: 0 0 10px 0;
`

const EscrowList = styled.span`
  display: flex;
  flex-direction: row;
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  color: #303030;
`

const EscrowLI = styled.li`
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

export default Complete;