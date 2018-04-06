import React, { PureComponent } from 'react';
import Container from '../Container';
import Section from '../Section';
import { H2, P, Underline } from '../typography';
import Link from '../Link';
import NavAnchor from '../NavAnchor';

class Venue extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>Venue, Accomodations and Accessibility</H2>
            <P>
              <Link href="https://www.eastbaydsa.org/event-meeting-2018-03-24-pre-convention-informational-meeting">
                Informational Meeting
              </Link>
              <br />Saturday, March 24, 2pm - 4pm<br />East Bay Community Space
              <br />507 55th St, Oakland
            </P>
            <P>
              <Link href="https://www.eastbaydsa.org/event-meeting-2018-04-22-candidate-forum">
                Candidate Forum
              </Link>
              <br />April 22nd, 1pm-3pm
              <br />Niebyl-Proctor Marxist Library
              <br />6501 Telegraph Ave, Oakland
            </P>
            <P>
              Venue is wheelchair accessible, and there are restrooms with no
              step up, though the doorway to bathroom is narrow.
            </P>
            <P>
              <Link href="https://www.eastbaydsa.org/event-meeting-2018-04-29-convention">
                Convention
              </Link>
              <br />April 29, 10 am- 5 pm
              <br />California Nurses Association
              <br />155 Grand Ave, Oakland
            </P>
            <P>
              CNA offices are wheelchair accessible with accessible restrooms.
              More detailed accessibility information will be posted as soon as
              possible.
            </P>
            <P>
              If you require any accessible accommodations to participate fully
              in the convention, please let us know in the RSVP form.
            </P>
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default Venue;
