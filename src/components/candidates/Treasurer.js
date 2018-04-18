import React, { PureComponent } from 'react';
import Container from '../Container';
import Section from '../Section';
import { H2, P, OL, OLI } from '../typography';
import Link from '../Link';
import NavAnchor from '../NavAnchor';
import { Candidate, CandidateHeader, CandidateStatment } from './Candidate';

class Treasurer extends PureComponent {
  render() {
    return (
      <div>
        <Section>
          <NavAnchor anchor={this.props.anchor}>
            <Container>
              <H2>Treasurer</H2>
              <P>
                The Treasurer will be responsible for administration of funds,
                budget, and financial organization of the Local, including
                overseeing fundraising activities for the Local. The Treasurer
                will report to the Local Council on the financial status of the
                organization at each Local Council Meeting. The Treasurer will
                maintain transparent and open financial reports available to the
                entire membership upon request by an officer of the Local
                Council.
              </P>

              <H2>Candidates</H2>
              <Link href="#treasurer-antonio-birbeck-herrera">
                Antonio Birbeck-Herrera
              </Link>
              <Link href="#treasurer-sean-murphy">Sean Murphy</Link>
            </Container>
          </NavAnchor>
          <Candidate
            name="Antonio Birbeck-Herrera"
            anchor="treasurer-antonio-birbeck-herrera">
            <CandidateHeader
              img="antonio.jpg"
              nominations={[
                'Justin Gilmore',
                'Hasan-Can Arat',
                'Sergio Guadarrama',
                'Noah Kirshbaum-Ray',
                'Kevin Arauz'
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
                'Daniel D',
                'Matt Stone',
                'Jeff Lee',
                'Hannah Ehrlinspiel',
                'Coleman Lukas'
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
        </Section>
      </div>
    );
  }
}

export default Treasurer;
