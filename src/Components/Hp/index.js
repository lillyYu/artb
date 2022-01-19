import styled from "styled-components";
import React, { useState, useEffect } from "react";

import Download from "./Download";
import Notice from "./Notice";
import NoticeRead from "./Notice/read";
import Lnb from "./Lnb";
import { UpButton } from "../Common/button";

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
          <UpButton />
        </BodyArea>
      </HelpCenter>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background: #303030;
  background-image: url("/hp_background.png");
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: 0px -100px
  width: 100%;
  padding: 0 15%;
  justify-content: center;
  @media (max-width:767px) {
    padding: 0 5%;
  }
`

const HelpCenter = styled.div`
  display: flex;
  justify-content: center;
  margin: 80px 0 0 0;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (max-width: 767px) {
    margin: 0;
  }
`

const BodyArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export default Hp;