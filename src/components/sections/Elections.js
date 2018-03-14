import React, { PureComponent } from "react";
import Container from "../Container";
import Section from "../Section";
import { H2, P, Strong, Underline } from "../typography";
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
              At-Large (7). You can see the officer descriptions in our new bylaws (link).
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
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default Elections;
