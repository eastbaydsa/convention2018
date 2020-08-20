import React, { Component } from 'react';
import styled from 'styled-components';
import Section from '../Section';
import Container from '../Container';
import Index from '../Index';
import NavAnchor from '../NavAnchor';
import { H2, P } from '../typography';
import Link from '../Link';

const Spacer = styled.div`
  flex: 1 1 auto;
`;

const Graphic = styled.img``;

class TOC extends Component {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <div
              style={{
                border: '20px solid #ea2127',
                padding: 30,
                marginBottom: 30
              }}
            >
              <H2>Updates</H2>

              <P>
                We're so excited to welcome our first guest speaker Jabari
                Brisport! Jabari is a queer, black, public school teacher and
                union member, a child of an immigrant, a proud socialist and the
                soon to be State Senator for New York’s 25th. He has walked
                countless picket lines, successfully fought against Amazon in
                Queens, and this year won an upset electoral victory for the
                State Senate. We’re so excited to have Jabari come speak to us
                about how to organize the working class to win!
              </P>

              <P>
                Our drafting process is done and you can{' '}
                <Link href="https://docs.google.com/document/d/1NR0XMD1hAuptFMibsW7NgkTl8EFO-0lVzI9J2Jca4Ig/edit">
                  read the text of all our 17 Priority Proposals here
                </Link>. You should have received an Opavote poll via email;
                this non-binding poll is entirely to help us gather information
                and draft our Convention agenda. The poll is open until August
                26 at 11:59 pm for members to indicate which proposals they
                support and which they would like to debate on the floor. There
                are two questions in the poll:
              </P>

              <ol>
                <li>
                  Which Priorities Proposals do you support? Read through each
                  Proposal and mark whether or not you would vote yes to include
                  it in our Priorities Resolution as written.
                </li>
                <li>
                  Which Priorities Proposals should receive floor debate time?
                  Rank the Proposals in order of preference for floor debate.
                  Even if you support something you may think it would be good
                  to have a floor debate about it!
                </li>
              </ol>

              <P>
                Again we will use this information to construct our agenda and
                make sure that we spend our time debating the things most people
                want to debate. The poll is open until August 26th at 11:59pm so
                please make sure you fill it out!
              </P>

              <P>
                If you would like to submit an amendment to a Priorities
                Proposal,{' '}
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfwZX4uqK71uAwRs4x-UMyqj-brdYMppm0M0qpogjXDffKQxw/viewform">
                  use this form
                </Link>. We're only going to consider substantial amendments,
                not stylistic ones or ones that change the entire Proposal.
                Amendments will be accepted until August 26th at 11:59pm so
                please make sure you fill it out!
              </P>
            </div>

            <H2>Contents</H2>
            <Index links={this.props.links} />
            <Spacer />
            <Graphic src="/images/people-marching.svg" />
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default TOC;
