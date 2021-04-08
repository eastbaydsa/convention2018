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

const ListItem = styled.li`
  font-weight: bold;
  margin-bottom: 8px;
`;

const WelcomeSection = (props) => (
  <NavAnchor anchor={props.anchor}>
    <Section>
      <Container>
        <H2>What is the Local Convention?</H2>
        <P>
          East Bay DSA is a democratic, member-run organization. The Local
          Convention is the highest decision-making body of East Bay DSA and
          meets once a year to elect our Steering Committee and collectively
          decide our priorities for the coming year.
        </P>
        <P>This year the 3 main tasks of the Local Convention will be:</P>
        <ol style={{ marginTop: 0 }}>
          <ListItem style={{ fontWeight: "bold" }}>
            Elect a new Steering Committee and 2021 national convention
            delegates
          </ListItem>
          <ListItem style={{ fontWeight: "bold" }}>
            Ratify our 2021 chapter platform and vote on 3 organizational
            priorities
          </ListItem>
          <ListItem style={{ fontWeight: "bold" }}>
            Vote on bylaws amendments
          </ListItem>
        </ol>
      </Container>
    </Section>
  </NavAnchor>
);

export default WelcomeSection;
