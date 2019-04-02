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

            <H3>Candidates</H3>
            <P>TBD</P>
        
        {/*
        
              <H2>Candidates</H2>
              <CandidateLink href="#treasurer-antonio-b-h">
                Antonio B.H.
              </CandidateLink>
              <CandidateLink href="#treasurer-sean-murphy">
                Sean Murphy
              </CandidateLink>
              
              */}
        
            </Container>
          </NavAnchor>
        
        {/*
        
          <Candidate name="Antonio B.H." anchor="treasurer-antonio-b-h">
            <CandidateHeader
              img="antonio.jpg"
              nominations={[
                'Justin G.',
                'Hasan A.',
                'Sergio G.',
                'Noah K.R.',
                'Kevin A.'
              ]}
            />
            <CandidateStatment>
              <P>
                I am honored to run for East Bay DSA's Treasurer as part of the
                Unity & Power coalition.
              </P>
              <P>
                I joined DSA to learn how to best organize to create a more just
                social order. I believe in the wisdom and experience of our
                chapter's fellow members, and look forward to serving in our
                Steering Committee as your servant leader. I see leading an
                organization like a shepherd does a fire. Neglect members'
                organic enthusiasm and the fire dies out. Let it burn too hot
                and members burn out quickly. But find members that show a
                spark, and feed it in just the right way, and you can build an
                organization that lasts.
              </P>
              <P>
                My work in DSA includes co-organizing the Brake Lights Project,
                leading the DSA Accountability sample bylaws process, organizing
                the drafting of alternative chapter bylaws and collaborating
                with members over 2-3 months in workgroup meetings to draft
                separate amendments, serving as a a chapter member's advocate in
                their disciplinary proceeding, canvassing for single payer, and
                researching national grievance procedures.
              </P>
              <P>
                I strive to build a chapter that will allow us to learn from one
                another. Such a chapter will require that we rebuild the trust
                lost with conflict left to fester. As such, I stand committed to
                the conflict resolution amendment I introduced at our February
                bylaws meeting calling for an independent elected body to begin
                rebuilding a healthy culture.
              </P>
              <P>Together, we are stronger.</P>
              <P>
                <strong>Qualifications/Experience:</strong> Studied accounting
                and tax law in law school; volunteer for an Income Tax filing
                clinic; have six (6) years of experience of financial statement
                literacy as a transactional attorney; researched and informally
                advised National DSA as to 501(c)(4) group exemption process
                (tax filing status); member of DSA Law; experienced in
                incorporation and interacting with the California Secretary of
                State.
              </P>
            </CandidateStatment>
          </Candidate>

          <Candidate name="Sean Murphy" anchor="treasurer-sean-murphy">
            <CandidateHeader
              img="sean.jpg"
              nominations={[
                'Daniel D.',
                'Matt S.',
                'Jeff L.',
                'Hannah E.',
                'Coleman L.'
              ]}
            />
            <CandidateStatment>
              <P>
                I came to EBDSA to develop politically and participate in a mass
                movement. I came not to work on personal projects, but on
                strageic campaigns that required an organization.
              </P>
              <P>
                As a canvasser, I found a political voice never before
                encouraged. I came to see myself as an organizer and committed
                myself to building EBDSA. Since last Spring, I have developed a
                data and communications system that undergirds every canvass,
                meeting, email, and phone bank. Though technical in content, it
                required organizing the whole chapter - its leadership and
                members. I've cohered our operations and enabled hundreds of
                members to use our data securely and effectively for chapter
                work.
              </P>
              <P>
                As Treasurer, I intend to take the same approach and incorporate
                elected leaders and committees into the chapter's financial
                planning, compliance, and fundraising. I will also make efforts
                for regular financial reporting that attune membership to the
                state of the chapter. All of this work will require building
                capacity in my comrades and creating systems and relationships
                that outlast my tenure as Treasuer. I will accept the risks of
                putting myself between EBDSA and government bureaucracy so that
                we avoid the pitfalls of tax and election law. I intend to keep
                us safe and make sure EBDSA is prepared for the years to come.
              </P>
              <P>
                I stand with my comrades in the Bread & Roses Slate because of
                their sincere committement to socialism and EBDSA. I share their
                vision of mass movement built around univeral demands, labor
                organizing, and strategic electoral work. I fight for Medicare
                for All because of a lifetime of mental health struggles. I
                fight for housing justice because my rent just skyrocketed and I
                don't know where I will be living on May 1st. I fight for this
                organization because I believe we can forge a new world
                together.
              </P>
            </CandidateStatment>
          </Candidate>
          
          */}
          
        </Section>
      </div>
    );
  }
}

export default Treasurer;
