import React, { PureComponent } from 'react';
import Container from '../Container';
import Section from '../Section';
import { H2, P, OL, OLI } from '../typography';
import Link from '../Link';
import NavAnchor from '../NavAnchor';
import { Candidate, CandidateHeader, CandidateStatment } from './Candidate';

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
              <Link href="#communications-secretary-dominic-dagradi">
                Dominic Dagradi
              </Link>
              <Link href="#communications-secretary-miguel-duarte">
                Miguel Duarte
              </Link>
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
              <P />
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
