import React, { PureComponent } from "react";
import Container from "../Container";
import Section from "../Section";
import { H2, P, Underline } from "../typography";
import NavAnchor from "../NavAnchor";

class Venue extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>Venue, Accomodations and Accessibility</H2>
            <P>
              <Underline>Informational Meeting:</Underline> Date/location TBA (likely March 24th or 
              25th)
            </P>
            <P>
              <Underline>Candidate Forum:</Underline> Date/location TBA (likely April 18-22)
            </P>
            <P>
              <Underline>Convention!</Underline> April 28, 10 am- 5 pm, California Nurses
              Association, 155 Grand Ave., Oakland. CNA offices are wheelchair accessible with
              accessible restrooms. More detailed accessibility information will be posted as soon
              as possible.
            </P>
            <P>
              If you require any accessible accommodations to participate fully in the convention,
              please let us know in the RSVP.
            </P>
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default Venue;
