/* Components */
// import Language from "../../lib/Language";

/* Libraries */
import styled from "styled-components";
import React, { useState, useEffect } from "react";

import Introduction from "./Introduction";
import Benefit from "./Benefit";
import NtfList from "./NftList";

import Slider from "../Common/slider";

function Home() {
  return (
    <Slider width="1920" height="954" dotColors={["#FFFFFF", "#FF3D21", "#FF3D21"]} textColors={["#FFFFFF", "#303030", "#303030"]}>
      <Introduction />      
      <Benefit />
      <NtfList/>
    </Slider>
  );
}

export default Home;
