import React from "react";
import styled, { css } from "styled-components";
import { headerHeight } from "../styles/layout";
// import Link from "../Link";
import { Link } from "react-router-dom";

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
  &:hover {
    background-color: red;
    color: white;
  }
  ${props => props.xtra};
`;

const A = styled.a`
  ${linkStyles};
`;

const StyledRouterLink = styled(Link)`
  ${linkStyles};
`;
// tabletPortraitBreakpoint({
//   fontSize: "24px"
// })

function NavBar(props) {
  return (
    <Wrapper>
      <A xtra="border-right: 1px solid black" onClick={props.toggleMenu}>
        {" "}
        MENU{" "}
      </A>{" "}
      <Spacer />
      <StyledRouterLink xtra="border-left: 1px solid black" to="/rsvp">
        RSVP
      </StyledRouterLink>
    </Wrapper>
  );
}

export default NavBar;
