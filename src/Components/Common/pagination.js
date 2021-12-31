import styled, { css } from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Pagination(props) {
  return (
    <PaginationContainer style={props.pageStyle}>
      {
        props.totalCount ? (
          <PageList
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

  function PageList({ pages, curPage, stepPage, setChangePage }) {
    const pageList = [];
    const btnMargin = 10;
    const start = parseInt((curPage-1) / stepPage) * stepPage;
    const last = Math.min(pages, start + stepPage);
    const prevPage = curPage <= stepPage ? 0 : parseInt(((curPage-1) - stepPage) / stepPage) * stepPage + 4;
    const nextPage = Math.min(parseInt(((curPage - 1) + stepPage) / stepPage) * stepPage + 1, pages);
    
    pageList.push(
      <PageNode className="button" style={{ margin: `0 ${btnMargin}px 0 0` }}
        onClick={() => curPage === 1 ? {} : setChangePage(1)} >
        <Image src="./caret_double_left.svg" />
      </PageNode>
    );

    pageList.push(
      <PageNode className="button" style={{ margin: `0 ${btnMargin * 2}px 0 0` }}
        onClick={() => 0 === prevPage ? {} : setChangePage(prevPage + 1)}>
        <Image src="./caret_left.svg" />
      </PageNode>
    );

    for (let i = start; i < last; i++) {
      if (i+1 === curPage) {
        pageList.push(
          <PageNode className="on" onClick={() => setChangePage(i+1)}>
            {i+1}
          </PageNode>
        );
      }
      else {
        pageList.push(
          <PageNode onClick={() => setChangePage(i+1)}>
            {i+1}
          </PageNode>
        );
      }
    }

    pageList.push(
      <PageNode style={{ margin: `0 0 0 ${btnMargin * 2}px` }} className="button"
        onClick={() => nextPage !== pages ? setChangePage(nextPage) : {}} >
        <Image src="./caret_right.svg" />
      </PageNode>
    );

    pageList.push(
      <PageNode className="button" style={{ margin: "0 0 0 10px" }}
        onClick={() => curPage !== pages ? setChangePage(pages) : {}}>
        <Image src="./caret_double_right.svg" />
      </PageNode>
    );

    return (
      <PaginationArea>{pageList}</PaginationArea>
    );
  }
}

const PaginationContainer = styled.div`
  display: flex;
`

const PaginationArea = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  
  .on {
    background: #FF3D21;
    border-radius: 5px;
    color: #FFFFFF;
  }

  .button {
    background: #EEEEEE;
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
  color: #000000;
`

const Image = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
`

export default Pagination;