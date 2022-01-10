import styled from "styled-components";
import React, { useState } from "react";
import { useRecoilState } from "recoil";

import { SwitchButton } from "../../Common/button";
import Line from "../../Common/line";
import Pagination from "../../Common/pagination";

import Arts from "../../NftList/Arts";
import { popupState } from "../../../store/web2";

function Favorite() {
  const [page, setPage] = useState(1);
  const [favorite, setFavorite] = useState({
    count: 21
  });
  const [popup, setPopup] = useRecoilState(popupState);

  const search = {
    filter: 0
  };

  const callbackSwitch = (index) => {
    search.filter = index;
  };

  const callbackFavorite = (index) => {
    setPopup({
      flag: true,
      warn: false,
      title: "찜 삭제",
      subtitle: "찜한 내역이 삭제되었습니다."
    });
  }

  const [datas, setDatas] = useState([
    { id: 1, type: 0, data: { image: "/arts.svg", artist: "남0관", title: "가을축제1", year: 1984, width: 201, height: 300, tech: "Oil painting", price: 43000, total: 100000, remain: 38900 } },
    { id: 2, type: 1, data: { image: "/artist_sample.png", artist: "남3관", born: 1920, death : 1981, desc: "아티스트 설명입니다.", count: 13, avgPrice: 53500 } },
    { id: 3, type: 0, data: { image: "/arts.svg", artist: "남1관", title: "가을축제2", year: 1985, width: 202, height: 300, tech: "Oil painting", price: 43001, total: 200000, remain: 38901 } },
    { id: 4, type: 1, data: { image: "/artist_sample.png", artist: "남3관", born: 1920, death: 1981, desc: "아티스트 설명입니다.", count: 13, avgPrice: 53500 } },
    { id: 5, type: 0, data: { image: "/arts.svg", artist: "남0관", title: "가을축제1", year: 1984, width: 201, height: 300, tech: "Oil painting", price: 43000, total: 100000, remain: 38900 } },
    { id: 6, type: 1, data: { image: "/artist_sample.png", artist: "남3관", born: 1920, death : 1981, desc: "아티스트 설명입니다.", count: 13, avgPrice: 53500 } },
    { id: 7, type: 0, data: { image: "/arts.svg", artist: "남1관", title: "가을축제2", year: 1985, width: 202, height: 300, tech: "Oil painting", price: 43001, total: 200000, remain: 38901 } },
    { id: 8, type: 1, data: { image: "/artist_sample.png", artist: "남3관", born: 1920, death: 1981, desc: "아티스트 설명입니다.", count: 13, avgPrice: 53500 } },
    { id: 9, type: 0, data: { image: "/arts.svg", artist: "남0관", title: "가을축제1", year: 1984, width: 201, height: 300, tech: "Oil painting", price: 43000, total: 100000, remain: 38900 } },
    { id: 10, type: 1, data: { image: "/artist_sample.png", artist: "남3관", born: 1920, death : 1981, desc: "아티스트 설명입니다.", count: 13, avgPrice: 53500 } },
    { id: 11, type: 0, data: { image: "/arts.svg", artist: "남1관", title: "가을축제2", year: 1985, width: 202, height: 300, tech: "Oil painting", price: 43001, total: 200000, remain: 38901 } },
    { id: 12, type: 1, data: { image: "/artist_sample.png", artist: "남3관", born: 1920, death : 1981, desc: "아티스트 설명입니다.", count: 13, avgPrice: 53500 } },    
  ]);  

  return (
    <Container>
      <FavoriteArea>
        <FilterBox>
          <SwitchButton width={500} height={52} optionWidth={160} optionHeight={52} options={["전체", "아티스트", "NFT"]} onChangeCallback={callbackSwitch} />
          <FavoriteText>찜한 NFT 개수 : {favorite.count}</FavoriteText>
        </FilterBox>
        <Line color="#CBCBCB" lineStyle={{ margin: "20px 0" }} />
        {
          0 < datas.length ? 
            (<ResultArea>
              <Arts width="1300" height={507 * parseInt(datas.length / 4)} cols="4" rows={parseInt(datas.length / 4)} colWidth="310" rowHeight="481" data={datas} onChangeCallback={callbackFavorite} />
              <PageBar>
                <Pagination
                  type={0}
                  curPage={page}
                  pagePerItems={16}
                  totalCount={160}
                  pagePerDisplay={5}
                  changeCallback={(p) => setPage(p)}
                  pageStyle={{margin: "80px 0 0 0"}}
                  />
              </PageBar>
            </ResultArea>) :
            <EmptyMsg msg="찜한 내역이 없습니다." submsg="아티스트와 NFT를 찜해보세요." />
        }        
      </FavoriteArea>
    </Container>
  )

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
  width: 1920px;
  justify-content: center;
`

const FavoriteArea = styled.div`
  display: flex;
  width: 1300px;
  flex-direction: column;
  margin: 80px 0;
`

const FilterBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const FavoriteText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.02em;  
  color: #656565;
`

const ResultArea = styled.div`
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

export default Favorite;