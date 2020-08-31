import React, { PureComponent } from "react";
import Container from "../Container";
import Section from "../Section";
import { H2, H3, P, Strong, Underline, UL, OL, OLI, ULI } from "../typography";
import Link from "../Link";
import NavAnchor from "../NavAnchor";
import styled from "styled-components";
import { red } from "../colors";
import Directory from "../directory/Directory";
import DirectoryItem from "../directory/DirectoryItem";

const PriorityResolution = styled.a`
  color: red;

  &:hover {
    color: white;
    background: red;
  }
`;

class Convention extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>What will the Convention Look Like?</H2>
            <P>
              Similar to our General Meetings, we will have structured debate
              and voting with speakers both for and against on each Proposal
              that comes to the floor. All members of East Bay DSA are welcome
              to join and vote (double check your membership at{" "}
              <Link href="http://proof.dsausa.org">proof.dsausa.org</Link>).
            </P>
            <P>
              <strong>
                For information about what we’ll be discussing on the day of,
                please read the{" "}
                <Link href="https://docs.google.com/document/d/1eLqZoP15qcFSB8RTuICvywExbNy7J2PX1a3bEhWrEVw/edit#">
                  Convention Packet
                </Link>
                .
              </strong>
            </P>
            <H3>Rules</H3>
            <P>
              Due to the difficult nature of chairing online meetings and the
              limited time for debate and discussion during the Convention, the
              Steering Committee passed the following special rules:
            </P>
            <OL>
              <OLI>
                <strong>Resolutions:</strong> Per our normal General Meeting
                protocols, an agenda with all relevant resolutions will be
                circulated to membership at least two weeks in advance of the
                meeting.
              </OLI>

              <OLI>
                <strong>Motivation and Q&amp;A:</strong> Each resolution will be
                motivated by one of its drafters, and there will be a short time
                agendized for clarifying questions and answers.
              </OLI>

              <OLI>
                <strong>Motions:</strong> Procedural motions will be taken
                through the Zoom chat box. Motions must be clearly stated in the
                chat box in order to be recognized by the chairs (e.g. “Motion
                to call the question”). Motions must be seconded by another
                member stating “second” in the chat box to move to debate.
              </OLI>

              <OLI>
                <strong>Debate:</strong> Stack for debate will be taken in the
                chat box as well. Members should clearly state if they intend to
                speak for or against the motion (e.g. “Stack in favor of the
                motion”). Speakers will be given 90 seconds to speak on the
                resolution or motion on the floor.
              </OLI>

              <OLI>
                <strong>Amendments:</strong> Amendments must be submitted by the
                August 26th deadline at the latest to be considered for the
                agenda. The Convention Organizing Working Group will agendize as
                many amendments as feasible. In the event of too many amendments
                being submitted, the COWG will prioritize agendizing amendments
                based on political substantiveness and minimal redundancy. There
                will be no floor amendments (or amendments to amendments)
                allowed during the meeting.
              </OLI>

              <OLI>
                <strong>Consent Agenda:</strong> The Convention will vote on a
                Consent Agenda to pass priorities proposals with strong support
                based on the Consent Agenda straw poll circulated to the Chapter
                Membership. The Consent Agenda will be passed by a simple
                majority. Members will not be allowed to pull items from the
                Consent Agenda from the floor.
              </OLI>

              <OLI>
                <strong>Chat Box:</strong> During floor debate, the chat box may
                only be used for procedural motions and stack. The chat box may
                not be used for debate points, comments/questions, or other
                conversation during debate.
              </OLI>

              <OLI>
                <strong>Voting:</strong> Members must be present in the meeting
                to vote, and no proxy votes will be allowed. Votes will be
                conducted by Zoom poll, and only members will be granted the
                Zoom link in order to ensure voting is restricted to members.
              </OLI>

              <OLI>
                <strong>Expulsion:</strong> If a member consistently does not
                follow the special protocols and/or code of conduct, harasses
                the Chairs or other members, or otherwise is disruptive during
                the meeting, they may be removed from the Zoom meeting, per the
                Chairs’ discretion. Members will receive at least 1 warning
                before being removed from the meeting.
              </OLI>

              <OLI>
                <strong>Styles Committee:</strong> After the Convention, the
                Convention Organizing Working Group will serve as a Styles
                Committee to standardize language across the different proposals
                that passed and finalize the language of our Chapter’s 2020-2021
                Priorities Resolution. The Steering Committee will vote to
                ratify the final language of the Priorities Resolution.
              </OLI>
            </OL>
            <H3>Panel</H3>
            <P>
              In addition to the decision-making process, we will have a panel
              on the theme of “How Do Socialists Build Power?” featuring the
              following guests:
            </P>
            <P>
              <strong>Jabari Brisport</strong> is a queer, black, public school
              teacher and union member, a child of an immigrant, a proud
              socialist and the soon to be State Senator for New York’s 25th. He
              has walked countless picket lines, successfully fought against
              Amazon in Queens, and this year won an upset electoral victory for
              the State Senate.
            </P>
            <P>
              <strong>Cecily Myart-Cruz</strong> is the President of UTLA and
              the first woman of color to lead in that role. She’s also the
              former President of the NEA, a public school teacher of 26 years
              and has been a tireless advocate for racial justice and worker
              power. Cecily’s leadership during the 2019 Los Angeles teachers
              strike helped build strength in the workplace and in the community
              to win a new contract for LA’s teachers and racial and economic
              justice for their students and families.
            </P>
            <P>
              <strong>Michael Lighty</strong> is a national leader in the fight
              for Medicare for All, served as the Healthcare Constituency
              Director for Bernie 2020, is a lead policy analyst for SB 562 to
              create a single-payer system in California, and for over twenty
              years worked for CNA/NNU on campaigns for patient’s rights, clean
              money elections, and a tax on Wall Street. He was also the
              National Director of DSA from 1989-93 and is currently a national
              spokesperson for DSA’s Medicare for All campaign.
            </P>
            <H3>Position Papers</H3>
            <P>
              If you feel strongly about a proposal or amendment and want to
              argue your case for or against it{" "}
              <strong>
                you should{" "}
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd72c1bYgCtYt-o5npwV1IPW1bSN_wSx385A7hoOJDDiRjcAw/viewform">
                  submit a position paper
                </Link>{" "}
                to be hosted publicly on our website
              </strong>
              , so we can foster more debate before the convention. Position
              papers will be accepted up until noon on 9/12 and posted on a
              rolling basis, so the sooner you write, the better!
            </P>
            <P>
              <strong>
                You can read published papers{" "}
                <Link href="https://www.eastbaydsa.org/meetings/statements/">
                  here
                </Link>
                .
              </strong>
            </P>
            <H3>Phonebanks</H3>
            <P>
              We’ll be hosting several phonebanks to bring members into the
              process by making sure that they’ve read the proposals and know to
              attend. Higher turnout means a more robust Convention so please{" "}
              <strong>RSVP to our Membership Phonebanks</strong> on the
              following dates:
            </P>
            <UL>
              <ULI>
                <Link href="https://www.eastbaydsa.org/events/1462/2020-09-01-2020-convention-phonebank/">
                  Tuesday 9/1 from 5-7PM
                </Link>
              </ULI>
              <ULI>
                <Link href="https://www.eastbaydsa.org/events/1460/2020-09-05-2020-convention-phonebank/">
                  Saturday 9/5 from 11AM-1PM
                </Link>
              </ULI>
              <ULI>
                <Link href="https://www.eastbaydsa.org/events/1461/2020-09-11-2020-convention-phonebank/">
                  Friday 9/11 from 6-8PM
                </Link>
              </ULI>
            </UL>
            <br />
            <P>
              And finally make sure you{" "}
              <Link href="https://www.eastbaydsa.org/events/1355/2020-09-13-ebdsa-2020-convention/">
                RSVP
              </Link>{" "}
              and{" "}
              <Link href="https://www.facebook.com/events/2702991756656696">
                mark yourself as going on Facebook
              </Link>
              . And invite all your comrades too!
            </P>
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default Convention;
