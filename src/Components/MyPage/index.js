import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Lnb from "./Lnb";
import Purchase from "../NftList/Purchase";
import Favorite from "./Favorite";
import Manage from "./Manage";

import { RectButton, UpButton, SwitchButton } from "../Common/button";
import { ABInput } from "../Common/form";
import Pagination from "../Common/pagination";

function MyPage(props) {
  const history = useHistory();
  const [page, setPage] = useState(1);
  const myData = {
    name: "이건용",
    regDate: "2022.01.03",
    favoriteNFT: 21,
    favoriteArtist: 12,
    lastOrder: "2022.03.03",
    NFTTotal: 11,
    NFTWait: 12,
    NFTFinish: 13, 
    NFTOwn: 14,
  }
  const search = {
    filter: 0,
  }
  const [searchList, setSearchList] = useState([
    { id: 1, artist: "남관", title: "가을축제", price: 100000, fees: 15000, amount: 3, total: 115000, progress: 'wait', thumb: "/sample.png" },
    { id: 2, artist: "남관", title: "가을축제", price: 100000, fees: 15000, amount: 3, total: 115000, progress: 'confirm', thumb: "/sample.png" },
    { id: 3, artist: "남관", title: "가을축제", price: 100000, fees: 15000, amount: 3, total: 115000, progress: 'finish', thumb: "/sample.png" },
    { id: 4, artist: "남관", title: "가을축제", price: 100000, fees: 15000, amount: 3, total: 115000, progress: 'own', thumb: "/sample.png" },
    { id: 5, artist: "남관", title: "가을축제", price: 100000, fees: 15000, amount: 3, total: 115000, progress: 'wait', thumb: "/sample.png" },
    { id: 6, artist: "남관", title: "가을축제", price: 100000, fees: 15000, amount: 3, total: 115000, progress: 'confirm', thumb: "/sample.png" },
    { id: 7, artist: "남관", title: "가을축제", price: 100000, fees: 15000, amount: 3, total: 115000, progress: 'finish', thumb: "/sample.png" },
    { id: 8, artist: "남관", title: "가을축제", price: 100000, fees: 15000, amount: 3, total: 115000, progress: 'own', thumb: "/sample.png" },
    { id: 9, artist: "남관", title: "가을축제", price: 100000, fees: 15000, amount: 3, total: 115000, progress: 'wait', thumb: "/sample.png" },
    { id: 10, artist: "남관", title: "가을축제", price: 100000, fees: 15000, amount: 3, total: 115000, progress: 'confirm', thumb: "/sample.png" },
  ]);

  const callbackSwitch = (index) => {
    search.filter = index;
  }

  return (
    <Container>
      <Lnb subUrl={props.match.params.category} />
      {
        (() => {
          switch (props.match.params.category) {
            case 'wait':
            case 'confirm':
            case 'finish':
            case 'own':
              return <Purchase id={props.match.params.id} type={props.match.params.category} showImage={true} showPolicy={true} option={true} />
            case 'favorite':
              return <Favorite />
            case 'manage':
              return <Manage />
            default:
              return <MyPageBody />
          }
        })()
      }
      <UpButton />
    </Container>
  )

  function MyPageBody() {
    return (
      <BodyContainer>
        <BodyArea>
          <MyDetail />
          <MyNFT />
          <PurchaseList />
        </BodyArea>
      </BodyContainer>
    );
  }

  function MyDetail() {
    return (
      <DetailCard>
        <DetailContainer>
          <WelcomeBox>
            <WelcomeTitle>아트비와 함께하는</WelcomeTitle>
            <WelcomeSubtitle>{myData.name} 고객님, 오늘도 환영합니다.</WelcomeSubtitle>
            <WelcomeDetail>아트비는 NFT를 활용한 문화 플랫폼을 지향하며 문화 산업 전반에 블록체인 기술을 접목하여</WelcomeDetail>
            <WelcomeDetail>항상 투명하고 접근이 용이한 플랫폼을 구현합니다.</WelcomeDetail>
            <RectButton width={120} height={40} bgColor="#FAFAFA" bdColor="#EEEEEE" btnStyle={{
              fontFamily: "Spoqa Han Sans Neo",
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "16px",
              letterSpacing: "-0.02em",
              color: "#303030",
              borderRadius: "5px",
              margin: "34px 0 40px 0"
            }}>로그아웃</RectButton>
          </WelcomeBox>
          <StatusBox>
            <StatusContainer>
              <StatusRow>
                <StatusHeader>가입일자</StatusHeader>
                <StatusData>{myData.regDate}</StatusData>
              </StatusRow>
              <StatusRow>
                <StatusHeader>찜한 NFT</StatusHeader>
                <StatusData>{myData.favoriteNFT}</StatusData>
              </StatusRow>
              <StatusRow>
                <StatusHeader>찜한 아티스트</StatusHeader>
                <StatusData>{myData.favoriteArtist}</StatusData>
              </StatusRow>
              <StatusRow>
                <StatusHeader>최근 구매일자</StatusHeader>
                <StatusData>{myData.lastOrder}</StatusData>
              </StatusRow>              
            </StatusContainer>
          </StatusBox>
        </DetailContainer>
      </DetailCard>
    )
  }
  
  function MyNFT() {
    return (
      <MyNFTContainer>
        <BodyTitleText>나의 NFT 현황</BodyTitleText>
        <NFTListBox>
          <RectButton width={310} height={126} bgColor="#E6381F" btnStyle={{
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.08)",
            borderRadius: "0px 20px"
          }}>
            <NFTIconBox type={0} count={myData.NFTTotal} />
          </RectButton>
          <RectButton width={310} height={126} bgColor="#FFFFFF" btnStyle={{
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.08)",
            borderRadius: "0px 20px"
          }}>
            <NFTIconBox type={1} count={myData.NFTTotal} />
          </RectButton>          
          <RectButton width={310} height={126} bgColor="#FFFFFF" btnStyle={{
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.08)",
            borderRadius: "0px 20px"
          }}>
            <NFTIconBox type={2} count={myData.NFTTotal} />
          </RectButton>          
          <RectButton width={310} height={126} bgColor="#FFFFFF" btnStyle={{
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.08)",
            borderRadius: "0px 20px"
          }}>
            <NFTIconBox type={3} count={myData.NFTTotal} />
          </RectButton>                    
        </NFTListBox>
      </MyNFTContainer>
    )
  }

  function NFTIconBox(props) {
    return (
      <IconContainer>
        {(() => {
          switch (props.type) {
            case 1: return <NFTIcon src="/NFT_wait.svg" />
            case 2: return <NFTIcon src="/NFT_finish.svg" />
            case 3: return <NFTIcon src="/NFT_own.svg" />
            default: return <NFTIcon src="/NFT_total.svg" />
          }
        })()}
        <NFTInfoBox style={{color: props.type === 0 ? "#FFFFFF" : "#000000"}}>
          <InfoCountText>{props.count}</InfoCountText>
          <NFTStatusText>
          {(() => {
            switch (props.type) {
              case 1: return "결제 대기"
              case 2: return "결제 완료"
              case 3: return "보유한 NFT"
              default: return "전체"
            }
            })()}
          </NFTStatusText>
        </NFTInfoBox>
      </IconContainer>
    )
  }

  function PurchaseList() {
    return (
      <PurchaseContainer>
        <BodyTitleText>구매 내역 리스트</BodyTitleText>
        <SearchBar />
        <SearchResult />
        {
          searchList.length > 0 ?
          <PageContainer><Pagination
            type={0}
            curPage={page}
            pagePerItems={16}
            totalCount={160}
            pagePerDisplay={5}
            changeCallback={(p) => setPage(p)}
          /></PageContainer>
          : <></>
        }        
      </PurchaseContainer>
    )
  }

  function SearchBar() {
    return (
      <SearchContainer>
        <SwitchButton width={590} height={52} options={["전체", "1개월", "3개월", "6개월"]} optionWidth={140} optionHeight={52} onChangeCallback={callbackSwitch} />
        <SearchArea>
          <ABInput cancel={false} width={446} height={52} placeholder="NFT명 또는 아티스트명을 검색해 주세요." />
          <RectButton width={80} height={52} bgColor="#FF3D21" onClick={() => { setSearchList([]) } }
            btnStyle={{
              fontFamily: "Spoqa Han Sans Neo",
              fontSize: "16px",
              fontWeight: "700",
              lineHeight: "24px",
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
              borderRadius: "5px"
          }}>검색</RectButton>
        </SearchArea>
      </SearchContainer>
    )
  }

  function SearchResult() {
    return (
      <ResultContainer>
        <TableRow style={{ height: "60px", borderTop: "1px solid #303030" }}>
          <TableHeader style={{ width: "340px" }}>NFT 정보</TableHeader>
          <TableHeader style={{ width: "160px" }}>NFT금액</TableHeader>
          <TableHeader style={{ width: "160px" }}>이더리움 수수료</TableHeader>
          <TableHeader style={{ width: "160px" }}>구매 수량</TableHeader>
          <TableHeader style={{ width: "160px" }}>총 결제 금액</TableHeader>
          <TableHeader style={{ width: "160px" }}>진행 상태</TableHeader>
          <TableHeader style={{ width: "160px" }}>상세 보기</TableHeader>
        </TableRow>
        {
        searchList.length > 0 ? searchList.map((s) => {
            return <TableRecord node={s}/>
          }) : <EmptyMsg />
        }
      </ResultContainer>
    )
  }

  function TableRecord(props) {
    return (
      <TableRow style={{ height: "100px", borderTop: "1px solid #EEEEEE", borderBottom: "1px solid #EEEEEE" }}>
        <TableData style={{ width: "100px" }}><Thumbnail src={props.node.thumb} /></TableData>
        <TableData style={{ width: "240px" }}>
          <NodeInfoBox>
            <NodeSubtitle>{props.node.artist}</NodeSubtitle>
            <NodeTitle>{props.node.title}</NodeTitle>
          </NodeInfoBox>
        </TableData>
        <TableData style={{ width: "160px" }}>{Intl.NumberFormat().format(props.node.price)}원</TableData>
        <TableData style={{ width: "160px" }}>{Intl.NumberFormat().format(props.node.fees)}원</TableData>
        <TableData style={{ width: "160px" }}>{Intl.NumberFormat().format(props.node.amount)}</TableData>
        <TableData style={{ width: "160px" }}>{Intl.NumberFormat().format(props.node.fees+props.node.price)}원</TableData>
        <TableData style={{ width: "160px" }}>{(() => {
          switch (props.node.progress) {
            case 'confirm': return <ProgressText style={{color: "#303030"}}>입금 확인중</ProgressText>
            case 'finish': return <ProgressText style={{color: "#303030"}}>결제완료</ProgressText> 
            case 'own': return <ProgressText style={{ color: "#FF3D21" }}>보유</ProgressText>
            case 'wait':
            default: return <ProgressText style={{color: "#303030"}}>결제대기</ProgressText>
          }
        })()}</TableData>
        <TableData style={{ width: "160px" }}>
          <RectButton width={120} height={42} bgColor="#FFFFFF" bdColor="#CBCBCB" onClick={() => history.push(`/mypage/${props.node.progress}/${props.node.id}`) }>상세보기</RectButton>
        </TableData>
      </TableRow>      
    )
  }

  function EmptyMsg() {
    return (
      <EmptyContainer>
        <QuestionIcon />
        <EmptyTitleText>구매한 NFT가 없습니다.</EmptyTitleText>
        <EmptySubtitleText>NFT를 구매 후, 구매 현항을 확인하실 수 있습니다.</EmptySubtitleText>
      </EmptyContainer>
    )
  }
}

const Container = styled.div`
  display: flex;
  width: 1920px;
  flex-direction: column;
`

const BodyContainer = styled.div`
  display: flex;
  color: #FFFFFF;
  flex-direction: row;
  justify-content: center;
`

const BodyArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 1300px;
  align-items: center;
  margin: 40px 0 80px 0;
`

const DetailCard = styled.div`
  display: flex;
  width: 1300px;
  height: 286px;
  background: #FFFFFF;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
  border-radius: 40px;
  margin: 0 0 80px 0;
`

const DetailContainer = styled.div`
  display: flex;
  margin: 40px 40px;
  flex-direction: row;
`

const WelcomeBox = styled.div`
  display: flex;
  width: 590px;
  margin: 0 40px 0 0;
  flex-direction: column; 
`

const WelcomeTitle = styled.span`
  color: #FF3D21;
  font-family: Spoqa Han Sans Neo;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.04em;
  margin: 0 0 10px 0;
`

const WelcomeSubtitle = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.04em;
  color: #000000;
  margin: 0 0 10px 0;
`

const WelcomeDetail = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #303030;
`

const StatusBox = styled.div`
  display: flex;
  width: 590px;
  height: 206px;  
  background: #FAFAFA;
  border-radius: 20px;
`

const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 40px;
`

const StatusRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 510px;
  margin: 0 0 10px 0;
`

const StatusHeader = styled.span`
  color: #303030;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.02em;
`

const StatusData = styled.span`
  color: #303030;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.02em;
`

const MyNFTContainer = styled.div`
  display: flex;
  width: 1300px;
  height: 182px;
  flex-direction: column;
  margin: 0 0 80px 0;
`

const BodyTitleText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.04em;
  color: #000000;
  margin: 0 0 20px 0;
`

const NFTListBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 20px;
`

const NFTIcon = styled.img`
  width: 48px;
  height: 48px;
`

const NFTInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 202px;
`

const InfoCountText = styled.span`
  text-align: right;
  font-family: Spoqa Han Sans Neo;
  font-size: 36px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -0.02em;
  margin: 0 0 10px 0;
`

const NFTStatusText = styled.span`
  text-align: right;
  font-family: Spoqa Han Sans Neo;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.04em;
`

const PurchaseContainer = styled.div`
  display: flex;
  width: 1300px;
  flex-direction: column;
`

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 0 40px 0;
`

const SearchArea = styled.div`
  display: flex;
  width: 530px;
  flex-direction: row;
  justify-content: space-between;
`

const ResultContainer = styled.div`
  display: flex;
  width: 1300px;
  flex-direction: column;
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
  justify-content: center;
`

const Thumbnail = styled.img`
  width: 60px;
  height: 60px;  
`

const ProgressText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.02em;
`

const NodeInfoBox = styled.div`
  display: flex;
  width: 200px;
  height: 44px;
  flex-direction: column;
`

const NodeSubtitle = styled.span`
  color: #656565;
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.02em;
  margin: 0 0 4px 0;
`

const NodeTitle = styled.span`
  color: #303030;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.02em;
`

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1300px;
  margin: 80px 0 0 0;
`

const EmptyContainer = styled.div`
  display: flex;
  width: 1300px;
  height: 320px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const QuestionIcon = styled.img`
  content: url("/question.svg");
  width: 60px;
  height: 60px;
  margin 0 0 20px 0;
`

const EmptyTitleText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.02em;
  color: #C5C5C5;
  margin 0 0 10px 0;
`

const EmptySubtitleText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #C5C5C5;
`

export default MyPage;