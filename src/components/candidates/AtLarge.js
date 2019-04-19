import React, { PureComponent } from 'react';
import Container from '../Container';
import Section from '../Section';
import Link from '../Link';
import { H2, H3, P, UL, ULI, OL, OLI, Underline } from '../typography';
import NavAnchor from '../NavAnchor';
import {
  Candidate,
  CandidateHeader,
  CandidateStatment,
  CandidateLink
} from './Candidate';

class AtLarge extends PureComponent {
  render() {
    return (
      <div>
        <Section>
          <NavAnchor anchor={this.props.anchor}>
            <Container>
              <H2>At-Large Members</H2>
              <P>At-large Steering Committee members will participate in Steering Committee decision-making and are responsible for attending all relevant meetings and reading all relevant documents. At-large Steering Committee members are also tasked with representing the views of the membership that elected them as well as helping to advance the goals of the chapter generally.</P>

              <P>There are seven at-large members to be elected.</P>

            <H3>Candidates</H3>

              <CandidateLink href="#at-large-allie-lahey">
                Allie Lahey
              </CandidateLink>
              <CandidateLink href="#at-large-andres-chirino">
                Andres Chirino
              </CandidateLink>
              <CandidateLink href="#at-large-annika-bastacky">
                Annika Bastacky
              </CandidateLink>
              <CandidateLink href="#at-large-colin-p-b-murphy">
                Colin P.B. Murphy
              </CandidateLink>
              <CandidateLink href="#at-large-jack-mcshane">
                Jack McShane
              </CandidateLink>
              <CandidateLink href="#at-large-marissa-seko">
                Marissa Seko
              </CandidateLink>
              <CandidateLink href="#at-large-matt-stone">
                Matt Stone
              </CandidateLink>
              <CandidateLink href="#at-large-maura-mcmichael">
                Maura McMichael
              </CandidateLink>
              <CandidateLink href="#at-large-miguel-duarte">
                Miguel Duarte
              </CandidateLink>
              <CandidateLink href="#at-large-sandy-barnard">
                Sandy Barnard
              </CandidateLink>
              <CandidateLink href="#at-large-sergio-guadarrama">
                Sergio Guadarrama
              </CandidateLink>
              <CandidateLink href="#at-large-shane-ruiz">
                Shane Ruiz
              </CandidateLink>
              <CandidateLink href="#at-large-will-shattuc">
                Will Shattuc
              </CandidateLink>
        
            </Container>
          </NavAnchor>

          <Candidate name="Allie Lahey" anchor="at-large-allie-lahey">
            <CandidateHeader
              img="allie-lahey.jpg"
              nominations={[
                'Andres C.',
                'Daniel E.',
                'Dominic D.',
                'Lawrence L.',
                'Sergio G.',
                'Joseph K.',
                'Eric R.',
                'Marissa S.',
                'Maura M.',
                'Eric V.'
              ]}
            />
            <CandidateStatment>
              <P>I'm a reproductive rights organizer, union member, and socialist feminist. In EBDSA, I'm co-chair of the Social Housing Committee and co-managed the Prop 10 and Hayward Rent Control campaigns, a leader for communications and SocFem Caucus, and co-wrote the priorities resolution.</P>

              <P>I want to build a movement that's powerful, safe, accessible and united. As an at-large member with the Bloom slate, I will</P>

              <P><Underline>Bridge the gap between the gender equity and reproductive justice movements and socialism:</Underline> Socialists are always on the frontlines with demands to materially improve women's lives. I organized the socialist contingent of the Cancel Kavanaugh march and our Abortion Bowlathon team to raise over $3,000 and hope to bring my years of experience, connections, analysis, and knowledge to the table.</P>

              <P><Underline>Build organizational support for comrades outside of Oakland and Berkeley:</Underline> To win our demands, we need to rapidly expand in numbers and geography. With working-class people being displaced farther out, it's critical to provide meaningful opportunities for members to plug in and strengthen leadership all over East Bay.</P>

              <P><Underline>Create winning social media strategies; evaluate and boost participation in online spaces for meaningful engagement:</Underline> Social media is a crucial way to reach massive audiences about our vision. I've ran our platforms and developed leadership, including growing our platforms exponentially through the midterms and OEA strike. Our social media strategy needs to be nurtured to reach its full capacity. As a moderator of our forum, I plan to evaluate its usage, explore other chapters' practices, and implement changes to build community.</P>

              <P><Underline>Advocate for transparency within our structures:</Underline> In a healthy democracy, processes should be clear to all participating. I want to ensure our members feel their voices are heard and our rules and operations for organizing, decision-making, and forming committees are easy to understand.</P>
            </CandidateStatment>
          </Candidate>

          <Candidate name="Andres Chirino" anchor="at-large-andres-chirino">
            <CandidateHeader
              img="andres-chirino.jpg"
              nominations={[
                'Joey K.',
                'Marissa S.',
                'Rachel R.',
                'Isaac H.',
                'Charles B.',
                'Allie L.',
                'Karina S.',
                'Nestor C.',
                'Emily A.',
                'Maura M.'
              ]}
            />
            <CandidateStatment>
              <P>My dream is to build a mass socialist movement on a foundation of radical praxis and distributed power. Since joining DSA in 2016, I've organized regular new member meetings and served as appointed internal organizer and neighborhood lead, running monthly canvasses and socials in Berkeley. I currently serve as Meetings Committee co-chair, working to engage a higher percentage of the membership in our democracy. I also co-chair the Bay Area chapter of Game Workers Unite (GWU), a union-advocacy organization for game developers worldwide.</P>

              <P>My experience running meetings and canvasses gave me the tools I needed to launch the Bay Area chapter of Game Workers Unite in April 2018. Since then, I've trained dozens of game workers into effective organizers. GWU demonstrates that democratic, bottom-up organizing and an open dialogue about tactics and strategy can grow a militant labor force that is unafraid to make radical demands of bosses. I believe that our DSA chapter should prioritize mentorship and skills training so that our rank-and-file can lead in their workplaces and communities, and connect their local struggles with mass socialist campaigns.</P>

              <P>As a member at-large with the Bloom slate, I hope to use my experience in East Bay DSA and Game Workers Unite to</P>

              <P><Underline>Develop leaders in EBDSA and beyond:</Underline> Leader-facilitator development for the rank-and-file must be central to all chapter work and campaigns. Beyond skills training, we must also strive to distribute power so that our members and leaders can avoid organizing pitfalls like burnout and learned helplessness.</P>

              <P><Underline>Build organizational capacity:</Underline> Prioritize the development of branches in anticipation of the growth of our membership in the run-up to the 2020 election.</P>

              <P><Underline>Create a safe and liberating culture:</Underline> Provide and promote facilitation, anti-oppression, and de-escalation trainings that reconnect our work to our comrades and avoid sectarian point-scoring.</P>

              <P>Let's help each other bloom!</P>
            </CandidateStatment>
          </Candidate>

          <Candidate
            name="Annika Bastacky"
            anchor="at-large-annika-bastacky">
            <CandidateHeader
              img="annika-bastacky.jpg"
              nominations={[
                'Jovanka B.',
                'Abigail G.-G.',
                'Zach M.',
                'Richard M.',
                'Shane R.',
                'Wes H.',
                'Sean M.',
                'Sandy B.',
                'Miguel D.',
                'Will S.'
              ]}
            />
            <CandidateStatment>
              <P>I'm running for an at-large position on the Steering Committee (SC) with the Bread &amp; Roses slate to carry out our vision for political and leadership development within East Bay DSA, with the goal of massifying our movement and galvanizing ever larger swaths of the working class to win a better world for all working people. As an at-large member of the SC, I see my task as orienting our chapter's internal committee work towards our outward-facing organizing for mass socialist demands.</P>

              <P>I'll help create and clarify organizational structures to support the development of new leaders who can articulate class conflict in and through design and communications work&mdash;among other integral committee functions across campaigns&mdash;with the external focus of engaging the working class in shared struggle. I will see to it that every committee has access to and a say in the beautiful, powerful propaganda machine we've built over the course of the Jovanka, Prop 10, and OEA campaigns. I led the design working group during these incredible campaigns and designed many of the graphic materials our chapter relied on for field operations. I want to build the power of our chapter's amazing propaganda apparatus through the upcoming Bernie 2020 campaign, as well as in the struggles for Medicare for All and the Green New Deal.</P>

              <P>The way we'll build the capacity of EBDSA, and the power of the working class more broadly, is through mass campaigns that cohere the largest amount of people to socialist politics. With this in mind, I hope to continue building momentum and sharpening the politics of our organizing. We have a world to win, and I look forward to what we'll build together in the upcoming year!</P>
            </CandidateStatment>
          </Candidate>

          <Candidate name="Colin P.B. Murphy" anchor="at-large-colin-p-b-murphy">
            <CandidateHeader
              img="colin-p-b-murphy.jpg"
              nominations={[
                'Susan S.',
                'Andres C.',
                'Emily A.',
                'Rachel R.',
                'Dominic D.',
                'Ted F.',
                'Brian S.',
                'Margaret R.',
                'Michael K.',
                'Barbara S.'
              ]}
            />
            <CandidateStatment>
              <P>I'm a big picture, hard-working thinker committed to the original meaning of climate justice. Active in the Climate &amp; Environmental Justice Caucus, I also work with the National DSA Ecosocialist Working Group, whose Principles for a Green New Deal the NPC has unanimously endorsed. I successfully passed an amendment to those principles that better accounts for justice for the Global South.</P>

              <P>I believe achieving socialism means two things: centering ecology, because ultimately all human sustenance (whether capitalist or socialist)&mdash;including wealth&mdash;flows materially and energetically from the earth and sun. A socialist economic logic must therefore comply with the laws of physics and the logic of life on Earth. Secondly, a viable socialism means thinking critically about what society after the Great Transition will actually look like and why, as well as what a post-fossil fuels world will mean for organized human life. I know that looming ecological collapse goes way beyond just the climate crisis, and I contend that the solution to most socio-ecological problems lies in creating regenerative economies, cultures, and democratic institutions.</P>

              <P>As your at-large Steering Committee member deeply committed to an intersectional, anti-racist climate and environmental justice I will</P>

              <P>Bring a radical Green New Deal to the forefront of our chapter, rooted in racial and economic justice for our East Bay, our country, and our world, making ecosocialist thinking more central to DSA's approach.</P>

              <P>Manifest an anti-racist, anti-oppression, transparent, and criticism-welcoming presence in your Steering Committee, based in my training in environmental and LGBTQ communities as a diplomatic leader-facilitator and coalition organizer.</P>

              <P>Support our campaign for Bernie Sanders as key to the success of the GND. Work to foster a more healthful culture within EBDSA.</P>

              <P>Generate action-oriented conversations about what the dynamics between the socialist world we want, the biosphere, and the economy.</P>
      
            </CandidateStatment>
          </Candidate>

          <Candidate name="Jack McShane" anchor="at-large-jack-mcshane">
            <CandidateHeader
              img="jack-mcshane.jpg"
              nominations={[
                'Jovanka B.',
                'Richard M.',
                'Wes H.',
                'Sean M.',
                'Luke T.',
                'Sandy B.',
                'Jeremy G.',
                'Richard M.',
                'Robbie N.',
                'Will S.'
              ]}
            />
            <CandidateStatment>
              <P>I'm running for Steering Committee with Bread &amp; Roses to continue making EBDSA into a class-struggle powerhouse. This past year has seen incredible growth, both for our chapter and for the socialist movement! I'm proud EBDSA has been at the forefront of connecting to working-class movements&mdash;like the massive teachers' strike wave sweeping the country and groundbreaking electoral campaigns for Jovanka Beckles, Gayle McLaughlin, Prop 10, and more.</P>

              <P>In 2018, I co-chaired our Electoral Committee and led efforts to elect Jovanka to the California State Assembly. Although we didn't win the election, we reached tens of thousands of people in the East Bay and beyond with a democratic socialist message about putting people over profit. Through that campaign, we built infrastructure that was critical to the success in our campaign to support the Oakland teachers during their strike for a fair contract several months later. The way in which our chapter built a labor solidarity campaign from our electoral infrastructure should be used as a model for building the power of the working class.</P>

              <P>Heading into 2020, we have an incredible opportunity to build on our momentum. For the first time in US history, a democratic socialist is the frontrunner in the Democratic Party primary. Through our campaign for Bernie, we can make our chapter a political home for thousands of people around the East Bay who will need to continue to push for the ambitious reforms Bernie is campaigning on&mdash;like Medicare for All and a Green New Deal&mdash;that will begin to truly empower the working class and transform our society.</P>

              <P>Together, with the rest of the Bread &amp; Roses slate, I'm committed to continue to build a healthy, democratic chapter that will seek to win groundbreaking mass class-struggle campaigns to build a world for the many, not the few. Solidarity!</P>
            </CandidateStatment>
          </Candidate>

          <Candidate name="Marissa Seko" anchor="at-large-marissa-seko">
            <CandidateHeader
              img="marissa-seko.jpg"
              nominations={[
                'Eric G.',
                'Sergio G.',
                'Dominic D.',
                'Lawrence L.',
                'Maura M.',
                'Jackie A.',
                'Emily A.',
                'Rachel R.',
                'Karina S.',
                'Andrew S.'
              ]}
            />
            <CandidateStatment>
              <P>I became an activist early as a biracial, bisexual, feminist ball of fire growing up in a conversative Mormon community. For the last seven years, I've advocated for survivors of domestic violence and sexual assault. I currently serve as vice chair of Socialist Feminist Caucus, co-leader of the Houseless Solidarity Working Group, and as co-leader of the Racial Solidarity Committee's Internal Working Group.</P>

              <P>I'm running on the Bloom slate because I see a brilliant future for our chapter where we center intersectionality in our organizing approach and camaraderie thrives. I will</P>

              <OL>
                  <OLI><Underline>Strengthen Our Fight Against Racism:</Underline> Building power with other socialists of color through Racial Solidarity is truly a transformative experience. I'm excited to continue growing our committee's work, and I will bring an anti-racist lens into every aspect of our organizing, from Member Engagement through Medicare for All.</OLI>

                  <OLI><Underline>Nurture a Healthy Chapter Culture:</Underline> In order to retain diverse membership within our chapter, everyone must feel welcomed, and we must foster a friendly, inclusive culture. I will organize a trauma-informed, anti-oppression training program for members, in close collaboration with Racial Solidarity and Socialist Feminist Caucus.</OLI>

                  <OLI><Underline>Improve our Code of Conduct Process:</Underline> Our chapter must proactively prevent and respond to all forms of harassment and abuse or we risk reproducing the oppressive dynamics we're fighting. I will lead efforts to better educate new and existing members about our code of conduct and make that process more transparent and trauma-informed.</OLI>

                  <OLI><Underline>Develop a New Conflict Resolution Process:</Underline> DSA SF has a Conflict Resolution Committee that gives members a way to improve communication, set healthy boundaries, heal from challenging situations, and most importantly, keep doing rad work together! I believe this approach would work well for our chapter, and I plan to organize a new working group to develop a pilot program here.</OLI>
              </OL>
      
            </CandidateStatment>
          </Candidate>

          <Candidate
            name="Matt Stone"
            anchor="at-large-matt-stone">
            <CandidateHeader
              img="matt-stone.jpg"
              nominations={[
                'Jovanka B.',
                'Abigail G.-G.',
                'Frances R.',
                'Keith B. B.',
                'James N.',
                'Jeremy G.',
                'Ari M.',
                'Andrew R.',
                'John P.',
                'Annika B.'
              ]}
            />
            <CandidateStatment>
              <P>I’m honored to run for an at-large seat on the Steering Committee on the Bread &amp; Roses slate. I am committed to class-struggle politics and a socialist strategy grounded in the mass action of the working class. And I have seen firsthand how we can come together in East Bay DSA around campaigns that realize this vision&mdash;through co-chairing the Medicare for All (M4A) and 2020 Committees, forging cross-chapter connections as an M4A Regional Organizer, leading the Jovanka Beckles/Proposition 10 field operations, and helping coordinate #BreadForEd during the Oakland teachers strike.</P>

              <P>In the coming year, I am committed to building a 2020 campaign that both strengthens our organization in the short term and primes us to engage strategically in the political field beyond 2020. In the next year, we should aim to grow and diversify our organization, develop dozens of new leaders and socialist organizers, build a mass campaign that reaches hundreds of thousands, strengthen our ties with labor and the diverse working class of the East Bay, and put democratic socialists in office. But we also need to begin imagining what class struggle under a Sanders presidency could look like&mdash;and readying our movement to rise to such an occasion and deliver Medicare for All, a Green New Deal, and the lasting change we need.</P>
      
            </CandidateStatment>
          </Candidate>

          <Candidate name="Maura McMichael" anchor="at-large-maura-mcmichael">
            <CandidateHeader
              img="maura-mcmichael.jpg"
              nominations={[
                'Owen W.-P.',
                'Sergio G.',
                'Dominic D.',
                'Lawrence L.',
                'Joseph K.',
                'Marissa S.',
                'Camila P.',
                'David G.',
                'Jackie A.',
                'Emily A.'
              ]}
            />
            <CandidateStatment>
              <P>I am an artist who grounds herself as a teacher and an organizer. I believe it is necessary to build an accessible, age-inclusive, multiracial, LGBTQIA, socialist movement that connects social reproduction to anti-capitalist struggle.</P>

              <P>I started in EBDSA by organizing New Member Meetings and hosting socials in East Oakland. I have knocked on countless doors, canvassed in multiple languages, participated in community coalitions, and organized many a direct action.  Currently I am co-leader of the Child Care for the Meetings Committee, co-leader of the Houseless Solidarity Working Group, and co-chair of the SocFem Caucus.</P>

              <P>As part of the Bloom slate and as an at-large member, I will</P>

              <UL>
                <ULI>Continue building our <Underline>Smallidarity Childcare Program</Underline>. I learned during the teachers' strike, that childcare is strategic. When members trust us with their children, it is a testament to the level of our solidarity.</ULI>

                <ULI><Underline>Support YDSA leaders</Underline> and members by establishing a support structure for these emerging chapters. The future of socialism lies in the hands of the youth.</ULI>

                <ULI>Continue <Underline>building coalitions within our community</Underline> and building trustful relationships. A mass movement cannot occur without full involvement of all our comrades.</ULI>

                <ULI><Underline>Develop an accessibility program</Underline>. The goal of full social participation from all members is necessary to build a robust democracy.</ULI>

                <ULI>Continue working on the <Underline>Houseless Solidarity Working Group</Underline> and support those who are the most vulnerably housed by developing the confidence, agency, and leadership of this oppressed group to fight for social housing.</ULI>
      
                <ULI><Underline>Strengthen our feminist culture</Underline> by holding multi-tendency spaces, where all voices are understood, where intersectional oppressions are recognized, by hosting communication trainings such as: progressive stack, facilitation, de-escalation, and conflict resolution.</ULI>
            </UL>

            <P><Underline>The revolution must be accessible!</Underline></P>

            <P>Find my full platform at <Link href="https://bloomdsa.com">bloomdsa.com</Link>.</P>
            </CandidateStatment>
          </Candidate>

          <Candidate name="Miguel Duarte" anchor="at-large-miguel-duarte">
            <CandidateHeader
              img="miguel-duarte.jpg"
              nominations={[
                'Meagan D.',
                'Mark G.',
                'Nick F.',
                'Max L.',
                'Luke T.',
                'Matt S.',
                'Richard M.',
                'Megan S.',
                'Mary Virginia W.',
                'Andrew R.'
              ]}
            />
            <CandidateStatment>
              <P>I'm running for an at-large seat on the Steering Committee on the Bread &amp; Roses slate because I am proud of what our chapter has accomplished so far and incredibly excited about the future of our movement.</P>

              <P>As co-chair of the Racial Solidarity Committee and the PG&amp;E/Green New Deal campaign, I would be honored to continue building these two areas of our chapter's work. Environmental and racial justice campaigns are deeply intertwined and must remain priorities for our chapter. We must continue to advance a holistic, anti-racist, environmentalist vision of socialist transformation&mdash;we know we have a short amount of time to transform our economy to have any chance of avoiding the worst of climate change.</P>

              <P>Luckily, the Bernie Sanders campaign, calls for a Green New Deal, struggles for Medicare for All, and other movements represent amazing, powerful opportunities to wage class war on multiple fronts and integrate calls for racial, economic, and environmental justice into one overarching demand for democratic socialism.</P>

              <P>I'm proud of our chapter's ability to balance theoretical coherence with effective, strategic action and hope to continue and build this tradition moving forward. We know radical change is necessary, and I would be honored to serve on the Steering Committee and fight for the socialist transformation our world needs!</P>
      
            </CandidateStatment>
          </Candidate>

          <Candidate name="Sandy Barnard" anchor="at-large-sandy-barnard">
            <CandidateHeader
              img="sandy-barnard.jpg"
              nominations={[
                'Abigail G.-G.',
                'Zach M.',
                'Charlie H.',
                'Frances R.',
                'Ari M.',
                'Adam B.',
                'Annika B.',
                'Keith B. B.',
                'Graham D.',
                'Ashley P.'
              ]}
            />
            <CandidateStatment>
              <P>From teachers strikes to insurgent left electoral campaigns, socialism is on the rise and East Bay DSA is at the forefront. As co-chair of the Electoral and 2020 Committees, I have worked to make our electoral efforts robust, accessible, and exciting so we can provide political leadership in the East Bay. On the Steering Committee, I want to orient our chapter towards campaigns that will attract the widest swath of the working class (particularly Bernie 2020 and mass strikes) to grow our membership, our organizational capacity, and our influence over the political landscape. I am running for Steering Committee alongside my other comrades on the Bread &amp; Roses slate because I want our chapter to grow in size, diversity, and capacity so that we can build and win the mass socialist movement we all need to live in dignity. Solidarity forever!</P>
            </CandidateStatment>
          </Candidate>

          <Candidate name="Sergio Guadarrama" anchor="at-large-sergio-guadarrama">
            <CandidateHeader
              img="sergio-guadarrama.jpg"
              nominations={[
                'Maura M.',
                'Daniel E.',
                'Lawrence L.',
                'Dominic D.',
                'Joey K.',
                'Marissa S.',
                'Isaac H.',
                'Karina S.',
                'Eric G.',
                'Daniel E.'
              ]}
            />
            <CandidateStatment>
              <P>In EBDSA, I'm a member of the SocFem Caucus and the Racial Solidarity Committee. Outside, I'm a member of the Tech Workers Coalition.</P>

              <P>I'm running for at-large because</P>

              <P>I want to build a <Underline>feminist, anti-racist, LGBTQ, eco-socialist</Underline> DSA. Where the voices of those oppressed are front and center.</P>

              <P>I want to make EBDSA a welcoming organization, where <Underline>diversity</Underline> and <Underline>equity</Underline> can thrive, where multiple tendencies <Underline>work together</Underline>, where members feel <Underline>included</Underline> and non-members feel <Underline>welcomed</Underline>.</P>

              <P>I want to make sure that the leadership is <Underline>courageous</Underline>, <Underline>accountable</Underline>, and <Underline>transparent</Underline>, where members are <Underline>empowered</Underline> to change things both inside and outside DSA.</P>
      
            </CandidateStatment>
          </Candidate>

          <Candidate name="Shane Ruiz" anchor="at-large-shane-ruiz">
            <CandidateHeader
              img="shane-ruiz.jpg"
              nominations={[
                'Miguel D.',
                'Ashley P.',
                'Ian M.',
                'Charlie H.',
                'Frances R.',
                'Richard M.',
                'Jack M.',
                'Hannah K.',
                'Hannah E.',
                'Mary Virginia W.'
              ]}
            />
            <CandidateStatment>
              <P>If elected to the Steering Committee as part of the Bread &amp; Roses slate, I will focus the chapter on merging our socialist politics with working class movements. By engaging in struggle with the diverse working class of the East Bay, we can both recruit working class socialists and help shape the strategy of the left. We must orient our politics outward, toward winning material victories for the working class, rather than cloistering around internal process issues.</P>

              <P>Last year, I helped found the Racial Solidarity Committee and currently serve as its recording secretary. Throughout our work to support the teachers' strike, the committee highlighted how organized labor is key to winning racial justice struggles. We've established our first POC socials and are working to develop a Socialists of Color Reading List. Our movement is possible only if we fight for both transformative economic policy and against specific racial oppressions like segregation, the prison-industrial complex, and felon disenfranchisement.</P>

              <P>Through Bread for Ed, I was lucky to be a small part of one of the most successful mutual aid projects any DSA chapter has executed. I believe that Bread for Ed should serve as a model for mutual aid work&mdash;aid tied to a specific campaign, which facilitates mass participation in that campaign. We should continue to build on the relationships we started with churches, students, and parent groups to win for working people in 2020 and beyond.</P>

              <P>I believe that a militant, rank-and-file labor movement is essential to winning the means of production. We cannot "manage" our way to a socialist working class, we must embed ourselves within it. DSA should actively educate and encourage its members to find jobs in strategic sectors that can leverage labor power for public good.</P>

              <P>I believe that we will win!</P>
            </CandidateStatment>
          </Candidate>

          <Candidate name="Will Shattuc" anchor="at-large-will-shattuc">
            <CandidateHeader
              img="will-shattuc.jpg"
              nominations={[
                'Allie L.',
                'Keith B. B.',
                'Karina S.',
                'Hannah E.',
                'Richard M.',
                'Ian M.',
                'Miguel D.',
                'Jack M.',
                'John P.',
                'Jeremy G.'
              ]}
            />
            <CandidateStatment>
              <P>Growing up in Oakland, I've seen racist capitalism reconfigure my home. As more and more of my neighbors disappeared and as my friends worked longer hours for less money and as the summers got hotter, socialism came into my life. I see socialism as the only way forward to a world that's democratic, just, and equitable. And in the U.S. in 2019, DSA is the way to do it, baby.</P>

              <P>To me, the job of an elected leader is to nurture a healthy chapter. In my time as Social Housing co-chair, I've worked to build trusting relationships with members across the political spectrum. I've been working with coalition partners locally and state-wide through the Housing Now! Coalition and being a leader on the Proposition 10 campaign. I've worked with California DSA chapters on the joint statement calling for Universal Rent Control. I've lead break-outs, planned meetings and campaigns, and spoken at rallies. I also put away chairs after meetings like I did when I first joined DSA. A leader should not just understand how the organization works, they should understand how to help the people in it grow.</P>

              <P>I'm proud to run on the Bread &amp; Roses slate; engaging with labor militancy and running class-struggle elections are fundamental tools for building a new world, and I've seen how effective they can be on the picket line and the doorstep of my neighbor. If elected, I'm excited to continue in this work, to help develop new leaders, to make more projects and infrastructure between chapters. I am excited to see my home and my planet work for the many, not just the few.</P>
      
            </CandidateStatment>
          </Candidate>
                    
        </Section>
      </div>
    );
  }
}

export default AtLarge;
