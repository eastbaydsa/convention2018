import React, { PureComponent } from "react";
import styled from "styled-components";
import Container from "../Container";
import Section from "../Section";
import { H2, P, Strong } from "../typography";
import Link from "../Link";
import NavAnchor from "../NavAnchor";
import Directory from "../directory/Directory";
import DirectoryItem from "../directory/DirectoryItem";
import { purple } from "../colors";

const Info = styled.p`
  font-size: 30px;
  margin-bottom: 40px;
`;

const Line = styled.div`
  border-top: 3px solid ${purple};
  margin: 30px 0;
`;

class WelcomeSection extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>Welcome to the East Bay DSA 2020 Local Convention!</H2>

            <P>
              The convention will be held this year on{" "}
              <strong>Sunday, September 13th from 1 p.m. to 5 p.m.</strong> on
              Zoom.{" "}
              <Link href="https://www.eastbaydsa.org/events/1355/2020-09-13-ebdsa-2020-convention/">
                Be sure to save the date.
              </Link>{" "}
              It's important for as many East Bay DSA members as possible to
              participate!
            </P>

            <Line />

            <H2>Convention Schedule</H2>

            <P>
              <strong>
                All the information that you’ll need to know about for the day
                of the Convention including Proposals and amendments can be
                found in the{" "}
                <Link href="https://docs.google.com/document/d/1eLqZoP15qcFSB8RTuICvywExbNy7J2PX1a3bEhWrEVw/edit#">
                  Convention Packet
                </Link>
                .
              </strong>
            </P>

            <P>Our full agenda for the day will be as follows:</P>

            <table style={{ fontSize: "0.8em" }}>
              <tr>
                <td
                  style={{
                    "white-space": "nowrap",
                    paddingRight: 30,
                    verticalAlign: "top",
                  }}
                >
                  1:00PM &ndash; 1:05PM
                </td>
                <td style={{ paddingBottom: 10 }}>
                  Opening of Convention &amp; Agenda
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    "white-space": "nowrap",
                    paddingRight: 30,
                    verticalAlign: "top",
                  }}
                >
                  1:05PM &ndash; 1:50PM
                </td>
                <td style={{ paddingBottom: 10 }}>
                  How Do Socialists Build Power? Panel ft. Jabari Brisport,
                  Michael Lighty, and Cecily Myart-Cruz
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    "white-space": "nowrap",
                    paddingRight: 30,
                    verticalAlign: "top",
                  }}
                >
                  1:50PM &ndash; 1:55PM
                </td>
                <td style={{ paddingBottom: 10 }}>Break</td>
              </tr>
              <tr>
                <td
                  style={{
                    "white-space": "nowrap",
                    paddingRight: 30,
                    verticalAlign: "top",
                  }}
                >
                  1:55PM &ndash; 2:05PM
                </td>
                <td style={{ paddingBottom: 10 }}>
                  Discuss Priorities Resolution, Adopt{" "}
                  <Link href="https://docs.google.com/document/d/1eLqZoP15qcFSB8RTuICvywExbNy7J2PX1a3bEhWrEVw/edit#bookmark=id.v33dpjt9g0rj">
                    Consent Agenda
                  </Link>{" "}
                  &amp;{" "}
                  <Link href="https://docs.google.com/document/d/1eLqZoP15qcFSB8RTuICvywExbNy7J2PX1a3bEhWrEVw/edit#bookmark=id.poipxwhiuo7r">
                    Convention Rules
                  </Link>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    "white-space": "nowrap",
                    paddingRight: 30,
                    verticalAlign: "top",
                  }}
                >
                  2:05PM &ndash; 2:35PM
                </td>
                <td style={{ paddingBottom: 10 }}>
                  <Link href="https://docs.google.com/document/d/1eLqZoP15qcFSB8RTuICvywExbNy7J2PX1a3bEhWrEVw/edit#bookmark=id.4v33jot4rdsz">
                    Towards An Independent Workers Party
                  </Link>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    "white-space": "nowrap",
                    paddingRight: 30,
                    verticalAlign: "top",
                  }}
                >
                  2:35PM &ndash; 3:05PM
                </td>
                <td style={{ paddingBottom: 10 }}>
                  <Link href="https://docs.google.com/document/d/1eLqZoP15qcFSB8RTuICvywExbNy7J2PX1a3bEhWrEVw/edit#bookmark=kix.vilju46ngf8">
                    Center Mass Movements
                  </Link>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    "white-space": "nowrap",
                    paddingRight: 30,
                    verticalAlign: "top",
                  }}
                >
                  3:05PM &ndash; 3:10PM
                </td>
                <td style={{ paddingBottom: 10 }}>Break</td>
              </tr>
              <tr>
                <td
                  style={{
                    "white-space": "nowrap",
                    paddingRight: 30,
                    verticalAlign: "top",
                  }}
                >
                  3:10PM &ndash; 3:40PM
                </td>
                <td style={{ paddingBottom: 10 }}>
                  <Link href="https://docs.google.com/document/d/1eLqZoP15qcFSB8RTuICvywExbNy7J2PX1a3bEhWrEVw/edit#bookmark=id.kv8wlxqfmcdc">
                    Prioritizing Proposition 15 as the Number One Electoral
                    Priority of East Bay DSA
                  </Link>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    "white-space": "nowrap",
                    paddingRight: 30,
                    verticalAlign: "top",
                  }}
                >
                  3:40PM &ndash; 4:10PM
                </td>
                <td style={{ paddingBottom: 10 }}>
                  <Link href="https://docs.google.com/document/d/1eLqZoP15qcFSB8RTuICvywExbNy7J2PX1a3bEhWrEVw/edit#bookmark=id.lo5on81gvn6p">
                    Class Struggle Elections
                  </Link>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    "white-space": "nowrap",
                    paddingRight: 30,
                    verticalAlign: "top",
                  }}
                >
                  4:10PM &ndash; 4:15PM
                </td>
                <td style={{ paddingBottom: 10 }}>Break</td>
              </tr>
              <tr>
                <td
                  style={{
                    "white-space": "nowrap",
                    paddingRight: 30,
                    verticalAlign: "top",
                  }}
                >
                  4:15PM &ndash; 4:45PM
                </td>
                <td style={{ paddingBottom: 10 }}>
                  <Link href="https://docs.google.com/document/d/1eLqZoP15qcFSB8RTuICvywExbNy7J2PX1a3bEhWrEVw/edit#bookmark=id.3m2ej1olvhg1">
                    Campaign to Win California Single-Payer and Medicare for All
                  </Link>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    "white-space": "nowrap",
                    paddingRight: 30,
                    verticalAlign: "top",
                  }}
                >
                  4:45PM &ndash; 4:55PM
                </td>
                <td style={{ paddingBottom: 10 }}>
                  <Link href="https://docs.google.com/document/d/1eLqZoP15qcFSB8RTuICvywExbNy7J2PX1a3bEhWrEVw/edit#bookmark=id.lq5dkcp19rwg">
                    Green New Deal
                  </Link>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    "white-space": "nowrap",
                    paddingRight: 30,
                    verticalAlign: "top",
                  }}
                >
                  4:55PM &ndash; 5:00PM
                </td>
                <td style={{ paddingBottom: 10 }}>
                  Vote on Priorities Resolution and Close
                </td>
              </tr>
            </table>

            {/* <Directory>
              <DirectoryItem
                text="Join us at the upcoming convention!"
                links={[
                  {
                    label: "RSVP",
                    href: "https://goo.gl/forms/gSFErxs0LC11J2dm2",
                  },
                ]}
              />
              <DirectoryItem
                text="Help us put on a great meeting."
                links={[
                  {
                    label: "Volunteer",
                    href: "https://goo.gl/forms/gSFErxs0LC11J2dm2",
                  },
                ]}
              />
            </Directory> */}
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default WelcomeSection;
