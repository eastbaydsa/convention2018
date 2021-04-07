import React from "react";
import styled, { css } from "styled-components";
import { headerHeight } from "../styles/layout";
// import Link from "../Link";

const Wrapper = styled.div`
  display: flex;
  padding-left: 20px;
  height: ${headerHeight};
`;

const Spacer = styled.div`
  flex: 1 1 0;
`;

const linkStyles = css`
  font-size: 18px;
  font-weight: 700;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: -20px;
  padding: 0 30px;
  border-left: 1px solid black;
  &:hover {
    background-color: red;
    color: white;
  }
  ${(props) => props.xtra};
`;

const A = styled.a`
  ${linkStyles};
`;

function NavBar(props) {
  return (
    <Wrapper>
      <A xtra="border-right: 1px solid black" onClick={props.toggleMenu}>
        {" "}
        MENU{" "}
      </A>{" "}
      <Spacer />
      <A
        href="https://www.eastbaydsa.org/events/1876/2021-05-15-2021-east-bay-dsa-convention-day-1/"
        target="_blank"
      >
        RSVP
      </A>
    </Wrapper>
  );
}

export default NavBar;
