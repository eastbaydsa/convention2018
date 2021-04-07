import React from "react";
import Container from "../Container";
import Section from "../Section";
import { H2, P, Strong } from "../typography";
import Link from "../Link";
import NavAnchor from "../NavAnchor";
import { purple } from "../colors";

const Process = (props) => (
  <NavAnchor anchor={props.anchor}>
    <Section>
      <Container>
        <H2>Why are we changing the process this year?</H2>

        <P>
          In the past, East Bay DSA has debated and democratically ratified a{" "}
          <Link href="https://www.eastbaydsa.org/priorities/">
            Priorities Resolution
          </Link>{" "}
          at our yearly local convention. Over the years, this document has
          grown in length and become an important record of our organization’s
          politics, values, and orientation, though many of its planks were not
          prioritized or put in practice after convention due to limited
          capacity. Given that the document now includes outdated planks or
          planks that have not been implemented, making it difficult to say what
          East Bay DSA does and stands for, we will use this Convention to
          produce a more updated document. We will formally rename the
          Priorities Resolution as the Chapter Platform and use the Convention
          to collectively determine three Organizational Priorities that members
          believe are strategic for our chapter to execute and encourage all
          members to participate in this year.
        </P>
      </Container>
    </Section>
  </NavAnchor>
);

export default Process;
