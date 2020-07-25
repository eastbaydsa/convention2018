import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Container from '../Container';
import Section from '../Section';
import { H2, P, Strong } from '../typography';
import Link from '../Link';
import NavAnchor from '../NavAnchor';
import Directory from '../directory/Directory';
import DirectoryItem from '../directory/DirectoryItem';
import { purple } from '../colors';

const Info = styled.p`
  font-size: 30px;
  margin-bottom: 40px;
`;

const Line = styled.div`
  border-top: 3px solid ${purple};
  margin: 30px 0;
`;

class ConventionChanges extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>Why are we changing the Convention?</H2>
            <P>Traditionally, the annual chapter Convention is in-person and happens the same day as our Steering Committee election. This year’s East Bay DSA local convention is going to have two major differences from previous years. The first is that social distancing prevents us from meeting in person, <Strong>so we are going to be hosting the annual convention virtually</Strong>! The second is that <Strong>we have already had our Steering Committee election</Strong>, allowing us more time to reflect on our work as DSA and debate the priorities resolution.
            </P>

            <P>
            For this reason, we are trying a new process for drafting the priorities resolution based on the way DSA’s National Convention functions. Our goal is to make the process more participatory for membership and encourage each other to write out and debate what we think is really important for our chapter to do.
            </P>
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default ConventionChanges;
