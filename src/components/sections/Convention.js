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
            <H2>What will the Convention Look Like?</H2>
            <P>
            Similar to our General Meetings, we will have structured debate and voting. All members of East Bay DSA are welcome to join and vote (double check your membership at <Link href="http://proof.dsausa.org">proof.dsausa.org</Link>).
            </P>

            <P>
            In addition to the decision-making process, we will also have guest speakers. 
            </P>

            <P>
            The final agenda for the convention will be available in the upcoming weeks.
            </P>

            <P>
            We’ll be hosting several phonebanks to make sure that people RSVP and can use lots of volunteers. Please check <Link href="https://www.eastbaydsa.org/events/">eastbaydsa.org/events</Link> to find upcoming ones.
            </P>
            <P>A make sure that you RSVP <Link href="https://www.eastbaydsa.org/events/1355/2020-09-13-ebdsa-2020-convention/">here!</Link></P>

          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default Convention;
