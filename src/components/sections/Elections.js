import React, { PureComponent } from "react";
import Container from "../Container";
import Section from "../Section";
import { H2, H3, P, Strong, Underline } from "../typography";
import Link from "../Link";
import NavAnchor from "../NavAnchor";

class Elections extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>Steering Committee Elections</H2>
            <P>
              One of the primary purposes of the Convention is to elect a new set of leaders for our
              Steering Committee (formerly called the Local Council). There are 13 seats on the SC:
              Co-Chairs (2), Vice-Chair, Secretary, Communications Secretary, Treasurer, and
              At-Large (7). You can see the officer descriptions in our new bylaws.
            </P>
            <P>
              If you want to run for the Steering Committee, you need to be nominated by <Underline>
              5 other EBDSA members</Underline> in good standing, <Link
              href="https://goo.gl/forms/l0ZAkCkTOTuRlLKQ2">using this form</Link>.
              <Strong> Nominations for Steering Committee candidates will close on April 7.</Strong>
            </P>
            <P>
              At the April 28th Convention, we’ll be using paper ballots and a ranked-choice-voting
              system to elect our new Steering Committee. If you are unable to attend the convention
              due to accessibility issues, please email <Link
              href="mailto:gm@eastbaydsa.org">gm@eastbaydsa.org</Link> and you will be
              provided with instructions for submitting a proxy ballot.
            </P>
            <P>
              There will be a <Underline>Candidate Forum</Underline> open to all members, date and
              location to be determined. Come hear from the candidates and ask them questions about
              their political vision for our organization! Keep an eye out for information on
              official chapter communications.
            </P>
            <P>
              We will also be holding an Informational Meeting to answer any questions that members
              might have about the Convention process. That Informational Meeting will take place on
              Saturday, March 24th from 2-4pm at the East Bay Community Space. See <Link
              href="https://www.eastbaydsa.org/events">www.eastbaydsa.org/events</Link>
              for more details.
            </P>
            <P>
              Steering Committee elections are a crucial part of collectively deciding the direction
              of our organization, but they happen in conjunction with the Priorities Resolution.
              Candidates will be running to broadly carry out the Priorities Resolution passed by
              members.
            </P>
            <H3>Submission, Feedback, and Amendment Process</H3>
            <P>
              Any member can submit a Priorities Resolution, provided the resolution
              garners <Underline>at least 20 signatures</Underline> of co-sponsors who are EBDSA
              members in good standing. No member can co-sponsor more than one priorities resolution.
            </P>
            <P>
              The submission deadline for draft Priorities Resolutions will
              be <Strong>April 3</Strong>. If you and your comrades wish to submit a resolution that
              has garnered the appropriate number of co-sponsors, please submit
              via <Link href="https://goo.gl/forms/jJP7F2ycA2xFDvRJ2">this form</Link>.
            </P>
            <P>
              All the submitted draft Priorities Resolutions will be published on the Convention
              website on <Strong>April 4</Strong>. Any member can offer feedback to the submitters
              of the Resolutions on any aspect of it. Member feedback will be open
              from <Strong>April 4-9</Strong>. Members can submit feedback via a link that will be posted
              to the website and Facebook page.
            </P>
            <P>
              The submitters of the draft Priorities Resolutions will be free to incorporate member
              feedback and submit their finalized Priorities Resolution by <Strong>April 14</Strong>.
            </P>
            <P>
              The <Strong>Convention Agenda</Strong>—with Steering Committee candidate statements
              and the finalized versions of all submitted Priorities Resolutions, <Strong>will go
              out to members on April 16</Strong>.
            </P>
            <P>
              At the Convention (<Strong>April 28</Strong>), members will have an open discussion on
              all of the different submitted Priorities Resolutions, and then decide by majority which
              Resolution will serve as the "base" resolution. That majority "base" Resolution will
              then be open to member amendments from the floor of the Convention.
            </P>
            <P>
              After the period of floor amendments, the Convention will vote with a majority
              threshold whether to adopt the Resolution as amended.
            </P>
            <P>
              In several other large DSA chapters, the "base" Priorities Resolution is drafted by
              the Steering Committee and then open to member amendment. We think that the process
              we’ve designed will enable East Bay DSA members to hear from a variety of differing
              political perspectives on the future of this organization, and then be empowered on
              the floor of the Convention to amend whichever "base" Resolution gains a majority.
            </P>
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default Elections;
