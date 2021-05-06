import React from "react";
import Container from "../Container";
import Section from "../Section";
import { H2, P } from "../typography";
import Link from "../Link";
import NavAnchor from "../NavAnchor";

const NationalConventionDelegate = (props) => (
  <NavAnchor anchor={props.anchor}>
    <Section>
      <Container>
        <H2>National Convention Delegate Elections</H2>
        <P>
          Meet the candidates running for{" "}
          <Link href="https://docs.google.com/document/d/1CF9lJhAPzJMAnLkQVOz3buGVepmI4728PSIrcEPQAVw/edit#bookmark=id.l88v9i7cphpe">
            Convention Delegates
          </Link>
          .
        </P>
      </Container>
    </Section>
  </NavAnchor>
);

export default NationalConventionDelegate;
