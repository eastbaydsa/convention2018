import React, { Component } from "react";
import styled from "styled-components";
import Section from "../Section";
import Container from "../Container";
import Index from "../Index";
import NavAnchor from "../NavAnchor";
import { H2, H3, P, UL, ULI, Strong } from "../typography";
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
                <strong>Convention is this weekend!</strong> Please{" "}
                <Strong>RSVP</Strong> now:
                <UL>
                  <ULI>
                    <Link href="https://www.eastbaydsa.org/events/1876/2021-05-15-2021-east-bay-dsa-convention-day-1/">
                      <strong>Convention Day 1</strong> &mdash; May 15, 2021
                      1PM-5PM
                    </Link>
                  </ULI>
                  <ULI>
                    <Link href="https://www.eastbaydsa.org/events/1875/2021-05-16-2021-east-bay-dsa-convention-day-2/">
                      <strong>Convention Day 2</strong> &mdash; May 16, 2021
                      1PM-3PM
                    </Link>
                  </ULI>
                </UL>
              </P>
              <P>
                <strong>
                  The{" "}
                  <Link href="https://docs.google.com/document/d/1CF9lJhAPzJMAnLkQVOz3buGVepmI4728PSIrcEPQAVw/edit?usp=sharing">
                    2021 Convention Packet
                  </Link>{" "}
                  is here!
                </strong>
              </P>
              <P>
                Meet the candidates running for{" "}
                <Link href="https://docs.google.com/document/d/1CF9lJhAPzJMAnLkQVOz3buGVepmI4728PSIrcEPQAVw/edit#bookmark=id.mde21bocv02h">
                  Steering Committee
                </Link>{" "}
                and{" "}
                <Link href="https://docs.google.com/document/d/1CF9lJhAPzJMAnLkQVOz3buGVepmI4728PSIrcEPQAVw/edit#bookmark=id.l88v9i7cphpe">
                  Convention Delegates
                </Link>
                .
              </P>
              <P>
                Read the proposed{" "}
                <Link href="https://docs.google.com/document/d/1CF9lJhAPzJMAnLkQVOz3buGVepmI4728PSIrcEPQAVw/edit#bookmark=id.5q37hdhg6t8j">
                  changes to our Platform
                </Link>
                , and the{" "}
                <Link href="https://docs.google.com/document/d/1CF9lJhAPzJMAnLkQVOz3buGVepmI4728PSIrcEPQAVw/edit#bookmark=id.en1380oev4fb">
                  Priority proposals
                </Link>{" "}
                for 2021!
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
