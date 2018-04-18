import React, { PureComponent } from 'react';
import Container from '../Container';
import Section from '../Section';
import { H2, P, OL, OLI } from '../typography';
import Link from '../Link';
import NavAnchor from '../NavAnchor';
import { Candidate, CandidateHeader, CandidateStatment } from './Candidate';

class AtLarge extends PureComponent {
  render() {
    return (
      <div>
        <Section>
          <NavAnchor anchor={this.props.anchor}>
            <Container>
              <H2>At-Large Member</H2>
              <P>
                At-Large Local Council Members will participate in Local Council
                decision-making, and are responsible for attending all relevant
                meetings and reading all relevant documents. At-Large Local
                Council members are also tasked with representing the views of
                the membership that elected them as well as helping to advance
                the goals of the Local generally.
              </P>

              <H2>Candidates</H2>
              <Link href="#at-large-hasan-can-arat">Hasan-Can Arat</Link>
              <Link href="#at-large-emily-claffy">Emily Claffy</Link>
              <Link href="#at-large-dan-d">Dan D</Link>
              <Link href="#at-large-hannah-ehrlinspiel">
                Hannah Ehrlinspiel
              </Link>
              <Link href="#at-large-aaron-hall">Aaron Hall</Link>
              <Link href="#at-large-jeremy-gong">Jeremy Gong</Link>
              <Link href="#at-large-kate-mcdonnell">Kate McDonnell</Link>
              <Link href="#at-large-keith-brower-brown">
                Keith Brower Brown
              </Link>
              <Link href="#at-large-matt-stone">Matt Stone</Link>
              <Link href="#at-large-megan-svoboda">Megan Svoboda</Link>
              <Link href="#at-large-nestor-castillo">Nestor Castillo</Link>
              <Link href="#at-large-sandy-barnard">Sandy Barnard</Link>
              <Link href="#at-large-william-orr">William Orr</Link>
            </Container>
          </NavAnchor>
          <Candidate name="Hasan-Can Arat" anchor="at-large-hasan-can-arat">
            <CandidateHeader
              img="hasan.jpg"
              nominations={[
                'June LS',
                'Elizabeth Cho',
                'Kelsey James',
                'Justin Gilmore',
                'Sergio Guadarrama'
              ]}
            />
            <CandidateStatment>
              <P>
                "Radicals should say what only radicals could say: I’ve “spoken
                truth to power” and challenged conservative bullshit since
                childhood. As a far-left EastCoast f*gg*ty hot mess of Turkish
                descent, my politics are informed by politically charged trauma
                (police brutality, gaybashing, homelessness, patriarchal
                relationships, family oppression, workplace intimidation), and
                time-tested strategies for survival or defiance. My pronouns,
                ideology, and identity are fluid, but the structures that
                regulate them are not, which often confines me to liminal
                spaces, or positions of exile/unbelonging. My work is devoted to
                developing such spaces and their revolutionary potential, hence
                my unconventional methods. I enjoy learning from ultraleft
                communists, anticiv anarchists, nihilists, postmodern close
                reads, and random-ass shit in general.
              </P>
              <P>
                I work with Bay Area Mesopotamia Solidarity Committee, SEIU as a
                (very active) shop steward for my worksite, Communist Caucus,
                various local affinity groups like last year’s popular front
                against fascism, and the occasional...incident. Informally, I do
                translation, media projects, and feminist resistance
                work...with/against my gentleman suitors. Disability and
                struggle have hindered my “productivity” in the past, so I’m
                humble about what I’ve accomplished and appreciate struggling
                people’s resistance work without quantifying it.
              </P>
              <P>
                From 9-5 I do feminist-model clinical social work with San
                Francisco's most marginalized and brutalized people, with
                colleagues who are often a paycheck or prescription away from
                the other side. As a recent survivor of displacement and
                homelessness, I’m particularly sensitive to EBDSA's internal
                culture and how that affects EBDSA’s impact on the community
                (ie, colonization or counter-revolution. I joined DSA for the
                richness and strength of its radical and racidalizing milieu,
                and potential role in emerging multi-tendency revolutionary
                coalitions.
              </P>
              <P>
                In my spare time, I enjoy ""capitalist realism"" like vaporwave,
                “Belly” and “Sailor Moon”. I’ve practiced occult and esoteric
                arts for 20 years.
              </P>
              <P>Push back. Dont stop pushing."</P>
            </CandidateStatment>
          </Candidate>

          <Candidate name="Emily Claffy" anchor="at-large-emily-claffy">
            <CandidateHeader
              img="emily.jpg"
              nominations={[
                'Noah Kirshbaum-Ray',
                'Dominic Dagradi',
                'Rosa Astra',
                'Hasan-Can Arat',
                'Sergio Guadarrama'
              ]}
            />
            <CandidateStatment>
              <P>
                I arrived to Oakland from California’s Central Valley four years
                ago and have been organizing in the Bay ever since. I spend time
                in theory spaces with other anti-racist organizers, observe and
                document the police during protests, participate in local
                campaigns, am trained in nonviolent communication, and am
                integrated into communal groups which seek to change our social
                order through new forms of relationships and critical use of
                proxemics. For paid work, I am a project manager for a
                disability-communications focused nonprofit. I use American Sign
                Language and I believe creating accessible spaces is required
                for socialist organizing.
              </P>
              <P>
                Since joining DSA after the 2016 election, I have been actively
                involved in M4A canvassing work, have served on the steering
                committee of the Abolition of Police and Prisons Caucus, and
                have worked to foster democracy in our chapter by organizing
                members around implementing regular general meetings, reforming
                our bylaws, and contributing to the Working Class Unity and
                Power Priorities Resolution.
              </P>
              <P>
                I believe in self-organization, voluntary association, mutual
                aid, self-defense, and the refusal of state power.
              </P>
              <P>
                I seek to serve as an at-large member of the EBDSA steering
                committee to:
              </P>
              <OL>
                <OLI>
                  Integrate police, penal, and prison abolition work officially
                  into the chapter;
                </OLI>
                <OLI>
                  Support member-driven organizing efforts and capacity
                  building;
                </OLI>
                <OLI>
                  Cultivate a feminism that is inclusive of sex workers and
                  trans and non-binary folks; and
                </OLI>
                <OLI>
                  Challenge the centrist tendency which orients power solely
                  toward the state and therefore risks replicating the same
                  power dynamics we’re fighting now. Instead, I seek to build
                  power within the class itself by building its capacity to
                  fight capitalist order beyond electoral politics.
                </OLI>
              </OL>
              <P>
                If you’d like to discuss the specifics of my past, current, and
                forthcoming projects and organizing partners, drop me a line!
              </P>
            </CandidateStatment>
          </Candidate>

          <Candidate name="Dan D" anchor="at-large-dan-d">
            <CandidateHeader
              img="dan.jpg"
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
                Hello! My name is Dan and I'm running for an At-Large seat as
                part of the Bread and Roses slate. My main focus in East Bay DSA
                over the last year has been on political education. Currently,
                that means organizing the bi-weekly Night School that regularly
                has over 50 members in attendance. If elected to the Steering
                Committee, I aim to work collectively with comrades on a newly
                formed Political Education committee to enhance and expand the
                Night School, create more in-depth reading groups, while
                incorporating political education into all of the chapter’s
                external campaigns.
              </P>
              <P>
                Above all else, political education must be both practical and
                member-centered. As the great Rosa Luxemburg said, “As long as
                theoretical knowledge remains the privilege of a handful of
                academics in the Party, the latter will face the danger of going
                astray.” Thus far, member feedback regarding the school has been
                incredibly positive. Members often report that their experience
                in the school has directly influenced and enriched their
                organizing efforts. At the same time, the school organizers have
                elicited and responded to constructive member feedback in order
                to improve the overall school experience. For example, member
                feedback is the reason why we now spend most of the Night School
                in small breakout groups where the voice of each member can be
                heard. If elected, I will also dedicate myself to making sure
                that members from the various political tendencies within the
                chapter are given a voice, even if I disagree with them
                personally. One way to accomplish this goal would be to develop
                chapter-wide panel discussions where various political
                tendencies are represented. If what I’ve outlined above appeals
                to you, I humbly ask for your vote and support in realizing this
                vision.
              </P>
            </CandidateStatment>
          </Candidate>

          <Candidate
            name="Hannah Ehrlinspiel"
            anchor="at-large-hannah-ehrlinspiel">
            <CandidateHeader
              img="hannah.jpg"
              nominations={[
                'Graham Denevan',
                'Daniel D',
                'Matt Stone',
                'Frances Reade',
                'Miguel Duarte'
              ]}
            />
            <CandidateStatment>
              <P>
                "After a life-changing year working with EBDSA and the people in
                it, I know on a deeply personal level that we have the power not
                only to ameliorate people’s suffering under capitalism, but to
                transform our lives and our society. I believe the Bread & Roses
                platform offers the most effective, actionable, and joyful path
                to this transformation.
              </P>
              <P>
                If elected, I’d like to develop an EBDSA platform on education,
                drawing on my experience as a member of an educators' union.
                With public sector unions facing unprecedented attacks (and with
                inspiring teachers’ strikes happening all around the world!),
                the time to offer workers and families a socialist vision of
                education is now. Exploring how we can create a free, equitable,
                and just system of learning for all people will also enable us
                to strategize our role as socialists within the labor movement
                and our communities more broadly.
              </P>
              <P>
                In my time with EBDSA, I'm proud to have put hundreds of hours
                of work into our Medicare for All campaign: as a North Oakland
                district leader and appointed external organizer, I’ve hosted
                neighborhood canvasses, led trainings on how to talk to our
                neighbors about socialism, helped organize large canvasses, and
                helped lead and organize our M4A strategy meetings. I’ve also
                organized and led electoral canvasses, held regular meetings
                with new and developing members, and cooked what at this point
                feels like a metric tonnage of beans.
              </P>
              <P>
                I genuinely love meeting and talking to new people, and one of
                the reasons EBDSA is so wonderful is because it allows us to
                inflect socialist principles with the warmth of real working
                relationships. I can’t wait to see what EBDSA can do in the next
                year, and I’m honored to stand in this fight against the
                profiteers and for the people with each and every one of you."
              </P>
            </CandidateStatment>
          </Candidate>

          <Candidate name="Aaron Hall" anchor="at-large-aaron-hall">
            <CandidateHeader
              img="aaron.jpg"
              nominations={[
                'Claudette Begin',
                'Maia Averett',
                'Ahmed Kanna',
                'Dominic Dagradi',
                'John Pearson'
              ]}
            />
            <CandidateStatment>
              <P>I’m a rank-and-file union member, organizer, and stagehand.</P>
              <P>
                I joined DSA in August of 2017 at the tail end of a worker-led
                unionization drive at my workplace that I helped to lead. Much
                of my experience there over the preceding two years led to my
                decision to become politically active again after a decade of
                apathy. DSA has allowed me to continue my growth as an
                individual and in my capacities as an organizer, involving me
                more deeply in politics.
              </P>
              <P>
                In my time in our chapter, I’ve helped organize the North
                Oakland single-payer canvass and served as canvass captain in a
                Big Canvass. This work allowed me to understand both the
                incredible benefits and limitations that canvassing offers. I
                was part of the rank-and-file push for regular general meetings
                that has led me to now organizing logistics, volunteer
                recruitment, and general implementation of our current
                bi-monthly regular meetings. I also helped to organize a travel
                scholarship fundraiser that raised over $6000 to send labor
                activists in our chapter and in the Bay to the Labor Notes
                Conference, which promotes rank-and-file union democracy and
                education.
              </P>
              <P>
                As a member of the Open EBDSA micro-slate with Dominic Dagradi,
                I believe that, though we may have our own opinions and ideas,
                the path to socialism can only be found organically by
                principled experimentation, diversity of views, and the broad
                experiences of our base.
              </P>
              <P>
                If elected, I will continue to build our ties with and
                activities in labor, extend our leadership development into new
                groupings of members, create and expand our channels of
                communication, fight for political experimentation while
                maintaining organizational unity and purpose, broaden our base
                in a diverse working class, and develop the institutional
                knowledge and experience necessary for the formation of an
                independent mass working class political party.
              </P>
            </CandidateStatment>
          </Candidate>

          <Candidate name="Jeremy Gong" anchor="at-large-jeremy-gong">
            <CandidateHeader
              img="jeremy.jpg"
              nominations={[
                'Daniel D',
                'Matt Stone',
                'Hannah Ehrlinspiel',
                'Coleman Lukas',
                'Sean Murphy'
              ]}
            />
            <CandidateStatment>
              <P>
                I am running again to be on the leadership of East Bay DSA along
                with twelve other Bread & Roses candidates because I believe our
                commitment and our political program will help lead our
                organization to new heights over the next year. DSA can begin to
                beat back the power of bosses, landlords, insurance companies,
                and the Chamber of Commerce by carrying out rank-and-file labor
                organizing and engaging with mass movements for rent control,
                Medicare for All, and quality public education. To succeed, DSA
                must oppose sectarianism and build a socialist movement that
                brings millions of ordinary people into class-conscious conflict
                with capitalists.
              </P>
              <P>
                Before the Bernie Sanders campaign and joining DSA, I was a
                lonely, unorganized socialist. I never imagined that I could be
                part of a group of hundreds of people locally and thousands
                nationally who are willing to fight alongside me to change the
                world. Over the last year and a half organizing with DSA, I have
                only become more optimistic.
              </P>
              <P>
                As the co-chair of the chapter from January to June 2017, I
                helped organize important projects, like the launch of our
                single payer campaign and the Socialist Summer School. Since the
                summer of 2017, I have served on the Steering Committee of DSA's
                National Political Committee (NPC) and as an at-large member of
                East Bay DSA's Local Council. I have helped with the latest
                bylaws revision, the Socialist Night School, the Medicare for
                All Strategy Meetings, and the development of a new housing
                justice campaign. I am the chair of national DSA's Medicare for
                All Campaign Committee, which coordinates national health
                justice organizing across scores of DSA chapters across the
                country.
              </P>
              <P>
                It has been and continues to be an honor to play a small role in
                rebuilding the American socialist movement.
              </P>
            </CandidateStatment>
          </Candidate>

          <Candidate name="Kate McDonnell" anchor="at-large-kate-mcdonnell">
            <CandidateHeader
              img="kate.jpg"
              nominations={[
                'Antonio Birbeck-Herrera',
                'Noah Kirshbaum-Ray',
                'Rosa Astra',
                'Hasan-Can Arat',
                'Sergio Guadarrama'
              ]}
            />
            <CandidateStatment>
              <P>
                I became interested in anti-capitalist politics during Occupy
                Oakland. Living in the UK for two years showed me that
                capitalism still oppresses workers in European-style social
                democracies, and socialists must demand more. I joined the
                Democratic Socialists of America in November 2016, and I still
                find my politics evolving as I learn from comrades. I am very
                excited to represent other members as an At-Large member!
              </P>
              <P>
                I was one of the founding members of the East Bay Feminist
                Socialist Caucus, and active in planning the 2017 & 2018 Women’s
                Marches and the 2017 Women’s Strike. I have been involved in the
                Bay Brake Lights Project and member-led initiatives for bylaws
                amendments.
              </P>
              <P>
                I have worked at a social justice non-profit and seen the
                limitations of their tactics to create meaningful change. I am
                neuroatypical and have worked as a care attendant for people
                with disabilities for five years. Through that time I’ve seen
                how privatization hurts everyone - disabled people and workers.
              </P>
              <P>
                I am honored to run for At-Large on the Working-Class Unity and
                Power Coalition. While our Chapter boasts spectacular membership
                statistics, this is not reflected in the number of active
                members. We need multiple points of entry and engagement, and
                places for open communication between members. As an At-Large
                member of the Steering Committee, I will work for:
              </P>
              <OL>
                <OLI>
                  Decentralization of power in EBDSA by empowering committees
                  and caucuses to create campaigns.
                </OLI>
                <OLI>
                  Decentralization of communication with a medium for members to
                  discuss issues and strategy.
                </OLI>
                <OLI>
                  Passing branch structure bylaws so that EBDSA members can be
                  directly involved with the issues happening in their own
                  neighborhoods and communities.
                </OLI>
                <OLI>
                  Adoption of bylaws diversifying the leadership. The East Bay
                  is a home to radical diversity, and leadership should reflect
                  back the people it represents.
                </OLI>
              </OL>
              <P>I look forward to representing you!</P>
            </CandidateStatment>
          </Candidate>
          <Candidate
            name="Keith Brower Brown"
            anchor="at-large-keith-brower-brown">
            <CandidateHeader
              img="keith.jpg"
              nominations={[
                'Hannah Ehrlinspiel',
                'Daniel D',
                'Coleman Lukas',
                'Sean Murphy',
                'Frances Reade'
              ]}
            />
            <CandidateStatment>
              <P>
                You might recognize me as an outspoken leader in our housing
                campaign to win universal rent control and beautiful social
                housing for all. I am dedicated to organizing a housing campaign
                that can bring in and build up new organizers from across the
                East Bay's working class.
              </P>
              <P>
                I organize for socialism for very personal reasons. My dad and
                his family came to the Bay as German-Jewish refugees. My
                longtime Oakland home is deeply insecure, rent-decontrolled by
                Costa-Hawkins, all so my landlord in Paris can get rich. I won't
                stop fighting until we have broken the power of capitalists to
                get rich by pitting working people against each other and
                forcing us from our homes.
              </P>
              <P>
                Before joining DSA at the end of 2016, I was involved for a
                decade in local organizing, including stretches volunteering
                with the Ella Baker Center, the anti-austerity Berkeley student
                movement, and the Oakland Justice Coalition campaigns for tenant
                protection and police accountability measures in 2016. For work,
                I am a social science educator-in-training, an education union
                activist and department steward with UAW-2865, and have written
                for Jacobin. In our chapter, in addition to my housing
                organizing, I led our fabulous first propaganda committee for
                six months, and currently lead our 160-member Mobilizer program
                in neighborhoods from Albany to San Leandro.
              </P>
              <P>
                Leaders in our organization need to listen carefully and lead
                boldly. If you've organized with me, I hope you've felt my deep
                dedication to the care work needed in supporting developing
                organizers and opening inclusive, democratic spaces—that work
                must be constant. I also believe leaders must put forward a
                clear political strategy for the chapter to debate. I stand
                proudly for the Bread & Roses platform and priorities as the
                best strategy yet to develop our chapter into the visionary,
                inclusive center of a powerful working class mass movement.
              </P>
            </CandidateStatment>
          </Candidate>

          <Candidate name="Matt Stone" anchor="at-large-matt-stone">
            <CandidateHeader
              img="matt.jpg"
              nominations={[
                'Daniel D',
                'Hannah Ehrlinspiel',
                'Coleman Lukas',
                'Sean Murphy',
                'Frances Reade'
              ]}
            />
            <CandidateStatment>
              <P>
                I am thrilled to be running for an at-large position on the
                Steering Committee as part of the Bread & Roses slate. Since
                joining East Bay DSA eight months ago, I’ve helped build our
                Medicare for All campaign by leading rap trainings, launching
                the North Berkeley neighborhood group, organizing Big Canvasses,
                and planning M4A Strategy Meetings. Currently, I serve as
                co-chair of our M4A Subcommittee, liaise with the Healthy
                California coalition, and work on the National M4A Campaign as a
                Regional Organizer, supporting M4A work in DSA chapters across
                the West Coast.
              </P>
              <P>
                I fight tooth and nail for single-payer healthcare because I’ve
                seen loved ones’ lives devastated by our broken insurance
                system. These experiences inform my conviction that market-based
                healthcare is affront to our humanity, and that organizing
                around healthcare is essential to our larger project of building
                socialism. Millions of working people are recognizing the need
                to decommodify healthcare—and a mass socialist M4A campaign is
                the best way to organize them and establish democratic socialism
                as a real left political pole today.
              </P>
              <P>
                This coming year, I want to continue building such a campaign by
                expanding our tactical diversity with an eye toward mass tactics
                that will accelerate our organization’s growth. I want to
                capitalize on the 2018 electoral cycle to center single-payer in
                public discourse and deepen the political fault lines around it.
                And I want to build coalitions among DSA chapters in California
                and beyond through the National M4A Campaign.
              </P>
              <P>
                I firmly believe that private health insurance will be the first
                pillar of capital to fall in our lives, and that we can
                galvanize a mass socialist movement in the process. This
                struggle has become a defining purpose in my life, and I would
                be honored to carry it out as a member of our Steering
                Committee.
              </P>
            </CandidateStatment>
          </Candidate>

          <Candidate name="Megan Svoboda" anchor="at-large-megan-svoboda">
            <CandidateHeader
              img="megan.jpg"
              nominations={[
                'Daniel D',
                'Matt Stone',
                'Hannah Ehrlinspiel',
                'Sean Murphy',
                'Michael Kaufman'
              ]}
            />
            <CandidateStatment>
              <P>
                I’m excited to be running for an At-Large position on the Bread
                and Roses platform. I joined DSA in January 2017, looking for a
                way to get involved in a political movement that would fight to
                improve the lives of working people.
              </P>
              <P>
                As a member of East Bay DSA I’ve set up chairs before meetings,
                lead rap trainings, facilitated breakout groups at night school,
                and started two neighborhood canvassing groups in South Berkeley
                and West Oakland. I’ve been a founding member of the Social
                Housing Caucus, helped to rewrite our bylaws, and given speeches
                about why Single Payer is a strategic socialist campaign. I am a
                Steering Committee member on the National DSA Medicare for All
                campaign and a member of the Organizing Subcommittee where I
                help run our Regional Organizing Program, which supports more
                than 80 chapters from across the country signed up for the
                campaign.
              </P>
              <P>
                I grew up in Akron, Ohio – a rust belt city, abandoned by
                capital. The first person I knew to volunteer for the Bernie
                campaign was a friend from high school who saw a video of Bernie
                talking about all the ways the system was set up against
                everyday people. I didn’t understand it then but I’ve learned
                that what attracted my friend was the centrality of universal
                programs. Programs that would improve his life, my life, and the
                lives of everyone we know. This is why millions of people
                rallied behind Bernie when he ran for President in 2016. We must
                continue lifting these up as socialist demands and providing a
                place for people to fight for them. I believe that this is how
                we continue to grow DSA as a movement for millions of people and
                I’m honored to be this work with all of you. Love and solidarity
                forever!
              </P>
            </CandidateStatment>
          </Candidate>

          <Candidate name="Nestor Castillo" anchor="at-large-nestor-castillo">
            <CandidateHeader
              img="nestor.jpg"
              nominations={[
                'Ahmed Kanna',
                'Celina Chan',
                'Noah Kirshbaum-Ray',
                'Karina Stenquist',
                'Sergio Guadarrama'
              ]}
            />
            <CandidateStatment>
              <P>
                Before becoming a member of DSA, I was looking to join a
                socialist organization that not only reflected my values, but
                that was actually doing something. I was tired of my socialist
                practice being defined by sitting in reading circles and
                debating socialism. Although that is a very important aspect of
                being a socialist, I wanted to engage in the practice of
                socialism and since joining East Bay DSA that is what I’ve done.
              </P>
              <P>
                I’ve participated in a number of canvasses for Medicare-for-all,
                served as an alternate delegate to the DSA national convention
                in Chicago, participated in the mobilizer pilot program.
                Additionally, I’ve been informally organizing the Socialists of
                Color Socials, as well as the San Leandro-Hayward Socials, with
                the goal of expanding our work beyond the hubs of North Oakland
                and Berkeley.
              </P>
              <P>
                One of the areas that I am dedicated to improving is the
                critical need for more people of color in our membership. Our
                organization is at a turning point and our membership recognizes
                that we need to do better. The question that needs to be asked
                is does our leadership recognize this? We need diversity not for
                the sake of diversity, but because our struggle for socialism
                and democracy will not bring the change we want unless it is one
                that is inclusive of all. Our organization needs to reflect the
                interests of the poor working class if we are going to be taken
                seriously and if we want to win.
              </P>
              <P>
                We can achieve this through genuine collaboration, strong
                coalition, and broad based building. It will take all of us to
                step up as leaders in our organization and put solidarity into
                practice. Vote for me and we can begin to make East Bay DSA
                reflect the world we are looking to build.
              </P>
            </CandidateStatment>
          </Candidate>

          <Candidate name="Sandy Barnard" anchor="at-large-sandy-barnard">
            <CandidateHeader
              img="sandy.jpg"
              nominations={[
                'Matt Stone',
                'Hannah Ehrlinspiel',
                'Sean Murphy',
                'Frances Reade',
                'Graham Denevan'
              ]}
            />
            <CandidateStatment>
              <P>
                I have been organizing for three years, on issues ranging from
                mental health services to increasing the minimum wage. I have
                worked on electoral campaigns ranging from student body
                president to Bernie’s campaign for president of the United
                States. I built an organization from scratch, that began with 5
                people in a room talking about fossil fuel divestment, and grew
                into a statewide organization fighting for free higher education
                in Iowa. I am always working to expand the range of the
                possible, while remaining realistic about the power we have, and
                the power we need to win. I intend to use my at-large position
                to expand our leadership development program to ensure that
                everyone working on our campaigns has the tools they need to
                flourish. I want to organize our organizers.
              </P>
              <P>
                I need Medicare for All. I am a member of an expensive high-risk
                pool, and given my family history, I feel confident that I will
                have an expensive cancer one day. I am fighting for my own
                future. The successes in my organizing life, including Bernie’s
                blowout win in my county and my college’s commitment to fossil
                fuel divestment, came from specific, disciplined demands,
                strategies and tactics. My wins came from the unglamorous work
                of meetings, data management, canvasses, and talking with people
                individually. Our task is to turn the politically impossible
                into the politically inevitable, and I intend to work until we
                win.
              </P>
            </CandidateStatment>
          </Candidate>

          <Candidate name="William Orr" anchor="at-large-william-orr">
            <CandidateHeader
              img="william.jpg"
              nominations={[
                'Karina Stenquist',
                'Antonio Birbeck-Herrera',
                'Noah Kirshbaum-Ray',
                'Hasan-Can Arat',
                'Sergio Guadarrama'
              ]}
            />
            <CandidateStatment>
              <P>
                I’m Will. I’m a construction worker and political organizer
                running for an At-Large position. I am a carpenter in the
                Arizmendi construction workers’ cooperative, where I serve on
                their policy council. This last year, as a member of the DSA, I
                have been organizing tenants with the Communist Caucus. I have
                been organizing in Oakland for the past nine years.
              </P>
              <P>
                I was part of the Oscar Grant movement. As a community college
                student I organized childcare workers and custodians. I also
                organized a struggle for gender-neutral bathrooms on campus. I
                helped found the East Bay Solidarity network, which fought to
                win the demands of workers and tenants. I was also part of
                Occupy Oakland, the most radical occupation site in the United
                States.
              </P>
              <P>
                As an At-large member of the Steering Committee, I intend to
                increase member control within the organization. I hope to
                develop projects like tenant councils, which offer East Bay DSA
                members additional opportunity to become involved, and which are
                focused on organized class power, beyond electoralism. I would
                like to help develop a more robust education program that
                focuses on anti-imperialism, Oakland’s radical black & brown
                history, and have this knowledge inform East Bay DSA’s culture
                and activity. I wish to provide and improve avenues for open
                debate and organic conversation between members to help resolve
                current chapter tensions.
              </P>
              <P>
                I’m incredibly excited to transform East Bay DSA into a
                successful organization that has meaningful roots in our
                communities, workplaces, and schools.
              </P>
            </CandidateStatment>
          </Candidate>
        </Section>
      </div>
    );
  }
}

export default AtLarge;
