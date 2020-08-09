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

class Priorities extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>How will the Priorities Resolution process work?</H2>
            <P>Over a month-long span, committees, leaders, and members will draft short Priority Proposals around a single issue and/or campaign, gather signatures from membership in support, and bring them to the convention floor for debate. The purpose of these Proposals is to outline political positions and concrete tasks that will guide our chapter’s work for the coming year.
            </P>
            <P><Strong>Drafting and Submitting Proposals</Strong>: A Proposal needs to be no more than 300 words and at least 25 members need to sign on to it for it to be considered. Members are encouraged to collaborate to draft proposals using existing chapter infrastructure like committees or caucuses, or come together in informal groups to write proposals. Authors of proposals will have an opportunity to consolidate or amend proposals before the convention if they wish to.</P>
            <P>
            Priority Proposals can be on any number of topics but should contain the following: a clear <Strong>title</Strong> describing the Proposal, <Strong>political rationale</Strong> for why we as socialists should organize for it, and <Strong>organizing tasks</Strong> for us to take in the next year in support. (No hyper-links are allowed within the proposal).
            </P>
            
            <P><Link href="https://docs.google.com/document/d/1pGixQ_Gu44ljX140d0UQIzhxgJY4Dvp3MhkGCdzjPG4/edit">
            You can read last year’s Medicare for All priority here as an example.
            </Link></P>

            <P><Link href="https://docs.google.com/forms/d/12tHXFg3jU7dNrPxYxsSrt-myuH4kTy1vZ9rNqcdYv5o/edit">
            If you're interested in writing a proposal, fill out this form.
            </Link></P>

            <P><Link href="https://docs.google.com/forms/d/1ZgoUDTLxBmnRn849LniXFZpnuNRmRWCPGa2sUy9T0ZI/edit">
            Submit finished proposals here.
            </Link></P>

            <P>
            <Strong>Amendments</Strong>: Members will have the opportunity to submit amendments to Proposals before the Convention to be considered on the floor and to also motion to amend from the floor. After debate we’ll all vote and the Proposals which have majority support will become our Priorities Resolution.
            </P>

            <P>
            <Strong>Consent Poll and Agenda</Strong>: Once proposals are submitted, we will send them out along with a poll to members to gauge support for them and interest in debating them on the floor. The Convention Organizing Working Group will use this information to construct an agenda that makes the most of our debate time. Anything with overwhelming support will go on the consent calendar at the convention, along with a political preamble for the Priorities Resolution written by the Steering Committee. The Convention Organizing Working Group will ensure that no more than 6 proposals and their relevant amendments come to the floor, with the goal of agendizing substantial debate time for each. The rules can be suspended by a 2/3rds vote to change the agenda at the Convention.
            </P>

            <P>
            Once we have heard and debated all of the proposals, we will vote them each up or down and those that were adopted, in addition to the consent calendar and the political preamble, will be our new priorities resolution.
            </P>

          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default Priorities;
