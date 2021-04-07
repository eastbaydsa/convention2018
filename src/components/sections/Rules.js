import React from "react";
import styled from "styled-components";
import Container from "../Container";
import Section from "../Section";
import { H2, P, Strong, OL, OLI } from "../typography";
import Link from "../Link";
import NavAnchor from "../NavAnchor";

const Rules = (props) => (
  <NavAnchor anchor={props.anchor}>
    <Section>
      <Container>
        <H2>Welcome to the East Bay DSA 2020 Local Convention!</H2>

        <OL>
          <OLI>
            <Strong>Resolutions:</Strong> Per our normal General Meeting
            protocols, an agenda with all relevant resolutions will be
            circulated to membership at least two weeks in advance of the
            meeting.
          </OLI>
          <OLI>
            <Strong>Motivation and Q&amp;A:</Strong> Each resolution and
            proposal will be motivated by one of its drafters, and there will be
            a short time agendized for clarifying questions and answers.
          </OLI>
          <OLI>
            <Strong>Motions:</Strong> Procedural motions will be taken through
            our online Voting Interface. Motions must be seconded by another
            member through the Voting Interface.
          </OLI>
          <OLI>
            <Strong>Amendments:</Strong> Amendments must be submitted by the{" "}
            <strong>May 7th</strong> deadline at the latest to be considered for
            the agenda. The Convention Organizing Working Group will agendize as
            many amendments as feasible. In the event of too many amendments
            being submitted, the COWG will prioritize agendizing amendments
            based on political substantiveness and minimal redundancy. There
            will be no floor amendments (or amendments to amendments) allowed
            during the meeting.
          </OLI>
          <OLI>
            <Strong>Consent Agenda:</Strong> The Convention will vote on a
            Consent Agenda to pass proposals with strong support based on the
            Consent Agenda straw poll circulated to the Chapter Membership. The
            Consent Agenda will be passed by a simple majority. Members will not
            be allowed to pull items from the Consent Agenda from the floor.
          </OLI>
          <OLI>
            <Strong>Chat Box:</Strong> During floor debate, the chat box may not
            be used for debate points, comments/questions, or other
            conversation.
          </OLI>
          <OLI>
            <Strong>Voting:</Strong> Members must be present in the meeting to
            vote, and no proxy votes will be allowed. Votes will be conducted
            through the Voting Interface, which will only be accessible to
            dues-paid members.
          </OLI>
          <OLI>
            <Strong>Expulsion:</Strong> If a member consistently does not follow
            the special protocols and/or code of conduct, harasses the Chairs or
            other members, or otherwise is disruptive during the meeting, they
            may be removed from the Zoom meeting, per the Chairs’ discretion.
            Members will receive at least 1 warning before being removed from
            the meeting.
          </OLI>
          <OLI>
            <Strong>Styles Committee:</Strong> After the Convention, the
            Convention Organizing Working Group will serve as a Styles Committee
            to standardize language across the 2021 Chapter Platform and
            Organizational Priorities. The Steering Committee will vote to
            ratify the final language of the Platform and Priorities.
          </OLI>
        </OL>
      </Container>
    </Section>
  </NavAnchor>
);

export default Rules;
