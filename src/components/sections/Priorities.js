import React, { PureComponent } from 'react';
import Container from '../Container';
import Section from '../Section';
import { H2, H3, P, Strong, Underline } from '../typography';
import NavAnchor from '../NavAnchor';
import styled from 'styled-components';
import { red } from '../colors';

const PriorityResolution = styled.a`
  color: red;

  &:hover {
    color: white;
    background: red;
  }
`;

class Priorities extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>Priorities Resolutions</H2>
            <P>The priorities resolution is a holistic document that outlines the political and organizational priorities for the chapter to undertake in the upcoming year.</P>

            <P>The "priority work areas" will name a political or organizational priority (e.g. "Labor," "Political Education," etc.) and then identify a strategy for working towards that goal, tactics that we might engage in, and coalition partners we want to collaborate with.</P>

            <P>The Steering Committee will approve a "base" priorities resolution that will be submitted to the chapter that may be passed as is or amended at the convention. More detailed information is still to come.</P>

          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default Priorities;
