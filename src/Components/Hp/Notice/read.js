import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../Common/pagination";

function NoticeRead({ match }) {
  const [notice, setNotice] = useState({
    id: 9,
    title: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세",
    content:
      "텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트",
    image: "/read_sample.jpg",
    createdAt: "2022.01.03",
  });
  const [before, setBefore] = useState({
    id: 8,
    title: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세",
    createdAt: "2022.01.03",
  });
  const [after, setAfter] = useState({
    id: 10,
    title: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세",
    createdAt: "2022.01.03",
  });

  useEffect(() => {
    console.log(match.params.id);
  }, []);

  return (
    <Container>
      <NoticeBox>
        <ReadFrame>
          <TitleFrame>
            <ReadTitle>{notice.title}</ReadTitle>
            <ReadDate>{notice.createdAt}</ReadDate>
          </TitleFrame>
          <ReadBar />
          <ReadContent>{notice.content}</ReadContent>
          {notice.image ? <ReadImage src={notice.image} /> : null}
        </ReadFrame>
        <Link to={`/hp/notice/${before.id}`} style={{ textDecoration: "none" }}>
          <NoticeRow>
            <NoticeNo>이전</NoticeNo>
            <NoticeHeader>{before.title}</NoticeHeader>
            <NoticeDate>{before.createdAt}</NoticeDate>
          </NoticeRow>
        </Link>
        <div style={{ marginBottom: 20 }} />
        <Link to={`/hp/notice/${after.id}`} style={{ textDecoration: "none" }}>
          <NoticeRow>
            <NoticeNo>다음</NoticeNo>
            <NoticeHeader>{after.title}</NoticeHeader>
            <NoticeDate>{after.createdAt}</NoticeDate>
          </NoticeRow>
        </Link>
      </NoticeBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NoticeBox = styled.div`
  display: flex;
  width: 1300px;
  flex-direction: column;
  margin: 0 0 80px 0;
  z-index: 1;

  @media (max-width: 767px) {
    width: 100vw;
  }
`;

const ReadFrame = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background: #ffffff;
  /* shadow */

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
  border-radius: 5px;

  margin: 0 0 40px 0;

  @media (max-width: 767px) {
    border-radius: 0;
  }
`;

const TitleFrame = styled.div`
  display: flex;
  flex-direction: row;
`;

const ReadTitle = styled.span`
  width: 1170px;
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;
  /* identical to box height, or 156% */

  display: flex;
  align-items: center;
  letter-spacing: -0.04em;

  /* black */

  color: #000000;

  @media (max-width: 767px) {
    width: 100%;
    font-size: 16px;
  }
`;

const ReadDate = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;
  /* identical to box height, or 156% */

  display: flex;
  align-items: center;
  letter-spacing: -0.04em;

  /* dark-dark */

  color: #303030;

  @media (max-width: 767px) {
    font-weight: 300;
    font-size: 16px;
    align-items: flex-end;
  }
`;

const ReadBar = styled.div`
  position: static;
  width: 1220px;
  height: 1px;
  background: #000000;
  opacity: 0.5;
  margin: 20px 0 20px 0;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const ReadContent = styled.div`
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  /* or 156% */

  display: flex;
  align-items: center;
  letter-spacing: -0.04em;

  /* dark-dark */

  color: #303030;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

const ReadImage = styled.img`
  margin: 20px 0 0 0;
`;

const NoticeRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 1300px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: inset 0px 0px 30px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(30px);
  border-radius: 5px;

  @media (max-width: 767px) {
    width: 90%;
    height: auto;
    margin: 0 auto;
    padding: 16px;
    flex-direction: column;
  }
`;

const NoticeNo = styled.span`
  display: flex;
  width: 160px;
  height: 80px;
  font-family: Spoqa Han Sans Neo;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.04em;
  color: #ffffff;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    display: block;
    font-weight: 300;
    font-size: 14px;
    height: auto;
  }
`;

const NoticeHeader = styled.span`
  display: flex;
  width: 978px;
  height: 80px;
  font-family: Spoqa Han Sans Neo;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.04em;
  color: #ffffff;
  justify-content: start;
  align-items: center;

  @media (max-width: 767px) {
    display: block;
    width: 100%;
    height: auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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

  @media (max-width: 767px) {
    display: block;
    height: auto;
    font-size: 16px;
    font-weight: 300;
  }
`;

export default NoticeRead;
