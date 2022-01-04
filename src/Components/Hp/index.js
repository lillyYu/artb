import styled from "styled-components";
import React, { useState, useEffect } from "react";

import Download from "./Download";
import Notice from "./Notice";
import NoticeRead from "./Notice/read";
import Lnb from "./Lnb";

function Hp(props) {
  return (
    <Container>
      <HelpCenter>
        <Lnb subUrl={props.match.params.sub} />
        <BodyArea>
        {(() => {
          switch (props.match.params.sub) {
            case 'download': return <Download />
            case 'notice':
              if (props.match.params.id)
                return <NoticeRead {...props} />
              else
                return <Notice />
            case 'faq': return <Download />
            default: return null
          }
          })()}
          <UpButton onClick={() => alert("up!")}>
            <Arrow />
          </UpButton>
        </BodyArea>
      </HelpCenter>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 1920px;
  background: #303030;
  background-image: url("/hp_background.png");
  background-repeat: no-repeat;
  background-size: 1016px 638px;
  background-position: 0px -100px
`

const HelpCenter = styled.div`
  display: flex;
  width: 1920px;
  justify-content: center;
  margin: 80px 0 0 0;
  flex-direction: column;
  align-items: center;
`

const BodyArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const UpButton = styled.div`
  display: flex;
  cursor: pointer;
  position: relative;
  justify-content: center;
  align-items: center;
  left: 170px;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background: #FFFFFF;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
`

const Arrow = styled.img`
  display: flex;
  width: 28px;
  height: 28px;
  content: url(/arrow_up.svg);
  justify-content: center;
  align-items: center;  
`

export default Hp;