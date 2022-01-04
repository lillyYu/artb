import styled, { css } from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Pagination(props) {
  return (
    <PaginationContainer style={props.pageStyle}>
      {
        props.totalCount ? (
          <PageList
            type={props.type}
            pages={parseInt(props.totalCount) / parseInt(props.pagePerItems)}
            curPage={parseInt(props.curPage)}
            stepPage={parseInt(props.pagePerDisplay)}
            setChangePage={props.changeCallback}
          />
        ): (
          <Link to = "">
              {props.curPage}
          </Link>
        )
      }
    </PaginationContainer>
  );

  function PageList({ type, pages, curPage, stepPage, setChangePage }) {
    const pageList = [];
    const btnMargin = 10;
    const start = parseInt((curPage-1) / stepPage) * stepPage;
    const last = Math.min(pages, start + stepPage);
    const prevPage = curPage <= stepPage ? 0 : parseInt(((curPage-1) - stepPage) / stepPage) * stepPage + 4;
    const nextPage = Math.min(parseInt(((curPage - 1) + stepPage) / stepPage) * stepPage + 1, pages);
    const imageList = [];

    switch (type) {
      case 1:
        imageList.push("/caret_double_left_gray.svg");
        imageList.push("/caret_left_gray.svg");
        imageList.push("/caret_right_gray.svg");
        imageList.push("/caret_double_right_gray.svg");
        break;
      default:
        imageList.push("/caret_double_left.svg");
        imageList.push("/caret_left.svg");
        imageList.push("/caret_right.svg");
        imageList.push("/caret_double_right.svg");
        break;
    }

    
    pageList.push(
      <PageNode className="button" style={{ margin: `0 ${btnMargin}px 0 0` }}
        onClick={() => curPage === 1 ? {} : setChangePage(1)} >
        <Image src={imageList[0]} />
      </PageNode>
    );

    pageList.push(
      <PageNode className="button" style={{ margin: `0 ${btnMargin * 2}px 0 0` }}
        onClick={() => 0 === prevPage ? {} : setChangePage(prevPage + 1)}>
        <Image src={imageList[1]} />
      </PageNode>
    );

    for (let i = start; i < last; i++) {
      let margins = i + 1 === last ? {} : { margin: "0 10px 0 0" }

      if (i+1 === curPage) {
        pageList.push(
          <PageNode style={margins} className="on" onClick={() => setChangePage(i+1)}>
            {i+1}
          </PageNode>
        );
      }
      else {
        pageList.push(
          <PageNode style={margins} className="off" onClick={() => setChangePage(i+1)}>
            {i+1}
          </PageNode>
        );
      }
    }

    pageList.push(
      <PageNode style={{ margin: `0 0 0 ${btnMargin * 2}px` }} className="button"
        onClick={() => nextPage !== pages ? setChangePage(nextPage) : {}} >
        <Image src={imageList[2]} />
      </PageNode>
    );

    pageList.push(
      <PageNode className="button" style={{ margin: "0 0 0 10px" }}
        onClick={() => curPage !== pages ? setChangePage(pages) : {}}>
        <Image src={imageList[3]} />
      </PageNode>
    );

    return (
      <PaginationArea type={type}>{pageList}</PaginationArea>
    );
  }
}

const PaginationContainer = styled.div`
  display: flex;
`

const PaginationArea = styled.div.attrs(props => ({type: props.type}))`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  
  .on {
    background: #FF3D21;
    border-radius: 5px;
    color: #FFFFFF;
  }

  .button {
    background: ${props => props.type === 0 ? "#EEEEEE" : "#656565"};
    border-radius: 5px;
  }

  .off {
    background: ${props => props.type === 0 ? "#FFFFFF" : "#A6A6A6"};
    color: ${props => props.type === 0 ? "#000000" : "#FFFFFF"};
    border-radius: 5px;
  }
`

const PageNode = styled.span`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.02em;
`

const Image = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`

export default Pagination;