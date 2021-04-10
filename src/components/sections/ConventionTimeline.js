import React from "react";
import styled from "styled-components";
import Container from "../Container";
import Section from "../Section";
import { H2, P, Strong, UL, ULI } from "../typography";
import Link from "../Link";
import NavAnchor from "../NavAnchor";
import { purple } from "../colors";

const Line = styled.div`
  border-top: 3px solid ${purple};
  margin: 30px 0;
`;

const Timeline = (props) => (
  <NavAnchor anchor={props.anchor}>
    <Section>
      <Container>
        <H2>2021 Local Convention Timeline</H2>
        <UL>
          <ULI>
            <Strong>Sunday, April 25th:</Strong>
            <UL>
              <ULI>Deadline for Steering Committee Nominations</ULI>
              <ULI>Deadline for National Convention Delegate Nominations</ULI>
              <ULI>Deadline to submit changes to the Chapter Platform</ULI>
              <ULI>Deadline to Nominate Organizational Priorities</ULI>
            </UL>
          </ULI>
          <ULI>
            <Strong>Wednesday, April 28th:</Strong>
            <UL>
              <ULI>
                Deadline to accept SC and National Convention Delegate
                Nominations
              </ULI>
            </UL>
          </ULI>
          <ULI>
            <Strong>Saturday, May 1st:</Strong>
            <UL>
              <ULI>
                Release of Consent Calendar Poll &amp; Call for Amendments
              </ULI>
            </UL>
          </ULI>
          <ULI>
            <Strong>Friday, May 7th:</Strong>
            <UL>
              <ULI>Deadline for Consent Calendar Poll and Amendments</ULI>
            </UL>
          </ULI>
          <ULI>
            <Strong>Sunday, May 9th:</Strong>
            <UL>
              <ULI>
                Full Convention Agenda with Resolutions and Amendments Released
                Nominations
              </ULI>
            </UL>
          </ULI>
          <ULI>
            <Strong>Friday, May 14th:</Strong>
            <UL>
              <ULI>Deadline to submit Position Papers</ULI>
            </UL>
          </ULI>
          <ULI>
            <Strong>Saturday, May 15th:</Strong>
            <UL>
              <ULI>Local Convention Day 1</ULI>
            </UL>
          </ULI>
          <ULI>
            <Strong>Saturday, May 16th:</Strong>
            <UL>
              <ULI>Local Convention Day 2</ULI>
            </UL>
          </ULI>
        </UL>
        <P>
          For more information about phonebanks and possible supplemental
          events, please check{" "}
          <Link href="https://www.eastbaydsa.org/events/">
            eastbaydsa.org/events
          </Link>
          .
        </P>
      </Container>
    </Section>
  </NavAnchor>
);

export default Timeline;
