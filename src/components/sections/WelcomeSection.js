import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Container from '../Container';
import Section from '../Section';
import { H2, P, Strong } from '../typography';
import Link from '../Link';
import NavAnchor from '../NavAnchor';
// import Directory from '../directory/Directory';
// import DirectoryItem from '../directory/DirectoryItem';
import { purple } from '../colors';

// const Info = styled.p`
//   font-size: 30px;
//   margin-bottom: 40px;
// `;

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
            <H2>Welcome to the East Bay DSA 2020 Local Convention!</H2>
            <P>The convention will be held this year on <Strong>Sunday, September 13th from 1 p.m. to 4 p.m.</Strong> on Zoom. <Link href="https://www.eastbaydsa.org/events/1355/2020-09-13-ebdsa-2020-convention/">Be sure to save the date</Link>. It's important for as many East Bay DSA members as possible to participate!</P>

            <Line />

            <H2>Convention Schedule</H2>

            <p>The full day's agenda will be available here soon.</p>
        {/*
            <ul>
              <li>
                <Strong>10 am–12 pm:</Strong> Priorities Resolution (discussion,
                amendments and floor votes)
              </li>
              <li>
                <Strong>12 pm–1 pm:</Strong> Lunch
              </li>
              <li>
                <Strong>1 pm–3 pm:</Strong> Steering Committee elections
                (candidate speeches and ballot voting)
              </li>
              <li>
                <Strong>3 pm–3:30 pm:</Strong> Break
              </li>
              <li>
                <Strong>3:30 pm–5 pm:</Strong> Bylaws Amendments (agenda items
                postponed from the 2/25 General Membership Meeting)
              </li>
            </ul>

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
            */ }
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default WelcomeSection;
