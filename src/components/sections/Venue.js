import React, { PureComponent } from 'react';
import Container from '../Container';
import Section from '../Section';
import { H2, H3, P, Underline } from '../typography';
import Link from '../Link';
import NavAnchor from '../NavAnchor';

class Venue extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>Venue, Accomodations, and Accessibility</H2>
        
            <H3>Candidate Forum</H3>
        
            <P>TBD</P>
            
            <H3>Convention</H3>
        
            <P>Saturday, May 18, 9 a.m.–2 p.m.
              <br />California Ballroom
              <br />1736 Franklin St., Oakland, CA 94612 (<Link href="https://goo.gl/maps/yoVHK6kSfM82">map</Link>)
              <br /><Link href="https://www.eastbaydsa.org/events/673/2019-05-18-east-bay-dsa-local-convention-2019/">RSVP</Link>
            </P>
        
            <P>The California Ballroom is conveniently located near AC Transit bus lines and the 19th St. BART station. There is street parking and a parking garage in the area.</P>
        
            <P>The California Ballroom is wheelchair-accessible with accessible restrooms.</P>
        
            <P>East Bay DSA will provide child supervision; please <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf4Q816JJ6GBRRtbm3b1n_UA-0yyPH12S5Wk4hXEmFBpYO4tQ/viewform">fill out this form</Link> ahead of time if you will need child supervision. If anyone would like an ASL interpreter for the convention, we have volunteers available; please email <Link href="mailto:convention@eastbaydsa.org">convention@eastbaydsa.org</Link> if an interpreter is desired. Any other accessibility questions or requests can also be sent to that email address.</P>

            <P>If you require any accessible accommodations to participate fully in the convention, please let us know in <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf4Q816JJ6GBRRtbm3b1n_UA-0yyPH12S5Wk4hXEmFBpYO4tQ/viewform">this form</Link>.</P>
            
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default Venue;
