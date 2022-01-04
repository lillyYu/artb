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
      <Paint />
      <Banner>
        <BannerLeft>
          <EngTitle>Help center</EngTitle>
          <MainTitle>공지사항</MainTitle>
          <RouteFrameText>
            홈 &gt; 고객센터 &gt; 공지사항 &gt; 공지사항 상세
          </RouteFrameText>
        </BannerLeft>
        <BannerRight>
          <SubMenuFrame>
            <SubMenuTitle className="selected">공지사항</SubMenuTitle>
            <RectCurrentBar />
          </SubMenuFrame>
          <SubMenuFrame>
            <SubMenuTitle>자주 묻는 질문</SubMenuTitle>
          </SubMenuFrame>
          <SubMenuFrame>
            <SubMenuTitle>다운로드</SubMenuTitle>
          </SubMenuFrame>
          <SubMenuFrame>
            <SubMenuTitle>1:1 문의</SubMenuTitle>
          </SubMenuFrame>
        </BannerRight>
      </Banner>
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
        <Link to={`/notice/${before.id}`} style={{ textDecoration: "none" }}>
          <NoticeRow>
            <NoticeNo>이전</NoticeNo>
            <NoticeHeader>{before.title}</NoticeHeader>
            <NoticeDate>{before.createdAt}</NoticeDate>
          </NoticeRow>
        </Link>
        <div style={{ marginBottom: 20 }} />
        <Link to={`/notice/${after.id}`} style={{ textDecoration: "none" }}>
          <NoticeRow>
            <NoticeNo>다음</NoticeNo>
            <NoticeHeader>{after.title}</NoticeHeader>
            <NoticeDate>{after.createdAt}</NoticeDate>
          </NoticeRow>
        </Link>
      </NoticeBox>
      <ToTopBtn>
        <Ellipse src="/Ellipse.svg" />
        <UpArrow src="/up_arrow.png" />
      </ToTopBtn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 1700px;
  align-items: center;
  background-color: #303030;
`;

const NoticeBox = styled.div`
  display: flex;
  width: 1300px;
  flex-direction: column;
  margin: 80px 0 0 0;
  z-index: 1;
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
`;

const ReadBar = styled.div`
  position: static;
  width: 1220px;
  height: 1px;
  background: #000000;
  opacity: 0.5;
  margin: 20px 0 20px 0;
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
`;

const Paint = styled.div`
  position: absolute;
  width: 1025px;
  height: 639px;
  left: -150px;
  top: 100px;
  background: url(/paint.png);
`;

const Banner = styled.div`
  display: flex;
  flex-direction: row;
  width: 1300px;
  height: 263px;
  margin: 100px 0 0 0;
  z-index: 1;
`;

const BannerLeft = styled.div``;

const BannerRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const SubMenuFrame = styled.div`
  /* Component 205 */

  /* Auto Layout */

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;

  position: static;
  height: 52px;
  left: 0px;
  top: 0px;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;
`;

const RectCurrentBar = styled.div`
  /* Rectangle 2778 */

  position: static;
  width: 20px;
  height: 4px;
  left: calc(50% - 20px / 2);
  bottom: 0px;

  background: #ffffff;
  border-radius: 5px;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 10px 0px;
`;

const RouteFrameText = styled.span`
  position: static;
  height: 20px;
  left: 39px;
  top: 6px;

  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  display: flex;
  align-items: center;
  letter-spacing: -0.02em;

  /* white */

  color: #ffffff;

  /* Inside Auto Layout */

  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 0px 4px;
`;

const EngTitle = styled.span`
  position: static;
  width: 118px;
  height: 26px;
  left: 0px;
  top: 0px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 26px;
  /* identical to box height, or 130% */

  display: flex;
  align-items: center;
  letter-spacing: -0.02em;

  /* primary */

  color: #ff3d21;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 10px 0px;
`;

const MainTitle = styled.span`
  position: static;
  width: 811px;
  height: 75px;
  left: 0px;
  top: 0px;

  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 75px;
  display: flex;
  align-items: center;
  letter-spacing: -0.05em;

  /* white */

  color: #ffffff;
  margin: 0 0 66px 0;
`;

const SubMenuTitle = styled.span`
  position: static;
  height: 26px;
  left: calc(50% - 66px / 2);
  top: calc(50% - 26px / 2);

  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height, or 144% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;

  /* white */

  color: #ffffff;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;

  cursor: pointer;

  &.selected {
    font-weight: bold;
  }
`;

const PageBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ToTopBtn = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align_items: center;
  top: 50%;
  right: 100px;
`;

const Ellipse = styled.img`
  position: absolute;
`;

const UpArrow = styled.img`
  position: absolute;
  top: 26px;
`;
export default NoticeRead;
