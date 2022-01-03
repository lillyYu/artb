import styled from "styled-components";
import React, { useState, useEffect } from "react";

function Notice() {
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
      <Paint />
      <Banner>
        <BannerMainFrame>
          <EngTitle>Help center</EngTitle>
          <BottomFrame>
            <MainTitle>공지사항</MainTitle>
            <SubFrame>
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
            </SubFrame>
          </BottomFrame>
        </BannerMainFrame>
        <RouteFrame>
          <RouteFrameText>홈 &gt; 고객센터 &gt; 공지사항</RouteFrameText>
        </RouteFrame>
      </Banner>
      <Content>
          <ContentNotice>
            {datas.map(i => <NoticeItem></NoticeItem>)}
          </ContentNotice>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #303030;
`;

const Paint = styled.div`
  position: flex;
  width: 1025px;
  height: 639px;
  left: -350px;
  top: -131px;
  background: url(paint.png);
`;

const Banner = styled.div`
  position: absolute;
  width: 1920px;
  height: 263px;
  left: 0px;
  top: 100px;
`;

const BannerMainFrame = styled.div`
  /* Frame 7468 */

  /* Auto Layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 1300px;
  height: 111px;
  left: 310px;
  top: 80px;
`;

const BottomFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  position: static;
  width: 1300px;
  height: 75px;
  left: 0px;
  top: 36px;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 10px 0px;
`;

const SubFrame = styled.div`
  /* Frame 7462 */

  /* Auto Layout */

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 489px;
  height: 52px;
  right: 0px;
  top: 11.5px;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 0px;
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

const RouteFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  position: absolute;
  width: 1300px;
  height: 32px;
  left: 310px;
  top: 231px;
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

  &.selected {
    font-weight: bold;
  }
`;

const Content = styled.div`
/* Frame 7611 */


/* Auto Layout */

display: flex;
flex-direction: column;
align-items: center;
padding: 0px;

position: absolute;
width: 1300px;
left: 310px;
top: 443px;
`;

const ContentNotice = styled.div`
  /* Frame 7455 */

  /* Auto Layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 1300px;
  height: 980px;
  left: 0px;
  top: 0px;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 80px 0px;
`;

const NoticeItem = styled.div`
  /* 공지사항 */

  /* Auto Layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  position: static;
  width: 1300px;
  height: 80px;
  left: 0px;
  top: 0px;

  background: rgba(255, 255, 255, 0.2);
  box-shadow: inset 0px 0px 30px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(30px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 5px;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 20px 0px;
`;

const ContentPagination = styled.div`
  /* pagenation set */

  position: static;
  width: 460px;
  height: 40px;
  left: 420px;
  top: 1060px;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 80px 0px;
`;
export default Notice;
