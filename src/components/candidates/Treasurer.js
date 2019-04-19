import React, { PureComponent } from 'react';
import Container from '../Container';
import Section from '../Section';
import { H2, H3, P, OL, OLI } from '../typography';
import NavAnchor from '../NavAnchor';
import {
  Candidate,
  CandidateHeader,
  CandidateStatment,
  CandidateLink
} from './Candidate';

class Treasurer extends PureComponent {
  render() {
    return (
      <div>
        <Section>
          <NavAnchor anchor={this.props.anchor}>
            <Container>
              <H2>Treasurer</H2>
              <P>The treasurer will be responsible for administration of funds, budget, and financial organization of the chapter, including overseeing fundraising activities for the chapter. The treasurer will report to the Steering Committee on the financial status of the organization at each Steering Committee meeting. The treasurer will maintain transparent and open financial reports available to the entire membership upon request by an officer of the Steering Committee.</P>

            <H3>Candidate</H3>

              <CandidateLink href="#treasurer-sean-murphy">
                Sean Murphy
              </CandidateLink>
                      
            </Container>
          </NavAnchor>
        

          <Candidate name="Sean Murphy" anchor="treasurer-sean-murphy">
            <CandidateHeader
              img="sean-murphy.jpg"
              nominations={[
                'Nick F.',
                'Max L.',
                'Luke T.',
                'Matt S.',
                'Miguel D.',
                'Megan S.',
                'Mark G.',
                'Meagan D.',
                'Mary Virginia W.',
                'Graham D.'
              ]}
            />
            <CandidateStatment>
              <P>As East Bay DSA carries its momentum from the OEA strike towards the 2020 elections, it stands an organization transformed from what it was a year ago. More in solidarity with each other and with the working class of East Bay than ever before, we have a foundation on which to build our power and fight for a world we all deserve.</P>

              <P>In the past year as treasurer, I have been deeply involved in each of our campaigns. I navigated electoral compliance issues and developed the data infrastructure for our Jovanka Beckles and Prop 10 campaigns. And during the Oakland Teachers' strike, as part of Bread for Ed, I helped make it possible to spend nearly $100,000 on food for students and their striking teachers. As much as the day-to-day of the treasury is often administrative, the purpose is political: to provide a financial and organizational foundation that supports and is guided by our political program.</P>

              <P>In my second term as treasurer and as a member of the Bread &amp; Roses slate, I will maintain this approach and continue strengthening our organization to be a vehicle for supporting working-class people and socialist politics. I am proud to be in this with you all and excited for the year to come!</P>
            </CandidateStatment>
          </Candidate>
          
        </Section>
      </div>
    );
  }
}

export default Treasurer;
