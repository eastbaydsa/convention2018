import React from "react";
import Container from "../Container";
import Section from "../Section";
import { H2, P, H3 } from "../typography";
import Link from "../Link";
import NavAnchor from "../NavAnchor";
import styled from "styled-components";

const Img = styled.img`
  max-width: 100%;
`;

const Priorities = (props) => (
  <NavAnchor anchor={props.anchor}>
    <Section>
      <Container>
        <H2>What are the Platform and Organizational Priorities?</H2>

        <P>
          At our March General Meeting, our members voted to adopt a new process
          for our Local Convention in which we will debate and vote on both a{" "}
          <strong>Chapter Platform</strong> and select{" "}
          <strong>three Organizational Priorities</strong>. We wanted to briefly
          clear up some key terms to help you navigate the information below.
        </P>
        <P>
          We are using our{" "}
          <Link href="https://www.eastbaydsa.org/priorities/">
            outgoing Priorities Resolution
          </Link>{" "}
          as the basis for a <strong>Chapter Platform</strong> that is meant to
          encompass the breadth of politics and projects in our big-tent
          chapter.
        </P>
        <P>
          Currently, this draft Platform contains{" "}
          <strong>sixteen “Planks”</strong> representing different political
          positions and projects in the chapter — i.e. “Center Black &amp; Brown
          Liberation Movements” or “Empowering &amp; Building YDSA”. Over a
          month-long span, committees, leaders, and members will draft new
          planks and amendments to the{" "}
          <Link href="https://www.eastbaydsa.org/priorities/">
            current Priorities Resolution
          </Link>{" "}
          document to reflect changes in our strategy and organizing conditions,
          gather signatures from membership in support, and bring them to the
          Convention floor for debate so we can formally ratify our 2021 Chapter
          Platform.
        </P>
        <P>
          During the Convention, we will select{" "}
          <strong>three Organizational Priorities</strong> to guide our
          Chapter’s work for the coming year. We will determine our new by
          voting to adopt three of the Chapter Platform Planks as the
          priorities.
        </P>

        <P>
          The selection of organizational priorities will NOT shut down the work
          of any other committees or campaigns, or limit the capacity of the
          organization to respond to unforeseen political developments as
          necessary.
        </P>

        <div style={{ textAlign: "center" }}>
          <Img src={`/images/convention-forms-flow.png`} />
        </div>

        <H3>Consent Poll and Agenda</H3>
        <P>
          Once Proposals are submitted, we will send them out to members along
          with a poll to gauge support for them and interest in debating them on
          the floor. The Convention Organizing Working Group will use this
          information to construct an agenda that makes the most of our debate
          time. Anything with overwhelming support will go on the consent
          calendar at the convention. The Convention Organizing Working Group
          will work with proposal drafters with the goal of agendizing enough
          time for items that require substantial debate. The rules can be
          suspended by a 2/3rds vote to change the agenda at the Convention.
        </P>
        <H3>Amendments</H3>
        <P>
          Once the agenda is released, members will have the opportunity to
          submit further amendments to proposals before the Convention to be
          considered on the floor. After debate we’ll all vote, and the
          Proposals that have majority support will become part of our Chapter
          Platform.
        </P>
        <P>
          Once the agenda is released, members will have the opportunity to
          submit further amendments to proposals before the Convention to be
          considered on the floor. After debate, we’ll all vote and the platform
          amendments that have majority support will become part of our{" "}
          <strong>Chapter Platform</strong>.
        </P>
        <P>
          We will debate organizational priorities and any relevant amendments,
          and will vote on the priorities via OpaVote using the Scottish STV
          method. The top three priorities will become our{" "}
          <strong>2021 Priorities Resolution</strong>.
        </P>
      </Container>
    </Section>
  </NavAnchor>
);

export default Priorities;
