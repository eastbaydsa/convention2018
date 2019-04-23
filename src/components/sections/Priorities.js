import React, { PureComponent } from 'react';
import Container from '../Container';
import Section from '../Section';
import { H2, H3, P, Strong, Underline } from '../typography';
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

class Priorities extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>Priorities Resolutions</H2>
            <P>The priorities resolution (PR) is a holistic document that outlines the political and organizational priorities for the chapter to undertake in the upcoming year.</P>

            <P>The "priority work areas" will name a political or organizational priority (e.g. "Labor," "Political Education," etc.) and then identify a strategy for working towards that goal, tactics that we might engage in, and coalition partners we want to collaborate with.</P>

            <P>The Steering Committee has approved a base PR document, which may be passed as is or amended at the convention on May 18. You can read the PR here.</P>
      
            <Directory>
                <DirectoryItem
                    links={[
                    {
                        label: '2019 Priorities Resolution',
                        href: 'https://docs.google.com/document/d/1rx7kN8Bn0pQsbAs0PIUOYm4I_r3O-n3HxE4CGJYmGa0/edit?ts=5cbe8b0d'
                    }
                    ]}
                />
            </Directory>
      
            <P>Any member in good standing and four other co-signers can submit an amendment to the PR. If you would like to submit an amendment to the PR or a complete, alternate PR, please use the following form.</P>
      
            <Directory>
                <DirectoryItem
                    links={[
                    {
                        label: 'PR Amendment Submission Form',
                        href: 'https://docs.google.com/forms/d/e/1FAIpQLSduLWCe7150Z-Lv8qSt_tOvCaT_urobcWD5BERJBLWDb6Uwjg/viewform'
                    }
                    ]}
                />
            </Directory>
      
            <H3>Timeline</H3>
      
            <P>Here's the timeline for member PR submissions and amendments.</P>
      
            <H3>Week of April 21–25</H3>
      
            <P>The Steering Committee will release an approved PR to chapter.</P>
      
            <H3>May 4: Full Alternate PR Submission</H3>
      
            <P>If any members or groups would like to submit a complete, alternate PR or amendments that add, remove, or replace one or more entire main sections of the PR (such as "Labor" or "Strategy"), submissions should be made by May 4 to allow members to review and draft amendments to the alternates.</P>
      
            <H3>May 11: Amendment Submission</H3>

            <P>Any amendments submitted by this time will be reviewed by the Resolutions Subcommittee, then posted online for members to consider in advance and agendized at the convention for potential approval by majority vote.</P>

            <H3>May 18: Convention</H3>
      
            <P>In addition to amendments submitted in advance by May 11, following our bylaws, members may suspend rules (by two-thirds floor vote) at any point during the convention to propose further amendments.</P>

            <P>Questions about the PR can be directed to <Link href="mailto:info@eastbaydsa.org">info@eastbaydsa.org</Link>.</P>

          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default Priorities;
