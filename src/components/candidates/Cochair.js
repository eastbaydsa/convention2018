import React, { PureComponent } from 'react';
import Container from '../Container';
import Section from '../Section';
import { H2, P, OL, OLI } from '../typography';
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
              <P>
                The Co-Chairs shall be the official public spokespersons for the
                Local and will initiate such actions and policies as the Local's
                general welfare may demand. The Co-Chairs shall organize and
                preside over all official meetings of the organization and the
                Steering Committee. The Co-Chairs shall maintain consistent
                communication with all committee leaders and facilitate
                collaboration and coordination between them. Additionally:
              </P>
              <P>
                The Co-Chairs serve as executive officers of the Local, and they
                are listed on financial accounts along with the Treasurer.
              </P>

              <H2>Candidates</H2>
              <CandidateLink href="#co-chair-rosa-astra">
                Rosa Astra
              </CandidateLink>
              <CandidateLink href="#co-chair-angie-laflame">
                Angie LaFlame
              </CandidateLink>
              <CandidateLink href="#co-chair-zach-mcdonald">
                Zach McDonald
              </CandidateLink>
              <CandidateLink href="#co-chair-frances-reade">
                Frances Reade
              </CandidateLink>
            </Container>
          </NavAnchor>
          <Candidate name="Rosa Astra" anchor="co-chair-rosa-astra">
            <CandidateHeader
              img="rosa.jpg"
              nominations={[
                'Angie L.',
                'June LS',
                'Antonio B.H.',
                'Karina S.',
                'Noah K.R.'
              ]}
            />
            <CandidateStatment>
              <P>
                DSA has become a huge part of my life over the last year! I
                overcame my social anxiety to knock doors and talk to people
                about universal healthcare. I served as one of your elected
                delegates to the National Convention. I helped organize the Bay
                Area Rally Against Hate and represented EBDSA on the planning
                committee. I worked on the Brake Lights program where we talked
                with hundreds of our neighbors about socialism and how the
                capitalist police state affects our lives.
              </P>
              <P>
                It's been inspiring and humbling to organize with you. We've all
                put so much into DSA, and we're off to a great start, even while
                we still have so far to go. Here's what I want to do over the
                next year:
              </P>
              <P>
                Democracy as a means and an end. We need monthly general
                meetings, a branch structure, and to reaffirm DSA as a
                multi-tendency organization with broad political discussion as
                part of our democratic process.
              </P>
              <P>
                Connect to working class struggle. Work in our communities to
                identify how the working class can exert our power to tip the
                balance of the class struggle. Reforms from the capitalist state
                must not be goals in themselves, but concessions we force in our
                struggle toward international socialism in our lifetimes.
              </P>
              <P>
                Establish a mass workers party. Our task demands that the
                working class have the ability to democratically decide our
                path, coordinate, and exert our power. We can only do this
                through a party rooted in and controlled by the working class.
              </P>
              <P>
                I joined DSA because it seemed like the best path toward making
                socialism a mass political demand in the US, and I'm more sure
                of that now than ever. My comrade Angie and I are running for
                co-chairs because we want to make this a reality with you.
              </P>
            </CandidateStatment>
          </Candidate>

          <Candidate name="Angie LaFlame" anchor="co-chair-angie-laflame">
            <CandidateHeader
              img="angie.jpg"
              nominations={[
                'Rosa A',
                'June LS',
                'Antonio B.H.',
                'Karina S.',
                'Noah K.R.'
              ]}
            />
            <CandidateStatment>
              <P>
                Comrades! I am running for co-chair because DSA needs to be an
                organization that my family can be part of. As the largest
                socialist group in the country, it is our responsibility to
                decide who socialism is for.
              </P>
              <P>
                I started working as a young child. On weekends, my mother would
                take us kids to houses that she was cleaning, where we would
                help vacuum and sweep. My parents are the hardest hustling
                people I know, and today they own nothing but debt. They
                introduced me to socialism; so it's my turn to make DSA an
                organization that they can be part of.
              </P>
              <P>
                Socialism needs to be for everyone who is working class-
                criminals, immigrants, homeless, unemployed. For someone like my
                father, the first democratic socialist I met, to be involved,
                three things need to happen:
              </P>
              <OL>
                <OLI>
                  DSA needs to be accessible for working people, with meaningful
                  roles that are decentralized, yet supported by leadership. The
                  work needs to come first, but it needs to have different
                  levels of engagement. This can only happen by fostering a
                  culture that resolves conflict through comradely deliberation,
                  not procedural means.
                </OLI>
                <OLI>
                  DSA needs to ground itself in street power. We need to be able
                  to confront the problems that normal people face day to day,
                  by organizing tenants, supporting rank and file union action,
                  and building left solidarity without the limitations of the
                  non-profits. Mass action wins respect from working people, and
                  builds political power that can translate into meaningful
                  electoral victories.
                </OLI>
                <OLI>
                  DSA needs to have your back. In the socialism I see, we will
                  not let any comrade be jailed without support. We will not
                  allow comrades to be illegally evicted. We will not let
                  comrades be fired for union organizing. We will not let
                  comrades be silenced because of gender, or ability. We WILL
                  make your DSA card mean something.
                </OLI>
              </OL>
              <P>
                I want DSA to be a fighting force for the working class, that
                can win victories in the streets and in government. To do both,
                we need to take a cue from striking teachers and build, block by
                block.
              </P>
              <P>Vote Rosa & Angie.</P>
            </CandidateStatment>
          </Candidate>

          <Candidate name="Frances Reade" anchor="co-chair-frances-reade">
            <CandidateHeader
              img="frances.jpg"
              nominations={[
                'Zach M.',
                'Daniel D',
                'Matt S.',
                'Hannah E.',
                'Sean M.'
              ]}
            />
            <CandidateStatment>
              <P>
                It's been an unbelievable honor to help build this chapter into
                a fighting force for working people over the past year,
                alongside hundreds of wonderful, committed, thoughtful, brave,
                humble, and intelligent comrades.
              </P>
              <P>
                I'm astounded at what we've all built this year, with no staff
                and few material resources and as Vice Chair I've worked on a
                huge range of our wildly ambitious projects. I've helped design,
                implement, organize, and support: our fantastically successful
                socialist school, our canvasses that bring hundreds of
                socialists into the streets, our increasingly sophisticated
                general meetings, our mobilizer program that welcomes ever more
                members into the work of the chapter, our M4A campaign that has
                become a national beacon, our work mentoring smaller chapters
                across the country, and our elegantly revised bylaws.
              </P>
              <P>
                We've come a long way from last summer's election, when some
                seats were unopposed. This time, I'm proud to be running for
                office as a part of the Bread & Roses slate, and I'm proud of
                the diversity of opinions represented across the entire field of
                candidates.
              </P>
              <P>
                I believe deeply in the B&R platform (breadandrosesdsa.org),
                which will grow our strength and diversity by supporting
                rank-and-file labor and taking on big fights that build
                solidarity and working-class power. As Jovanka Beckles says,
                people can't live full lives if they don't have stability: a
                home, an income, healthcare, childcare, education. Our society
                has the resources to provide these and more for everyone – these
                resources are just in the wrong hands. The fights we pick this
                year against landlords, bosses, and shitty insurance companies
                can bring us closer to a world where everyone's needs are met,
                where the things that matter are under democratic control, and
                where all people can live abundant, flourishing lives in a just
                society. I'm proud to fight for this world with you.
              </P>
            </CandidateStatment>
          </Candidate>

          <Candidate name="Zach McDonald" anchor="co-chair-zach-mcdonald">
            <CandidateHeader
              img="zach.jpg"
              nominations={[
                'Frances R.',
                'Daniel D.',
                'Matt S.',
                'Sean M.',
                'Hannah E.'
              ]}
            />
            <CandidateStatment>
              <P>
                I'm running for co-chair because I believe deeply in East Bay
                DSA's potential, and in the politics put forward in the Bread &
                Roses platform. By advancing universal demands to decommodify
                human needs and rooting our campaigns in the labor movement and
                our communities, we will build a powerful democratic socialist
                movement that is broadly representative of the working class.
              </P>
              <P>
                My involvement in EBDSA has opened my eyes to the potential for
                mass socialist organizing in our time. I came in knowing little
                about DSA and even less about organizing. By the end of my first
                meeting though, it was very clear to me that our organization is
                serious about building working class power and eager to support
                anyone who shares that goal in learning how to organize.
              </P>
              <P>
                I've since been canvassing more times than I can count, co-led
                the North Oakland neighborhood group, co-led the rap training
                program, became an appointed External Organizer and Steering
                Committee member, served as liaison to coalition partners,
                organized Big Canvasses, and helped launch our M4A strategy
                meetings. I currently serve as co-chair of our electoral
                subcommittee, coordinating our campaign work for Jovanka and
                Gayle.
              </P>
              <P>
                The guidance and support I've received in EBDSA has given my
                life meaning and purpose beyond what I thought possible.
                Supporting others in developing their own power through class
                struggle is, to me, the core of what it means to be a socialist
                organizer. As co-chair, I will dedicate myself to offering the
                transformative experience this organization has provided for me
                to everyone who walks through our doors.
              </P>
              <P>
                It has been the greatest honor of my life to participate with
                you all in helping to build the early foundations for this
                organization, and I look forward to giving everything I have to
                this fight until we've won.
              </P>
            </CandidateStatment>
          </Candidate>
        </Section>
      </div>
    );
  }
}

export default Cochair;
