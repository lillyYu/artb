import styled from "styled-components";
import React, { useState, useEffect } from "react";

import Line from "../Common/line";
import { RectButton } from "../Common/button";
import Arts from "./Arts";
import Pagination from "../Common/pagination";

function NftList() {
  const [sw, setSw] = useState(0);
  const [page, setPage] = useState(1);
  const [datas, setDatas] = useState([
    { image: "/arts.svg", artist: "남0관", title: "가을축제1", year: 1984, width: 201, height: 300, tech: "Oil painting", price: 43000, total: 100000, remain: 38900 },
    { image: "/arts.svg", artist: "남1관", title: "가을축제2", year: 1985, width: 202, height: 300, tech: "Oil painting", price: 43001, total: 200000, remain: 38901 },
    { image: "/arts.svg", artist: "남2관", title: "가을축제3", year: 1986, width: 203, height: 300, tech: "Oil painting", price: 43002, total: 300000, remain: 38902 },
    { image: "/arts.svg", artist: "남3관", title: "가을축제4", year: 1987, width: 204, height: 300, tech: "Oil painting", price: 43003, total: 400000, remain: 38903 },
    { image: "/arts.svg", artist: "남0관", title: "가을축제1", year: 1984, width: 201, height: 300, tech: "Oil painting", price: 43000, total: 100000, remain: 38900 },
    { image: "/arts.svg", artist: "남1관", title: "가을축제2", year: 1985, width: 202, height: 300, tech: "Oil painting", price: 43001, total: 200000, remain: 38901 },
    { image: "/arts.svg", artist: "남2관", title: "가을축제3", year: 1986, width: 203, height: 300, tech: "Oil painting", price: 43002, total: 300000, remain: 38902 },
    { image: "/arts.svg", artist: "남3관", title: "가을축제4", year: 1987, width: 204, height: 300, tech: "Oil painting", price: 43003, total: 400000, remain: 38903 },
    { image: "/arts.svg", artist: "남0관", title: "가을축제1", year: 1984, width: 201, height: 300, tech: "Oil painting", price: 43000, total: 100000, remain: 38900 },
    { image: "/arts.svg", artist: "남1관", title: "가을축제2", year: 1985, width: 202, height: 300, tech: "Oil painting", price: 43001, total: 200000, remain: 38901 },
    { image: "/arts.svg", artist: "남2관", title: "가을축제3", year: 1986, width: 203, height: 300, tech: "Oil painting", price: 43002, total: 300000, remain: 38902 },
    { image: "/arts.svg", artist: "남3관", title: "가을축제4", year: 1987, width: 204, height: 300, tech: "Oil painting", price: 43003, total: 400000, remain: 38903 },
    { image: "/arts.svg", artist: "남0관", title: "가을축제1", year: 1984, width: 201, height: 300, tech: "Oil painting", price: 43000, total: 100000, remain: 38900 },
    { image: "/arts.svg", artist: "남1관", title: "가을축제2", year: 1985, width: 202, height: 300, tech: "Oil painting", price: 43001, total: 200000, remain: 38901 },
    { image: "/arts.svg", artist: "남2관", title: "가을축제3", year: 1986, width: 203, height: 300, tech: "Oil painting", price: 43002, total: 300000, remain: 38902 },
    { image: "/arts.svg", artist: "남3관", title: "가을축제4", year: 1987, width: 204, height: 300, tech: "Oil painting", price: 43003, total: 400000, remain: 38903 }
  ]);

  return (
    <Container>
      <ListArea>
        <TitleBox>
          <Circle />
          <TitleText>NFT 리스트</TitleText>
          <Circle />
        </TitleBox>
        <ListBoard>
          <ListContainer>
            <CommandBar />
            
            <Line color="#656565" lineStyle={{ margin: "40px 0" }} />
            {
              0 < datas.length ? 
                (<ResultArea>
                  <Arts width="1300" height={507 * parseInt(datas.length / 4)} cols="4" rows={parseInt(datas.length / 4)} colWidth="310" rowHeight="481" data={datas} />
                  <PageBar>
                    <Pagination
                      curPage={page}
                      pagePerItems={16}
                      totalCount={160}
                      pagePerDisplay={5}
                      changeCallback={(p) => setPage(p)}
                      pageStyle={{margin: "80px 0 0 0"}}
                      />
                  </PageBar>
                </ResultArea>) :
                <EmptyMsg msg="검색결과가 없습니다." submsg="정확한 NFT명을 입력해주세요." />
              }
            
          </ListContainer>
        </ListBoard>
      </ListArea>
    </Container>
  );

  function CommandBar() {
    return (
      <ButtonBar>
        <SwitchArea>
          <SwitchContainer>
            <SwitchRadio checked={sw === 0} onChange={() => setSw(0)} />
            <SwitchButton className={sw === 0 ? "on" : "off"}>진행중</SwitchButton>
          </SwitchContainer>
          <SwitchContainer>
            <SwitchRadio checked={sw === 1} onChange={() => setSw(1)} />
            <SwitchButton className={sw === 1 ? "on" : "off"}>종료</SwitchButton>
          </SwitchContainer>
        </SwitchArea>
        <SearchArea>
          <SearchBox>
            <SearchIcon src="/magnify.svg" />
            <SearchText placeholder="검색어를 입력해 주세요." />
          </SearchBox>
          <RectButton width="160" height="52" bgColor="#FF3D21" onClick={() => setDatas([])} btnStyle={{ color: "#FFFFFF", borderRadius: "5px" }}>검색</RectButton>
        </SearchArea>
      </ButtonBar>
    );
  }

  function EmptyMsg(props) {
    return (
      <EmptyContainer>
        <QuestionIcon />
        <EmptyTitleText>{props.msg}</EmptyTitleText>
        <EmptySubtitleText>{props.submsg}</EmptySubtitleText>
      </EmptyContainer>
    );
  }
}

const Container = styled.div`
  display: flex;
  background-image : url(/list_background.png);
`

const ListArea = styled.div`
  display: flex;
  width: 1460px;
  margin: 80px 230px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const TitleBox = styled.div`
  display: flex;
  width: 319px;
  height: 75px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 80px 0;
`

const Circle = styled.span`
  content: "";
  width: 10px;
  height: 10px;
  background: #FF3D21;
  border-radius: 5px;
`

const TitleText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 60px;
  font-weight: 700;
  line-height: 75px;
  letter-spacing: -0.05em;
  color: #FFFFFF;
`

const ListBoard = styled.div`
  display: flex;
  width: 1460px;
  background: #FFFFFF;
  border-radius: 40px;
`

const ListContainer = styled.div`
  display: flex;
  width: 1300px;
  flex-direction: column;
  margin: 80px 80px;
`

const ButtonBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const SwitchContainer = styled.div`
  .on {
    background: #FF3D21;
    color: #FFFFFF;    
  }

  .off{
    background: #FFFFFF;
    color: #C5C5C5;    
    border: 1px solid #C5C5C5;
  }
`

const SwitchRadio = styled.input.attrs({ type: 'radio' })`
  width: 160px;
  height: 52px;
  cursor: pointer;
  position: absolute;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  z-index: 2;
  opacity: 0;
`

const SwitchButton = styled.span`
  position: relative;
  width: 160px;
  height: 52px;
  display: flex;
  box-sizing: border-box;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`

const SwitchArea = styled.div`
  display: flex;
  width: 330px;
  flex-direction: row;
  justify-content: space-between;
`

const SearchArea = styled.div`
  display: flex;
  width: 630px;
  flex-direction: row;
  justify-content: space-between;
`

const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 460px;
  height: 52px;
  border-radius: 5px;
  padding: 16px;
  box-sizing: border-box;
  border: 1px solid #C5C5C5
`

const SearchIcon = styled.img`
  display: flex;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
`

const SearchText = styled.input.attrs({ type: 'text' })`
  display: flex;
  width: 402px;
  background-color: transparent;
  border: 0;
  outline: none;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #303030;

  ::placeholder {
    color: #C5C5C5;
  }
`

const PageBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const EmptyContainer = styled.div`
  display: flex;
  width: 1220px;
  height: 164px;
  flex-direction: column;
  align-items: center;
  margin: 80px 0 0 0;
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

const ResultArea = styled.div`
`

export default NftList;