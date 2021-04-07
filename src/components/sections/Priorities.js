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
          for our Local Convention in which we will debate and vote on both a
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
          <strong>three Organizational Priorities</strong>
          to guide our Chapter’s work for the coming year. We will determine our
          new by voting to adopt three of the Chapter Platform Planks as the
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

        <H3>Drafting and Submitting Changes to the Chapter Platform</H3>
        <P>
          Members can propose changes to existing planks or submit new planks to
          be debated at our local Convention. Planks need be no more than 300
          words and must be submitted by{" "}
          <strong>Sunday, April 25th at 11:59 pm</strong> to be considered.
          Members are encouraged to collaborate to draft proposals using
          existing chapter infrastructure like committees or caucuses, or come
          together in informal groups to write proposals. Authors of proposals
          will have an opportunity to consolidate or amend them before the
          Convention if it turns out there are multiple similar or overlapping
          proposals, or other updates and changes seem necessary.
        </P>
        <P>
          New platform planks can be on any number of topics and at least 25
          members in good standing need to sign on to be considered. Proposals
          for new planks should contain the following:
          <ul>
            <li>
              A clear <strong>title</strong> describing the Proposal
            </li>
            <li>
              <strong>Political rationale</strong> for why we as socialists
              should organize for it
            </li>
            <li>
              <strong>Specific organizing tasks</strong> for us to take in the
              next year in support. (No hyperlinks are allowed within the
              proposal).
            </li>
          </ul>
        </P>

        <P>
          Here is an{" "}
          <Link href="https://docs.google.com/document/d/1pGixQ_Gu44ljX140d0UQIzhxgJY4Dvp3MhkGCdzjPG4/edit">
            example
          </Link>{" "}
          from the 2020 convention.
        </P>

        <P>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLScMZC8_FjfJZ4GiW4iEO3tInNnaCpsh0ThzexrlEAgIPhqKSQ/viewform?usp=sf_link">
            Submit Changes to the Platform
          </Link>
        </P>

        <H3>Nominating Organizational Priorities</H3>
        <P>
          Any 25 members in good standing can nominate a Platform Planks by
          <strong>Sunday, April 25th at 11:59 pm</strong>, to be considered as
          one of the chapters 3 Organizational Priorities for 2021. All
          Organizational Priorities must also be reflected in the Chapter
          Platform — either within an{" "}
          <Link href="http://eastbaydsa.org/priorities">existing plank</Link> or
          within a plank that has been newly submitted — in order to be
          considered.
        </P>
        <P>
          Throughout the year, the new Steering Committee will work with the
          relevant committees and working groups to draft, ratify, and launch
          detailed campaign plans that enable high member participation and
          cross committee collaboration, as well as allocate the resources
          necessary for said Organizational Priorities to succeed. Comrades
          proposing campaigns for priority status should be ready to work with
          the incoming steering committee to help bottomline that work.
        </P>
        <P>
          The selection of Organizational Priorities will NOT shut down the work
          of any other committees or campaigns, or limit the capacity of the
          organization to respond to unforeseen political developments as
          necessary.
        </P>
        <P>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdHaDl8N1hVUSoB3o2jKaI7fOOpD0imypsfznHb8rNZnFPMSw/viewform">
            Nominate a Priority Plank
          </Link>
        </P>
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
          Once we have heard and debated all of the proposals, we will vote them
          each up or down, and those that were adopted&mdash;in addition to the
          consent calendar&mdash;will become our new{" "}
          <strong>Chapter Platform</strong> and{" "}
          <strong>Priority Campaigns</strong>.
        </P>
      </Container>
    </Section>
  </NavAnchor>
);

export default Priorities;
