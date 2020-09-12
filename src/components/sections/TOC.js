import React, { Component } from "react";
import styled from "styled-components";
import Section from "../Section";
import Container from "../Container";
import Index from "../Index";
import NavAnchor from "../NavAnchor";
import { H2, H3, P, UL, ULI } from "../typography";
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
                {" "}
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
              <H3>Zoom Info</H3>
              <P>
                <Link href="https://us02web.zoom.us/j/88197589947?pwd=eDJvajZYdUF1VlRxd1loRGI0QThBdz09">
                  Zoom link
                </Link>
                <br />
                Meeting ID: 881 9758 9947
                <br />
                Passcode: 215458
              </P>
              <H3>Voting</H3>
              <P>
                In order to sign in to the software we’ll be using to vote and
                motion all you need is the email address that you signed up for
                DSA with. Make sure that you’re a dues-paying DSA member and if
                you have any technical issues during the meeting, you can email
                info@eastbaydsa.org.
              </P>
              <P>
                <UL>
                  <ULI>
                    <Link href="https://vote.phillydsa.org/event/east-bay-convention">
                      Click here
                    </Link>
                    to get started.
                  </ULI>
                  <ULI>
                    Sign in with your email to get sent a link and then close
                    the tab. Getting sent the link may take a second.
                  </ULI>
                  <ULI>
                    Open the new link you got in your inbox and you’re logged
                    in!
                  </ULI>
                </UL>
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
