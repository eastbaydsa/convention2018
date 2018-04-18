import React, { PureComponent } from 'react';
import Container from '../Container';
import Section from '../Section';
import { H2, P } from '../typography';
import Link from '../Link';
import NavAnchor from '../NavAnchor';
import { Candidate, CandidateHeader, CandidateStatment } from './Candidate';

class ViceChair extends PureComponent {
  render() {
    return (
      <div>
        <Section>
          <NavAnchor anchor={this.props.anchor}>
            <Container>
              <H2>Vice Chair</H2>
              <P>
                The Vice Chair is responsible for assisting the Co-Chairs with
                all of their duties. If both Co-Chairs are unable to perform
                their duties, the Vice Chair shall perform all duties and assume
                all responsibilities of the Co-Chairs until such a time as one
                or both Co-Chairs are able to resume their posts.
              </P>

              <H2>Candidates</H2>
              <Link href="#vice-chair-sergio-guadarrama">
                Sergio Guadarrama
              </Link>
              <Link href="#vice-chair-abigail-gutmann-gonzalez">
                Abigail Gutmann-Gonzalez
              </Link>
            </Container>
          </NavAnchor>
          <Candidate
            name="Sergio Guadarrama"
            anchor="vice-chair-sergio-guadarrama">
            <CandidateHeader
              img="sergio.jpg"
              nominations={[
                'Noah Kirshbaum-Ray',
                'Justin Gilmore',
                'Antonio Birbeck-Herrera',
                'Karina Stenquist',
                'Kate McDonnell'
              ]}
            />
            <CandidateStatment>
              <P>
                I want to make EBDSA a welcoming organization where diversity
                and equity can thrive, where members feel included and
                empowered, where multiple views and tendencies can work
                together, and where disagreement doesn't preclude collaboration.
                An organization that help us unlearn capitalist biases (fear,
                scarcity, oppression, individualism) and help us learn socialist
                ones (trust, camaraderie, liberation, solidarity) while fighting
                for the working-class.
              </P>
              <P>
                I've lived in Berkeley for the last 8 years, but I was born and
                raised in Madrid, Spain. I was lucky to grow up in a country
                with universal free health care, free public education
                (including tuition-free college), public housing programs and
                strong unions. To many, that would sound like the socialist
                dream and the end of class-struggle, however that is far from
                true. All of that didn't preclude the fastest growth of
                inequality in Europe, the increase of corruption, a 25%
                unemployment rate, and the biggest increase in poverty since the
                Spanish Civil War. It is not enough to reach those goals, we
                need to change the way all of us organize, participate and get
                involved in our communities and in our future.
              </P>
              <P>
                By running for Vice-Chair, I want to ensure voices typically
                absent in the decisions get heard and the SC is transparent and
                kept accountable to the members. We must remove procedural
                barriers and institute monthly regular meetings. I want to make
                sure members feel empowered to propose, engage, and change
                things both inside and outside DSA. Additionally, we should
                create member-driven committees and strengthen our collaboration
                with other organizations. I strive to build an organization that
                at the minimum embodies the democratic values and the socialist
                vision that we strive to create in our community, society and
                world.
              </P>
              <P>
                “The master's tools will never dismantle the master's house.”
              </P>
              <P>“Las herramientas del amo, nunca desmantelaran su casa.”</P>
            </CandidateStatment>
          </Candidate>

          <Candidate
            name="Abigail Gutmann-Gonzalez"
            anchor="vice-chair-abigail-gutmann-gonzalez">
            <CandidateHeader
              img="abigail.jpg"
              nominations={[
                'Sean Murphy',
                'Daniel D',
                'Hannah Ehrlinspiel',
                'Matt Stone',
                'Coleman Lukas'
              ]}
            />
            <CandidateStatment>
              <P>
                It's an honor to be running for Vice-Chair of East Bay DSA as
                part of the Bread & Roses slate. I am running to bring more
                members into DSA and help develop their socialist politics and
                organizing skills. If elected, I hope to further build DSA's
                capacity and make it a socialist force that can foster
                solidarity, strengthen the working class, and take on capital.
                The way we do that is by giving every member of our chapter the
                opportunity and the skills to be a leader within DSA and in
                their community.
              </P>
              <P>
                I grew up in a poor, rural town in post-dictatorial Chile and
                much of my early experiences there were foundational to my
                understanding of and belief in working class solidarity. After
                the Bernie Sanders campaign demonstrated that left politics
                could go mainstream in the US, I joined East Bay DSA in January
                2017.
              </P>
              <P>
                One of the first events I attended was the big single-payer
                canvass in February 2017. While I had never canvassed before and
                the prospect of talking to complete strangers was terrifying, I
                was impressed by the ambitiousness of a political project that
                was still achievable, by the deep commitment of the hundreds of
                people who showed up to canvass, and by the conversations I had
                with my neighbors at their doors.
              </P>
              <P>
                Connecting with other organizers at the canvass brought me into
                phone banking efforts and that led to more canvassing, and
                running canvassing trainings. I was inspired along the way by my
                devoted comrades who helped me grow politically and as a leader.
                Taking their example, I've developed new neighborhood leaders,
                run neighborhood groups, and supported other chapters to launch
                their own campaigns. I'm currently an external organizer and
                co-chair of the chapter's Medicare for All sub-committee.
              </P>
              <P>Thanks for your support and trust. Solidarity forever!</P>
            </CandidateStatment>
          </Candidate>
        </Section>
      </div>
    );
  }
}

export default ViceChair;
