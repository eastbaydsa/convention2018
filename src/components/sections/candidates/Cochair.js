import React, { PureComponent } from 'react';
import Container from '../../Container';
import Section from '../../Section';
import { H2, P } from '../../typography';
import Link from '../../Link';
import NavAnchor from '../../NavAnchor';
import { Candidate, CandidateHeader, CandidateStatment } from './Candidate';

class Cochair extends PureComponent {
  render() {
    return (
      <div>
        <NavAnchor anchor={this.props.anchor}>
          <Section>
            <Container>
              <H2>Co-Chairs</H2>
              <P>
                The Co-Chairs shall be the official public spokespersons for the
                Local and will initiate such actions and policies as the Local’s
                general welfare may demand. The Co-Chairs shall organize and
                preside over all official meetings of the organization and the
                Local Council. The Co-Chairs shall maintain consistent
                communication with all committee leaders and facilitate
                collaboration and coordination between them. Additionally:
              </P>
              <P>
                The Co-Chairs will also act as, or appoint, the official
                representatives of the Local to the National Organization and to
                other DSA Locals. This does not apply during official business
                at the National DSA Convention, when Local Delegates may act
                independently on behalf of the Local’s membership.
              </P>
              <P>
                The Co-Chairs serve as executive officers of the Local, and they
                are listed on financial accounts along with the Treasurer.
              </P>
              <P>
                At least one Co-Chair must not identify as both White and
                Cis-Male.
              </P>

              <H2>Candidates</H2>
              <Link href="co-chair-rosa-astra">Rosa Astra</Link>
              <Link href="co-chair-angie-laflame">Angie LaFlame</Link>
              <Link href="co-chair-zach-mcdonald">Zach McDonald</Link>
              <Link href="co-chair-frances-reade">Frances Reade</Link>
            </Container>
          </Section>
        </NavAnchor>
        <Section>
          <Candidate name="Rosa Astra" anchor="co-chair-rosa-astra">
            <CandidateHeader
              img="rosa.jpg"
              nominations={[
                'June LS',
                'Antonio Birbeck-Herrera',
                'Karina Stenquist',
                'Noah Kirshbaum-Ray',
                'Dominic Dagradi'
              ]}
            />
            <CandidateStatment />
          </Candidate>

          <Candidate name="Angie LaFlame" anchor="co-chair-angie-laflame">
            <CandidateHeader
              img="angie.jpg"
              nominations={[
                'June LS',
                'Antonio Birbeck-Herrera',
                'Karina Stenquist',
                'Noah Kirshbaum-Ray',
                'Dominic Dagradi'
              ]}
            />
            <CandidateStatment />
          </Candidate>

          <Candidate name="Frances Reade" anchor="co-chair-frances-reade">
            <CandidateHeader
              img="frances.jpg"
              nominations={[
                'Daniel D',
                'Matt Stone',
                'Hannah Ehrlinspiel',
                'Sean Murphy',
                'Coleman Lukas'
              ]}
            />
            <CandidateStatment>
              It’s been a great honor to serve East Bay DSA as vice chair this
              term, and I hope with your support I can continue to build on the
              excellent foundation we’ve established since the membership boom
              last fall. I joined DSA in January 2017 with a lot of anger and
              very little organizing experience. I benefitted from my comrades’
              commitment to leadership development – in fact I would never have
              run for vice chair without the encouragement of chapter leaders
              who’d seen me coordinate our provisional bylaws process and
              believed I could do even more to serve our chapter and the
              movement for socialism. I designed and lead our chapter elections
              last fall, helped to write our new bylaws, worked on the team
              putting on and developing the processes for our general meetings.
              (If you’ve been to the last few general meetings, you’ve watched
              me pick up Robert’s Rules in real time as I chair the meetings!)
              If elected, my goals for the new term are to continue to wage
              class war in the form of our M4A and housing campaigns, to develop
              new ties to rank-and-file labor organizers in the East Bay, and to
              enact new member recruitment and retention systems with a goal of
              further diversifying the chapter.
            </CandidateStatment>
          </Candidate>

          <Candidate name="Zach McDonald" anchor="co-chair-zach-mcdonald">
            <CandidateHeader
              img="zach.jpg"
              nominations={[
                'Daniel D',
                'Matt Stone',
                'Sean Murphy',
                'Hannah Ehrlinspiel',
                'Frances Reade'
              ]}
            />
            <CandidateStatment />
          </Candidate>
        </Section>
      </div>
    );
  }
}

export default Cochair;
