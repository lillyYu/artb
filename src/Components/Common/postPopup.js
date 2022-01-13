import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DaumPostcode from 'react-daum-postcode';
import { PopupDialog } from "../Common/popup";

function PostPopup(props) {
  const handlePostComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = ''; 
    
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }

    if( props.onAddress )
      props.onAddress(data.zonecode, fullAddress);

    props.setPopupFlag(false);
  }

  return (
    <Container>
      {props.popupFlag ?
        <PopupDialog
          buttons={[
            {
              name: "닫기",
              click: () => {props.setPopupFlag(false)},
              bgColor: "#FF3D21",
              style: {
                fontFamily: "Spoqa Han Sans Neo",
                fontSize: "16px",
                fontWeight: "bold",
                lineHeight: "24px",
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
                borderRadius: "5px",
              },
            },
          ]}
        >
          <DaumPostcode onComplete={handlePostComplete} autoClose />
        </PopupDialog>
      : {}}
    </Container>
  )
}

const Container = styled.div`
`

export default PostPopup