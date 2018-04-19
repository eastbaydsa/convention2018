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
              The California Nurses Association is wheelchair-accessible with
              accessible restrooms.
            </P>
            <P>
              EBDSA will provide child supervision; please
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfQhhqJbB6f3bFsgyC7OQ8q7PWv28BhRjoAyL_vI0cude8OjQ/viewform">
                fill out this form
              </a>
              ahead of time if you will need child supervision. If anyone would
              like an ASL interpreter for the convention, we have volunteers
              available; please email{' '}
              <a href="mailto:gm@eastbaydsa.org">gm@eastbaydsa.org</a> if an
              interpreter is desired. Any other accessibility questions or
              requests can also be sent to that email address.
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
