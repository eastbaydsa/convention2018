import React, { Component } from "react";
import styled from "styled-components";
import Section from "../Section";
import Container from "../Container";
import Index from "../Index";
import NavAnchor from "../NavAnchor";
import { H2, H3, P } from "../typography";
import Link from "../Link";

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
                border: "20px solid #ea2127",
                padding: 30,
                marginBottom: 30,
              }}
            >
              <H2>Updates</H2>

              <P>
                <strong>
                  Read our full agenda and Priorities Proposals in the
                  <Link href="https://docs.google.com/document/d/1eLqZoP15qcFSB8RTuICvywExbNy7J2PX1a3bEhWrEVw/edit#">
                    Convention Packet
                  </Link>
                  .
                </strong>{" "}
                This packet has all the information you’ll need to know for our
                Convention day-of.
              </P>

              <P>
                We’re so excited to announce our full panel on the topic of “How
                Do Socialists Build Power?” We’ll be welcoming socialist
                all-stars Cecily Myart-Cruz (President of UTLA), Michael Lighty
                (national leader in the fight for M4A), and Jabari Brisport
                (soon-to-be State Senator for New York’s 25th). All three of
                them will have a lot to share on this panel moderated by our
                co-chairs and with time for a brief Q&amp;A.
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
