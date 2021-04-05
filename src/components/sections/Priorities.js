import React from "react";
import styled from "styled-components";
import Container from "../Container";
import Section from "../Section";
import { H2, P, H3 } from "../typography";
import Link from "../Link";
import NavAnchor from "../NavAnchor";
import { purple } from "../colors";

const Line = styled.div`
  border-top: 3px solid ${purple};
  margin: 30px 0;
`;

const Priorities = (props) => (
  <NavAnchor anchor={props.anchor}>
    <Section>
      <Container>
        <H2>What are the Chapter Platform and Priority Campaigns?</H2>

        <P>
          In the past, East Bay DSA has debated and democratically ratified a{" "}
          <Link href="https://www.eastbaydsa.org/priorities/">
            Priorities Resolution
          </Link>{" "}
          at our yearly local convention. Over the years, this document has
          grown in length and become an important record of our organization’s
          politics, values, and orientation, though many of its planks were not
          prioritized or put in practice after convention due to limited
          capacity. In order to better reflect that, we will formally rename the
          Priorities Resolution as the Chapter Platform and collectively
          determine 3 Priority Campaigns that we believe are strategic for our
          chapter to execute and encourage all members to participate in.
        </P>
        <P>
          Over a month-long span, committees, leaders, and members will draft
          new planks and amendments to the{" "}
          <Link href="https://www.eastbaydsa.org/priorities/">
            current Priorities Resolution
          </Link>{" "}
          document to reflect changes in our strategy and organizing conditions,
          gather signatures from membership in support, and bring them to the
          Convention floor for debate so we can formally ratify our 2021 Chapter
          Platform and select 3 Priority Campaigns.
        </P>
        <H3>Drafting and Submitting Changes to the Chapter Platform</H3>
        <P>
          A Proposal for a change to the Chapter Platform needs to be no more
          than 300 words, and at least 25 members in good standing need to sign
          on to it by <strong>Sunday, April 25th at 11:59 pm</strong>, for it to
          be considered. Members are encouraged to collaborate to draft
          proposals using existing chapter infrastructure like committees or
          caucuses, or come together in informal groups to write proposals.
          Authors of proposals will have an opportunity to consolidate or amend
          them before the Convention if they wish.
        </P>
        <P>
          Proposals can be on any number of topics but should contain the
          following:
          <ul>
            <li>
              A clear <strong>title</strong> describing the Proposal
            </li>
            <li>
              <strong>Political rationale</strong> for why we as socialists
              should organize for it
            </li>
            <li>
              <strong>Organizing tasks</strong> for us to take in the next year
              in support. (No hyperlinks are allowed within the proposal).
            </li>
          </ul>
        </P>

        {/* <P>[SUBMIT CHANGES TO THE PLATFORM]</P> */}
        <H3>Proposing Priority Campaigns</H3>
        <P>
          25 members in good standing can nominate Platform Planks or Campaigns
          by Sunday, April 25th at 11:59 pm, to be considered as one of the
          chapters 3 Priority Campaigns for 2021. All Priority Campaigns must
          also be reflected in the Chapter Platform — either within an existing
          plank or within a plank that has been newly submitted — in order to be
          considered.
        </P>
        <P>
          Throughout the year, the new Steering Committee will work with the
          relevant committees and working groups to draft, ratify, and launch
          plans for our Priority Campaigns that enable high member participation
          and cross committee collaboration, as well as allocate resources as
          needed for the campaigns to succeed.
        </P>
        <P>
          The selection of Priority Campaigns will NOT shut down the work of any
          other committees or campaigns, or limit the capacity of the
          organization to respond to unforeseen political developments as
          necessary.
        </P>
        {/* <P>[NOMINATE A PRIORITY CAMPAIGN]</P> */}
        <H3>Amendments</H3>
        <P>
          Once the agenda is released, members will have the opportunity to
          submit further amendments to proposals before the Convention to be
          considered on the floor. After debate we’ll all vote, and the
          Proposals that have majority support will become part of our Chapter
          Platform.
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
        <P>
          Once we have heard and debated all of the proposals, we will vote them
          each up or down, and those that were adopted--in addition to the
          consent calendar --will be our new <strong>Chapter Platform</strong>{" "}
          and <strong>Priority Campaigns</strong>.
        </P>
      </Container>
    </Section>
  </NavAnchor>
);

export default Priorities;
