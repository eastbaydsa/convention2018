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

const SteeringCommittee = (props) => (
  <NavAnchor anchor={props.anchor}>
    <Section>
      <Container>
        <H2>How do I run for Steering Committee?</H2>
        <P>
          There are 13 elected positions on the Steering Committee — two
          Co-Chairs, a Vice-Chair, a Treasurer, a Secretary, a Communications
          Secretary, and 7 At-Large members. You can read the role descriptions{" "}
          <Link href="https://www.eastbaydsa.org/bylaws/">in our bylaws</Link>.
          All SC members are elected for a one-year term. Any dues-paying member
          in good standing may run for Steering Committee. Members may run on
          their own or organize a slate of candidates to run. A slate is a team
          of candidates who have jointly developed a plan and political vision
          for the chapter and Steering Committee for the coming year.
        </P>
        <P>
          Candidates must be nominated in order to run for Steering Committee
          positions. Nominees must be DSA members in good standing and have been
          East Bay DSA members for at least 3 months before the date of the
          election. They must be nominated by ten members in good standing{" "}
          <strong>before 11:59 pm on April 25th</strong> in order to be on the
          ballot. Any member can nominate multiple candidates.
        </P>
        <P>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSe29s9n5DxEJQhL9u45QFfuOEgvrMAemuVxuYcZuVkNTJFx7A/viewform">
            Steering Committee Nomination Form
          </Link>
        </P>
        <P>
          Candidates receiving ten or more nominations for a particular position{" "}
          <strong>before 11:59 pm on April 25th</strong> will be notified and
          asked to submit a short candidate statement and photo to be displayed
          on the website.
        </P>
        <Line />
        <P>
          Meet the candidates running for{" "}
          <Link href="https://docs.google.com/document/d/1CF9lJhAPzJMAnLkQVOz3buGVepmI4728PSIrcEPQAVw/edit#bookmark=id.mde21bocv02h">
            Steering Committee
          </Link>
          .
        </P>
      </Container>
    </Section>
  </NavAnchor>
);

export default SteeringCommittee;
