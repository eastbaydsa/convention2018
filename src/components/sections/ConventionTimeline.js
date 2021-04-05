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

const ConventionTimeline = (props) => (
  <NavAnchor anchor={props.anchor}>
    <Section>
      <Container>
        <H2>2021 Local Convention Timeline</H2>
        <UL>
          <ULI>
            <Strong>Sunday, April 25th:</Strong>
            <UL>
              <ULI>
                Deadline to submit changes to the current Priorities Resolution
                Document
              </ULI>
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

export default ConventionTimeline;
