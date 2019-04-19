import React, { PureComponent } from 'react';
import Container from '../Container';
import Section from '../Section';
import { H2, H3, P } from '../typography';
import NavAnchor from '../NavAnchor';
import {
  Candidate,
  CandidateHeader,
  CandidateStatment,
  CandidateLink
} from './Candidate';

class ViceChair extends PureComponent {
  render() {
    return (
      <div>
        <Section>
          <NavAnchor anchor={this.props.anchor}>
            <Container>
              <H2>Vice Chair</H2>
              <P>The vice chair is responsible for assisting the co-chairs with all of their duties. If both co-chairs are unable to perform their duties, the vice chair shall perform all duties and assume all responsibilities of the co-chairs until such a time as one or both co-chairs are able to resume their posts.</P>
        
        <H3>Candidate</H3>
        

              <CandidateLink href="#vice-chair-hannah-ehrlinspiel">
                Hannah Ehrlinspiel
              </CandidateLink>
              
              
            </Container>
          </NavAnchor>
        
        
          <Candidate
            name="Hannah Ehrlinspiel"
            anchor="vice-chair-hannah-ehrlinspiel">
            <CandidateHeader
              img="hannah-ehrlinspiel.jpg"
              nominations={[
                'Zach M.',
                'Shane R.',
                'Wes H.',
                'Sean M.',
                'Sandy B.',
                'Jeremy G.',
                'Miguel D.',
                'Robbie N.',
                'Will S.',
                'Richard M.'
              ]}
            />
            <CandidateStatment>
              <P>Capitalism isn’t working. In the Bay Area and across the country, workers' material conditions of existence are lousy and getting lousier, and attacks from the wealthy elite, the racist right wing, and their complacent neoliberal cheerleaders are tearing families apart while destroying the ecosystem all life depends on. Yet in the last few years, a massive strike wave, the growth of DSA, and a crop of popular insurgent socialist politicians show that workers have the power and the confidence to rebel against greed, oppression, and austerity.</P>

              <P>Our job is to help build this class struggle from below and cohere it around a democratic socialist vision. Because of our dedication to supporting labor unions, to carrying out class-struggle election campaigns like Bernie 2020, and to building a multiracial working-class movement, I believe that DSA is a potent vehicle for harnessing the energy of this insurgency and a powerful weapon to wield against our class enemies.</P>

              <P>As vice chair, I will help to build a healthy, democratic, diverse, and effective chapter. To do this, I will draw on my two years of experience as a member of East Bay DSA, as co-chair of the Membership Engagement Committee, as an at-large representative on the Steering Committee, and on the many great relationships I've built in the chapter. To be successful, our chapter needs clear communication between all our committees and clear leadership opportunities for all our members. A strong chapter will support even more of the incredible class-struggle campaigns we've been waging. I am proud to be running on the Bread &amp; Roses slate, and I am proud of East Bay DSA's members, our chapter, and the work we all do together. But I'm even more excited to see what we will accomplish over the next year.</P>
            </CandidateStatment>
          </Candidate>          
          
        </Section>
      </div>
    );
  }
}

export default ViceChair;
