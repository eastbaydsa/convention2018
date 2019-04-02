import React, { PureComponent } from 'react';
import Container from '../Container';
import Section from '../Section';
import { H2, H3, P, Strong, Underline } from '../typography';
import Link from '../Link';
import NavAnchor from '../NavAnchor';
import Directory from '../directory/Directory';
import DirectoryItem from '../directory/DirectoryItem';


class Elections extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>Steering Committee Elections</H2>
        
            <H3>Nominations</H3>
        
            <P>One of the primary purposes of the convention is to elect a new set of leaders for our Steering Committee. There are 13 seats on the Steering Committee: co-chairs (2), vice chair, recording secretary, communications secretary, treasurer, and at-large (7). You can see the officer descriptions in our <Link href="https://www.eastbaydsa.org/resources/bylaws">bylaws</Link>.</P>
        
            <P>Any member in good standing is eligible to run for the Steering Committee and must be nominated by ten (10) members in good standing by midnight on April 7 in order to be on the ballot.</P>
            
            <P>You may nominate a fellow member for a Steering Committee position using this form.</P>
      
            <Directory>
                <DirectoryItem
                    links={[
                    {
                        label: 'Nominate someone',
                        href: 'https://docs.google.com/forms/d/e/1FAIpQLSeYZKq-kNsBHn_P4MTMAQfasaCgylQYZpAL8FCdFaqOI_aEXg/viewform'
                    }
                    ]}
                />
            </Directory>

      
            <P>Candidates receiving ten (10) or more nominations by <Strong>April 7</Strong> will be notified and asked to submit a candidate statement.</P>
      
            <H3>Elections</H3>
      
            <P>At the Convention, we'll be using paper ballots and a ranked-choice-voting system to elect our new Steering Committee. If you are unable to attend the convention due to accessibility issues, work or care responsibilities, or travel outside of the East Bay, please email <Link href="mailto:convention@eastbaydsa.org">convention@eastbaydsa.org</Link> <Underline>at the latest by midnight on May 15</Underline> and you will be provided with instructions for submitting an absentee ballot.</P>

            <P>East Bay DSA members will vote for 13 members of the Steering Committee: co-chairs (2), vice chair, recording secretary, communications secretary, treasurer, and at-large members (7).</P>

            <P>For the four single-officer positions in which only two candidates are running (vice-chair, recording secretary, communications secretary, and treasurer), members will indicate which of the candidates they wish to vote for. For each office, the candidate who receives the most votes will be elected.</P>

            <P>For the multi-member officer positions in which more than two candidates are running (co-chair and at-large members), <Underline>members will rank the candidates in order of their preference</Underline>. Members can rank as few or as many candidates as they wish. For example, a member can rank each of the 13 candidates for at-large positions (1,2,3...13), or they can rank only their top three preferences (1,2,3). We encourage members to mark as many rankings as they feel comfortable with.</P>

            <P>As per our bylaws, we will use ranked-choice voting to determine the winners for those offices. For co-chairs, we're using Borda Count, which is a ranked-choice voting system that is used at the DSA National Convention to elect our National Political Committee. Because it is an extremely important office, and a multi-member election, Borda Count is recommended because it tends to result in elections where the winners are "broadly acceptable" and more like consensus options. This is particularly important for electing co-chairs, who are the public-facing leaders of the organization and run our general meetings. The Borda Count is very good for selecting broadly popular candidates for multi-member seats (like our co-chair election), but the count becomes distorted when the number of candidates gets too large (as would be the case with our at-large seats).</P>

            <P>For at-large seats, we're using at the convention is the "Scottish single transferable vote." More detailed information on this method can be found at <Link href="http://opavote.com/">OpaVote</Link>. Together at the convention before the Steering Committee elections, we will <Link href="https://www.youtube.com/watch?v=lNxwMdI8OWw">watch a video</Link> that describes in detail the way this system is used in multi-member elections.</P>

            <P>One of the primary advantages of the single transferable vote is that voters aren’t disempowered if they vote for a candidate that is very popular or for a candidate that is very unpopular. If the candidate you rank as "1" surpasses the threshold necessary to be elected, the "extra" part of your vote then gets transferred to the candidate you rank as "2," etc. If the candidate you rank as "1" gets the fewest "1" votes of any candidate, your vote then gets transferred to the candidate you rank as "2."</P>

            <P>While ranked-choice voting systems can seem a little complicated, just remember: <Underline>for the multi-member elections (co-chair and at-large members), members should rank however many candidates they wish, in order of their preference</Underline>.</P>

            <P>After the results of the election are announced, we will also publish the 13 total vote data and the results online for all members to see.</P>

          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default Elections;
