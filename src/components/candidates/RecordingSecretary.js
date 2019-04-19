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

class RecordingSecretary extends PureComponent {
  render() {
    return (
      <div>
        <Section>
          <NavAnchor anchor={this.props.anchor}>
            <Container>
              <H2>Recording Secretary</H2>
              <P>The recording secretary is responsible for taking minutes of all general membership and Steering Committee meetings and shall be responsible for publishing these minutes, as well as resolutions, reports, and other official records of the chapter. The secretary may appoint, but must oversee, a temporary proxy minutes-taker for any meeting. That proxy may not vote on behalf of the recording secretary. Additionally,</P>
        
              <OL>
                <OLI>The recording secretary shall transfer official records in good condition to their successor.</OLI>
                <OLI>The recording secretary will assume the responsibilities of one of the co-chairs, if both co-chairs and the vice chair are unable to do so.</OLI>
              </OL>

            <H3>Candidate</H3>
        
              <CandidateLink href="#recording-secretary-mark-gabriel">
                Mark Gabriel
              </CandidateLink>
              
            </Container>
          </NavAnchor>
        
        
          <Candidate
            name="Mark Gabriel"
            anchor="recording-secretary-mark-gabriel">
            <CandidateHeader
              img="mark-gabriel.jpg"
              nominations={[
                'Nick F.',
                'Max L.',
                'Luke T.',
                'Matt S.',
                'Jeremy G.',
                'Miguel D.',
                'Megan S.',
                'Meagan D.',
                'Mary Virginia W.',
                'Andrew R.'
              ]}
            />
            <CandidateStatment>
              <P>Mass movement socialist politics are viable in 2019 and organizing a united working class is our only hope for the future. I joined DSA in 2016 and am so proud of what we've accomplished over the past few years in building a socialist political force here in the East Bay.</P>

              <P>It has been my privilege to serve as recording secretary for the past year, working to document our progress and develop new structures for sharing information across our chapter. This year, I'm running again with the Bread &amp; Roses slate in order to continue and improve upon that work with everything I've learned.</P>

              <P>In the upcoming year, I'm committed to working with our committees to ensure that we're able to capture and reflect the work that goes on all across our chapter &mdash; creating resources that can be referenced in years to come.</P>

              <P>I will also help to define more structure and leadership development opportunities for our committee recording secretaries, developing the space for us to learn and support each other, both as secretaries and as socialists.</P>

              <P>I'm so excited for what this next year will hold for our chapter and for socialist politics across the country. I look forward to working alongside all of you in our upcoming campaigns and to capturing this historic opportunity to spread our message and transform our society. Solidarity forever!</P>
        
            </CandidateStatment>
          </Candidate>
          
        </Section>
      </div>
    );
  }
}

export default RecordingSecretary;
