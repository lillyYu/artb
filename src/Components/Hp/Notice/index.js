import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Pagination from "../../Common/pagination";

function Notice() {
  const [page, setPage] = useState(1);
  const [datas, setDatas] = useState([
    {
      id: 10,
      title: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세",
      createdAt: "2022.01.03",
    },
    {
      id: 9,
      title: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세",
      createdAt: "2022.01.03",
    },
    {
      id: 8,
      title: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세",
      createdAt: "2022.01.03",
    },
    {
      id: 7,
      title: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세",
      createdAt: "2022.01.03",
    },
    {
      id: 6,
      title: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세",
      createdAt: "2022.01.03",
    },
    {
      id: 5,
      title: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세",
      createdAt: "2022.01.03",
    },
    {
      id: 4,
      title: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세",
      createdAt: "2022.01.03",
    },
    {
      id: 3,
      title: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세",
      createdAt: "2022.01.03",
    },
    {
      id: 2,
      title: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세",
      createdAt: "2022.01.03",
    },
    {
      id: 1,
      title: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세",
      createdAt: "2022.01.03",
    },
  ]);
  return (
    <Container>
      <NoticeBox>
        {datas.map((i) => (
          <Link to={`/hp/notice/${i.id}`} style={{ textDecoration: 'none' }} >
            <NoticeRow>
              <NoticeNo>{i.id}</NoticeNo>
              <NoticeHeader>{i.title}</NoticeHeader>
              <NoticeDate>{i.createdAt}</NoticeDate>
            </NoticeRow>
          </Link>
        ))}
      </NoticeBox>
      <PageBar style={{ margin: "80px 0" }}>
        <Pagination
          type={1}
          curPage={page}
          pagePerItems={16}
          totalCount={160}
          pagePerDisplay={5}
          changeCallback={(p) => setPage(p)}
        />
      </PageBar>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NoticeBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const NoticeRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: inset 0px 0px 30px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(30px);
  border-radius: 5px;
  margin: 0 0 20px 0;

  @media (max-width:767px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 16px;
    height: fit-content;
  }
`;

const NoticeNo = styled.span`
  display: flex;
  flex:1;
  height: inherit;
  font-family: Spoqa Han Sans Neo;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.04em;
  color: #ffffff;
  justify-content: center;
  align-items: center;

  @media (max-width:767px) {
   font-size: 14px;
   font-weight: 300;
  }
`;

const NoticeHeader = styled.span`
  display: flex;
  flex: 6;
  height: inherit;
  font-family: Spoqa Han Sans Neo;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.04em;
  color: #ffffff;
  justify-content: start;
  align-items: center;

  @media (max-width:767px) {
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    align-items: flex-start;
  }
`;
const NoticeDate = styled.span`
  display: flex;
  font-family: Spoqa Han Sans Neo;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.04em;
  color: #ffffff;
  width: 160px;
  height: 80px;
  justify-content: center;
  align-items: center;

  @media (max-width:767px) {
    height: fit-content;
    font-size: 14px;
    font-weight: 300;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const PageBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Notice;
