import React, { PureComponent } from "react";
import Container from "../Container";
import Section from "../Section";
import { H2, P, Underline } from "../typography";
import Link from "../Link";
import NavAnchor from "../NavAnchor";

class Venue extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>Venue, Accomodations and Accessibility</H2>
            <P>
              <Link href="https://www.eastbaydsa.org/event-meeting-2018-03-24-pre-convention-informational-meeting">
              Informational Meeting</Link>: Saturday, March 24, 2pm - 4pm, East Bay Community Space,
              507 55th St, Oakland, CA 94609
            </P>
            <P>
              <Underline>Candidate Forum</Underline>: Date/location TBA (likely April 18-22)
            </P>
            <P>
              <Underline>Convention</Underline>! April 29, 10 am- 5 pm, California Nurses
              Association, 155 Grand Ave., Oakland. CNA offices are wheelchair accessible with
              accessible restrooms. More detailed accessibility information will be posted as soon
              as possible.
            </P>
            <P>
              If you require any accessible accommodations to participate fully in the convention,
              please let us know in the RSVP form.
            </P>
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default Venue;
