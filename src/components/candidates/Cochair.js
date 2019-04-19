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

class Cochair extends PureComponent {
  render() {
    return (
      <div>
        <Section>
          <NavAnchor anchor={this.props.anchor}>
            <Container>
              <H2>Co-Chairs</H2>
              <P>The co-chairs shall be the official public spokespersons for the chapter and will initiate such actions and policies as the chapter's general welfare may demand. The co-chairs shall organize and preside over all official meetings of the organization and the Steering Committee. The co-chairs shall maintain consistent communication with all committee leaders and facilitate collaboration and coordination between them. Additionally, the co-chairs serve as executive officers of the chapter, and they are listed on financial accounts along with the treasurer.</P>
                
              <H2>Candidates</H2>
              <CandidateLink href="#co-chair-abigail-gutmann-gonzalez">
                Abigail Gutmann-Gonzalez
              </CandidateLink>
              <CandidateLink href="#co-chair-keith-brower-brown">
                Keith Brower Brown
              </CandidateLink>
              
        
            </Container>
          </NavAnchor>
        
          <Candidate name="Abigail Gutmann-Gonzalez" anchor="co-chair-abigail-gutmann-gonzalez">
            <CandidateHeader
              img="abigail-gutmann-gonzalez.jpg"
              nominations={[
                'Keith B. B.',
                'Mary Virginia W.',
                'Miguel D.',
                'Sean M.',
                'John P.',
                'Ken P.',
                'Jeremy G.',
                'Hannah E.',
                'Hannah K.',
                'Graham D.'
              ]}
            />
            <CandidateStatment>
              <P>We are experiencing an unprecedented resurgence of class politics and a reawakening of the left in the United States. It is our job as socialists to heighten class consciousness by organizing around class politics and universal social demands like Medicare for All, social housing, and the Green New Deal. At the same time, we must actively fight racism, sexism, and other forms of oppression and work to build a mass, militant, multiracial, working-class movement united through solidarity in shared struggle.</P>

              <P>As the stakes grow and we deepen our political understanding of what it will take to build a mass movement of workers, so must our commitment to fight for the democratic socialist future all working people deserve. To do so, East Bay DSA must orient itself outwards towards the organic class struggles happening all around us.</P>

              <P>As co-chair of East Bay DSA this past year, I've seen our chapter rise to this challenge and helped lead the chapter through the massive mobilizations for our electoral campaigns for Jovanka and Prop 10 as well as the Oakland teachers strike. I'm very proud of everything our chapter has accomplished this year, and I'm ready for the even bigger fights in the next year.</P>

              <P>To win this struggle, we will need to build a more robust, more effective organization. That means raising up new leaders, sharpening our political analysis, and helping new and unengaged members develop into committed socialist militants as we continue to advance our vision for a democratic socialism.</P>

              <P>It's an honor to be running for co-chair of East Bay DSA alongside Keith and the Bread &amp; Roses slate. Thanks for your trust and support as we work to create a better future together. Solidarity forever!</P>
            </CandidateStatment>
          </Candidate>

          <Candidate name="Keith Brower Brown" anchor="co-chair-keith-brower-brown">
            <CandidateHeader
              img="keith-brower-brown.jpg"
              nominations={[
                'Jovanka B.',
                'Abigail G.-G.',
                'Miguel D.',
                'Ashley P.',
                'Ari M.',
                'Adam B.',
                'Annika B.',
                'Dan R.',
                'Charlie H.',
                'Frances R.'
              ]}
            />
            <CandidateStatment>
              <P>This year, our unifying strike support and election campaigns have shown our amazing potential. Let's rally and support thousands of diverse working people to become a mighty force for democratic socialism. I believe we build the democratic organizing culture we need by staying focused outwards, on the next thousand organizers we want to help bring into the fight from across the broad working class, and learning together with them how we need to grow. I'm proud to run for that inclusive socialist strategy with the Bread &amp; Roses slate.</P>

              <P>I've served the last year at-large on our Steering Committee and worked to build bridges within our chapter and out. I've led our mobilizers program to support organizers in new neighborhoods, our North Oakland teachers' strike mobilization team, and Jovanka Beckles' policy platform team. I led the founding of our Social Housing and Green New Deal/PG&amp;E campaigns, and I'm proud of their example as thriving, politically-focused, big-tent projects with lots of growing new members and leaders. I'm a department steward in my grad student union at UC Berkeley, where I'm learning about climate politics, care work, and movement-building in California. </P>

              <P>I hope to lead alongside Abigail as a co-chair who carefully includes and learns from members, leads with open political vision, and speaks passionately for our democratic socialist strategy to the world beyond. More than any point in decades, working people are militantly standing up for ourselves. I want our chapter to be as coordinated in our action&mdash;and as serious about learning together&mdash;as it takes to help us win that class struggle for good.</P>
            </CandidateStatment>
          </Candidate>
          
        </Section>
      </div>
    );
  }
}

export default Cochair;
