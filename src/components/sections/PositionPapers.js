import React from "react";
import styled from "styled-components";
import Container from "../Container";
import Section from "../Section";
import { H2, P, Strong } from "../typography";
import Link from "../Link";
import NavAnchor from "../NavAnchor";
import { purple } from "../colors";

const Line = styled.div`
  border-top: 3px solid ${purple};
  margin: 30px 0;
`;

const PositionPapers = (props) => (
  <NavAnchor anchor={props.anchor}>
    <Section>
      <Container>
        <H2>Position Papers</H2>

        <P>
          Got strong feelings about a proposal or amendment? Want to argue your
          case for or against it?{" "}
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd72c1bYgCtYt-o5npwV1IPW1bSN_wSx385A7hoOJDDiRjcAw/viewform">
            Submit a position paper
          </Link>{" "}
          to be hosted publicly on our website, so we can foster more debate
          before the convention! Position papers will be accepted up until{" "}
          <strong>noon on Friday May 14th, 2021</strong> and will be posted on a
          rolling basis. The sooner you write, the better!
        </P>
        <P>
          <strong>
            You can read published papers from previous meetings{" "}
            <Link href="https://www.eastbaydsa.org/meetings/statements/">
              here
            </Link>
            .
          </strong>
        </P>
      </Container>
    </Section>
  </NavAnchor>
);

export default PositionPapers;
