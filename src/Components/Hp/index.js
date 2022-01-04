import styled from "styled-components";
import React, { useState, useEffect } from "react";

import Download from "./Download";
import Lnb from "./Lnb";

function Hp(props) {
  console.log(props.match.params.sub);

  return (
    <Container>
      <HelpCenter>
        <Lnb subUrl={props.match.params.sub} />
        {(() => {
          switch (props.subUrl) {
            case 'download': return <Download />
            case 'notice': return <Download />
            case 'faq': return <Download />
            default: return <Download />
          }
        })()}
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

export default Hp;