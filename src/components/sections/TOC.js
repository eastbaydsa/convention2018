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
              <H2>Submitting a Priorities Proposal</H2>
              <P>
                If you're interested in writing a Priorities Proposal, please{' '}
                <Link href="https://forms.gle/yj6uLaMnyfTaPzS46">
                  fill out this form
                </Link>.
              </P>

              <P>
                If you're submitting a FINISHED Priorities Proposal, please{' '}
                <Link href="https://forms.gle/A8rUzuZj4eu83QBs7">
                  fill out this form
                </Link>{' '}
                with 25 member signatures and emails
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
