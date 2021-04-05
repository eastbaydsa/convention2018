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
              <H2>Save the Date</H2>
              <P>
                The East Bay DSA 2021 Local Convention will be held this year on{" "}
                <Strong>Saturday, May 15th, 1-4 pm</Strong> and{" "}
                <Strong>Sunday, May 16th, 1-3 pm</Strong> on Zoom.{" "}
              </P>
              <P>[ Save the Date ] - Link to RSVP event page.</P>
              <P>
                It's important for as many East Bay DSA members as possible to
                participate!
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
