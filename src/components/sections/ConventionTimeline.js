import React, { PureComponent } from 'react';
import Container from '../Container';
import Section from '../Section';
import { H2, H3, P, Strong, Underline, UL, ULI } from '../typography';
import Link from '../Link';
import NavAnchor from '../NavAnchor';
import styled from 'styled-components';
import { red } from '../colors';
import Directory from '../directory/Directory';
import DirectoryItem from '../directory/DirectoryItem';

const PriorityResolution = styled.a`
  color: red;

  &:hover {
    color: white;
    background: red;
  }
`;

class Convention extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>What is the timeline for the convention?</H2>
            <UL>
                <ULI><Strong>Sunday, August 16:</Strong> Deadline for Priority Resolution Submission</ULI>
                <ULI><Strong>Wednesday, August 19:</Strong> Release of Consent Calendar Poll & Call for Amendments</ULI>
                <ULI><Strong>Wednesday, August 26:</Strong> Deadline for Consent Calendar Poll and Amendments</ULI>
                <ULI><Strong>Sunday, August 30:</Strong> Full Convention Agenda with Resolutions and Amendments Released</ULI>
                <ULI><Strong>Sunday, September 13:</Strong> Local Convention</ULI>
            </UL>
            <P>For more information about phonebanks and possible supplemental events, please check <Link href="https://www.eastbaydsa.org/events/">eastbaydsa.org/events</Link>.</P>
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default Convention;
