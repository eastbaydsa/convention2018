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

const NationalConventionDelegate = (props) => (
  <NavAnchor anchor={props.anchor}>
    <Section>
      <Container>
        <H2>How do I run for National Convention Delegate?</H2>
        <P>
          Any dues-paying member in good standing may run to represent East Bay
          DSA at the{" "}
          <Link href="https://convention2021.dsausa.org/">
            DSA National Convention
          </Link>
          , which will take place virtually{" "}
          <strong>August 1st - August 8th, 2021</strong>. The National
          Convention is the highest decision-making body of the national
          organization and meets every two years to elect our National Political
          Committee as well as debate and democratically set the direction of
          the organization for the next two years. Our chapter has been
          allocated <strong>38 Delegates and 8 Alternates</strong> to represent
          us at the 2021 DSA National Convention.
        </P>
        <P>
          Candidates for delegate must be members in good standing and have been
          East Bay DSA members for at least 3 months before the date of the
          election. They must be nominated by five members in good standing{" "}
          <strong>before 11:59 pm on April 25th</strong> in order to be on the
          ballot. Any given member can nominate multiple candidates. Members may
          run on their own or organize a slate of candidates to run according to
          a shared political vision for the organization.
        </P>
        <P>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLScecjKVBwz5Oczxj0FKbBUBJsHCTS2oX7yxekiLtnK4VhcB2w/viewform">
            Delegate Nomination Form
          </Link>
        </P>
        <P>
          Candidates receiving five or more nominations{" "}
          <strong>before 11:59 pm on April 25th</strong> will be notified and
          asked to submit a short candidate statement and photo to be displayed
          on the website.
        </P>
        <P>
          Starting in mid-May, National DSA will host five Pre-Convention
          Conferences leading up to the 2021 Convention in August. All
          conferences will be hosted virtually and are open to any member.
          Members who are running to be delegates to the Convention are strongly
          encouraged to attend.
        </P>
        <P>
          <Link href="https://airtable.com/shrkK22jNS55trS3S">
            You can register here.
          </Link>
        </P>
        <Line />
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
