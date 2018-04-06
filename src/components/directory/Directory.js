import React, { PureComponent } from 'react';
import styled from 'styled-components';
import breakpoint from '../styles/breakpoint';

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0;

  ${breakpoint.tablet`
    display: grid;
    grid-template-columns: 47% 47%;
    grid-auto-rows: 1fr;
    grid-gap: 6%;
  `};
`;

class Directory extends PureComponent {
  render() {
    return <Div>{this.props.children}</Div>;
  }
}

export default Directory;
