import React, { PureComponent } from 'react';
import Container from '../Container';
import Section from '../Section';
import { H2, H3, P, Strong, Underline, UL, ULI } from '../typography';
import Link from '../Link';
import NavAnchor from '../NavAnchor';
import styled from 'styled-components';
import { red } from '../colors';
import Directory from '../directory/Directory';
import DirectoryItem from '../directory/DirectoryItem';

const PriorityResolution = styled.a`
  color: red;

  &:hover {
    color: white;
    background: red;
  }
`;

class Priorities extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>Priorities Resolution</H2>
            <P>The priorities resolution (PR) is a holistic document that outlines the political and organizational priorities for the chapter to undertake in the upcoming year.</P>

            <P>The "priority work areas" will name a political or organizational priority (e.g. "Labor," "Political Education," etc.) and then identify a strategy for working towards that goal, tactics that we might engage in, and coalition partners we want to collaborate with.</P>

            <P>The Steering Committee has approved a base PR document, which may be passed as is or amended at the convention on May 18. You can read the PR here.</P>
      
            <Directory>
                <DirectoryItem
                    links={[
                    {
                        label: '2019 Base Priorities Resolution',
                        href: 'https://docs.google.com/document/d/1rx7kN8Bn0pQsbAs0PIUOYm4I_r3O-n3HxE4CGJYmGa0/edit?ts=5cbe8b0d'
                    }
                    ]}
                />
            </Directory>
      
            <P>Any member in good standing and four other co-signers can submit an amendment to the PR. If you would like to submit an amendment to the PR or a complete, alternate PR, please use the following form.</P>
      
            <Directory>
                <DirectoryItem
                    links={[
                    {
                        label: 'PR Amendment Submission Form',
                        href: 'https://docs.google.com/forms/d/e/1FAIpQLSduLWCe7150Z-Lv8qSt_tOvCaT_urobcWD5BERJBLWDb6Uwjg/viewform'
                    }
                    ]}
                />
            </Directory>
      
            <H3>Timeline</H3>
      
            <P>Here's the timeline for member PR submissions and amendments.</P>
      
            <H3>Week of April 21–25</H3>
      
            <P>The Steering Committee will release an approved PR to chapter.</P>
      
            <H3>May 4: Full Alternate PR Submission</H3>
      
            <P>If any members or groups would like to submit a complete, alternate PR or amendments that add, remove, or replace one or more entire main sections of the PR (such as "Labor" or "Strategy"), submissions should be made by May 4 to allow members to review and draft amendments to the alternates.</P>
      
            <H3>May 11: Amendment Submission</H3>

            <P>Any amendments submitted by this time will be reviewed by the Resolutions Subcommittee, then posted online for members to consider in advance and agendized at the convention for potential approval by majority vote.</P>

            <H3>May 18: Convention</H3>
      
            <P>In addition to amendments submitted in advance by May 11, following our bylaws, members may suspend rules (by two-thirds floor vote) at any point during the convention to propose further amendments.</P>

            <P>Questions about the PR can be directed to <Link href="mailto:info@eastbaydsa.org">info@eastbaydsa.org</Link>.</P>
                      
            <H2>Amendment Process</H2>

            <P>Each amendment to the base PR will receive 15 minutes of motivation and debate time. We will start with major amendments first and then move on to minor amendments. <Strong>Note</Strong>, due to the large volume of amendments submitted, it is possible we will not get debate and vote on all PR amendments. </P>

            <H2>Amendments</H2>

            <P>Amendments are listed in the order that they will be heard on the convention floor. The title of the amendment corresponds to the section of the PR that is being amended.</P>

            <H3>Amendment 1: Principles</H3>
      
            <P>Submitted by Ted F., co-signed by Bonnie L., Eric R., Colin P. M., Michael K., Mike H., Susan S., David G., Margaret R., and Lora J.F.</P>

            <P><Underline>Principles:</Underline></P>
            
            <P>We are gathered here in East Bay DSA because we share the commitment to win a democratic socialist world. East Bay DSA is an organization welcome to all people dedicated to these principles:</P>
            <P>a) A commitment to building the united power of the working class to overcome capitalism and achieve an ecologically sustainable democratic socialism.</P>
            <P>b) A commitment to ending every oppression of race, gender, religion, ability, national origin, sexuality, and all other forms of social domination.</P>
            <P><Strong>c) A commitment to internationalism and recognition of the rights of all people to be free from imperialism, colonialism, ecological devastation, and war.</Strong></P>

            <H3>Amendment 2: Labor</H3>
      
            <P>Submitted by Ted F., co-signed by Bonnie L., Eric R., Colin P. M., Michael K., Mike H., Susan S., David G., Margaret R., and Lora J.F.</P>

            <P><Underline>Labor:</Underline></P>
            
            <P>We understand that a united, multiracial working class poses the biggest threat to capital. Labor creates all wealth, and by withholding labor, we not only stop the flow of profit, disrupt business as usual, and force concessions from the bosses&mdash;we also show that labor is entitled to all it creates. East Bay DSA, particularly through our Labor Committee, will oversee and engage members around these <Strong>five</Strong> <s>four</s> primary areas of labor organizing, emphasizing an orientation toward rank-and-file power:</P>
            <UL>
                <ULI>Develop meaningful relationships with local labor organizations that are politically progressive and democratic, and which empower and activate their rank-and-file members.</ULI>
                <ULI><Strong>Support unions and rank-and-file activists organizing around the Green New Deal and demanding a Just Transition for workers and communities most affected by climate change and by the conversion to an economy powered by renewable energy.</Strong></ULI>
                <ULI>Support and develop meaningful relationships with workplace leaders and rank-and-file activists both in- and outside of East Bay DSA who are engaged in external and internal union organizing with trainings and mentorship; encourage these leaders to join and participate in East Bay DSA, and to draw socialist conclusions from their struggles; and support East Bay DSA members who are looking for jobs in unionized workplaces. </ULI>
                <ULI>Educate East Bay DSA members and the broader public on the labor movement: its history, its present, and the challenges and opportunities ahead. This includes working to dispel the notion that workers ought to be pitted against each other along lines of nationality, race, gender, ability, and sexuality. </ULI>
                <ULI>Continue building East Bay DSA’s capacity to support local labor contract campaigns and escalation strategies, especially around strike support, and continue orienting our work around key sectors like education and healthcare, which we understand to be strategic sites of militancy in terms of their ability to bargain for the common good, to fight the forces of privatization and the commodification of the public sphere, and to coalesce a multi-racial working-class movement which coheres around socialist demands.</ULI>
            </UL>

            <H3>Amendment 3: Agitational Campaigns</H3>
      
            <P>Submitted by Ted F., co-signed by Bonnie L., Eric R., Colin P. M., Michael K., Mike H., Susan S., David G., Margaret R., and Lora J.F.</P>

            <P><Underline>Agitational Campaigns</Underline></P>
            
            <P>Working people want transformative policies, and capitalist elites do everything to stand in our way. We know we likely won't be able to win these policies in the next few years. But by campaigning for popular socialist policies, we can agitate working people to unify against the powerful capitalists blocking what we need. With inclusive campaigns, we will agitate for truly universal policies that include the specific, targeted elements needed to provide for those long excluded by divisions of race, gender, and other oppressions. <Strong>In the face of capitalist devastation of the planet and imminent climate catastrophe, we will seek to agitate for all of these campaigns connected through the program of a socialist Green New Deal.</Strong></P>

            <P>Our agitation seeks to build socialist class consciousness across our own members and the greater working class; build the membership and capacity of East Bay DSA; and build coalitions of working-class organizations for a socialist program. For all of these agitational campaigns, we will use mass-oriented tactics including public educational events, propaganda, and demonstrations/direct actions with the potential to reach and inspire a broad audience.</P>

            <P><Underline>a) Social Housing</Underline></P>
            <P>Social housing is the only systemic solution to end devastating housing displacement due to historic colonization of indigenous land, racial segregation, and real estate speculation. We demand social housing that is universally available, racially and income integrated, democratically run, <Strong>ecologically designed</Strong>, high quality, permanently affordable and off the private market. </P>

            <P><Underline>b) Green New Deal</Underline></P>
            <P><Strong>All of our campaigns are connected through the program of a socialist Green New Deal. We are committed to working within</Strong> <s>For-profit ecological destruction has left us barely a decade to stop catastrophic climate change--a collapse which would make achieving all our socialist goals far harder. Among</s> the rising movements for <Strong>climate and</Strong> environmental justice<s>. and the broader working class</s> <Strong>In doing so</Strong>, we will agitate for socialist solutions to <Strong>the</Strong> ecological crisis, and seek to build a more broadly compelling and effective socialist program in the process. East Bay DSA and our Green New Deal Campaign will work to:</P>

            <UL>
                <ULI>Popularize the demand for a socialist Green New Deal <Strong>aligned with the national DSA</Strong> <s>along the</s> Ecosocialist Working Group Guiding Principles, <Strong>including a Just Transition for workers and communities most affected by climate change and by conversion to an economy powered by renewable energy</Strong>, <s>with emphasis on</s> a unionized job guarantee, full decarbonization by 2030, and public and worker control of energy and water systems.</ULI>
                <ULI><Strong>Build meaningful relationships with groups that are organizing and agitating for grassroots, bottom up solutions to environmental problems as well as groups demanding state and federal action.  Prioritize relationships and coalition work with frontline, working class organizations and communities fighting environmental racism in the Bay Area. Build connections to Green New Deal campaigns locally, statewide, and nationally.</Strong></ULI>
                <ULI>Agitate for public and worker ownership of Pacific Gas & Electric, as a pressing first step towards ending the company's deadly, for-profit disasters, and winning social ownership of energy in a Green New Deal.  <Strong>Collaborate with other DSA chapters and working groups across the country engaged in campaigns to evaluate our strategies collectively.</Strong></ULI>
            </UL>

            <P><Underline>c) Internationalism</Underline></P>
            <P>As socialists, we believe that our final aims in the United States can only be realized if socialism is built across the entire world, and that the imperialist world system led by the US capitalist class is a major obstacle to this goal. To push back against this global order, East Bay DSA will:</P>
            <UL>
                <ULI>Learn from and seek connections for solidarity with democratic socialist, <Strong>climate justice,</Strong> and workers’ movements around the world, particularly those in countries harmed by American imperialism, and make agitational connections between East Bay DSA’s campaigns and related struggles abroad.</ULI>
                <ULI>Fight racist efforts to criminalize immigrant communities, and oppose exploitative liberal and imperialist policies that, <Strong>amplified by climate change,</Strong> drive the mass uprooting of working people from their homes in the global South.</ULI>
                <ULI>Use our 2020 electoral campaigns to expose dividing lines between socialists and liberal imperialists on international crises that gain mass attention, and consider joining coalition campaigns that advance socialist internationalism <Strong>and climate justice</Strong> and push back on new imperialist aggressions abroad.</ULI>
            </UL>


            <H3>Amendment 4: Grow East Bay DSA</H3>
            <P>Submitted by Ted F., co-signed by Bonnie L., Eric R., Colin P. M., Michael K., Mike H., Susan S., David G., Margaret R., and Lora J.F.</P>

            <P><Underline>b) Diversity & Solidarity</Underline></P>
            <P>East Bay DSA   cannot become a mass working-class organization without working to address the divisive and destructive force of white supremacism in our society. We seek to build the leadership of a membership that draws from the entirety of the working class, across races, languages, and economic sectors. To that end, East Bay DSA and all our committees will commit to the following priorities for the coming year:</P>
            <UL>
                <ULI>Work towards increasing racial working-class diversity in East Bay DSA, particularly through the Racial Solidarity Committee's projects to: (a) research the history of multiracial socialist organizing and offer education on these lessons; (b) develop a plan for identifying and welcoming new members of color and for retaining existing members of color; and (c) propose and organize strategic interventions by East Bay DSA in future upsurges and ongoing campaigns that will increase our credibility as a vehicle for the interests of working class people of color.</ULI>
                <ULI>Build relationships with racially-diverse labor, <Strong>environmental justice,</Strong> and progressive working-class organizations, participate in solidarity campaigns with workers in lower-wage industries, and experiment with targeted recruitment campaigns.</ULI>
                <ULI>Support and seek to expand YDSA branches at community colleges with student bodies representative of the multiracial working class.</ULI>
                <ULI>Develop the organization's membership and activities in more heavily working-class regions of the East Bay.</ULI>
            </UL>

            <P><Underline>c) Political Education</Underline></P>
            <P>Building a democratic socialist mass movement requires inclusive, accessible political education that addresses both our chapters' strategic questions and the pressing concerns of the broader working class. To achieve this goal, East Bay DSA will commit to the following priorities:</P>
            <UL>
                <ULI>Continue and expand the successful Socialist Night School program of the Political Education Committee, while seeking to increase the racial, gender, and national diversity of assigned authors, <Strong>to draw on organizing knowledge and experience of a wide swath of DSA members and other working-class activists,</Strong> and to expand our programming to feature issues relevant to our priority campaigns.</ULI>
                <ULI>Host educational events oriented toward reaching audiences that wouldn’t otherwise hear about East Bay DSA, through the Political Education Committee.</ULI>
                <ULI>Develop the further incorporation of political education and discussion into committee meetings throughout the chapter.</ULI>
                <ULI><Strong>Initiate and participate in town halls, teach-ins, and other coalition events where DSA speakers share space with others activist groups to address issues confronting socialism and the working class movement.</Strong></ULI>
            </UL>
            <H3>Amendment 5: Strategy</H3>
            <P>Submitted by Hannah K., co-signed by Nick F., Megan S., Jeremy G., and Abigail G.-G.</P>

            <P><Underline>Strategy:</Underline></P>
            <P><Strong>Workers comprise a supermajority of our society. We are oppressed, exploited, and immiserated by capitalists. We produce capitalists’ profits and make society run. For those reasons, the working class is the only social force with both an interest in fighting for deep social transformation and the leverage to win it, through strikes and organized shutdowns that stop the engine of profit. To win democratic socialism, it is absolutely essential for DSA to help build a strong and militant organized labor movement. </Strong></P>

            <P><Strong>Therefore,</Strong> we believe all our work should be oriented to the overall strategy of <strong>class struggle by mass action</strong>. This means bringing millions of working-class people into <em>class consciousness</em> and <em>organized struggle</em>, through <em>mass organizing tactics</em>. </P>

            <P>By <em>class consciousness</em>, we mean both an awareness that ruling class profit depends on working class labor and suffering, as well as a political orientation toward a socialist program as the necessary way to end that system.</P>

            <P>By <em>organized struggle</em>, we mean active participation in coordinated, democratic organizations that can effectively strike on labor, challenge ruling elites, popularize socialist ideas, and otherwise disrupt the capitalist order.</P>

            <P>This strategy means focusing East Bay DSA's work on <em>mass organizing tactics</em>: tactics aimed at helping build the participation and socialist ideas of working-class people currently disengaged from political organizing. This can include tactics like neighborhood canvassing, mass mobilizations, militant labor organizing, strike support, and insurgent electoral campaigns. These tactics are designed to unite working people to have mass leverage against bosses, landlords, and repressive state institutions. </P>

            <H3>Amendment 6: Labor</H3>
            <P>Submitted by Nick F., co-signed by Hannah K., Keith B B., Megan S., and Abigail G.-G.</P>

            <P><Underline>Labor:</Underline></P>
            <P>We understand that a united, multiracial working class poses the biggest threat to capital. Labor creates all wealth, and by withholding labor, we not only stop the flow of profit, disrupt business as usual, and force concessions from the bosses&mdash;we also show that labor is entitled to all it creates. <Strong>The labor movement holds the most potential for the exercise of working-class power. However, after decades of unrelenting attacks from the capitalist class and the predominance of a conservative strategy within the labor movement that favors top-down staff-driven initiatives, it is on weak footing overall. As socialists, we believe that unions should exist to facilitate workers’ ability to wage class struggle against the bosses, not to mediate between management and workers on a fee-for-service basis. In order for the labor movement to realize its potential, unionized workers in all sectors must self-organize with their coworkers to get their unions into good fighting shape, by strengthening democracy, building multiracial solidarity, and adopting a militant organizing approach based in the realities of shop floor conditions.</Strong> The East Bay DSA Labor Committee shall thus oversee and engage members around these four primary areas of labor organizing, emphasizing an orientation toward rank-and-file power:</P>
            <UL>
            <ULI>Develop meaningful relationships with local labor organizations that are politically progressive and democratic, and which empower and activate their rank-and-file members.</ULI>
            <ULI>Support and develop meaningful relationships with workplace leaders and rank-and-file activists both in- and outside of East Bay DSA who are engaged in external and internal union organizing with trainings and mentorship; encourage these leaders to join and participate in East Bay DSA, and to draw socialist conclusions from their struggles; and support East Bay DSA members who are looking for jobs in unionized workplaces. <Strong>The aim of these efforts should be to help cohere a “militant minority” of class-conscious rank-and-file activists who can challenge conservative, undemocratic union leaders where they exist, and transform their unions into fighting, democratic organizations.</Strong></ULI>
            <ULI>Educate East Bay DSA members and the broader public on the labor movement: its history, its present, and the challenges and opportunities ahead. This includes working to dispel the notion that workers ought to be pitted against each other along lines of nationality, race, gender, ability, and sexuality</ULI>
            <ULI>Continue building East Bay DSA’s capacity to support local labor contract campaigns and escalation strategies, especially around strike support, and continue orienting our work around key sectors like education and healthcare, which we understand to be strategic sites of militancy in terms of their ability to bargain for the common good, to fight the forces of privatization and the commodification of the public sphere, and to coalesce a multi-racial working-class movement which coheres around socialist demands.</ULI>
            </UL>

            <H3>Amendment 7: Class Struggle Electoral Work</H3>
            <P>Submitted by Frances R., co-signed by Jack M., Matt S., Abigail G.-G., and Nick F.</P>

            <P><Underline>Class Struggle Electoral Work:</Underline></P>
            <P>We understand that elections are the time when most working people pay attention to politics. We know we won’t elect our way to socialism. Rather, we resolve to engage in class-struggle electoral politics that inspires working people to demand more, popularizes a democratic socialist political outlook, and sets the stage for revolutionary change. <Strong>Furthermore, because we reject the idea that socialists and working people will ever capture the capitalist-controlled Democratic Party, we seek to build independent power through class-struggle elections.</Strong> The East Bay DSA 2020 Super Committee shall:</P>
            <UL>
                <ULI>Endorse and support only class-struggle candidates, defined as candidates who:
                <UL>
                    <ULI>Raise the expectations of ordinary working people, unite them against a common capitalist enemy, and promote mass working-class movements outside the state;</ULI>
                    <ULI>Help to achieve our campaign goals;</ULI>
                    <ULI>Take no corporate money; </ULI>
                    <ULI>Champion East Bay DSA’s agitational campaigns.</ULI>
                </UL></ULI>
                <ULI>Use the electoral campaigns that we engage in to meet the following goals:
                <UL>
                    <ULI>Spread class consciousness and build the power and militancy of the working class;</ULI>
                    <ULI>Build DSA by engaging our organization’s broad layer of membership and scaling up our organizational capacity;</ULI>
                    <ULI>Make and potentially win massive demands like M4A, free college, and a GND, and elect democratic socialist officials to champion them; and</ULI>
                    <ULI>Extend and strengthen relationships with crucial coalition partners, like progressive and working-class political organizations and organized labor.</ULI>
                    <ULI><Strong>Sharpen conflicts between establishment party elites and working-class voters, building toward the ultimate goal of establishing an independent workers’ party.</Strong></ULI>
                </UL></ULI>
                <ULI>Prioritize a Bernie Sanders campaign for President as our best opportunity in 2019-2020 to reach millions of people, advance working-class politics, and build a mass movement.</ULI>
                <ULI><Strong>Reject attempts to enter the capitalist-controlled Democratic Party with the goal of capturing it, while maintaining flexibility to use the Democratic Party ballot line where strategic.</Strong></ULI>
            </UL>

            <H3>Amendment 8: Labor</H3>
            <P>Submitted by Maura M., co-signed by Rachel R., Marissa S., Eric G., Dan E., Andrew S., and Sergio G.</P>

            <P><Underline>Labor:</Underline></P>
            <P>We understand that a united, multiracial working class poses the biggest threat to capital. Labor creates all wealth, and by withholding labor, we not only stop the flow of profit, disrupt business as usual, and force concessions from the bosses&mdash;we also show that labor is entitled to all it creates. East Bay DSA, particularly through our Labor Committee, will oversee and engage members around these four primary areas of labor organizing, emphasizing an orientation toward rank-and-file power:</P>
            <UL>
            <ULI>Develop meaningful relationships with local labor organizations that are politically progressive and democratic, and which empower and activate their rank-and-file members.</ULI>
            <ULI>Support and develop meaningful relationships with workplace leaders and rank-and-file activists both in- and outside of East Bay DSA who are engaged in external and internal union organizing with trainings and mentorship; encourage these leaders to join and participate in East Bay DSA, and to draw socialist conclusions from their struggles; and support East Bay DSA members who are looking for jobs in unionized workplaces. </ULI>
            <ULI>Educate East Bay DSA members and the broader public on the labor movement: its history, its present, and the challenges and opportunities ahead. This includes working to <Strong>recognize intersectional oppressions</Strong> <s>dispel the notion that workers ought to be pitted against each other</s> along lines of nationality, race, gender, ability, and sexuality. </ULI>
            <ULI>Continue building East Bay DSA’s capacity to support local labor contract campaigns and escalation strategies, especially around strike support, and continue orienting our work around key sectors like education and healthcare, which we understand to be strategic sites of militancy in terms of their ability to bargain for the common good, to fight the forces of privatization and the commodification of the public sphere, and to coalesce a multi-racial working-class movement which coheres around socialist demands.</ULI>
            </UL>

            <H3>Amendment 9: Social Housing</H3>
            <P>Submitted by Maura M., co-signed by Allie L., Marissa S., Dan E., and Rachel R.</P>

            <P><Underline>Social Housing</Underline></P>
            <P>Social housing is the only systemic solution to end devastating housing displacement due to historic colonization of indigenous land, racial segregation, and real estate speculation. We demand social housing that is universally available, racially and income integrated, democratically run, high quality, permanently affordable and off the private market. This goal will take a mass movement of working-class tenants<Strong>,</Strong> <s>and</s> homeowners<Strong>, and houseless people</Strong> in solidarity fighting the California real estate lobby and corporate landlords. To agitate for this vision, East Bay DSA and our Social Housing Committee will: </P>
            <UL>
            <ULI>Work on strategic near-term housing campaigns in coalition with working-class organizations, as decided by the Social Housing Committee, including local rent control campaigns, statewide bills for strong rent control and tenant protections, strategic direct actions, and electoral efforts to create taxes on speculators and the wealthy, in order to disrupt speculation, spread socialist housing ideas, and seize power from landlords and capitalists. </ULI>
            <ULI>Popularize our vision of social housing through community education efforts, joining coalitions for the near-term campaigns above, supporting DSA chapters across the state to advocate for social housing, and working with the Labor and Racial Solidarity Committee to develop broader working-class agitation for social housing.</ULI>
            </UL>


            <H3>Amendment 10: Member Engagement</H3>
            <P>Submitted by Maura M., co-signed by Sergio G., Dan E., Marissa S., and Rachel R.</P>

            <P><Underline>a) Member Engagement</Underline></P>
            <P>In order to grow East Bay DSA into a mass, multiracial, working-class movement, we must empower our members by both providing welcoming meeting spaces and leadership development that supports all members to organize in their workplaces and communities. Our priorities to make East Bay DSA a vibrant and inclusive organization include: </P>
            <UL>
            <ULI>Make East Bay DSA events and meetings safely accessible to all by offering child care whenever possible, prioritizing venues that are public transportation accessible and accessible for people with disabilities, and expanding languages in which we communicate amongst membership and externally beyond verbal Standard English.</ULI>
            <ULI>Support our new and inactive members through the East Bay DSA Membership Engagement Committee, with targeted outreach efforts such as our mobilizers program, new member handbook, and Intro to DSA meetings, as well as through more general events geared toward fostering chapter-wide camaraderie, such as socials and fundraisers. </ULI>
            <ULI>Prioritize sustained <Strong>and open</Strong> leadership development through the East Bay DSA Membership Engagement Committee, in coordination with other committee and campaign leaders, with trainings, organized mentorship, and skill workshops in order to support <Strong>all of</Strong> our members in their development as leading socialist organizers.</ULI>
            </UL>
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default Priorities;
