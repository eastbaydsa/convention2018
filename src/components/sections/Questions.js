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

class Questions extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>Questions and Accessibility</H2>

            <P>
            Email <Link href="mailto:info@eastbaydsa.org">info@eastbaydsa.org</Link> ASAP with any accessibility needs so we can begin to arrange accommodations.
            </P>
            <P>
            We are so excited to participate in the highest body of the chapter with you all. 
            </P>
            <P>
            Other questions about the convention? Reach out with questions at <Link href="mailto:info@eastbaydsa.org">info@eastbaydsa.org</Link>.org.
            </P>
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default Questions;
