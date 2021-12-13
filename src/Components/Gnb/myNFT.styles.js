import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
position: relative;
margin-top: 130px;
width: 100%;
min-height: calc(100vh - 130px);

background-color: white;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
a {
  text-decoration: none;
}
`;
export const Contents = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;
gap: 20px 0;
width: 100%;
.back {
  font-weight: 500;
  font-size: 20px;
  color: #eb4632;
  cursor: pointer;
  padding:35px 70px;
}
.hello {
  display: flex;
  justify-content: center;
  margin: 34px 0;
  .unionImg {
    width: 31px;
    height: 35px;
    padding-right: 30px;
  }
}
.buttonWrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
  cursor: pointer;
 
  .icon {
    width: 24px;
    height: 22px;
    margin-right: 54px;
  }
  .button {
    padding: 33px 100px;
    background: #F2CCC4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    vertical-align: middle;
    font-family: Noto Sans CJK KR;
    font-size: 25px;
    line-height: 22px;
    font-style: normal;
    font-weight: 400;
    color: #ffffff;
  }
}
`;

export const NoBalanceWrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;

.banner {
width: 165px;
height: 65px;
margin: 150px auto 50px auto;
}

.title {
font-size: 26px;
line-height: 40px;
text-align: center;
letter-spacing: -0.7px;
color: rgba(0, 0, 0, 0.8);
margin-bottom: 78px;
}

.button-wrapper {
width: 63%;
max-width: 453.5px;
.button {
  background: rgba(145, 145, 145, 0.8);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding: 33px 81px;
  text-align: center;
  font-weight: 500;
  font-size: 25px;
  line-height: 20px;
  letter-spacing: 0.375px;
  color: #FFFFFF;
}
}
`

export const FooterWrapper = styled.div`
background: #525252;
height: 90px;
display: flex;
justify-content: flex-end;
align-items: center;
padding: 0 25px;

.label {
font-weight: 500;
font-size: 24px;
line-height: 49px;
letter-spacing: -1px;
color: rgba(255, 255, 255, 0.9);
margin-right: 13px;
}
.phone {
font-size: 26px;
line-height: 38px;
color: #FFFFFF;
}
`

export const BankDepositInformationWrapper = styled.div`
margin: 38px 42px 46px 42px;
background: #F7F7F7;
border-radius: 5px;
padding: 22px 30px;

.bank-deposit-infor__title {
font-size: 26px;
line-height: 40px;
letter-spacing: -1px;
color: rgba(0, 0, 0, 0.8);
}

.bank-deposit-infor__content {
margin-top: 22px;
display: flex;
align-items: flex-end;
justify-content: space-between;

line-height: 40px;
letter-spacing: -1px;
color: rgba(0, 0, 0, 0.8);

.bank__number {
  font-size: 32px;
  font-weight: bold;
}
.bank__name {
  font-size: 24px;
}

.button__copy {
  font-weight: 500;
  font-size: 26px;
  line-height: 40px;
  letter-spacing: -1px;
  color: rgba(230, 71, 36, 0.8);
  cursor: pointer;
  position: relative;

  #bank-deposit-infor__copy-tooltip {
    opacity: 0;
    font-size: 24px;
    color: #000000;
    position: absolute;
    top: 34px;
    left: 34px;
  }
  @keyframes disappear {
    20% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
}
}
`;

export const OrderWrapper = styled.div`
display: flex;
padding: 33px 0;
margin: 0 46px;

cursor: pointer;
border-bottom:  1px dashed #9E9E9E;

.logo {
  width: 150px;
  height: 150px;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 100%;
}

.content {
  margin-left: 13px;
  padding: 10px 0;

  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;

  .content__author {
    font-size: 24px;
    letter-spacing: -0.7px;
    color: #646464;
    margin-bottom: 8px;
  }

  .content__title {
    font-weight: bold;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: -1px;
    text-align: left;
    color: rgba(0, 0, 0, 0.9);
  }

  .content__bottom {
    flex-grow: 1;
    display:flex;
    align-items: flex-end;
    justify-content: space-between;

    .content__count {
      font-size: 24px;
      letter-spacing: -0.7px;
      color: rgba(0, 0, 0, 0.8);

      span {
        font-weight: bold;
      }
    }

    .content__status {
      padding: 5px 10px;
      margin-right: 12px;

      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      text-align: center;

      color: #E64724;
      background: rgba(230, 71, 36, 0.1);
      border-radius: 5px;
    }

    .content__payment {
      font-weight: bold;
      font-size: 26px;
      text-align: right;
      letter-spacing: -0.7px;
      color: rgba(230, 71, 36, 0.8);
    }
  }
}
`;

export const OrderHistoryWrapper = styled.div`
.title {
  font-weight: 500;
  font-size: 32px;
  line-height: 23px;
  text-align: center;
  letter-spacing: -0.7px;
  color: rgba(0, 0, 0, 0.8);

  margin-bottom: 50px;
  position: relative;
}
.title::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    left: calc(50% - 5px);
    top: -25px;
    background: rgba(230, 71, 36, 0.8);
    border-radius: 100%;
}
`;

export const GuideWrapper = styled.div`
padding: 0 46px;
margin-top: 116px;

.high-line {
  font-weight: 600;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: -1.6px;
  color: #1D1D1D;
}

.content {
  margin-top: 21px;

  font-size: 26px;
  line-height: 40px;
  letter-spacing: -0.7px;
  color: rgba(0, 0, 0, 0.8);
}
`;