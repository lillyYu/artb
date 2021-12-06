import React from "react";
import styled from "styled-components";

export const TermWrapper = styled.div`
  padding: 200px 60px;
  h1 {
    font-weight: bold;
    font-size: 34px;
    line-height: 34px;

    letter-spacing: -1px;

    color: rgba(0, 0, 0, 0.9);
  }

  .content {
    font-size: 26px;
    line-height: 38px;

    letter-spacing: -0.7px;

    color: #646464;
  }

  .section {
    margin-bottom: 30px;
  }
`;

function Term1() {
  return (
    <TermWrapper>
      <h1>Artb 서비스 이용약관</h1>
      <div className="content">
        <div className="section">
          *본 약관은 2021년 12월 13일로부터 적용됩니다.
        </div>

        <div className="section">
          제1조 일반 <br />
          본 약관은 아트비글로벌(주)(이하 ”회사”)가 제공하는 Artb 및 관련 제반
          플랫폼의 서비스(아래 정의) 이용과 관련하여 회사와 "회원"(아래 정의)의
          권리, 의무 및 책임사항 등을 규정함을 목적으로 합니다.
          <br />
          제2조 약관의 명시, 효력 및 변경
          <br />
          회사는 본 약관의 내용을 서비스를 이용하고자 하는 자와 회원이 쉽게 알
          수 있도록 서비스 초기 화면에 게시합니다.
          <br />
          회사는 본 약관의 내용을 서비스를 이용하고자 하는 자와 회원이 쉽게 알
          수 있도록 서비스 초기 화면에 게시합니다.
          <br />
        </div>

        <div className="section">
          제2조 일반 <br />
          본 약관은 아트비글로벌(주)(이하 ”회사”)가 제공하는 Artb 및 관련 제반
          플랫폼의 서비스(아래 정의) 이용과 관련하여 회사와 "회원"(아래 정의)의
          권리, 의무 및 책임사항 등을 규정함을 목적으로 합니다. <br />
          제2조 약관의 명시, 효력 및 변경 <br />
          회사는 본 약관의 내용을 서비스를 이용하고자 하는 자와 회원이 쉽게 알
          수 있도록 서비스 초기 화면에 게시합니다. <br />
          회사는 본 약관의 내용을 서비스를 이용하고자 하는 자와 회원이 쉽게 알
          수 있도록 서비스 초기 화면에 게시합니다. <br />
        </div>
      </div>
    </TermWrapper>
  );
}

export default Term1;
