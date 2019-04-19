import React, { PureComponent } from 'react';
import Container from '../Container';
import Section from '../Section';
import { H2, H3, P, UL, ULI } from '../typography';
import NavAnchor from '../NavAnchor';
import {
  Candidate,
  CandidateHeader,
  CandidateStatment,
  CandidateLink
} from './Candidate';

class CommunicationsSecretary extends PureComponent {
  render() {
    return (
      <div>
        <Section>
          <NavAnchor anchor={this.props.anchor}>
            <Container>
              <H2>Communications Secretary</H2>
              <P>The communications secretary shall be responsible for the member newsletter and website, though each of these functions may be substantially delegated to or shared with designated committees.</P>
        
            <H3>Candidates</H3>

              <CandidateLink href="#communications-secretary-max-lapides">
                Max Lapides
              </CandidateLink>
              <CandidateLink href="#communications-secretary-rex-larre-campuzano">
                Rex Larre-Campuzano
              </CandidateLink>
        
            </Container>
          </NavAnchor>
        
        
          <Candidate
            name="Max Lapides"
            anchor="communications-secretary-max-lapides">
            <CandidateHeader
              img="max-lapides.jpg"
              nominations={[
                'Frances R.',
                'Abigail G.-G.',
                'Ashley P.',
                'Wes H.',
                'Charlie H.',
                'Miguel D.',
                'Annika B.',
                'Ari M.',
                'Andrew R.',
                'Adam B.'
              ]}
            />
            <CandidateStatment>
              <P>For the first time in my life, democratic socialism is politically viable and people are just figuring out what that means. Socialist policy proposals such as Medicare for All and the Green New Deal poll very well, but we know we won't win these universal demands by calling our representatives and reminding them of these poll numbers. We can only win by building a multiracial, working-class mass movement that has the strength to truly threaten capital and wrest power away from the wealthy few.</P>

              <P>Our challenge is to clarify and agitate around this class conflict. A core tenet of building a united mass movement with long-lasting solidarity is creating open and consistent communication channels. The capitalist media will never bring our ideas to the masses&mdash;that's up to us. As a leader on two of our most successful communications projects, buffywicks.money and Majority, I'm convinced we must continue to take advantage of this critical moment for socialism, reaching thousands more working people with our political vision. We must take seriously our role as permanent persuaders. We'll tell the stories of militant workers, criticize capitalists and their lackeys in government, and offer a positive socialist vision with clarity, force, humor, and courage.</P>

              <P>As communications secretary, I will work to build a sustainable communications strategy that will enable us to rapidly develop our own organization. I'm committed to strengthening leadership development and supporting more members to become socialist writers and thinkers. I am proud to be running on the Bread &amp; Roses slate alongside my comrades who share my vision of fostering a fast-growing and welcoming chapter. Together, we'll spread class consciousness, terrify the capitalist class, build DSA, and develop a new generation of leftist organizers. We have a world to reach and a world to win!</P>
            </CandidateStatment>
          </Candidate>
        
          <Candidate
            name="Rex Larre-Campuzano"
            anchor="communications-secretary-rex-larre-campuzano">
            <CandidateHeader
              img="rex-larre-campuzano.jpg"
              nominations={[
                'Rachel R.',
                'Joey K.',
                'Dominic D.',
                'Daniel E.',
                'Sergio G.',
                'Allie L.',
                'Karina S.',
                'Eric G.',
                'Colin M.',
                'Katie H.'
              ]}
            />
            <CandidateStatment>
              <P>I'm a professional tattoo artist with a background in media and marketing. I joined DSA in early 2017, and I'm currently the lead organizer for the Racial Solidarity External Action team. I am also the co-founder of our new translation team and serve on the social media team.</P> 

              <P>As communications co-chair with the Bloom slate, I will</P>

              <UL>
              <ULI>Coordinate between the editorial board of Majority, operations, social media, and design committees. All our platforms should be beautiful, coordinated, and engaging members and non-members alike.</ULI>

              <ULI>Collaborate with the website team to make available online all the tools members need to plug in. This will include making sure our calendars are current and eventful. I will also focus on making our code of conduct and grievance procedures more easily accessible.</ULI>

              <ULI>Continue and expand my work with the translation team. To build a multiracial movement, our materials must be accessible to and reflective of the diverse population of the East Bay. As an immigrant and native Spanish speaker, this is a personal commitment.</ULI>

              <ULI>Develop communication leaders in every committee. We must empower members to craft messaging for campaigns they feel passionate about. This will widen the range of experiences represented in our platforms and organically reach more people. Growing our capacity will also prevent burnout and prepare us to tackle large campaigns such as the 2020 elections.</ULI>

              <ULI>Incorporate the lessons of the Oakland teachers' strike to establish an art committee that will work to expand our propaganda beyond digital, visual-centric media. We can use a multitude of mediums to capture the imagination of the working class. This committee will engage members of all ages, and make us an effective and inspiring presence during external events. As Toni Cade Bambara writes: "The role of the artist is to make the revolution irresistible."</ULI>
              </UL>
            </CandidateStatment>
          </Candidate>
        
        </Section>
      </div>
    );
  }
}

export default CommunicationsSecretary;
