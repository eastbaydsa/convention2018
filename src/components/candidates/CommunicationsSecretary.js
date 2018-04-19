import React, { PureComponent } from 'react';
import Container from '../Container';
import Section from '../Section';
import { H2, P } from '../typography';
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
              <P>
                The Communications Secretary shall be responsible for the member
                newsletter and website, though each of these functions may be
                substantially delegated to or shared with designated committees.
              </P>

              <H2>Candidates</H2>
              <CandidateLink href="#communications-secretary-dominic-dagradi">
                Dominic Dagradi
              </CandidateLink>
              <CandidateLink href="#communications-secretary-miguel-duarte">
                Miguel Duarte
              </CandidateLink>
            </Container>
          </NavAnchor>
          <Candidate
            name="Dominic Dagradi"
            anchor="communications-secretary-dominic-dagradi">
            <CandidateHeader
              img="dominic.jpg"
              nominations={[
                'Jeff Lee',
                'Maia Averett',
                'Ahmed Kanna',
                'Emily Claffy',
                'Rosa Astra'
              ]}
            />
            <CandidateStatment>
              <P>
                I'm an appointed external organizer and neighborhood leader in
                South Berkeley, where I organize canvasses, rap trainings and
                socials with our excellent M4A and electoral campaigns. I also
                moderate the member Facebook group, built our current newsletter
                templates and website, and support other organizers’ projects as
                a technical advisor.
              </P>
              <P>
                As Communications Secretary, I will be dedicated to building
                structures that help membership exert its political will
                frequently and with confidence. I want us to bring a razor-sharp
                message and analysis to our communities about the struggles we
                face as working class people, how taking action collectively is
                the only way to solve our problems, and why socialism is the
                only way out of the dead end abyss of capitalism. This
                necessitates creating new propaganda, working closely with
                press, and tight coordination of our public campaigns.
              </P>
              <P>
                I'm a member of the Open EBDSA micro-slate (<a href="http://openEBDSA.org">
                  openEBDSA.org
                </a>) with Aaron Hall, and believe our chapter can reach its
                greatest potential by focusing on fostering a true
                multi-tendency democracy built on collective decision making and
                open communication. The campaigns and tactics that build power
                in the East Bay are going to come from unexpected places and
                from communities we haven’t engaged with yet. It’s our duty as
                socialists to create a structure and organization that invites
                the working class in, lets their voices be heard, and organizes
                them into a cohesive class that is too strong to be divided by
                capitalism.
              </P>
              <P>
                My first DSA experience was a Medicare for All canvass in
                February of 2017. It was an awakening to finally understanding
                what we can achieve through struggle together. Working with my
                newfound comrades for the past year has been a powerful and
                joyous experience that I never could have anticipated, and I
                want every member of our chapter to have the chance to
                experience the same.{' '}
              </P>
            </CandidateStatment>
          </Candidate>

          <Candidate
            name="Miguel Duarte"
            anchor="communications-secretary-miguel-duarte">
            <CandidateHeader
              img="miguel.jpg"
              nominations={[
                'Matt Stone',
                'Hannah Ehrlinspiel',
                'Sean Murpht',
                'Coleman Lukas',
                'Frances Reade'
              ]}
            />
            <CandidateStatment>
              <P>
                I'm running for Communications Secretary with the Bread & Roses
                slate because it's time for an unapologetically socialist
                politics to go mainstream. After decades of neoliberal
                austerity, millions of people demand an alternative. But this
                exciting moment is also perilous, as the Right targets the
                disaffected with its poison. Our task is to respond with a
                powerful, joyful, socialist message.
              </P>
              <P>
                As the son of immigrants, I grew up seeing how politics touched
                our lives. My mom was a lunch lady and my dad was a Teamster,
                but it wasn't until I learned about socialism that I realized
                how fundamental the gains won by militant labor were to shaping
                the material conditions of my life. Thanks to the union, I had a
                comfortable middle-class upbringing and the ability to attend
                college and land a good job – I'm even the President of a small
                union now! Everybody should enjoy the opportunities I've had -
                but they are being denied to the vast majority by a tiny
                minority of the ultra-rich.
              </P>
              <P>
                As Communications Secretary, I will coordinate our efforts to
                inject a coherent and persuasive socialist class analysis into
                mainstream political discourse. Like we do in our one-on-one
                organizing, our broader communications must draw connections
                between our day-to-day experiences and the oppressive forces of
                capitalism. By creating messages that help people identify
                capitalism as their enemy, as opposed to their interests, we can
                activate and organize folks to join is in fighting back. Most
                people simply see no other alternative to capitalism – we must
                light the path to building the better world we know is possible!
              </P>
              <P>
                Internally, we must build and maintain tools which facilitate
                strong and healthy communication habits, in both formal and
                informal settings.
              </P>
              <P>
                We can't let the Right fill the void left behind by Democrats'
                abandonment of the working class!
              </P>
            </CandidateStatment>
          </Candidate>
        </Section>
      </div>
    );
  }
}

export default CommunicationsSecretary;
