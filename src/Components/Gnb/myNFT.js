import styled from "styled-components";
import React, { useState, useEffect } from "react";


function MyNFT() {

    return (
        <Container className="Container">
            <Contents>
                <div>asdfadf</div>
            </Contents>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  position: relative;
  margin-top: 130px;
  width: 100%;
  background-color: #e2e2e2;
  a {
    text-decoration: none;
  }
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  width: 100%;
  margin: 30px 25px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
`;
export default MyNFT;
