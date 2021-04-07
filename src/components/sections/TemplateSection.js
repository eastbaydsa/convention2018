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

const MySection = (props) => (
  <NavAnchor anchor={props.anchor}>
    <Section>
      <Container>
        <H2>Welcome to the East Bay DSA 2020 Local Convention!</H2>

        <P>Copy</P>

        <Line />
      </Container>
    </Section>
  </NavAnchor>
);

export default MySection;
