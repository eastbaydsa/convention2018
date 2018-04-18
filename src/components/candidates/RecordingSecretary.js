import React, { PureComponent } from 'react';
import Container from '../Container';
import Section from '../Section';
import { H2, P, OL, OLI } from '../typography';
import Link from '../Link';
import NavAnchor from '../NavAnchor';
import { Candidate, CandidateHeader, CandidateStatment } from './Candidate';

class RecordingSecretary extends PureComponent {
  render() {
    return (
      <div>
        <Section>
          <NavAnchor anchor={this.props.anchor}>
            <Container>
              <H2>Recording Secretary</H2>
              <P>
                The Recording Secretary is responsible for taking minutes of all
                General Membership and Local Council Meetings, and shall be
                responsible for publishing these minutes, as well as
                resolutions, reports, and other official records of the Local.
                The Secretary may appoint, but must oversee, a temporary proxy
                minutes-taker for any meeting. That proxy may not vote on behalf
                of the Recording Secretary. Additionally:
              </P>
              <OL>
                <OLI>
                  The Recording Secretary shall transfer official records in
                  good condition to their successor.
                </OLI>
                <OLI>
                  The Recording Secretary will assume the responsibilities of
                  one of the Co-Chairs, if both Co-Chairs and the Vice Chair is
                  unable to do so.
                </OLI>
              </OL>

              <H2>Candidates</H2>
              <Link href="#recording-secretary-mark-gabriel">Mark Gabriel</Link>
              <Link href="#recording-secretary-karina-stenquist">
                Karina Stenquist
              </Link>
            </Container>
          </NavAnchor>
          <Candidate
            name="Mark Gabriel"
            anchor="recording-secretary-mark-gabriel">
            <CandidateHeader
              img="mark.jpg"
              nominations={[
                'Matt Stone',
                'Hannah Ehrlinspiel',
                'Sean Murphy',
                'Frances Reade',
                'Miguel Duarte'
              ]}
            />
            <CandidateStatment>
              <P>
                Hi there! I’m Mark, and I’m running for the position of
                Recording Secretary with the Bread & Roses slate.
              </P>
              <P>
                I wasn’t an organizer when I came to DSA in the final days of
                2016. The preceding decade left me politically apathetic and
                without hope for anything beyond the bleak politics of
                neoliberal logic. The impotence of liberal ideology in the face
                of consistent right wing advances made meaningful political
                change feel forever just out of reach.
              </P>
              <P>
                It was the Bernie Sanders campaign that changed my mind and
                inspired me to bring my politics into the real world. His
                campaign presented a substantial vision for improving our
                society and demonstrated the viability, and massive popularity,
                of working-class demands.
              </P>
              <P>
                Since joining DSA, I’ve spent the past year learning from
                comrades, sharpening my politics, and dedicating myself to
                building our chapter. I’ve worked on a broad range of projects
                both internal and external — from canvassing and phone banking,
                to organizing the expansion of our neighborhood groups,
                facilitating meetings large and small, developing our Membership
                Renewal campaign, and organizing for our recently launched
                electoral campaign.
              </P>
              <P>
                Today, I am an organizer. As Recording Secretary, I want to
                honor and reflect the work of every project that has hundreds or
                thousands of hours of our comrades’ time invested in it — this
                means I will never allow details to slip through the cracks, I
                will work with the website team to make all important
                information transparent and accessible to members, and I will
                commit myself to the service of documenting our chapter’s
                democratically mandated work clearly, cleanly, and quickly.
              </P>
              <P>
                I believe that there is work to be done to lay the foundation
                for a mass working-class movement that can win, and I look
                forward to what we will build together next!
              </P>
            </CandidateStatment>
          </Candidate>

          <Candidate
            name="Karina Stenquist"
            anchor="recording-secretary-karina-stenquist">
            <CandidateHeader
              img="karina.jpg"
              nominations={[
                'Justin Gilmore',
                'Antonio Birbeck-Herrera',
                'Sergio Guadarrama',
                'Noah Kirshbaum-Ray',
                'David Spenger'
              ]}
            />
            <CandidateStatment>
              <P>
                I joined DSA in 2017 optimistic, for the first time, that I'd
                found a welcoming political community, and I'm running for
                secretary to build and strengthen this space and our capacity
                for collective resistance.
              </P>
              <P>
                My experiences as a journalist, teacher abroad, and bartender
                have all informed my politics, and it is my service industry
                work where the struggles of working people are crystallized for
                me, every day. In addition to canvassing for single payer, I
                worked to launch an EBDSA podcasting project, producing a pilot
                episode with talented comrades. Though I set that aside to help
                strengthen our bylaws, the process was a potent reminder of how
                energizing member-led initiatives can be when people plug in
                using their skills and passions to build something beyond a
                one-size-fits-all canvassing program.
              </P>
              <P>
                Truly cultivating our heterogeneous membership by creating
                various ways for people to join up would require significant
                changes in the structure and culture of EBDSA.
              </P>
              <P>I propose:</P>
              <OL>
                <OLI>
                  Restoring a culture of trust, where comrades can communicate,
                  debate and discuss, through more structures for online and
                  in-person communication, such as those proposed by Open EBDSA.
                </OLI>
                <OLI>
                  Organizing beyond elections by connecting with organic working
                  class struggles (tenant organizing, ICE raid response teams,
                  etc…)
                </OLI>
                <OLI>
                  Committing to a pedagogical approach to political organizing
                  (including a democratic political education program) that
                  makes space for, and fosters curiosity about, our different
                  political backgrounds.
                </OLI>
              </OL>
              <P>
                Leadership should engage with political difference from a place
                of respect and humility. I've had experience doing this by both
                working on bylaws and the Unity & Power coalition with a diverse
                group of comrades. I have not just been paying lip service to
                Big Tent organizing, I have been walking the walk, and look
                forward to bringing this experience into a leadership role.
              </P>
            </CandidateStatment>
          </Candidate>
        </Section>
      </div>
    );
  }
}

export default RecordingSecretary;
