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
                <Strong>
                  <Link href="https://docs.google.com/document/d/1CF9lJhAPzJMAnLkQVOz3buGVepmI4728PSIrcEPQAVw/edit?usp=sharing">
                    The 2021 Convention Packet is here!
                  </Link>
                </Strong>
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
