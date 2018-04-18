import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Container from '../Container';
import Section from '../Section';
import { H2, P, Strong } from '../typography';
import Link from '../Link';
import NavAnchor from '../NavAnchor';
import Directory from '../directory/Directory';
import DirectoryItem from '../directory/DirectoryItem';
import { red, purple } from '../colors';

const Info = styled.p`
  font-size: 30px;
`;

const Line = styled.div`
  border-top: 3px solid ${purple};
  margin: 30px 0;
`;

class WelcomeSection extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>Welcome to the East Bay DSA 2018 Convention.</H2>
            <P>
              On April 29th, East Bay DSA will be holding a Convention, the
              first in our chapter's history. The Convention is where we will
              all come together as a chapter to take on two important tasks:
              electing a new Steering Committee and collectively deciding on a
              Priorities Resolution that will guide our work in the upcoming
              year. It's important for every member to participate if they
              can—the more engagement we have, the more democratic it is. So
              please mark your calendars for Sunday, April 29th, and{' '}
              <Link href="https://goo.gl/forms/gSFErxs0LC11J2dm2">RSVP!</Link>
            </P>

            <Line />

            <Info>
              <Strong>East Bay DSA Convention 2018</Strong>
              <br />Sunday, April 29th, 10am-5pm
              <br />California Nurses Association
              <br />
              <Link href="https://goo.gl/maps/1P5sM5YZoJk">
                155 Grand Ave, Oakland
              </Link>
            </Info>

            <Line />

            <Directory>
              <DirectoryItem
                text="Join us at the upcoming convention!"
                links={[
                  {
                    label: 'RSVP',
                    href: 'https://goo.gl/forms/gSFErxs0LC11J2dm2'
                  }
                ]}
              />
              <DirectoryItem
                text="Help us put on a great meeting."
                links={[
                  {
                    label: 'Volunteer',
                    href: 'https://goo.gl/forms/gSFErxs0LC11J2dm2'
                  }
                ]}
              />
            </Directory>
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default WelcomeSection;
