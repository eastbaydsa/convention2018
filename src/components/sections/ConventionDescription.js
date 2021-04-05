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

const ConventionDescription = (props) => (
  <NavAnchor anchor={props.anchor}>
    <Section>
      <Container>
        <H2>What will the Convention Look Like?</H2>

        <P>
          Similar to our General Meetings, we will have structured debate and
          voting using Robert's Rules of Order, with speakers in favor and
          against each Proposal that comes to the floor. All East Bay DSA
          members are encouraged to attend, submit proposals, and vote at the
          convention!
        </P>
        <P>
          <Strong>
            Double check your membership at{" "}
            <Link href="https://proof.dsausa.org/">proof.dsausa.org</Link>
          </Strong>
        </P>
        {/* <P>
          <Strong>Check out this Robert's Rules cheat sheet!</Strong>
        </P> */}
      </Container>
    </Section>
  </NavAnchor>
);

export default ConventionDescription;
