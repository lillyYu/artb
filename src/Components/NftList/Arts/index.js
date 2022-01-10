import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { ImageButton } from "../../Common/button";
import Grid from "../../Common/grid";
import Line from "../../Common/line";
import { useHistory } from "react-router-dom";

function Arts(props) {
  const history = useHistory();

  const onChangeFavorite = (e, index) => {
    e.stopPropagation();
    
    if (props.onChangeCallback)
      props.onChangeCallback(index);
  }

  return (
    <Grid
      width={props.width}
      height={props.height}
      cols={props.cols}
      rows={props.rows}
      colWidth={props.colWidth}
      rowHeight={props.rowHeight}
      gridData={props.data.map((node, index) => {
        return (
          <ArtsContainer onClick={() => history.push(`/detail/${node.id}`)} >
            <CardTop style={{ height: `${props.colWidth}px]` }}>
              <CardImage src={node.data.image} />
              <FavoriteBox style={{ position: "absolute", margin: `20px 0 0 ${props.colWidth - 46}px`}}>
                <ImageButton img="/heart.svg" width="26" height="24" onClick={(e) => onChangeFavorite(e, index)} />
              </FavoriteBox>
            </CardTop>
            <CardBottom style={{ width: `${props.colWidth}px`, height: `${props.rowHeight * 0.44}px`, top: `${props.colWidth * 0.87}px` }}>
              <DescContainer style={{ width: `${props.colWidth - 40}px` }}>
                <TableRow>
                  <Artist>{node.type === 0 ? node.data.artist : `${node.data.born} ~ ${node.data.death}`}</Artist>
                </TableRow>
                <TitleRow>
                  <TitleText>{node.type === 0 ? node.data.title : node.data.artist}</TitleText>
                </TitleRow>
                {node.type === 0 ?
                  <>
                    <TableRow>
                      <HeaderText>작품년도</HeaderText>
                      <DataText>{node.data.year}년도</DataText>
                    </TableRow>
                    <TableRow>
                      <HeaderText>작품크기</HeaderText>
                      <DataText>{node.data.width}x{node.data.height}(cm)</DataText>
                    </TableRow>
                    <TableRow>
                      <HeaderText>작품기법</HeaderText>
                      <DataText>{node.data.tech}</DataText>
                    </TableRow>
                    <Line color="#EEEEEE" lineStyle={{ margin: "10px 0" }} />
                    <TableRow>
                      <TextBox>
                        <Gem src="/gem_black.svg" />
                        <StatusText>{Intl.NumberFormat().format(node.data.remain)} / {Intl.NumberFormat().format(node.data.total)}</StatusText>
                      </TextBox>
                      <Price>{Intl.NumberFormat().format(node.data.price)}원</Price>
                    </TableRow>
                  </> :
                  <>
                    <TableRow>
                      <DescText style={{height: "44px"}}>{node.data.desc}</DescText>
                    </TableRow>
                    <Line color="#EEEEEE" lineStyle={{ margin: "10px 0" }} />
                    <TableRow>
                      <StatusText>NFT 저작권수 (진행중)</StatusText>
                      <StatusValueText>{Intl.NumberFormat().format(node.data.count)}개</StatusValueText>
                    </TableRow>
                    <TableRow>
                      <StatusText>NFT 평균 가격</StatusText>
                      <StatusValueText>{Intl.NumberFormat().format(node.data.avgPrice)}원</StatusValueText>
                    </TableRow>
                  </>
                }
              </DescContainer>
            </CardBottom>
          </ArtsContainer>
        );
      })
    }>
    </Grid>
  );
}

const ArtsContainer = styled.div`
  display: flex;
  cursor: pointer;
  filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.08));
  border-radius: 0px 0px 0px 20px;
  flex-direction: column;
  justify-content: space-between;
`

const CardTop = styled.div`
  display: flex;
`

const CardBottom = styled.div`
  display: flex;
  position: absolute;
  border-radius: 0px 0px 20px 20px;
  background: #FFFFFF;
  box-shadow: 0px -4px 10px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0px 40px 0px 20px;
  flex-direction: center;
`

const CardImage = styled.img`
  display: flex;
  border-radius: 0px 20px 0px 0px;
`

const DescContainer = styled.div`
  display: flex;
  margin: 20px 20px;
  flex-direction: column;
`

const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 4px 0;
`

const TitleRow = styled.div`
  display: flex;
  margin: 0 0 10px 0;
`

const Artist = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  color: #656565;
`

const TitleText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.04em;
  color: #000000;
`

const HeaderText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #A6A6A6;
`

const DataText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  color: #A6A6A6;
`

const Price = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.04em;
  color: #000000;
`

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const StatusText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  color: #656565;
`

const StatusValueText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  color: #000000;
`

const DescText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #656565;
`

const FavoriteBox = styled.div`
`

const Gem = styled.img`
  display: flex;
  width: 16px;
  height: 16px;
  margin: 0 4px 0 0;
`

export default Arts;