import React, { PureComponent } from "react";
import styled from "styled-components";
import UnstyledLink from "../UnstyledLink";
import { red, purple } from "../colors";
import NavAnchor from "../NavAnchor";
import breakpoint from "../styles/breakpoint";

const Wrapper = styled(UnstyledLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  background-image: url(/images/cover.jpg);
  background-size: cover;
  background-position: right bottom;
`;

const Title = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 16vmin;
  text-transform: uppercase;
  text-align: center;
  text-shadow: 2px 2px 1px #551416;
`;

class Cover extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Wrapper to="/toc">
          <Title>{this.props.title}</Title>
        </Wrapper>
      </NavAnchor>
    );
  }
}

export default Cover;
