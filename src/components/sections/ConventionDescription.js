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

class ConventionDescription extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>What are the Convention and the Priorities Resolution?</H2>
            <P>East Bay DSA is a democratically run, membership-based organization; every year we hold an annual Convention where we collectively debate and decide on our direction for the coming year. It's a moment to reflect on our previous work and our material conditions and consider what we, as socialists, should spend our memberships’ capacity organizing around. The Convention is the highest decision-making body in our chapter; the main task of the Convention is to vote on a Priorities Resolution and a new steering committee.
            </P>
            <P>The Priorities Resolution is a democratically decided on document that’s debated and ratified at the Convention. It serves lots of functions: as something of a platform, as something to reflect on for members throughout the year, and as a record of our organization’s politics and key debates. You can see our current Priorities Resolution <Link href="https://www.eastbaydsa.org/priorities/">here</Link>.</P>
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default ConventionDescription;
