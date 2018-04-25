import React, { PureComponent } from 'react';
import Container from '../Container';
import Section from '../Section';
import { H2, P, Strong, Underline } from '../typography';
import Link from '../Link';
import NavAnchor from '../NavAnchor';

class Elections extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>Steering Committee Elections</H2>
            <P>
              One of the primary purposes of the Convention is to elect a new
              set of leaders for our Steering Committee (formerly called the
              Local Council). There are 13 seats on the SC: Co-Chairs (2),
              Vice-Chair, Secretary, Communications Secretary, Treasurer, and
              At-Large (7). You can see the officer descriptions in our new
              bylaws.
            </P>
            <P>
              At the <Underline>April 29th Convention</Underline>, we'll be
              using paper ballots and a ranked-choice-voting system to elect our
              new Steering Committee. If you are unable to attend the convention
              due to accessibility issues, work or care responsibilities, or
              travel outside of the East Bay, please email{' '}
              <Link href="mailto:gm@eastbaydsa.org">gm@eastbaydsa.org</Link>{' '}
              before April 27th and you will be provided with instructions for
              submitting a proxy ballot.
            </P>
            <P>
              East Bay DSA members will vote for 13 members of the Steering
              Committee: co-chairs (2), vice chair, recording secretary,
              communications secretary, treasurer, and at-large members (7).
            </P>
            <P>
              For the four single-officer positions in which only two candidates
              are running (vice-chair, recording secretary, communications
              secretary, and treasurer), members will indicate which of the
              candidates they wish to vote for. For each office, the candidate
              who receives the most votes will be elected.
            </P>
            <P>
              For the multi-member officer positions in which more than two
              candidates are running (co-chair and at-large members),{' '}
              <Strong>
                members will rank the candidates in order of their preference.
              </Strong>{' '}
              Members can rank as few or as many candidates as they wish. For
              example, a member can rank each of the 13 candidates for at-large
              positions (1,2,3...13), or they can rank only their top three
              preferences (1,2,3). We encourage members to mark as many rankings
              as they feel comfortable with.
            </P>
            <P>
              As per our bylaws, we will use ranked-choice voting to determine
              the winners for those offices. The method we’re using at the
              convention is the “single transferable vote.” More detailed
              information on this method can be found at{' '}
              <Link href="http://opavote.com" target="_blank">
                OpaVote
              </Link>. Together at the convention before the Steering Committee
              elections, we will{' '}
              <Link
                href="https://www.youtube.com/watch?v=lNxwMdI8OWw
"
                target="_blank">
                watch a video
              </Link>{' '}
              that describes in detail the way this system is used in
              multi-member elections.
            </P>
            <P>
              One of the primary advantages of the single transferable vote is
              that voters aren’t disempowered if they vote for a candidate that
              is very popular or for a candidate that is very unpopular. If the
              candidate you rank as “1” surpasses the threshold necessary to be
              elected, the “extra” part of your vote then gets transferred to
              the candidate you rank as “2”, etc. If the candidate you rank as
              “1” gets the fewest “1” votes of any candidate, your vote then
              gets transferred to the candidate you rank as “2.”
            </P>
            <P>
              While ranked-choice voting systems can seem a little complicated,
              just remember:{' '}
              <Strong>
                for the multi-member elections (co-chair and at-large members),
                members should rank however many candidates they wish, in order
                of their preference.
              </Strong>
            </P>
            <P>
              After the results of the election are announced, we will also
              publish the 14 total vote data and the results online for all
              members to see.{' '}
            </P>
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default Elections;
