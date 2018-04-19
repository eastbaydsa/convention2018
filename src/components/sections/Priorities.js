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
            <P>
              Ratifying a Priorities Resolution is in many respects our most
              important task at this upcoming Convention. This document is a
              crucial mechanism of democratic accountability—it's the most
              direct way that we as members have of letting our incoming
              Steering Committee know how we want them to approach the bulk of
              our chapter's work.
            </P>

            <P>
              <Strong>
                A Priorities Resolution is a holistic, 1000-word (maximum)
                document that briefly lays out an analysis of the political
                landscape and identifies several "priority work areas" that the
                Resolution submitters think we should devote the bulk of our
                time and attention to in the upcoming year.
              </Strong>
            </P>

            <P>
              Those "priority work areas" will name a political or
              organizational priority (e.g. "Labor," "Political Education,"
              etc.) and then identify a strategy for working towards that goal,
              tactics that we might engage in, and coalition partners we want to
              collaborate with.
            </P>
            <H3>Submission, Feedback, and Amendment Process</H3>
            <P>
              Any member can submit a Priorities Resolution, provided the
              resolution garners <Underline>at least 20 signatures</Underline>{' '}
              of co-sponsors who are EBDSA members in good standing. No member
              can co-sponsor more than one priorities resolution.
            </P>
            <P>
              The final submitted Priorities Resolutions can be found in the
              links below:
              <ul>
                <li>
                  <h2>
                    <PriorityResolution
                      href="https://d3n8a8pro7vhmx.cloudfront.net/eastbaydsa/pages/503/attachments/original/1524166730/bread-and-roses.pdf?1524166730"
                      target="_blank">
                      Priorities Resolution: Bread & Roses
                    </PriorityResolution>
                  </h2>
                </li>
                <li>
                  <h2>
                    <PriorityResolution
                      href="https://d3n8a8pro7vhmx.cloudfront.net/eastbaydsa/pages/503/attachments/original/1524178854/pr-working-class-unity-and-power.pdf?1524178854"
                      target="_blank">
                      Priorities Resolution: Working-Class Unity and Power
                    </PriorityResolution>
                  </h2>
                </li>
              </ul>
            </P>
            <P>
              At the Convention (<Strong>April 29</Strong>), members will have
              an open discussion on all of the different submitted Priorities
              Resolutions, and then decide by majority which Resolution will
              serve as the "base" resolution. That majority "base" Resolution
              will then be open to member amendments from the floor of the
              Convention.
            </P>
            <P>
              After the period of floor amendments, the Convention will vote
              with a majority threshold whether to adopt the Resolution as
              amended.
            </P>
            <P>
              In several other large DSA chapters, the "base" Priorities
              Resolution is drafted by the Steering Committee and then open to
              member amendment. We think that the process we've designed will
              enable East Bay DSA members to hear from a variety of differing
              political perspectives on the future of this organization, and
              then be empowered on the floor of the Convention to amend
              whichever "base" Resolution gains a majority.
            </P>
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default Priorities;
