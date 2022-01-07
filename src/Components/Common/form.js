import styled, { css } from "styled-components";
import React, { useState } from "react";

import { ImageButton } from "./button";

function ABLabel(props) {
  return (
    <LabelContainer style={props.style}>
      <LabelField>{props.children}</LabelField>
      <RequireField>{props.require === true ? "*" : ""}</RequireField>
    </LabelContainer>
  );
}

function ABInput(props) {
  const [flag, setFlag] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [text, setText] = useState("");

  const changeInput = (e) => {
    if (props.pass !== true) {
      if (0 < e.target.value.length) setFlag(true);
      else setFlag(false);
    }

    let inputText = e.target.value;

    if (props.number === true) {
      inputText = inputText.replace(/[^0-9]/g, "");
    }

    setText(inputText);
    if (props.onChangeCallback) props.onChangeCallback(inputText);
  };

  const clearInput = () => {
    setText("");
    setFlag(false);
    if (props.onChangeCallback) props.onChangeCallback("");
  };

  const toggleInput = () => {
    setHidden(!hidden);
  };

  return (
    <InputContainer
      style={{
        width: props.width,
        height: props.height,
        border:
          props.require === true && text === ""
            ? "1px solid #D1504B"
            : "1px solid #C5C5C5",
        ...props.style,
      }}
    >
      <InputBox
        type={props.pass === true && hidden === true ? "password" : "text"}
        placeholder={props.placeholder}
        size={props.size}
        style={{
          width: props.width - 16 * 3 - 20,
          height: props.height - 14 * 2,
        }}
        value={text}
        onChange={changeInput}
        readOnly={props.readOnly}
      />
      {props.pass === true ? (
        <ImageButton
          width={16}
          height={16}
          img="/eye_icon.svg"
          onClick={toggleInput}
        />
      ) : (
        props.readOnly !== true ?
        <ImageButton
          width={16}
          height={16}
          img="/cancel_circle.svg"
          btnStyle={{ display: flag === true ? "flex" : "none" }}
          onClick={clearInput}
        />
        : <></>
      )}
    </InputContainer>
  );
}

function ABPassword(props) {
  const [flag, setFlag] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [text, setText] = useState("");

  const changeInput = (e) => {
    if (0 < e.target.value.length) setFlag(true);
    else setFlag(false);

    let inputText = e.target.value;

    setText(inputText);
    if (props.onChangeCallback) props.onChangeCallback(inputText);
  };

  const clearInput = () => {
    setText("");
    setFlag(false);
    if (props.onChangeCallback) props.onChangeCallback("");
  };

  const toggleInput = () => {
    setHidden(!hidden);
  };

  return (
    <InputContainer style={{
      width: props.width,
      height: props.height,
      border: props.require === true && text === '' ? "1px solid #D1504B" : "1px solid #C5C5C5",
      background: props.readOnly === true ? "#EEEEEE" : "#FFFFFF",
      ...props.style
    }}>
      <InputBox type={props.pass === true && hidden === true ? "password" : "text"}
        placeholder={props.placeholder}
        size={props.size}
        readOnly={props.readOnly}
        style={{
          width: props.width - (props.cancel === false ? 0 : 16 * 3) - 55, height: props.height - 14 * 2,
          background: props.readOnly === true ? "#EEEEEE" : "#FFFFFF",
          color: props.readOnly === true ? "#CBCBCB" : "#000000"
        }}
        value={text}
        onChange={changeInput}
      />
      {
        <>
          <ImageButton
            width={16}
            height={16}
            img="/cancel_circle.svg"
            btnStyle={{
              display: flag === true ? "flex" : "none",
              marginRight: 15,
            }}
            onClick={clearInput}
          />
          <ImageButton
            width={16}
            height={16}
            img="/eye_icon.svg"
            btnStyle={{ paddingLeft: flag === true ? 30:0 }}
            onClick={toggleInput}
          />
        </>
      }
    </InputContainer>
  );
}

function ABCheckBox(props) {
  const [check, setCheck] = useState(props.checked);

  const changeCheck = (e) => {
    setCheck(e.target.checked);
    if (props.onChangeCallback) props.onChangeCallback(e.target.checked);
  };

  return (
    <ABCheckContainer>
      <ABCheck checked={check} onChange={changeCheck} />
      {check ? <ABCheckImage /> : <ABUncheckImage />}
    </ABCheckContainer>
  );
}

function ABRadio(props) {
  const [check, setCheck] = useState(0);

  const changeRadio = (e) => {
    setCheck(parseInt(e.target.value));

    if (props.onChangeCallback) props.onChangeCallback(e.target.value);
  };

  return (
    <ABRadioArea>
      {props.tags.map((tag, index) => {
        return (
          <ABRadioContainer>
            <ABRadioBox
              checked={check === index ? true : false}
              value={index}
              onChange={changeRadio}
            />
            {check === index ? <ABRadioChecked /> : <ABRadioUnchecked />}
            <ABRadioLabel>{tag}</ABRadioLabel>
          </ABRadioContainer>
        );
      })}
    </ABRadioArea>
  );
}

const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const LabelField = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #303030;
`;

const RequireField = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #d1504b;
  margin: 0 0 0 2px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  align-items: center;
`;

const InputBox = styled.input`
  margin: 14px 20px 14px 16px;
  outline: none;
  border: 0;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.02em;

  ::placeholder {
    color: #c5c5c5;
  }
`;

const ABCheckContainer = styled.div`
  display: flex;
`;

const ABCheck = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  z-index: 1;
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
  opacity: 0;
`;

const ABCheckImage = styled.img`
  content: url(/check_checked.svg);
  width: 24px;
  height: 24px;
`;

const ABUncheckImage = styled.img`
  content: url(/check_unchecked.svg);
  width: 24px;
  height: 24px;
`;

const ABRadioContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px 0 0;
`;

const ABRadioBox = styled.input.attrs({ type: "radio" })`
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
  position: absolute;
  z-index: 1;
  opacity: 0;
`;

const ABRadioChecked = styled.img`
  content: url(/radio_checked.svg);
  width: 24px;
  height: 24px;
  margin: 0 10px 0 0;
`;

const ABRadioUnchecked = styled.img`
  content: url(/radio_unchecked.svg);
  width: 24px;
  height: 24px;
  margin: 0 10px 0 0;
`;

const ABRadioLabel = styled.span`
  display: flex;
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.005em;
`;

const ABRadioArea = styled.div`
  display: flex;
  flex-direction: row;
  height: 24px;
`;

export { ABLabel, ABInput, ABCheckBox, ABRadio, ABPassword };
